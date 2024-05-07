import * as React from 'react';
import { Box, Heading, FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText, Input, Center, Button, Flex } from '@chakra-ui/react'

export default function Register(){

    
    return (
        <>    
            <Center h="100vh">
                <Box borderWidth="1px" p="8" borderRadius="md" maxW="lg" bg="white" w="30vw" minW="270px" h="50vh" minH="450px" >
                    <Heading mb="10">Register</Heading>   
                    <FormControl isRequired>
                        <FormLabel>Email Address</FormLabel>
                        <Input type="email"  placeholder='example@email.com'/>
                    </FormControl>
                    <FormControl isRequired mt="5" mb="2">
                        <FormLabel>Password</FormLabel>
                        <Input type="password" />
                    </FormControl>
                    <FormControl isRequired mt="5" mb="2">
                        <FormLabel>Confirm Password</FormLabel>
                        <Input type="password" />
                    </FormControl>
                    <Button colorScheme="green" type="submit">Register</Button>
                </Box>
            </Center>
           
            

        </>
    )
    
    
}