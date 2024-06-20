import * as React from 'react';
import { Box, Tabs, TabList, Tab, TabPanels, TabPanel, Text, Link} from '@chakra-ui/react'

export default function TransferTimeline(){


    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            height="100vh"
            size="lg">
            <Tabs 
                variant='line' 
                size="lg" 
                isFitted 
                width= "100em" 
                height="80%" 
                bg="white"
                p={8} 
                borderRadius="md" 
                boxShadow="md">
                <TabList >
                    <Tab>Entering Community College</Tab>
                    <Tab>Researching using Assist.org</Tab>
                    <Tab>Applying to Colleges</Tab>
                </TabList>
                <TabPanels bg="white">
                    <TabPanel textAlign="left">
                        <Text fontSize='4xl'>Welcome to Community College!</Text>
                        <Text fontSize='xl'>Community College is an excellent place to build your skills as you enter this next step of your life. You can take classes at your own pace while being debt free and exploring all sorts of opportunities.</Text>
                    </TabPanel>
                    <TabPanel textAlign="left">
                        <Text fontSize='4xl'>Starting to Take Classes</Text>
                        <Text fontSize='xl'>The most important thing to do while in community college is always to be preparing yourself for the next steps. This of course heavily includes planning the classes you'll be taking during your time. Each school requires different courses depending on your major so resources such as <Link href='https://assist.org' isExternal>Assist.org
</Link> make sure you take a lot of time when crafting your schedule and check it with a counselor.</Text>
                    </TabPanel>
                    <TabPanel textAlign="left">
                        <Text fontSize='4xl'>Crafting the Perfect Application</Text>
                        <Text fontSize='xl'>At last! You've made it to the end of the road and now you just have to fill out those applications. Make sure to take into consideration the type of application you fill out whether that's your CSU, UC, CommonApp, or any other type of application you need to fill out. Each school has their own deadlines and it's up to you to keep track of each and every one of them. The important thing is to make sure you can portray the depth and extent of your experiences to the reader so they can understand all the amazing things you've accomplished. Good luck!</Text>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Box>
    )


}