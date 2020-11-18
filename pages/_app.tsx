import '../styles/globals.css'
import { ChakraProvider } from "@chakra-ui/react"
import { ClientOnly } from '../components'

const ShoppingCart = (props: any) => {
  const { Component, pageProps } = props
  return (
    <ChakraProvider>
      <ClientOnly>
        <Component {...pageProps} />
      </ClientOnly>
    </ChakraProvider>
  )
}

export default ShoppingCart
