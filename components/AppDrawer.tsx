import {
  Box,
  Drawer,
  DrawerHeader,
  DrawerFooter,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  Stack, 
  Text,
  Select,
  Button
} from '@chakra-ui/react'
import { FC, useMemo, useState } from 'react'
import { MdClose } from 'react-icons/md'


export type DrawerProps = {
    currencies: string[]
    isOpen: boolean
    onClose: () => void
    selectedCurrency: string
    selectCurrency: (currency: string) => void
}

const AppDrawer: FC<DrawerProps> = ({ children, isOpen, onClose, currencies, selectCurrency, selectedCurrency }) => {

    return (
        <Drawer
            isOpen={isOpen}
            placement="right"
            onClose={onClose}
        >
        <DrawerOverlay>
          <DrawerContent padding={4} background="lightgrey">
            <DrawerHeader p={0}>
              <Stack flex={8} direction="row">
                <Box>
                  <Button onClick={onClose} size="xs" flex={1} padding={1} rounded="full" border={`1px solid lightgrey`} _focus={{outline: 'none'}}>
                      <MdClose size={16} color="red" />
                  </Button>
                </Box>
                <Box textAlign="center" flex={6}>
                  <Text>Your Cart</Text>
                </Box>
              </Stack>
              <Stack justify="flex-start" mt={4}>
                <Box width="40%" >
                  <Select 
                    size="sm"
                    background="white" 
                    onChange={event => selectCurrency(event.target.value)}
                    value={selectedCurrency}
                  >
                    {currencies.map((currency: string, index: number) => useMemo(() => (
                      <option key={`currencies_${index}`} value={currency}>{currency}</option>
                    ), [selectedCurrency]))}
                  </Select>
                </Box>
              </Stack>
            </DrawerHeader>

            <DrawerBody px={0}>
                {children}
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    )
}

export default AppDrawer