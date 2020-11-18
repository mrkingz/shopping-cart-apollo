import { Stack, Text, Flex, Box, Divider } from '@chakra-ui/react'
import { BiCartAlt } from 'react-icons/bi'
import { memo } from 'react'

export type NavBarProps = {
    cartItemsCount: number
    openDrawer: () => void
}

const NavBar = (props: NavBarProps) => {

    const { cartItemsCount, openDrawer } = props

    return (
        <Box>
            <Flex justify="space-between" px={[4, 10]} py={4}>
                <Stack direction="row" spacing={6}>
                    <Text fontWeight={600} letterSpacing={4}>LUMIN</Text>
                    <Stack spacing={4} direction="row">
                        <Text>Shop</Text>
                        <Text>Learn</Text>
                    </Stack>
                </Stack>

                <Stack spacing={4} direction="row">
                    <Text>Account</Text>
                    <Stack spacing={1} align="center" justify="center" direction="row" cursor="pointer" onClick={openDrawer}>
                        <BiCartAlt size={20} />
                        <Text color="rosybrown">{cartItemsCount}</Text>
                    </Stack>
                </Stack>
            </Flex>
            <Divider />
        </Box>
    )
}

export default memo(NavBar)