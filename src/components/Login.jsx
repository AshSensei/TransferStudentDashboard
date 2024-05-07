import * as React from 'react';
import { Box, Heading, FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText, Input, Center, Button, Flex } from '@chakra-ui/react'

export default function LoginPage(){
    return (
        <>    
        
            <Center h="100vh">
                <Box borderWidth="1px" p="8" borderRadius="md" maxW="md">
                    <Heading>Login Page</Heading>   
                    <FormControl isRequired>
                        <FormLabel>Email Address</FormLabel>
                        <Input type="email"  placeholder='example@email.com'/>
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel>Password</FormLabel>
                        <Input type="password" />
                    </FormControl>

                    <Button colorScheme="green" type="submit">Login</Button>
                </Box>
            </Center>
           
            

        </>
    )
    
    
}