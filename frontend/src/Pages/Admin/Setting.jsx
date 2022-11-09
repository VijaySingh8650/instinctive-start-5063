import { ChevronRightIcon } from '@chakra-ui/icons'
import { Box, Center, Container, Flex, Grid, GridItem, Text } from '@chakra-ui/react'
import React from 'react'

const Setting = () => {
    return (
        <Container maxW={"95%"} gap={'2rem'}>
            <Text fontSize={"2xl"}>Settings</Text>
            <Text>Manage the settings for your Homedecor</Text>

            <Grid templateColumns='repeat(2, 1fr)' gap={'2rem'} mt={"2rem"} >
                <GridItem w='100%'   ><Flex   h={40} justifyContent="space-around" boxShadow='dark-lg' rounded='md' bg='white'> <Center><Box><Text fontSize="2xl">Region</Text><Text>Manage the markets that you will operate within</Text></Box></Center><Center><ChevronRightIcon  w={8} h={12} /></Center></Flex></GridItem>
                <GridItem w='100%'   ><Flex   h={40}justifyContent="space-around" boxShadow='dark-lg' rounded='md' bg='white'> <Center><Box><Text fontSize="2xl">Currencies</Text><Text>Manage the currencies that you will operate in</Text></Box></Center><Center><ChevronRightIcon  w={8} h={12} /></Center></Flex></GridItem>
                <GridItem w='100%'   ><Flex   h={40} justifyContent="space-around" boxShadow='dark-lg' rounded='md' bg='white'> <Center><Box><Text fontSize="2xl">Store Details</Text><Text>Manage your business details</Text></Box></Center><Center><ChevronRightIcon  w={8} h={12} /></Center></Flex></GridItem>
                <GridItem w='100%'   ><Flex   h={40}justifyContent="space-around" boxShadow='dark-lg' rounded='md' bg='white'> <Center><Box><Text fontSize="2xl">Shipping</Text><Text>Manage shipping profiles</Text></Box></Center><Center><ChevronRightIcon  w={8} h={12} /></Center></Flex></GridItem>
                <GridItem w='100%'   ><Flex   h={40}justifyContent="space-around" boxShadow='dark-lg' rounded='md' bg='white'> <Center><Box><Text fontSize="2xl">Return Reasons</Text><Text>Manage Order Settings</Text></Box></Center><Center><ChevronRightIcon w={8} h={12}  /></Center></Flex></GridItem>
                <GridItem w='100%'   ><Flex   h={40}justifyContent="space-around" boxShadow='dark-lg' rounded='md' bg='white'> <Center><Box><Text fontSize="2xl">The Team</Text><Text>Manage users of your  Homedecor</Text></Box></Center><Center><ChevronRightIcon  w={8} h={12} /></Center></Flex></GridItem>
                <GridItem w='100%'   ><Flex   h={40}justifyContent="space-around" boxShadow='dark-lg' rounded='md' bg='white'> <Center><Box><Text fontSize="2xl">Personal Information</Text><Text>Manage users of your Homedecor</Text></Box></Center><Center><ChevronRightIcon w={8} h={12} /></Center></Flex></GridItem>
                <GridItem w='100%'   ><Flex   h={40}justifyContent="space-around" boxShadow='dark-lg' rounded='md' bg='white'> <Center><Box><Text fontSize="2xl">hello@homedecor.com</Text><Text>Can't find the answer you looking for?</Text></Box></Center><Center><ChevronRightIcon  w={8} h={12} /></Center></Flex></GridItem>
                <GridItem w='100%'   ><Flex   h={40}justifyContent="space-around" boxShadow='dark-lg' rounded='md' bg='white'> <Center><Box><Text fontSize="2xl">Tax Settings</Text><Text>Select the region you wish to manage taxes for</Text></Box></Center><Center><ChevronRightIcon  w={8} h={12} /></Center></Flex></GridItem>




            </Grid>

        </Container>
    )
}

export default Setting