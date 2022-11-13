import { Box, Flex, Hide, Image, Show, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'
import flags from "./images/flags.png"
const Footer = () => {


  return (<>
                {/* /////////// Footer main box////////// */}
    <Box bgColor="#545658" width="100%" pt="40px" pb="40px">

        <SimpleGrid columns={[1,2,4,4]} color="white" width="80%" m="auto" justifyContent='space-between' rowGap="25px" >
            <Flex flexDir="column" rowGap="15px">
                <Text fontWeight={700} fontSize="12px" align={["center","center", "left", "left"]}>MY ACCOUNT</Text>
               <Hide below="md"><Text fontWeight={300} fontSize="12px">Orders & Returns</Text>
                <Text fontWeight={300} fontSize="12px">Email Preferences</Text>
                <Text fontWeight={300} fontSize="12px">Account Settings</Text>
                </Hide>
            </Flex >
            <Flex flexDir="column" rowGap="15px">
                <Text fontWeight={700} fontSize="12px" align={["center","center", "left", "left"]}>LET US HELP</Text>
                <Hide below="md"><Text fontWeight={300} fontSize="12px">Contact Customer Care</Text>
                <Text fontWeight={300} fontSize="12px">Shipping Information</Text>
                <Text fontWeight={300} fontSize="12px">Return Policy</Text>
                <Text fontWeight={300} fontSize="12px">International Help</Text>
                <Text fontWeight={300} fontSize="12px">Accessibility</Text>
                </Hide>
            </Flex>
            <Flex flexDir="column" rowGap="15px">
                <Text fontWeight={700} fontSize="12px" align={["center","center", "left", "left"]}>COMPANY INFORMATION</Text>
                <Hide below="md"><Text fontWeight={300} fontSize="12px">About Overstock™</Text>
                <Text fontWeight={300} fontSize="12px">Contact Us</Text>
                <Text fontWeight={300} fontSize="12px">Careers</Text>
                <Text fontWeight={300} fontSize="12px">Investor Relations</Text>
                <Text fontWeight={300} fontSize="12px">Sell Your Products</Text>
                <Text fontWeight={300} fontSize="12px">Supply Chain Transparency</Text>
                </Hide>
            </Flex>
            <Flex flexDir="column" rowGap="15px">
                <Text fontWeight={700} fontSize="12px" align={["center","center", "left", "left"]}>MORE WAYS TO SHOP</Text>
                <Hide below="md"><Text fontWeight={300} fontSize="12px">Tips & Ideas</Text>
                <Text fontWeight={300} fontSize="12px">Deals</Text>
                <Text fontWeight={300} fontSize="12px">Clearance</Text>
                <Text fontWeight={300} fontSize="12px">New Arrivals</Text>
                </Hide>
            </Flex>
        </SimpleGrid>

  </Box>
    <Box bgColor="#2f3337" borderTop={"1px solid grey"} pt='20px' pb='20px'>
        <Flex align={["center","center", "left", "left"]} flexDir={["column-reverse", "column-reverse","row","row"]}  color="white" width='80%' m="auto" justifyContent={"space-between"} rowGap='5px'>
            <Box >
                <Text align={["center","center", "left", "left"]} fontWeight={300} fontSize="12px">© Copyright 2022, Overstock.com®, Inc.</Text>
                <Text align={["center","center", "left", "left"]} fontWeight={300} fontSize="12px">799 Coliseum Way Midvale, UT 84047 | 1-800-843-2446</Text>
            </Box>
            <Flex align="center" gap={["5px","5px", "10px", "30px"]}>
            <Hide below="md"><Text fontWeight={300} fontSize="12px">Privacy Policy</Text>
            <Text fontWeight={300} fontSize="12px">Terms & Conditions</Text>
            <Text fontWeight={300} fontSize="12px">*Promotion Terms</Text>
            </Hide>
            <Flex gap="10px"><Text fontWeight={300} fontSize="12px">Ship to:</Text><Image  src={flags} width="26px" height="18px" border="2px solid white"/></Flex>
            </Flex>
        </Flex>

    </Box>
  </>
  )
}

export default Footer