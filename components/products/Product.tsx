import { Stack, Box, Text, Image, Button } from '@chakra-ui/react'
import { ProductType } from '../../@types'
import { memo } from 'react'
import CurrencySymbol from '../CurrencySymbol'

export type ProductProps = {
    addToCart: () => void
    product: ProductType
}

const Product = (props:  ProductProps) => {

    const { addToCart, product: { image_url, title, price, id } } = props

    return (
        <Stack align="center" spacing={4}>
            <Image src={image_url} width={12} height={12}/>

            <Stack textAlign="center" align="center">
                <Text>
                    {title}
                </Text>

                <Stack direction="row" spacing={0.5}>
                    <Text paddingRight={1}>From</Text>
                    <Box>
                        <CurrencySymbol code='USD' />
                    </Box>
                    <Text>{price}</Text>
                </Stack>
            </Stack>
                
            <Button 
                onClick={addToCart} 
                size="sm"
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