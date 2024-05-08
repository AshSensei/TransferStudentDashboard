import * as React from 'react'
import checklistData from '../data/checklistData'
import { Checkbox, CheckboxGroup, Center, Box, Heading } from '@chakra-ui/react'
export default function Checklist(){
    const [checklist, setChecklist] = React.useState(checklistData)
    console.log(checklist)
    const handleCheckboxChange = (index) => {
        setChecklist((prevChecklist) => {
            const newChecklist = [...prevChecklist]; // Create a copy of the checklist array
            newChecklist[index] = !newChecklist[index]; // Toggle the value at the specified index
            return newChecklist; // Return the new checklist array
        });
    };

    return(
        <>
            <Center h="100vh">
                <Box
                    borderWidth="1px"
                    p="8"
                    borderRadius="md"
                    maxW="ex-lg"
                    bg="white"
                    w="50vw"
                    minW="270px"
                    h="50vh"
                    minH="400px"
                    display="flex" 
                    flexDirection="column"  
                    alignItems="flex-start" 
                >
                    <Heading mb="10">Transfer Checklist</Heading>   
                    <CheckboxGroup >
                        <Checkbox
                            isChecked={checklist[0]}
                            onChange={() => handleCheckboxChange(0)}
                        >
                            Use Assist.org to create a 2/3 Year Transfer Plan.
                        </Checkbox>
                        <Checkbox
                            isChecked={checklist[1]}
                            onChange={() => handleCheckboxChange(1)}
                        >
                            Create UC TAP Account
                        </Checkbox>
                        <Checkbox
                            isChecked={checklist[2]}
                            onChange={() => handleCheckboxChange(2)}
                        >
                            Connect with Support Programs on your campus (MESA, TRIO, EOPS)
                        </Checkbox>
                    </CheckboxGroup> 
                </Box>
            </Center>
        </>
    )
}