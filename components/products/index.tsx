import {Stack, Box, SimpleGrid, useMediaQuery } from '@chakra-ui/react'
import { ProductType } from '../../@types'
import Product from './Product'
import { useMemo } from 'react'
import { useQuery, gql } from '@apollo/client';


export type ProductListProps = {
    // products: ProductType[]
    addProductToCart: (product: ProductType) => void
}

const FETCH_PRODUCTS = gql`query {
    products {
      id
      title
      image_url
      price(currency: USD)
    }
  }`;

const Products = (props: ProductListProps) => {
    const { addProductToCart } = props

    const [isLargerThan768] = useMediaQuery("(min-width: 768px)")
    const { loading, error, data } = useQuery(FETCH_PRODUCTS)

    
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;


    return (
        <SimpleGrid columns={isLargerThan768 ? 3 : 2} spacing={8}>
            {
                data.products.map((product: ProductType, index: number) => (
                        <Box key={`products_${index}`}> 
                            <Product product={product} addToCart={() => addProductToCart(product)} />
                        </Box>
                ))
            }
        </SimpleGrid>
    )
}

export default Products