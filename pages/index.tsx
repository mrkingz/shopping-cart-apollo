import { Box, Stack, Select, Text } from '@chakra-ui/react'
import { useState, useEffect } from 'react'
import { CartItemType, ProductType } from '../@types'
import { AppDrawer, Cart, NavBar, Products } from '../components'
import { getColor } from '../lib'
import { useQuery, gql } from '@apollo/client';


const FETCH_CURRENCIES = gql`query {
  currency
}`;


const Index = () => {

  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [cartItems, setCartItems] = useState<CartItemType[]>([])
  const [selectedCurrency, setSelectedCurrency] = useState<string>('NGN')

  const { loading, error, data } = useQuery(FETCH_CURRENCIES)

  useEffect(() => {
    setIsOpen(cartItems.length > 0)
  }, [cartItems])



  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>

  const removeItemFromCart = (id: number) => {
    setCartItems(cartItems.filter(({ product }) => id !== product.id)) 
  }

  const addItemToCart = (product: ProductType, update?: number) => {
    // Check if product exist in the cart
    const index = cartItems.findIndex(({ product: { id }}) => product.id === id)

    if (index > -1) {
      const items = [...cartItems]
      items[index].quantity += update || 1 // increment/decrement quantity

      items[index].quantity === 0
        ? items.splice(index, 1) 
        : items.splice(index, 1, items[index])

      setCartItems(items)
    } else {
      setCartItems([...cartItems, { product, quantity: 1 }])
    }

  }

  return (
    <Box>
      <Box>
        <NavBar cartItemsCount={cartItems.length} openDrawer={() => setIsOpen(() => !isOpen)} />
      </Box>

      <Stack px={[4, 20]} py={8} align="flex-end" justify="space-between" direction="row" background="white">
        <Stack spacing={2}>
          <Text fontWeight={600} fontSize={32}>All Products</Text>
          <Text fontSize={12}>A 360<sup>o</sup> look at Lumin</Text>
        </Stack>

        <Box>
          <Select minWidth={48} placeholder="Filter kg">
            <option></option>
          </Select>
        </Box>
      </Stack>

      <Stack px={[4, 10]} py={8} background={getColor('grey-200')} minHeight="100vh">
        <Box>
          <Products addProductToCart={addItemToCart} selectedCurrency={selectedCurrency} />
        </Box>

        <AppDrawer 
          selectedCurrency={selectedCurrency} 
          selectCurrency={setSelectedCurrency} 
          currencies={data.currency} 
          isOpen={isOpen} 
          onClose={() => setIsOpen(() => !isOpen)}
        > 
          <Cart removeItemFromCart={removeItemFromCart} selectedCurrency={selectedCurrency} items={cartItems} addItemToCart={addItemToCart}/>
        </AppDrawer>
      </Stack>
    </Box>
  )
}
export default Index