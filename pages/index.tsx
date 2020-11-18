import { Stack, Text, Box, useDisclosure } from '@chakra-ui/react'
import { ProductType } from '../@types'
import { AppDrawer, Products, NavBar } from '../components'

import { useState } from 'react'

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
      id: 1,
      title: 'Cream',
      image_url: '',
      price: 500,
      product_options: [{
        title: '',
        prefix: '',
        suffix: ''
      }]
    }
  ]

  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <Box>
      <Box>
        <NavBar cartItemsCount={0} openDrawer={() => setIsOpen(() => !isOpen)} />
      </Box>

      <Box h="10rem" background="white">

      </Box>
      <Stack px={[4, 10]} py={8} background="lightgrey" minHeight="100vh">
        <Box>
          <Products products={products} />
        </Box>

        <AppDrawer isOpen={isOpen} onClose={() => setIsOpen(() => !isOpen)} />
      </Stack>
    </Box>
  )
}
export default Index