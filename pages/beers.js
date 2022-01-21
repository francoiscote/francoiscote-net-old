const BREWFATHER_API_DOMAIN = 'https://api.brewfather.app/v1'

export default function BeersPage ({ beers }) {
  console.log(beers)

  const beerItems = beers.map( b => (
    <li key={`batch-${b.batchNo}`}>
      <h2>🍺 {b.recipe.name}</h2>
      <div>
        <ul>
          <li>
            Batch No: {b.batchNo}
          </li>
          <li>
            Status: {b.status}
          </li>
          <li>
            Brew Date: {b.brewDate}
          </li>
          <li>
            Notes: {b.batchNotes}
          </li>
          
        </ul>
      </div>
    </li>
  ))

  return (
    <>
      <h1>Beers</h1>
      <ul>
        {beerItems}
      </ul>
    </>
  )
}

// TODO: cache for rate-limit of 150 calls per hour on the API
export async function getServerSideProps(context) {
  const authString = Buffer.from(`${process.env.BREWFATHER_API_USER_ID}:${process.env.BREWFATHER_API_KEY}`).toString('base64')

  const headers = {
    authorization: `Basic ${authString}`
  }

  const includes = [
    'batchNotes',
    'batchFermentables',
    'batchHops',
    'batchYeasts',
    'estimatedColor',
    'estimatedIbu',
    'fermentationStartDate',
    'notes',
    'measuredAbv',
    'measuredBatchSize',
    'measuredFg',
    'measuredOg',
    'recipe.style.name',
    'status',
    'tasteRating'
  ]

  const res = await fetch(`${BREWFATHER_API_DOMAIN}/batches?include=${includes.join(',')}`, { headers })
  const data = await res.json()

  if (!data) {
    return {
      norFound: true
    }
  }

  return {
    props: {
      beers: [...data]
    }
  }
}

