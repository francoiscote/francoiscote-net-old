import styled from "@emotion/styled";
import { Title1, Strong } from "../Typography";

export const BeerCard = ({
  brewDate,
  batchNo,
  batchFermentables,
  batchHops,
  batchNotes,
  batchYeasts,
  bottlingDate,
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
    <Card key={`batch-${batchNo}`}>
      <CardContainer>
        <CardSection style={{ gridArea: "visual" }}>
          <SupTitle>Batch #{batchNo}</SupTitle>
          <pre>Picture here</pre>
        </CardSection>
        <CardSection style={{ gridArea: "desc" }}>
          <span></span>
          <SupTitle>{recipe.style.name}</SupTitle>
          <BeerName>{recipe.name}</BeerName>

          <Ingredients role="list">
            <IngredientType>
              <IngredientTitle>Fermentables</IngredientTitle>
              <IngredientValue>
                <ul>
                  {batchFermentables.map((y) => (
                    <li key={y.name}>{y.name}</li>
                  ))}
                </ul>
              </IngredientValue>
            </IngredientType>
            <IngredientType>
              <IngredientTitle>Hops</IngredientTitle>
              <IngredientValue>
                <ul>
                  {batchHops.map((y) => (
                    <li key={y.name}>{y.name}</li>
                  ))}
                </ul>
              </IngredientValue>
            </IngredientType>
            <IngredientType>
              <IngredientTitle>Yeasts</IngredientTitle>
              <IngredientValue>
                <ul>
                  {batchYeasts.map((y) => (
                    <li key={y.name}>
                      {y.laboratory} - {y.name}
                      {y.productId ? ` (${y.productId})` : ``}
                    </li>
                  ))}
                </ul>
              </IngredientValue>
            </IngredientType>
          </Ingredients>

          {batchNotes && (
            <>
              <h3>Notes:</h3>{" "}
              <div css={{ whiteSpace: "pre-wrap" }}>{batchNotes}</div>
            </>
          )}
        </CardSection>
        <CardSection style={{ gridArea: "data" }}>
          <DataList>
            {status && (
              <DataItem>
                <DataTitle>Status</DataTitle>
                <DataValue>{status}</DataValue>
              </DataItem>
            )}
            {formatedBrewDate && (
              <DataItem>
                <DataTitle>Brew Date</DataTitle>
                <DataValue>{formatedBrewDate}</DataValue>
              </DataItem>
            )}
            {formatedBottlingDate && (
              <DataItem>
                <DataTitle>Bottling Date</DataTitle>
                <DataValue>{formatedBottlingDate}</DataValue>
              </DataItem>
            )}
          </DataList>
          <Hr />
          <DataGrid>
            {estimatedIbu && (
              <DataItem>
                <DataTitle>IBU</DataTitle>
                <DataValue>{estimatedIbu}</DataValue>
              </DataItem>
            )}
            {measuredAbv && (
              <DataItem>
                <DataTitle>ABV</DataTitle>
                <DataValue>{measuredAbv}%</DataValue>
              </DataItem>
            )}
            {measuredOg && (
              <DataItem>
                <DataTitle>OG</DataTitle>
                <DataValue>{`${measuredOg}`.padEnd(5, 0)}</DataValue>
              </DataItem>
            )}
            {measuredFg && (
              <DataItem>
                <DataTitle>FG</DataTitle>
                <DataValue>{`${measuredFg}`.padEnd(5, 0)}</DataValue>
              </DataItem>
            )}
          </DataGrid>
        </CardSection>
      </CardContainer>
    </Card>
  );
};

const Card = styled.li`
  background: #ffffff;
  border: 1px solid var(--color-gray-200);
  border-radius: var(--border-radius-base);
  padding: var(--space-24);
  margin-bottom: var(--space-64);
`;

const CardContainer = styled.div`
  display: grid;
  grid-gap: var(--space-8);
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: auto;
  grid-template-areas: "visual visual visual desc desc desc desc desc desc data data data";
`;

const CardSection = styled.section`
  padding: var(--space-16);
`;
const SupTitle = styled.span`
  text-transform: uppercase;
  color: var(--color-gray-500);
  font-size: var(--font-size-sm);
  font-weight: 600;
`;

const BeerName = styled.h2`
  font-size: var(--font-size-xl);
`;

const Ingredients = styled.div`
  display: flex;
`;

const IngredientType = styled.div`
  flex: 1 1 auto;
`;
const IngredientTitle = styled.div`
  text-transform: uppercase;
  color: var(--color-gray-400);
  font-size: var(--font-size-xs);
  font-weight: 600;
`;
const IngredientValue = styled.div`
  font-size: var(--font-size-sm);
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;

    li {
      font-size: var(--font-size-sm);
    }
  }
`;

const DataList = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
`;

const DataItem = styled.li`
  margin-bottom: var(--space-12);
`;

const DataGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
`;
const DataGridItem = styled.div``;

const DataTitle = styled.div`
  text-transform: uppercase;
  color: var(--color-gray-400);
  font-size: var(--font-size-xs);
  font-weight: 600;
`;
const DataValue = styled.div``;

const Hr = styled.hr`
  border-top: 1px solid var(--color-gray-200);
  border-bottom: none;
  margin: var(--space-24) 0;
`;
