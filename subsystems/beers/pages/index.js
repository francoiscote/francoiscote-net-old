import {
  Container
} from '../../../styles/globals'


const BeersPage = ({ beers }) => {
  console.log(beers)
  const beerItems = beers.map( b => (
    <li>
      <h2>🍺 {b.recipe.name}</h2>
    </li>
  ))

  return (
    <Container>
      <h1>Beers</h1>
      <ul>
        {beerItems}
      </ul>
    </Container>
  )
}

export default BeersPage