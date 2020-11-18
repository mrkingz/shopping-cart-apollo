import { Flex, Stack, Text, ButtonGroup, Button, Divider, Box, Image } from '@chakra-ui/react'
import { ProductType } from "../../@types";
import { FiPlus, FiMinus, } from 'react-icons/fi'
import { MdClose } from 'react-icons/md'
import CurrencySymbol from '../CurrencySymbol'

export type CartItemProps = {
    quantity: number
    product: ProductType
    selectedCurrency: string
    updateQuantity: (product: ProductType, update?: number) => void
}

const CartItem = (props: CartItemProps) => {

    const { updateQuantity, quantity, selectedCurrency, product: { id, title, price, image_url }} = props

    return (
        <Stack flex={8} direction="row" justify="space-between" >
            <Stack justify="space-between" flex={6}  padding={2}>
                <Text fontSize={12}>{title}</Text>

                <Stack direction="row" justify="space-between">
                    <ButtonGroup border={`1px solid grey`} rounded="sm" alignItems="center" spacing={1} >
                        <Button size="xs" background="transparent" onClick={() => updateQuantity(props.product, -1)}><FiMinus size={10} /></Button>
                        <Box>
                            <Text fontSize={10}>{quantity}</Text>
                        </Box>
                        <Button size="xs" background="transparent" onClick={() => updateQuantity(props.product, 1)}><FiPlus size={10} /></Button>
                    </ButtonGroup>

                    <Stack spacing={.5} direction="row">
                        <CurrencySymbol code={selectedCurrency} />
                        <Text>{quantity * price}</Text>
                    </Stack>
                </Stack>
            </Stack>

            <Stack flex={2} background="grey"  padding={2}>
                <Flex justify="flex-end">
                    <Box cursor="pointer">
                        <MdClose size={10} color="red" />
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