import Head from "next/head";
import NodeCache from "node-cache";

import { NavBar } from "@components/NavBar";
import { get } from "@lib/collections";

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

  // Massage Data
  const returnedData = rawData
    // Filter Out planned batches
    .filter((b) => b.status !== "Planning")
    // bubble up some recipe properties to the root of the batch object
    .map(({ recipe, ...batch }) => ({
      styleName: recipe.style.name,
      boilTime: recipe.boilTime,
      ...batch,
    }));

  // Sort by brew date ASC
  returnedData.sort((a, b) => a.brewDate - b.brewDate);

  return {
    props: {
      batches: returnedData,
    },
  };
}

export default function BeersPage({ batches }) {
  console.log(batches);

  const stats = [
    {
      key: "measuredBatchSize",
      label: "Batch Size",
      unit: "L",
    },
    {
      key: "measuredBoilSize",
      label: "Pre-Boil Vol.",
      unit: "L",
    },
    {
      key: "measuredKettleSize",
      label: "Post-Boil Vol.",
      unit: "L",
    },
    {
      key: "boilTime",
      label: "Boil Time",
      unit: "h",
      transform: (b) => b / 60,
    },
    {
      key: "boilEvaporation",
      label: "Evaporation Rate",
      unit: "L/h",
      highlight: true,
      calculatedValue: (b) =>
        (
          (b.measuredBoilSize - b.measuredKettleSize) /
          (b.boilTime / 60)
        ).toPrecision(3),
    },
  ];

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
            {stats.map((s) => (
              <tr key={`stat-${s.key}`}>
                <td
                  className={`font-semibold text-right border p-2 bg-slate-100 ${
                    s.highlight ? "font-bold" : ""
                  }`}
                >
                  {s.label}
                </td>
                {batches.map((b) => (
                  <TdBatchStat
                    key={`batch-${b._id}-stat-${s.key}`}
                    stat={s}
                    batch={b}
                  />
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

const TdBatchStat = ({ stat, batch }) => {
  // either use the calculatedValue, or
  // the key from the batch.
  const value =
    typeof stat.calculatedValue === "function"
      ? stat.calculatedValue(batch)
      : batch[stat.key];

  // and maybe transform it.
  const displayedValue =
    typeof stat.transform === "function" ? stat.transform(value) : value;

  return (
    <td
      className={`text-right font-mono text-base border p-2 bg-white ${
        stat.highlight ? "bg-red-50" : ""
      }`}
    >
      {displayedValue} {stat.unit}
    </td>
  );
};
