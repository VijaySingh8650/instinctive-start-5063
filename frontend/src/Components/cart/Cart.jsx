import { Box, Button, Flex, Image, Text } from '@chakra-ui/react';
import React from 'react'
import empty from "./images/empty.png"
 import { BsShieldLockFill } from 'react-icons/bs';
   import { AiOutlinePlus } from 'react-icons/ai';


const data=[];
console.log(data)

const Cart = () => {


  return (<>
    <Box mt="10%">
    { data===[] ? <>
        <Box border="1px solid red" width="96%" m="auto" >
        <Text fontWeight="400" fontSize="20px">Shopping Cart</Text>
        <Flex flexDir={  ["column","column","row"]}  mt="2%" gap="20px"  border="1px solid green" >
          {/* /////////Box 1/////////////// */}
            <Box width={["100%","100%","70%"]} align="center" bgColor="#f8f8f8"> 
            <Image  src={empty}></Image>
            </Box>
            {/* ///////////// box 2////////// */}
            <Box width={["100%","100%","29%","25%"]} boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px" p="1%">
              <Flex width="95%" m="auto" align={"center"} fontWeight="600" fontSize="18px"><AiOutlinePlus /><Text ml="20px">Add a Promo Code</Text></Flex>
              <Box mt="20px"  p="1%" >
              <Flex justifyContent="space-between" fontSize="14px" fontWeight="500" borderTop="1px solid grey" pt=".5rem" ><Text>Items:</Text><Text>INR 7,571.05</Text></Flex>
              <Flex justifyContent="space-between" fontSize="14px"><Text>Sale Savings:</Text><Text color={"#c7202c"}>- INR 1,808.03</Text></Flex>
              <Flex justifyContent="space-between" fontSize="14px" fontWeight="500"><Text>Subtotal:</Text><Text >INR 5,763.03</Text></Flex>
              <Flex justifyContent="space-between" fontSize="20px" fontWeight="600" mt="20px" borderTop="1px solid grey"><Text>Your Total:</Text><Text color={"#c7202c"}>INR 5,763.03</Text></Flex>
              <Button bgColor="black" mt="10px" width="100%"><BsShieldLockFill color='white' /><Text ml="10px" color={"white"}>Check Out</Text></Button>
            </Box>
            </Box>
               
        </Flex>

        </Box>
</> : <>
<Box border="1px solid red" width="96%" m="auto" >
        <Text fontWeight="400" fontSize="20px">Shopping Cart</Text>
        <Flex flexDir={  ["column","column","row"]}  mt="2%" gap="20px"  border="1px solid green" >
          {/* /////////Box 1/////////////// */}
            <Box width={["100%","100%","70%"]} align="center" bgColor="#f8f8f8"> 
                
            </Box>
            {/* ///////////// box 2////////// */}
            <Box width={["100%","100%","29%","25%"]} boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px" p="1%">
              <Flex width="95%" m="auto" align={"center"} fontWeight="600" fontSize="18px"><AiOutlinePlus /><Text ml="20px">Add a Promo Code</Text></Flex>
              <Box mt="20px"  p="1%" >
              <Flex justifyContent="space-between" fontSize="14px" fontWeight="500" borderTop="1px solid grey" pt=".5rem" ><Text>Items:</Text><Text>INR 7,571.05</Text></Flex>
              <Flex justifyContent="space-between" fontSize="14px"><Text>Sale Savings:</Text><Text color={"#c7202c"}>- INR 1,808.03</Text></Flex>
              <Flex justifyContent="space-between" fontSize="14px" fontWeight="500"><Text>Subtotal:</Text><Text >INR 5,763.03</Text></Flex>
              <Flex justifyContent="space-between" fontSize="20px" fontWeight="600" mt="20px" borderTop="1px solid grey"><Text>Your Total:</Text><Text color={"#c7202c"}>INR 5,763.03</Text></Flex>
              <Button bgColor="black" mt="10px" width="100%"><BsShieldLockFill color='white' /><Text ml="10px" color={"white"}>Check Out</Text></Button>
            </Box>
            </Box>
               
        </Flex>

        </Box>


</> }




    </Box>
  </>
  )
}

export default Cart