require("dotenv").config();
const EleventyFetch = require("@11ty/eleventy-fetch");

module.exports = async function () {
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
  const endpoint = `https://api.brewfather.app/v1/batches?include=${includes.join(
    ","
  )}`;

  // prettier ignore because I want to force the quotes
  // on properties names, because they are IDs
  // prettier-ignore
  const batchesColors = {
    gY2KZyKLFhQxktMJcGjvs4mF0D3TUI: "#da9cdf",
    KF4QB9uONI0xlmGZlFDMkSdynNAstr: "#a16452",
    WBkgeGLkfkwNOSV9pnD3zS6UkaTWou: "#ebc94f",
    i2E4ooAkLp8tkjKc1MCfygHvpRBB0N: "#f5b290",
    kCtZyLhBhBbSoNiIl8GkFiYXoCVQ8s: "#8aab60",
    "2znilKPnYjmF6rLhAARCBuAkOdaOXM": "#a16452",
  };

  const response = await EleventyFetch(endpoint, {
    duration: "1d", // save for 1 day
    type: "json", // we’ll parse JSON for you
    fetchOptions: { headers },
  });

  /**
   * -----------------------
   * Modify Data
   * -----------------------
   */

  const data = response.map((b, i) => {
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
  const beersByStatus = {
    planning: [],
    brewing: [],
    fermenting: [],
    conditioning: [],
    completed: [],
  };
  data.forEach((item) => {
    const key = item.status.toLowerCase();
    beersByStatus[key].push(item);
  });
  return { beersByStatus };
};
