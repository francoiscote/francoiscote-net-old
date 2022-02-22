import { formatKiloGrams } from "../../lib/strings";

export const BeerCard = ({
  absoluteId,
  brewDate,
  batchNo,
  batchFermentables,
  batchHops,
  batchYeasts,
  bottlingDate,
  color,
  estimatedIbu,
  measuredAbv,
  measuredBatchSize,
  measuredFg,
  measuredOg,
  name,
  recipe,
  status,
}) => {
  const formatedBrewDate = new Date(brewDate).toDateString();
  const formatedBottlingDate = new Date(bottlingDate).toDateString();

  return (
    <article
      key={`batch-${batchNo}`}
      className="bg-gradient-to-br from-slate-100 to-slate-50 border border-gray-200 rounded-lg shadow-md p-6 mb-16"
    >
      <div className="md:grid grid-cols-12 gap-4 auto-rows-auto">
        <div className="md:hidden">
          <SupTitle>{recipe.name}</SupTitle>
          <h2 className="">{name}</h2>
        </div>
        <div className="p-4 col-span-4">
          <div className="flex justify-center text-center">
            <BatchCircle number={batchNo} color={color} />
          </div>
          <div className="grid grid-cols-2 mt-10 px-12 text-xl">
            {measuredAbv && (
              <div className="mb-6 text-xl text-center">
                {measuredAbv}&nbsp;&nbsp;
                <span className="font-semibold">%</span>
              </div>
            )}
            {estimatedIbu && (
              <div className="mb-6 text-xl text-center">
                <div>
                  {estimatedIbu}&nbsp;&nbsp;
                  <span className="font-semibold">IBU</span>
                </div>
              </div>
            )}
            {measuredOg && (
              <div className="text-center">
                {`${measuredOg}`.padEnd(5, 0)}&nbsp;&nbsp;
                <span className="font-semibold">OG</span>
              </div>
            )}
            {measuredFg && (
              <div className="text-center">
                {`${measuredFg}`.padEnd(5, 0)}&nbsp;&nbsp;
                <span className="font-semibold">FG</span>
              </div>
            )}
          </div>
        </div>
        <div className="p-4 col-span-8">
          <div className="hidden md:block">
            <SupTitle>{recipe.name}</SupTitle>
            <h2 className="">{name}</h2>
          </div>

          <div className="py-4 px-8 bg-white mb-8 border rounded-md">
            <ul className="md:flex text-center md:text-left justify-between">
              {status && (
                <div className="mb-6 md:mb-0">
                  <SupTitle>Status</SupTitle>
                  <div>{status}</div>
                </div>
              )}

              {measuredBatchSize && (
                <div className="mb-6 md:mb-0">
                  <SupTitle>Batch Size</SupTitle>
                  <div>{measuredBatchSize}L</div>
                </div>
              )}

              {formatedBrewDate && (
                <div className="mb-6 md:mb-0">
                  <SupTitle>Brew Date</SupTitle>
                  <div>{formatedBrewDate}</div>
                </div>
              )}
              {formatedBottlingDate && (
                <div>
                  <SupTitle>Bottling Date</SupTitle>
                  <div>{formatedBottlingDate}</div>
                </div>
              )}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl tracking-normal uppercase font-semibold mb-3">
              Ingredients
            </h2>
            <div className="grid grid-cols-3 gap-4 mb-6" role="list">
              <div>
                <h3 className="text-base tracking-normal uppercase font-semibold">
                  Fermentables
                </h3>
                <ul className="text-sm">
                  {batchFermentables.map((y) => (
                    <li key={y.name}>
                      {y.name} — {formatKiloGrams(y.amount)}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-base tracking-normal uppercase font-semibold">
                  Hops
                </h3>
                <ul className="text-sm">
                  {batchHops.map((y) => (
                    <li key={y.name}>
                      {y.name} — {y.amount}g
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-base tracking-normal uppercase font-semibold">
                  Yeasts
                </h3>
                <ul className="text-sm">
                  {batchYeasts.map((y) => (
                    <li key={y.name}>
                      {y.laboratory} — {y.name}
                      {y.productId ? ` (${y.productId})` : ``}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* {batchNotes && (
            <>
              <h3 className="text-base tracking-normal uppercase font-semibold">
                Notes
              </h3>{" "}
              <div style={{ whiteSpace: "pre-wrap" }}>{batchNotes}</div>
              </>
          )} */}
        </div>
      </div>
    </article>
  );
};

const BatchCircle = ({ color, number, className, ...restProps }) => {
  return (
    <div
      className={`relative flex justify-center items-center w-52 md:w-40 lg:w-52 h-52 md:h-40 lg:h-52 bg-gray-300 rounded-full drop-shadow text-center text-9xl font-bold ${className}`}
      style={{ backgroundColor: color }}
      {...restProps}
    >
      <div className="mix-blend-overlay text-white opacity-40">
        <div className="absolute inset-y-1/3 left-1/4 text-3xl font-semibold align-sub -mt-8">
          #
        </div>
        {number}
      </div>
    </div>
  );
};

const SupTitle = ({ children, className, ...restProps }) => (
  <div
    className={`uppercase text-gray-500 text-sm font-semibold mb-2 ${className}`}
    {...restProps}
  >
    {children}
  </div>
);
