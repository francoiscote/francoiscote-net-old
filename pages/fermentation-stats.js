import Head from "next/head";
import NodeCache from "node-cache";

import { groupBy } from "../lib/collections";
import { capitalize } from "../lib/strings";

import { NavBar } from "../components/NavBar";
import { BeerCard } from "../components/Beers/BeerCard";

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

  const authString = Buffer.from(
    `${process.env.BREWFATHER_API_USER_ID}:${process.env.BREWFATHER_API_KEY}`
  ).toString("base64");

  const headers = {
    authorization: `Basic ${authString}`,
  };

  const includes = [
    "bottlingDate",
    "boilTime",
    "estimatedColor",
    "estimatedFg",
    "estimatedIbu",
    "estimatedTotalGravity",
    "measuredAbv",
    "measuredAttenuation",
    "measuredBatchSize",
    "measuredBoilSize",
    "measuredBottlingSize",
    "measuredConvertionEfficiency",
    "measuredEfficiency",
    "measuredFermenterTopUp",
    "measuredFg",
    "measuredKettleEfficiency",
    "measuredKettleSize",
    "measuredMashPh",
    "measuredMashEfficiency",
    "measuredOg",
    "measuredPreBoilGravity",
    "measuredPostBoilGravity",
    "recipe.style.name",
    "recipe.boilTime",
    "status",
  ];

  const endpoint = isDebug
    ? `/batches?complete=true`
    : `/batches?include=${includes.join(",")}`;

  const cachedBFData = memoryCache.get(endpoint);

  /**
   * -----------------------
   * Fetch Data
   * -----------------------
   */

  let rawData;
  // Maybe HIT Brewfather's API
  if (cachedBFData && !isDebug) {
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

  // Sort by brew date ASC
  rawData.sort((a, b) => a.brewDate - b.brewDate);

  return {
    props: {
      batches: rawData,
    },
  };
}

export default function BeersPage({ batches }) {
  console.log(batches);

  const stats = {
    // bottlingDate: "Bottling Date",
    measuredBatchSize: "Batch Size (L)",
    measuredBoilSize: "Pre-Boil Vol. (L)",
    measuredKettleSize: "Post-Boil Vol. (L)",
    "recipe.boilTime": "Boil Time",
  };

  return (
    <>
      <Head>
        <title>Fermentation Stats - francoiscote.net</title>
      </Head>

      <NavBar />

      <main>
        <h1>Fementation Stats</h1>

        <table className="table-fixed w-full">
          <thead className="text-center">
            <tr>
              <th></th>
              {batches.map((b) => {
                const dtf = new Intl.DateTimeFormat("en-CA");
                // const formatedBrewDate = new Date(b.brewDate).toLocaleString();
                return (
                  <th
                    key={`batch-${b._id}`}
                    className="font-semibold border p-2 bg-slate-100"
                  >
                    {b.name} - #{b.batchNo}
                    <br />
                    {dtf.format(b.brewDate)}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {Object.keys(stats).map((k) => (
              <tr key={`stat-${k}`}>
                <td className="font-semibold text-right border p-2 bg-slate-100">
                  {stats[k]}
                </td>
                {batches.map((b) => (
                  <td
                    key={`batch-${b._id}-stat-${k}`}
                    className="text-right font-mono text-base border p-2 bg-white"
                  >
                    {b[k]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        <ul></ul>
      </main>
    </>
  );
}
