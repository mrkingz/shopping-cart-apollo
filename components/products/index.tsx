import {Stack, Box, SimpleGrid, useMediaQuery } from '@chakra-ui/react'
import { ProductType } from '../../@types'
import Product from './Product'
import { useMemo } from 'react'

export type ProductListProps = {
    products: ProductType[]
    addProductToCart: (product: ProductType) => void
}

const Products = (props: ProductListProps) => {
    const { products, addProductToCart } = props

    const [isLargerThan768] = useMediaQuery("(min-width: 768px)")

    return (
        <SimpleGrid columns={isLargerThan768 ? 3 : 2} spacing={8}>
            {
                products.map((product: ProductType, index) => (
                    useMemo(() => (
                        <Box key={`products_{index}`}> 
                                <Product product={product} addToCart={() => addProductToCart(product)} />
                        </Box>
                    ), [products])
                ))
            }
        </SimpleGrid>
    )
}

export default Products