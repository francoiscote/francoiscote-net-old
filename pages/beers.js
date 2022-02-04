import Head from "next/head";
import { beerItems } from "../components/Beers/BeerCard";

import { NavBar } from "../components/NavBar";
import { BeerCard } from "../components/Beers/BeerCard";

const BREWFATHER_API_DOMAIN = "https://api.brewfather.app/v1";

// TODO: cache for rate-limit of 150 calls per hour on the API
export async function getServerSideProps({ req, res }) {
  // https://nextjs.org/docs/going-to-production#caching
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=60, stale-while-revalidate=120"
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

  const response = await fetch(
    `${BREWFATHER_API_DOMAIN}/batches?include=${includes.join(",")}`,
    { headers }
  );
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

  return {
    props: {
      beers: [...data],
    },
  };
}

export default function BeersPage({ beers }) {
  console.log(beers);

  return (
    <>
      <Head>
        <title>Beers - francoiscote.net</title>
      </Head>

      <NavBar />

      <main>
        <h1> Beers</h1>
        {beers.map((b, i) => (
          <BeerCard key={`beer-${i}`} {...b} />
        ))}
      </main>
    </>
  );
}
