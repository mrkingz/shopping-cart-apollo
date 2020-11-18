import {
  Box,
  Button, 
  Drawer,
  DrawerBody,
  DrawerContent, 
  DrawerHeader,
  DrawerOverlay,
  Select, 
  Stack,
  Text
} from '@chakra-ui/react'
import { getColor } from '../lib'
import { FC, useMemo } from 'react'
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
          <DrawerContent padding={4} background={getColor('grey-100')}>
            <DrawerHeader p={0}>
              <Stack flex={8} direction="row">
                <Box>
                  <Button onClick={onClose} size="xs" flex={1} padding={1} rounded="full" border={`1px solid ${getColor('grey-500')}`} _focus={{outline: 'none'}}>
                      <MdClose size={16} color={getColor('grey-500')} />
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