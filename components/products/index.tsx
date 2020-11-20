import { gql, useQuery } from '@apollo/client';
import { Box, SimpleGrid, useMediaQuery } from '@chakra-ui/react';
import { memo } from 'react';
import { ProductType } from '../../@types';
import { getColor } from '../../lib';
import Product from './Product';


export type ProductListProps = {
    selectedCurrency: string
    addProductToCart: (product: ProductType) => void
}

const FETCH_PRODUCTS = (currency: string) => gql`query {
    products {
      id
      title
      image_url
      price(currency: ${currency})
    }
  }`;

const Products = (props: ProductListProps) => {
    const { addProductToCart, selectedCurrency } = props

    const [isLargerThan768] = useMediaQuery("(min-width: 768px)")
    const { loading, error, data } = useQuery(FETCH_PRODUCTS(selectedCurrency))

    
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;


    return (
        <SimpleGrid columns={isLargerThan768 ? 3 : 2} spacing={8}>
            {
                data.products.map((product: ProductType, index: number) => (
                        <Box key={`products_${index}`} borderBottom={`1p solid ${getColor('grey-600')}`}> 
                            <Product product={product} addToCart={() => addProductToCart(product)} selectedCurrency={selectedCurrency} />
                        </Box>
                ))
            }
        </SimpleGrid>
    )
}

export default memo(Products)