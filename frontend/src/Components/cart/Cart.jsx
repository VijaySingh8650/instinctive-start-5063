import { Box, Button, Flex, Image, Select, Text } from '@chakra-ui/react';
import React from 'react'
import empty from "./images/empty.png"
 import { BsShieldLockFill } from 'react-icons/bs';
   import { AiOutlinePlus } from 'react-icons/ai';
   import {  AiFillStar } from 'react-icons/ai';

   let data=[
    {
      image:"https://ak1.ostkcdn.com/images/products/is/images/direct/466343107cab3e7c879f53099991f03c082bcca1/Modern-Arched-Mirror-Full-length-Floor-Mirror-with-Standing.jpg?imwidth=480&impolicy=medium",
      title:"Modern Arched Mirror Full-Length Floor Mirror with Stand",
      price:"12250.54",
      rating:"3.5"
    },
    {
      image:"https://ak1.ostkcdn.com/images/products/is/images/direct/e88bf95837fc6bdf1671b9a05e1fdb22511a4f7a/Aluminum-Alloy-Thin-Frame-Full-Length-Floor-Mirror-Hanging-or-Leaning.jpg?imwidth=480&impolicy=medium",
      title:"Modern Arched Mirror Full-Length Floor Mirror with Stand",
      price:"12250.54",
      rating:"3.5"
    },
    {
      image:"https://ak1.ostkcdn.com/images/products/is/images/direct/06e14596ad69dd33017f0343e2cdaf0c366770cb/Rathburn-Metal-Venetian-Wall-Mounted-Mirror.jpg?imwidth=480&impolicy=medium",
      title:"Modern Arched Mirror Full-Length Floor Mirror with Stand",
      price:"12250.54",
      rating:"3.5"
    }]

console.log(data)

const Cart = () => {


  return (<>
    <Box mt="10%">
    { data? <>
        <Box  width="96%" m="auto" >
        <Text fontWeight="400" fontSize="20px">Shopping Cart</Text>
        <Flex flexDir={  ["column","column","row"]}  mt="2%" justifyContent="space-between"  >
          {/* /////////Box 1/////////////// */}
            <Box width={["100%","100%","72%"]} align="center" bgColor="#f8f8f8"> 
            <Image  src={empty}></Image>
            </Box>
            {/* ///////////// box 2////////// */}
            <Box width={["100%","100%","29%","25%"]} boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px" p="1%">
              <Flex width="95%" m="auto" align={"center"} fontWeight="600" fontSize="18px"><AiOutlinePlus /><Text ml="20px">Add a Promo Code</Text></Flex>
              <Box mt="20px"  p="1%" >
              <Flex justifyContent="space-between" fontSize="14px" fontWeight="500" borderTop="1px solid grey" pt=".5rem" ><Text>Items:</Text><Text>INR 0.00</Text></Flex>
              <Flex justifyContent="space-between" fontSize="14px"><Text>Sale Savings:</Text><Text color={"#c7202c"}>- INR 0.00</Text></Flex>
              <Flex justifyContent="space-between" fontSize="14px" fontWeight="500"><Text>Subtotal:</Text><Text >INR 0.00</Text></Flex>
              <Flex justifyContent="space-between" fontSize="20px" fontWeight="600" mt="20px" borderTop="1px solid grey"><Text>Your Total:</Text><Text color={"#c7202c"}>INR 0.00</Text></Flex>
              <Button bgColor="black" mt="10px" width="100%"><BsShieldLockFill color='white' /><Text ml="10px" color={"white"}>Check Out</Text></Button>
            </Box>
            </Box>
               
        </Flex>

        </Box>
</> : <>
<Box  width="96%" m="auto" >
        <Text fontWeight="400" fontSize="20px">Shopping Cart</Text>
        <Flex flexDir={  ["column","column","row"]}  mt="2%" justifyContent="space-between"  >
          {/* /////////Box 1/////////////// */}
            
            <Box width={["100%","100%","72%"]} align="center" bgColor="#f8f8f8" > 
            {data.map((el)=>{
                  return <><Flex p="1%"  gap="26px" pl="3%" borderBottom="1px solid grey" mb="10px"  mt="10px">
                  <Image width={["35%","35%" ,"24%"]} objectFit="cover" src={el.image} />
                  <Box align="left">
                  <Text  fontSize="18px" >{el.title}</Text>
                  <Flex mt="1%" align="center" gap="5px"><AiFillStar color="#bf9852"/> <AiFillStar color="#bf9852"/><AiFillStar color="#bf9852"/> {el.rating} </Flex>
                  <Text mt="1%" color="#c7202c" fontSize="18px" fontWeight="600">Sale Starts at INR{el.price}</Text>
                  <Flex mt="3%"><Text mr='10px'>Size :</Text>
                  <Text  fontWeight={600}>Choose Size</Text></Flex>
                    {/* /////// Quantity ////////// */}
                   
                          <Select mt="1%" width="150px" bgColor="white" borderRadius="none">
                              <option>Quantity: 1</option>
                              <option>Quantity: 2</option>
                              <option>Quantity: 3</option>
                              <option>Quantity: 4</option>
                              <option>Quantity: 5</option>
                          </Select>
                          <Button mt="4%" ml="3px" variant="link" fontSize="14px">Remove</Button>
                          
              </Box>
      
              </Flex></>
              
})
 }
            
            {/* ///////////////////cart tags///////////////// */}

            </Box>
            {/* ///////////// box 2////////// */}
            <Box width={["100%","100%","29%","25%"]} boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px" p="1%" position={"sticky"} top={"120px"} height="260px">
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