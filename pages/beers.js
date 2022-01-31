const BREWFATHER_API_DOMAIN = "https://api.brewfather.app/v1";

import { Strong } from "../components/Typography";

export default function BeersPage({ beers }) {
  console.log(beers);

  const beerItems = beers.map((b) => {
    const brewDate = new Date(b.brewDate);

    return (
      <li key={`batch-${b.batchNo}`}>
        <h2>
          #{b.batchNo} - {b.recipe.name} ({b.recipe.style.name})
        </h2>
        <div>
          <ul role="list">
            <li>
              <Strong>Status:</Strong> {b.status}
            </li>

            <li>
              <Strong>Fermentables:</Strong>{" "}
              {b.batchFermentables.map((y) => y.name).join(", ")}
            </li>
            <li>
              <Strong>Hops: </Strong>{" "}
              {b.batchHops.map((y) => y.name).join(", ")}
            </li>
            <li>
              <Strong>Yeasts:</Strong>{" "}
              {b.batchYeasts
                .map(
                  (y) =>
                    `${y.laboratory} - ${y.name} ${
                      y.productId ? `(${y.productId})` : ``
                    }`
                )
                .join(", ")}
            </li>

            <li>
              <Strong>IBU:</Strong> {b.estimatedIbu}
            </li>
            <li>
              <Strong>ABV:</Strong> {b.measuredAbv}%
            </li>
            <li>
              <Strong>OG:</Strong> {`${b.measuredOg}`.padEnd(5, 0)}
            </li>
            <li>
              <Strong>Brew Date:</Strong> {brewDate.toDateString()}
            </li>
            {b.batchNotes && (
              <li css={{ marginTop: "1em" }}>
                <Strong>Notes:</Strong>{" "}
                <div css={{ whiteSpace: "pre-wrap" }}>{b.batchNotes}</div>
              </li>
            )}
          </ul>
        </div>
      </li>
    );
  });

  return (
    <>
      <h1>🍺 Beers 🍺</h1>
      <ul role="list">{beerItems}</ul>
    </>
  );
}

// TODO: cache for rate-limit of 150 calls per hour on the API
export async function getServerSideProps(context) {
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
    "estimatedColor",
    "estimatedIbu",
    "fermentationStartDate",
    "notes",
    "measuredAbv",
    "measuredBatchSize",
    "measuredFg",
    "measuredOg",
    "recipe.style.name",
    "status",
    "tasteRating",
  ];

  const res = await fetch(
    `${BREWFATHER_API_DOMAIN}/batches?include=${includes.join(",")}`,
    { headers }
  );
  const data = await res.json();

  if (!data) {
    return {
      norFound: true,
    };
  }

  return {
    props: {
      beers: [...data],
    },
  };
}
