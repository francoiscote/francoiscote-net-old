import Head from "next/head";
import { Cache } from "memory-cache";

import { groupBy } from "../lib/collections";
import { capitalize } from "../lib/strings";

import { NavBar } from "../components/NavBar";
import { BeerCard } from "../components/Beers/BeerCard";

const BREWFATHER_API_DOMAIN = "https://api.brewfather.app/v1";
const CACHE_TTL = 5 * 60 * 1000; // 5mins

const memoryCache = new Cache();

export async function getServerSideProps({ req, res }) {
  // https://nextjs.org/docs/going-to-production#caching
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=60, stale-while-revalidate=240"
  );

  const authString = Buffer.from(
    `${process.env.BREWFATHER_API_USER_ID}:${process.env.BREWFATHER_API_KEY}`
  ).toString("base64");

  const headers = {
    authorization: `Basic ${authString}`,
  };

  const includes = [
    "batchNotes",
    "batchFermentables",
    "batchHops",
    "batchYeasts",
    "bottlingDate",
    "estimatedColor",
    "estimatedIbu",
    "notes",
    "measuredAbv",
    "measuredBatchSize",
    "measuredFg",
    "measuredOg",
    "recipe.style.name",
    "status",
    "tasteRating",
  ];

  const batchesColors = {
    1: "#805339",
    2: "#e0b44c",
    3: "#8aab60",
    4: "#f5b290",
  };

  const endpoint = `/batches?include=${includes.join(",")}`;

  const cachedData = memoryCache.get(endpoint);

  if (cachedData) {
    return {
      props: cachedData,
    };
  }

  const response = await fetch(`${BREWFATHER_API_DOMAIN}${endpoint}`, {
    headers,
  });
  const rawData = await response.json();

  if (!rawData) {
    return {
      notFound: true,
    };
  }

  // Add colors data to beers
  const data = rawData.map((b) => {
    const color = batchesColors[b.batchNo] || null;
    return { ...b, color };
  });

  // Group by Status
  const {
    planning = [],
    brewing = [],
    fermenting = [],
    conditioning = [],
    completed = [],
  } = groupBy(data, (b) => b.status.toLowerCase());

  const finalData = {
    beerStatuses: {
      planning,
      brewing,
      fermenting,
      conditioning,
      completed,
    },
  };

  memoryCache.put(endpoint, finalData, CACHE_TTL);

  return {
    props: finalData,
  };
}

export default function BeersPage({ beerStatuses }) {
  const statuses = Object.keys(beerStatuses);

  return (
    <>
      <Head>
        <title>Beers - francoiscote.net</title>
      </Head>

      <NavBar />

      <main>
        <h1> Beers 🍻</h1>
        <p className="lead">
          Sometimes, I brew beer.
          <br />
          Here is a live view of what I have in store based on the{" "}
          <a href="https://brewfather.app/">Brewfather</a> API.
        </p>
        {statuses.map((s, i) => {
          const beers = beerStatuses[s];

          if (!beers.length) {
            return false;
          }

          return (
            <section key={`status-${s}`} className="mt-20">
              <h3 className="mb-10">{capitalize(s)}</h3>
              {beers.map((b, i) => (
                <BeerCard key={`beer-${i}`} {...b} />
              ))}
            </section>
          );
        })}
      </main>
    </>
  );
}
