import BeersPage from '../subsystems/beers/pages'

const BREWFATHER_API_DOMAIN = 'https://api.brewfather.app/v1'

// TODO: cache for rate-limit of 150 calls per hour on the API
export async function getServerSideProps(context) {
  const authString = btoa(`${process.env.BREWFATHER_API_USER_ID}:${process.env.BREWFATHER_API_KEY}`)
  
  const headers = {
    authorization: `Basic ${authString}`
  }
  const res = await fetch(`${BREWFATHER_API_DOMAIN}/batches`, { headers })
  const data = await res.json()

  console.log({ data })

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

const Beers = (props) => <BeersPage {...props}/>

export default Beers