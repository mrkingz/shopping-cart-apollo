import '../styles/globals.css'
import { ChakraProvider } from "@chakra-ui/react"
import { ClientOnly } from '../components'
import { theme, } from '../lib'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'


const ShoppingCart = (props: any) => {
  const { Component, pageProps } = props

  const client = new ApolloClient({
    uri: 'https://pangaea-interviews.now.sh/api/graphql',
    cache: new InMemoryCache()
  });

  return (
    <ChakraProvider theme={theme} >
      <ApolloProvider client={client}>  
          <Component {...pageProps} />
      </ApolloProvider>
    </ChakraProvider>
  )
}

export default ShoppingCart
