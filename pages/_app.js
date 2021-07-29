import '../styles/globals.css'
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client'
import 'tailwindcss/tailwind.css'

const client = new ApolloClient({
  uri : 'https://demo.saleor.io/graphql/',
  cache : new InMemoryCache()
})



function MyApp({ Component, pageProps }) {
  return (0)    
}

export default MyApp
