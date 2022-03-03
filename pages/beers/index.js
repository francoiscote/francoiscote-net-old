import Head from "next/head";
import Link from "next/link";
import NodeCache from "node-cache";

import { groupBy } from "@lib/collections";
import { capitalize } from "@lib/strings";

import { NavBar } from "@components/NavBar";
import { BeerCard } from "@components/Beers/BeerCard";

const BREWFATHER_API_DOMAIN = "https://api.brewfather.app/v1";
const CACHE_TTL = 5 * 60; // 5mins

const memoryCache = new NodeCache({ stdTTL: CACHE_TTL });

export async function getServerSideProps({ req, res, query }) {
  // https://nextjs.org/docs/going-to-production#caching
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=60, stale-while-revalidate=240"
  );

  const isDebug = query.hasOwnProperty("debug");
  const isClearCache = query.hasOwnProperty("clearCache");

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
    "tasteNotes",
  ];

  // prettier ignore because I want to force the quotes
  // on properties names, because they are IDs
  // prettier-ignore
  const batchesColors = {
    "KF4QB9uONI0xlmGZlFDMkSdynNAstr": "#a16452",
    "WBkgeGLkfkwNOSV9pnD3zS6UkaTWou": "#ebc94f",
    "i2E4ooAkLp8tkjKc1MCfygHvpRBB0N": "#f5b290",
    "kCtZyLhBhBbSoNiIl8GkFiYXoCVQ8s": "#8aab60",
    "2znilKPnYjmF6rLhAARCBuAkOdaOXM": "#a16452",
  };

  const endpoint = isDebug
    ? `/batches?complete=true`
    : `/batches?include=${includes.join(",")}`;

  if (isClearCache) {
    memoryCache.flushAll();
  }

  const cachedBFData = memoryCache.get(endpoint);

  /**
   * -----------------------
   * Fetch Data
   * -----------------------
   */

  let rawData;
  // Maybe HIT Brewfather's API
  if (cachedBFData) {
    rawData = cachedBFData;
  } else {
    const response = await fetch(`${BREWFATHER_API_DOMAIN}${endpoint}`, {
      headers,
    });
    rawData = await response.json();
    memoryCache.set(endpoint, rawData);
  }

  if (isDebug) {
    console.log(rawData);
  }

  if (!rawData) {
    return {
      notFound: true,
    };
  }

  /**
   * -----------------------
   * Modify Data
   * -----------------------
   */

  const data = rawData.map((b, i) => {
    let batch = {};

    // Add Color data data to the beer
    batch = {
      ...b,
      color: batchesColors[b._id] || null,
    };

    // Order Fermentables by Amount Descending
    batch.batchFermentables.sort((a, b) => {
      return b.amount - a.amount;
    });
    // Order Fermentables by Amount Descending
    batch.batchHops.sort((a, b) => {
      return b.amount - a.amount;
    });

    return batch;
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
          Here is a live view of what is brewing based on the{" "}
          <a href="https://brewfather.app/?via=694b06">Brewfather</a>
          <span className="text-slate-400">*</span> API.
        </p>

        <p>
          You can also have a look at the detailed{" "}
          <Link href="/beers/fermentation-stats">
            <a>fermentation stats</a>
          </Link>{" "}
          I use to calibrate my equipment profile.
        </p>

        <p className="text-right text-xs text-slate-400">
          * This is an affiliate link, but I truly love this product
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
