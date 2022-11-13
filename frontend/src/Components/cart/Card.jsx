import { Box, Button, Flex, Image, Input, Select, Text } from '@chakra-ui/react'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { AiFillDelete } from 'react-icons/ai';




const Card = ({cartItem}) => {

  

console.log("CartItem:",cartItem)




  return (<>
   {cartItem && cartItem.map((item)=>{

return (<Box margin="auto"  width="98%" m="auto" mb="10px" height='200px'  boxShadow="rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgb(209, 213, 219) 0px 0px 0px 1px inset" borderRadius={"10px"} >
    <Flex justifyContent="space-between">
   
      <Image height='198px' p={"1em"} borderRadius="20px"  src={item.image} alt="cartImage"/>
      <Box  width="70%" height='198px' p={"1em"}>
        <Flex fontSize={"14px"}><Text fontWeight="600" >Title :</Text><Text ml="30px">{item.title}</Text></Flex>
       
        <Flex mt="10px"  fontSize={"14px"}><Text fontWeight="600">Rating :</Text><Text ml="18px" width="400px">{item.rating}</Text></Flex>
       
        <Flex mt="10px" alignItems="center" fontSize={"14px"}>
          <Text fontWeight="600">Size :</Text>
        <Select focusBorderColor='none' width="70px" ml="30px">
          <option>s</option>
          <option>m</option>
          <option>l</option>
          <option>xl</option>
        </Select>
        {/* <Box>|</Box> */}
        <Text fontWeight="600" ml="20px">Qty :</Text>
        <Select focusBorderColor='none' width="70px" ml="20px" >
        <option>1</option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </Select>
        
        
        
        </Flex>
      </Box>
      <Box height='198px' width="20%" p={"1em"}>
        <Flex><Box width="5px" bgColor={"#176c93"}></Box><Flex bgColor="#e1ecf1" width="auto" pl="5px" pr="5px" fontSize={"12px"}><Text fontWeight={"600"}>Price : </Text><Text >₹ {item.price}/-</Text></Flex></Flex>
      
        <Box mt="71px">
        {/* <Button key={item._id} variant={"outline"} color="#176c93" onClick={()=>deleteSingleItem({productsId:item.productsId._id})} ><AiFillDelete   /> <Text ml="10px" color="#176c93">Delete</Text></Button> */}
        <Button  variant={"outline"} color="#176c93"  ><AiFillDelete pr="10px" />Delete</Button>
        </Box>
      </Box>

    </Flex>

   </Box>




)

   })}
   
   </>
  )
}

export default Card