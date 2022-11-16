import { Box, Button, Flex, Image, Input, Select, Text } from '@chakra-ui/react'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { AiFillDelete } from 'react-icons/ai';
import styles from "./CartDetails.module.css";



const CartDetails = ({cartItem}) => {

  





  return (<>
   {cartItem && cartItem.map((item)=>{

     return (
       <Box className={styles.box} m="0  1rem 1rem 1rem" boxShadow="" borderRadius={"1rem"} p="1rem">
      <Flex justifyContent="space-between" gap="1rem">
   
      <Image h={[100, 150, 200]}   src={item.image} alt="cartImage"/>
      <Box  width="70%">
        <Text>{item.title}</Text>
       
       
       
        <Flex m="1rem 0" alignItems="center" gap="2rem">
          <Flex gap="1rem" alignItems={"center"}>
            
            <Text fontWeight="600">Size:</Text>
            <Select focusBorderColor='none'>
              <option>s</option>
              <option>m</option>
              <option>l</option>
              <option>xl</option>
            </Select>
          </Flex>
        <Flex gap="1rem" alignItems={"center"}>
          
          <Text fontWeight="600">Qty:</Text>
          <Select focusBorderColor='none'>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Select>
        </Flex>
        
        
        
        </Flex>
        
      </Box>
      
       
      
        
     

    </Flex>
     <Box className={styles.delete}>
   
             <Button variant={"outline"} color="#bf9850" gap=".5rem" ><AiFillDelete pr="1rem" />Delete</Button>
             
      </Box>

   </Box>




)

   })}
   
   </>
  )
}

export default CartDetails