import { 
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Box,
    Text,
    Flex,
    Stack,
    Button
} from '@chakra-ui/react'
import { FC } from 'react'
import { MdClose } from 'react-icons/md'


export type DrawerProps = {
    isOpen: boolean
    onClose: () => void
}

const AppDrawer: FC<DrawerProps> = ({ children, isOpen, onClose }) => {
    
    return (
        <Drawer
            isOpen={isOpen}
            placement="right"
            onClose={onClose}
        >
        <DrawerOverlay>
          <DrawerContent padding={4} background="lightgrey">
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

            <DrawerBody>
                {children}
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    )
}

export default AppDrawer