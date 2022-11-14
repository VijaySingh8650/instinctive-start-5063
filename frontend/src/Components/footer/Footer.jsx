import { Box, Flex, Hide, Image, Show, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'
import flags from "./images/flags.png"
const Footer = () => {


  return (<>
                {/* /////////// Footer main box////////// */}
    <Box bgColor="#545658" width="100%" pt="40px" pb="40px" mt="50px">

        <SimpleGrid columns={[1,2,4,4]} color="white" width="80%" m="auto" justifyContent='space-between' rowGap="25px" >
            <Flex flexDir="column" rowGap="15px">
                <Text fontWeight={500} fontSize=".9rem" align={["center","center", "left", "left"]} color="#bf9850">MY ACCOUNT</Text>
               <Hide below="md"><Text fontWeight={500} fontSize=".9rem">Orders & Returns</Text>
                <Text fontWeight={500} fontSize=".9rem">Email Preferences</Text>
                <Text fontWeight={500} fontSize=".9rem">Account Settings</Text>
                </Hide>
            </Flex >
            <Flex flexDir="column" rowGap="15px">
                <Text fontWeight={500} fontSize=".9rem" color="#bf9850" align={["center","center", "left", "left"]}>LET US HELP</Text>
                <Hide below="md"><Text fontWeight={500} fontSize=".9rem">Contact Customer Care</Text>
                <Text fontWeight={500} fontSize=".9rem">Shipping Information</Text>
                <Text fontWeight={500} fontSize=".9rem">Return Policy</Text>
                <Text fontWeight={500} fontSize=".9rem">International Help</Text>
                <Text fontWeight={500} fontSize=".9rem">Accessibility</Text>
                </Hide>
            </Flex>
            <Flex flexDir="column" rowGap="15px">
                <Text fontWeight={500} fontSize=".9rem" color="#bf9850" align={["center","center", "left", "left"]}>COMPANY INFORMATION</Text>
                <Hide below="md"><Text fontWeight={500} fontSize=".9rem">About Overstock™</Text>
                <Text fontWeight={500} fontSize=".9rem">Contact Us</Text>
                <Text fontWeight={500} fontSize=".9rem">Careers</Text>
                <Text fontWeight={500} fontSize=".9rem">Investor Relations</Text>
                <Text fontWeight={500} fontSize=".9rem">Sell Your Products</Text>
                <Text fontWeight={500} fontSize=".9rem">Supply Chain Transparency</Text>
                </Hide>
            </Flex>
            <Flex flexDir="column" rowGap="15px">
                <Text fontWeight={500} fontSize=".9rem" color="#bf9850"  align={["center","center", "left", "left"]}>MORE WAYS TO SHOP</Text>
                <Hide below="md"><Text fontWeight={500} fontSize=".9rem">Tips & Ideas</Text>
                <Text fontWeight={500} fontSize=".9rem">Deals</Text>
                <Text fontWeight={500} fontSize=".9rem">Clearance</Text>
                <Text fontWeight={500} fontSize=".9rem">New Arrivals</Text>
                </Hide>
            </Flex>
        </SimpleGrid>

  </Box>
    <Box bgColor="#535455" borderTop={"1px solid grey"} pt='20px' pb='20px'>
        <Flex align={["center","center", "left", "left"]} flexDir={["column-reverse", "column-reverse","row","row"]}  color="white" width='80%' m="auto" justifyContent={"space-between"} rowGap='5px'>
            <Box >
                <Text align={["center","center", "left", "left"]} fontWeight={500} fontSize="12px">© Copyright 2022, HomeDecor.com®, Inc.</Text>
                
            </Box>
            <Flex align="center" gap={["5px","5px", "10px", "30px"]}>
            <Hide below="md"><Text fontWeight={500} fontSize="12px">Privacy Policy</Text>
            <Text fontWeight={500} fontSize="12px">Terms & Conditions</Text>
            <Text fontWeight={500} fontSize="12px">*Promotion Terms</Text>
            </Hide>
            <Flex gap="10px"><Text fontWeight={500} fontSize="12px">Ship to:</Text><Image  src={flags} width="26px" height="18px" border="2px solid white"/></Flex>
            </Flex>
        </Flex>

    </Box>
  </>
  )
}

export default Footer