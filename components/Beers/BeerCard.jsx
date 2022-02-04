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
      <div className="grid grid-cols-12 gap-4 auto-rows-auto">
        <div className="p-4 col-span-3">
          <SupTitle>Batch #{batchNo}</SupTitle>
          <div className="flex justify-center text-center">
            <ColorCircle style={{ backgroundColor: color }} />
          </div>
        </div>
        <div className="p-4 col-span-6">
          <SupTitle>{recipe.style.name}</SupTitle>
          <h2 className="">{recipe.name}</h2>

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

          {/* {batchNotes && (
            <>
              <h3 className="text-base tracking-normal uppercase font-semibold">
                Notes
              </h3>{" "}
              <div style={{ whiteSpace: "pre-wrap" }}>{batchNotes}</div>
            </>
          )} */}
        </div>
        <div className="p-4 col-span-3">
          <ul>
            {status && (
              <div className="mb-6">
                <SupTitle>Status</SupTitle>
                <div>{status}</div>
              </div>
            )}
            {formatedBrewDate && (
              <div className="mb-6">
                <SupTitle>Brew Date</SupTitle>
                <div>{formatedBrewDate}</div>
              </div>
            )}
            {formatedBottlingDate && (
              <div className="mb-6">
                <SupTitle>Bottling Date</SupTitle>
                <div>{formatedBottlingDate}</div>
              </div>
            )}
          </ul>
          <hr className="border-top-gray-200 my-10" />
          <div className="grid grid-cols-2">
            {estimatedIbu && (
              <div className="mb-4">
                <SupTitle>IBU</SupTitle>
                <div>{estimatedIbu}</div>
              </div>
            )}
            {measuredAbv && (
              <div className="mb-4">
                <SupTitle>ABV</SupTitle>
                <div>{measuredAbv}%</div>
              </div>
            )}
            {measuredOg && (
              <div className="mb-4">
                <SupTitle>OG</SupTitle>
                <div>{`${measuredOg}`.padEnd(5, 0)}</div>
              </div>
            )}
            {measuredFg && (
              <div className="mb-4">
                <SupTitle>FG</SupTitle>
                <div>{`${measuredFg}`.padEnd(5, 0)}</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </article>
  );
};

const ColorCircle = (props) => (
  <div
    className="w-40 h-40 bg-gray-300 rounded-full shadow mt-6 text-center"
    {...props}
  />
);

const SupTitle = ({ children }) => (
  <div className="uppercase text-gray-500 text-sm font-semibold">
    {children}
  </div>
);
