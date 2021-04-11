import '../styles/globals.css'
import Layout from '../components/Layout'
import { ApolloProvider } from '@apollo/client'
import { useApollo } from '../middlewares/apolloClient'
import { Provider } from 'react-redux'
import { store } from '../config/store'


function MyApp({ Component, pageProps }) {
  const apolloClient = useApollo(pageProps.initialApolloState);
  return(
    <ApolloProvider client={apolloClient}>
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </ApolloProvider>
    )
}

export default MyApp
