import * as React from 'react';
import { Box, Button, Flex, Heading, Center, Spacer, ButtonGroup, Drawer, DrawerOverlay, DrawerHeader, DrawerBody, DrawerCloseButton, DrawerFooter,DrawerContent, useDisclosure, IconButton, Card, CardHeader, CardBody, CardFooter, Text} from '@chakra-ui/react'
import { Link as ReactRouterLink } from 'react-router-dom'
import { Link as ChakraLink } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons'

export default function NavBar(){
    const { isOpen, onOpen, onClose } = useDisclosure()
        const btnRef = React.useRef()
    return(

            <Flex 
                bg="white" 
                minWidth='max-content' 
                w="100vw" 
                alignItems='center'
                position="fixed"
                top="0"
                left="0"
                right="0"
                h="10vh"
                padding="20px"
            >
                <Box p="2">
                    <Button ref={btnRef} colorScheme='teal' onClick={onOpen} as={IconButton}
                        aria-label='Options'
                        icon={<HamburgerIcon />}
                        variant='outline'
                    >
                        Open
                    </Button>
                    
                    <Drawer
                        isOpen={isOpen}
                        placement='left'
                        onClose={onClose}
                        finalFocusRef={btnRef}
                    >
                        <DrawerOverlay />
                        <DrawerContent>
                            <DrawerCloseButton />
                            <DrawerHeader>Navigate</DrawerHeader>

                            <DrawerBody>
                                <Card>
                                    <CardHeader>
                                        <Heading size='md'> Transfer Checklist</Heading>
                                    </CardHeader>
                                    <CardBody>
                                        <Text>View your items for staying on top of transferring.</Text>
                                    </CardBody>
                                    <CardFooter>
                                        <ChakraLink as={ReactRouterLink} to='/checklist'>
                                            <Button>View Checklist</Button>
                                        </ChakraLink>
                                    </CardFooter>
                                </Card>
                            </DrawerBody>

                            <DrawerFooter>
                            </DrawerFooter>
                        </DrawerContent>
                    </Drawer>
                    
                </Box>
                <ChakraLink as={ReactRouterLink} to='/'>
                        <Heading size="md">Transfer Student Dashboard</Heading>
                </ChakraLink>
                <Spacer />
                <ButtonGroup>

                    <ChakraLink as={ReactRouterLink} to='/login'>
                        <Button colorScheme="blue" variant='solid' >Login</Button>
                    </ChakraLink>
                    <ChakraLink as={ReactRouterLink} to='/register'>
                        <Button colorScheme="blue" variant='outline' >Register</Button>
                    </ChakraLink>
                </ButtonGroup>
            </Flex>
        
    )
}