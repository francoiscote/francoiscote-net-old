export const BeerCard = ({
  brewDate,
  batchNo,
  batchFermentables,
  batchHops,
  batchNotes,
  batchYeasts,
  bottlingDate,
  color,
  estimatedIbu,
  measuredAbv,
  measuredFg,
  measuredOg,
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
          <SupTitle>
            Batch #{batchNo} - {recipe.style.name}
          </SupTitle>
          <h2 className="">{recipe.name}</h2>
        </div>
        <div className="p-4 col-span-4">
          <SupTitle className="hidden md:block">Batch #{batchNo}</SupTitle>
          <div className="flex justify-center text-center">
            <ColorCircle style={{ backgroundColor: color }} />
          </div>
          <div className="grid grid-cols-2 mt-12 px-12">
            {measuredAbv && (
              <div className="mb-4 text-center">
                <h3 className="text-base tracking-normal uppercase font-semibold mb-0">
                  ABV
                </h3>
                <div>{measuredAbv}%</div>
              </div>
            )}
            {estimatedIbu && (
              <div className="mb-4 text-center">
                <h3 className="text-base tracking-normal uppercase font-semibold mb-0">
                  IBU
                </h3>
                <div>{estimatedIbu}</div>
              </div>
            )}
            {measuredOg && (
              <div className="mb-4 text-center">
                <h3 className="text-base tracking-normal uppercase font-semibold mb-0">
                  OG
                </h3>
                <div>{`${measuredOg}`.padEnd(5, 0)}</div>
              </div>
            )}
            {measuredFg && (
              <div className="mb-4 text-center">
                <h3 className="text-base tracking-normal uppercase font-semibold mb-0">
                  FG
                </h3>
                <div>{`${measuredFg}`.padEnd(5, 0)}</div>
              </div>
            )}
          </div>
        </div>
        <div className="p-4 col-span-8">
          <div className="hidden md:block">
            <SupTitle>{recipe.style.name}</SupTitle>
            <h2 className="">{recipe.name}</h2>
          </div>

          <div className="py-4 px-8 bg-white mb-8 border rounded-md">
            <ul className="flex justify-between">
              {status && (
                <div>
                  <SupTitle>Status</SupTitle>
                  <div>{status}</div>
                </div>
              )}
              {formatedBrewDate && (
                <div>
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
                    <li key={y.name}>{y.name}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-base tracking-normal uppercase font-semibold">
                  Hops
                </h3>
                <ul className="text-sm">
                  {batchHops.map((y) => (
                    <li key={y.name}>{y.name}</li>
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
                      {y.laboratory} - {y.name}
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

const ColorCircle = ({ className, ...restProps }) => (
  <div
    className={`w-52 md:w-40 lg:w-52 h-52 md:h-40 lg:h-52 bg-gray-300 rounded-full shadow mt-6 text-center ${className}`}
    {...restProps}
  />
);

const SupTitle = ({ children, className, ...restProps }) => (
  <div
    className={`uppercase text-gray-500 text-sm font-semibold ${className}`}
    {...restProps}
  >
    {children}
  </div>
);
