import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import 'tailwindcss/tailwind.css'

const client = new ApolloClient({
  uri : 'https://demo.saleor.io/graphql/',
  cache : new InMemoryCache()
})



function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client} >  
      <Component {...pageProps} />
    </ApolloProvider>
    
  )    
}

export default MyApp
