const BeersPage = ({ beers }) => {
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
    <div className="container">
      <h1>Beers</h1>
      <ul>
        {beerItems}
      </ul>
    </div>
  )
}

export default BeersPage