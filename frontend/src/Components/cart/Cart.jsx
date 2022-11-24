import React, { useState }  from 'react'
import { Box, Button, Flex, Image, Input, SimpleGrid, Text, Toast } from '@chakra-ui/react'


import { useToast } from '@chakra-ui/react'
import axios from 'axios'
import CartDetails from './CartDetails'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import styles from "./CartDetails.module.css";
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Cart = () => {
  const navigate = useNavigate();
  const toast = useToast();
  const [cartProducts, setCartProducts] = useState({});
  const { accessToken } = useSelector(store => store.auth);
  
  useEffect(() => {
    if (accessToken) {
      
      getCartData();
    }
  },[])

  async function getCartData(){
    try {
      let res = await axios.get(`${process.env.REACT_APP_URL}/api/cart`, {
            headers: {
                authorization:accessToken
            }
      });
      console.log(res.data);
      setCartProducts(res.data);
    }
    catch (err) {
      console.log(err.message);
    }
  }


  async function deletCartItem(id) {
    try {
      await axios.delete(`${process.env.REACT_APP_URL}/api/cart/${id}`, {
            headers: {
                authorization:accessToken
            }
      });
      getCartData();
    }
    catch (err) {
      console.log(err.message);
    }
  }

  
  return (
    <>{
      accessToken && (cartProducts.cart?.item.length > 0 ? <Box mt={"7rem"} /*border="1px solid black"*/ mb="1%">
        {/* <Image width="100%" height="68px" src={adv} alt="image"  /> */}
        <Box  /*border="1px solid green"*/ mt="1%" width="100%">
          <Flex justifyContent={"space-between"} flexDir={["column", "column", "column", "row"]}>
            {/* Cart box */}

       
            <Box width={["100%", "100%", "100%", "70%"]} >
              {
                cartProducts.cart?.item.map((item) => {
              
                  const { _id } = item;
                  return <CartDetails key={_id} cartItem={item} deletCartItem={deletCartItem} />

                })
              }
          
              {/* <Card />
          <Card />
          <Card /> */}


            </Box>

             
            {/* Amount description box */}

            <Flex flexDir={"column"} gap="12px" width={["100%", "100%", "100%", "30%"]} position="sticky" top="120px" pl="1.5em" pt="1em" pr="1.5em" borderRadius={"10px"} mr="20px" columnGap="10px" height="500px" boxShadow="rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em" >
              <Text color="#bf9850">Having A Coupon?</Text>
              <Flex gap="10px"><Input p="1.3em" focusBorderColor='none' placeholder='Enter Coupon code here'></Input> <Button p="1rem" border={"1px solid #bf9850"} bg="none" color="#bf9850">APPLY</Button></Flex>
              <Text fontSize={"20px"} fontWeight="600" mb="15px">Order Details</Text>
              <Text>Total Products : {cartProducts?.total}</Text>
              <Flex justifyContent={"space-between"} fontSize={"14px"} >
                <Text fontWeight={"400"}>Bag total </Text><Text fontWeight={"600"}>₹ {cartProducts.cart?.subTotal.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}</Text></Flex>
              
              <Flex justifyContent={"space-between"} fontSize={"14px"} ><Text fontWeight={"400"}>Convenience Fee : </Text ><Text fontWeight={"400"} color="#176c93" fontSize='14px'>₹ 0</Text></Flex>
              <Flex justifyContent={"space-between"} fontSize={"14px"} ><Text fontWeight={"400"}>Delivery Fee </Text><Text fontWeight={"600"}>₹ 0</Text></Flex>
              <Flex justifyContent={"space-between"} fontSize={"14px"} ><Text fontSize={"20px"} fontWeight={"600"}>Total Amount</Text><Text fontSize={"20px"} fontWeight={"600"}>₹ {(cartProducts.cart?.subTotal ).toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}.00</Text></Flex>
          
              <Button width="100%" color="white" bgColor="#d5a249" fontWeight="600" fontSize="1rem" mt="15px" p="1.5em" _hover={{ bgColor: "teal" }} onClick={()=>navigate("/address")}>PROCEED TO SHIPPING</Button>
          
            </Flex>

          </Flex>
        </Box>
 
      </Box> :
        <Box className={styles.cart_empty}>
          <Text fontWeight={"500"}>Don't Keep Your Cart Without HomeDecor !!</Text>
          <Link to="/furniture" className={styles.link_to_sign}>Do Shopping</Link>
        </Box>
        )
    }
      {
        !accessToken  && <Box className={styles.cart_empty}>
          
          <Text fontWeight={"500"}>Don't Keep Your Home Without HomeDecor !!</Text>
          <Link to="/signin" className={styles.link_to_sign}>Sign-In</Link>
         </Box>
    }
    
    
    </>
  )
};

export default Cart