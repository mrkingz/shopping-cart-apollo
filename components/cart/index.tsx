import { Box, Button, Stack, Text } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { CartItemType, ProductType } from '../../@types'
import CartItem from './CartItem'
import CurrencySymbol from '../CurrencySymbol'


export type CartItemsProps = {
    items: CartItemType[]
    selectedCurrency: string
    updateQuantity: (product: ProductType, update?: number) => void
}

const CartItems = ({ items, selectedCurrency, updateQuantity }: CartItemsProps) => {

    const [totalPrice, setTotalPrice] = useState<number>(0)

    useEffect(() => {
        setTotalPrice(computeTotalPrice(items))
    })

    const computeTotalPrice = (items: CartItemType[]) => {
       const total = items.reduce((total, value) => {
            total += value.quantity * value.product.price
            return total
        }, 0)
        return total
    }

    return (
        <Stack justify="space-between" height="full">
            <Stack spacing={4}>
                {
                    items.map(({ quantity, product }: CartItemType, index: number) => (
                        <Box key={`cart_items_${index}`} background="white" rounded="xs">
                            <CartItem updateQuantity={updateQuantity} quantity={quantity} product={product} selectedCurrency={selectedCurrency} />
                        </Box>
                    ))
                }
            </Stack>

            <Stack spacing={2} paddingTop={2} borderTop={`2px solid grey`}>
                <Stack justify="space-between" direction="row">
                    <Text>Subtotal</Text>
                    <Stack spacing={.5} direction="row">
                        <CurrencySymbol code={selectedCurrency} />
                        <Text>{totalPrice}</Text>
                    </Stack>
                </Stack>

                <Button color="black" background="white" border={`1px solid grey`} rounded="xs" size="sm" _focus={{outline: 'none'}}>
                    Make a subscription (Save 20%)
                </Button>

                <Button 
                    color="whitesmoke" 
                    background="black" 
                    rounded="xs" 
                    size="sm"
                    _hover={{background: 'black', opacity: .7}}
                    _focus={{outline: 'none'}}
                >
                    Proceed to Checkout
                </Button>
            </Stack>
        </Stack>
    )
} 

export default CartItems