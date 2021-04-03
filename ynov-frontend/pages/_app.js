import '../styles/globals.css'
import Layout from '../components/Layout'
import { ApolloProvider } from "@apollo/client";
import { useApollo } from "../middlewares/apolloClient";


function MyApp({ Component, pageProps }) {
  const apolloClient = useApollo(pageProps.initialApolloState);
  return(
    <ApolloProvider client={apolloClient}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
    )
}

export default MyApp
