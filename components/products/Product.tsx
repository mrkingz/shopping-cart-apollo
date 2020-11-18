import { Stack, Box, Text, Image, Button } from '@chakra-ui/react'
import { ProductType } from '../../@types'
import { memo } from 'react'

export type ProductProps = {
    addToCart: () => void
    product: ProductType
}

const Product = (props:  ProductProps) => {

    const { addToCart, product: { image_url, title, price, id } } = props

    return (
        <Stack align="center">
            <Image src={image_url} />

            <Stack spacing={4} textAlign="center">
                <Text>
                    {title}
                </Text>

                <Text>
                    {price}
                </Text>
            </Stack>
                
            <Button 
                onClick={addToCart} 
                width="auto" 
                background="black" 
                color="whitesmoke" 
                _focus={{outline: 'none'}}
                _hover={{ background: 'black', opacity: .7 }}
            >
                Add to Cart
            </Button>
        </Stack>
    )
}

export default memo(Product)