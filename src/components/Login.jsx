import * as React from 'react';
import { Box, Heading, FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText, Input, Center, Button, Flex } from '@chakra-ui/react'
    import { Link as ReactRouterLink } from 'react-router-dom'
    import { Link as ChakraLink } from '@chakra-ui/react';


export default function Login(){
    return (
        <>    
        
            <Center h="100vh">
                <Box borderWidth="1px" p="8" borderRadius="md" maxW="lg" bg="white" w="30vw" minW="270px" h="50vh" minH="400px" >
                    <Heading mb="10">Login</Heading>   
                    <FormControl isRequired>
                        <FormLabel>Email Address</FormLabel>
                        <Input type="email"  placeholder='example@email.com'/>
                    </FormControl>
                    <FormControl isRequired mt="5" mb="2">
                        <FormLabel>Password</FormLabel>
                        <Input type="password" />
                    </FormControl>
                    <ChakraLink as={ReactRouterLink} to='/register'>
                        <Button colorScheme="blue" variant='outline' >Create Account</Button>
                    </ChakraLink>
                    <Button colorScheme="green" type="submit" m="5">Login</Button>
                    
                    
                </Box>
            </Center>
           
            

        </>
    )
    
    
}