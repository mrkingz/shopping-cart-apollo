import { Stack, Text, Box, useDisclosure } from '@chakra-ui/react'
import { CartItemType, ProductType } from '../@types'
import { AppDrawer, Products, NavBar, Cart } from '../components'

import { useState, useMemo } from 'react'

const Index = () => {

  const products: ProductType[] = [
    {
      id: 1,
      title: 'Cream',
      image_url: '',
      price: 500,
      product_options: [{
        title: '',
        prefix: '',
        suffix: ''
      }]
    },
    {
      id: 2,
      title: 'Body Cream',
      image_url: '',
      price: 800,
      product_options: [{
        title: '',
        prefix: '',
        suffix: ''
      }]
    },
    {
      id: 3,
      title: 'Tooth Brush',
      image_url: '',
      price: 200,
      product_options: [{
        title: '',
        prefix: '',
        suffix: ''
      }]
    }
  ]

  const currencyList = ['NGN', 'USD', 'GBP']

  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [cartItems, setCartItems] = useState<CartItemType[]>([])
  const [selectedCurrency, setSelectedCurrency] = useState<string>('NGN')
  const [currencies, setCurrencies] = useState<string[]>(currencyList)

  const updateQuantity = (product: ProductType, update?: number) => {

    // Check if product exist in the cart
    const index = cartItems.findIndex(({ product: { id }}) => id === product.id)
    if (index > -1) {
      const items = [...cartItems]
      items[index].quantity += update || 1 // increment/decrement quantity

      items[index].quantity === 0
        ? items.splice(index, 1) 
        : items.splice(index, 1, items[index])

      setCartItems(items)
    } else {
      setCartItems(() => [...cartItems, { product, currency: selectedCurrency,  quantity: 1 }])
    }

  }

  return (
    <Box>
      <Box>
        <NavBar cartItemsCount={cartItems.length} openDrawer={() => setIsOpen(() => !isOpen)} />
      </Box>

      <Box h="10rem" background="white">

      </Box>
      <Stack px={[4, 10]} py={8} background="lightgrey" minHeight="100vh">
        <Box>
          <Products products={products} addProductToCart={updateQuantity}/>
        </Box>

        <AppDrawer 
          selectedCurrency={selectedCurrency} 
          selectCurrency={setSelectedCurrency} 
          currencies={currencies} 
          isOpen={isOpen} 
          onClose={() => setIsOpen(() => !isOpen)}
        > 
          <Cart selectedCurrency={selectedCurrency} items={cartItems} updateQuantity={updateQuantity}/>
        </AppDrawer>
      </Stack>
    </Box>
  )
}
export default Index