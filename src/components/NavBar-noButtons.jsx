import * as React from 'react';
import { Box, Button, Flex, Heading, Center, Spacer, ButtonGroup } from '@chakra-ui/react'
import { Link as ReactRouterLink } from 'react-router-dom'
import { Link as ChakraLink } from '@chakra-ui/react';


export default function NavBar(){

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
                    <ChakraLink as={ReactRouterLink} to='/'>
                        <Heading size="md">Transfer Student Dashboard</Heading>
                    </ChakraLink>
                </Box>
                <Spacer />
            </Flex>
        
    )
}