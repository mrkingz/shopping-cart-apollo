import '../styles/globals.css'
import { ChakraProvider } from "@chakra-ui/react"
import { theme, } from '../lib'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'


const ShoppingCart = (props: any) => {
  const { Component, pageProps } = props

  const client = new ApolloClient({
    uri: process.env.API_URL,
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
