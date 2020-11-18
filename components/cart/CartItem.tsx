import { Box, Button, ButtonGroup, Flex, Image, Stack, Text } from '@chakra-ui/react';
import { FiMinus, FiPlus } from 'react-icons/fi';
import { MdClose } from 'react-icons/md';
import { ProductType } from "../../@types";
import { getColor } from '../../lib';
import CurrencySymbol from '../CurrencySymbol';

export type CartItemProps = {
    quantity: number
    product: ProductType
    selectedCurrency: string
    removeItemFromCart: (id: number) => void
    updateItemQuantity: (product: ProductType, update?: number) => void
}

const CartItem = (props: CartItemProps) => {

    const {  
        removeItemFromCart, updateItemQuantity, quantity, selectedCurrency, 
        product: { id, title, price, image_url }
    } = props

    const buttonStyle = () => ({
        cursor: 'pointer',
        // _hover: { background: 'transparent' },
        // _focus: { outline: 'none', background: 'transparent' },
        // background: 'transparent',
        py: 1,
        px: 2,
        size:'xs'
    })

    return (
        <Stack flex={8} direction="row" justify="space-between" >
            <Stack justify="space-between" flex={6}  padding={2}>
                <Text fontSize={12}>{title}</Text>

                <Stack direction="row" justify="space-between">
                    <ButtonGroup border={`1px solid ${getColor('grey-500')}`} rounded="sm" alignItems="center" spacing={1} >
                        <Box {...buttonStyle()} onClick={() => updateItemQuantity(props.product, -1)}><FiMinus size={10} /></Box>
                        <Box>
                            <Text fontSize={10}>{quantity}</Text>
                        </Box>
                        <Box {...buttonStyle()} onClick={() => updateItemQuantity(props.product, 1)}><FiPlus size={10} /></Box>
                    </ButtonGroup>

                    <Stack spacing={.5} direction="row">
                        <CurrencySymbol code={selectedCurrency} />
                        <Text>{quantity * price}</Text>
                    </Stack>
                </Stack>
            </Stack>

            <Stack flex={2} background={getColor('grey-200')}  padding={2}>
                <Flex justify="flex-end">
                    <Box cursor="pointer" onClick={() =>  removeItemFromCart(id)}>
                        <MdClose size={10} fontWeight={600} color={getColor('grey-600')} />
                    </Box>
                </Flex>
                <Stack>
                    <Image src={image_url} />
                </Stack>
            </Stack>
        </Stack>
    )
}

export default CartItem