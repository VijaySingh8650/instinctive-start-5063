import React  from 'react'
import { Box, Button, Flex, Image, Input, SimpleGrid, Text, Toast } from '@chakra-ui/react'


import { useToast } from '@chakra-ui/react'
import axios from 'axios'
import CartDetails from './CartDetails'

// import StripeCheckout from 'react-stripe-checkout';


// const getCartItems=()=>{

// return axios.get(`https://asap-backend-server-deploy.herokuapp.com/carts`)


// }


const Cart = () => {

  // let auth = useSelector(store => store.auth);
  // let [id, email, password] = auth.token.split(":"); 
  // let [zartItem,setCartItem]=useState([])
  // let [cartSum,setCartSum]=useState(0);

  const cartItem=[{
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
  }
]



  const toast = useToast()
  return (
     <>
    <Box mt={"7rem"} /*border="1px solid black"*/  mb="1%">
      {/* <Image width="100%" height="68px" src={adv} alt="image"  /> */}
      <Box  /*border="1px solid green"*/ mt="1%" width="100%">
        <Flex justifyContent={"space-between"} flexDir={["column","column","column","row"]}>
          {/* Cart box */}

       
          <Box width={["100%","100%","100%","70%"]} /*border="1px solid red"*/ minH="550px" >

          <CartDetails cartItem={cartItem} />
          {/* <Card />
          <Card />
          <Card /> */}


          </Box>

             
          {/* Amount description box */}

          <Flex flexDir={"column"} gap="12px" width={["100%","100%","100%","30%"]} position="sticky" top="120px" pl="1.5em" pt="1em" pr="1.5em" borderRadius={"10px"} mr="20px" columnGap="10px" height="500px" boxShadow="rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em" >
          <Text color="#bf9850">Having A Coupon?</Text>
          <Flex gap="10px"><Input p="1.3em" focusBorderColor='none' placeholder='Enter Coupon code here'></Input> <Button p="1rem"  border={"1px solid #bf9850"} bg="none" color="#bf9850">APPLY</Button></Flex>
          <Text fontSize={"20px"} fontWeight="600" mb="15px">Order Details</Text>
          <Flex justifyContent={"space-between"}  fontSize={"14px"} ><Text fontWeight={"400"}>Bag total </Text><Text fontWeight={"600"}>₹1000.00/-</Text></Flex>
          <Flex justifyContent={"space-between"}  fontSize={"14px"} ><Text fontWeight={"400"}>Bag discount </Text><Text fontWeight={"600"}>- ₹560/-</Text></Flex>
          <Flex justifyContent={"space-between"}  fontSize={"14px"} ><Text fontWeight={"400"}>Convenience Fee : </Text ><Text fontWeight={"400"} color="#176c93" fontSize='14px'>What's this?</Text></Flex>
          <Flex justifyContent={"space-between"}  fontSize={"14px"} ><Text fontWeight={"400"}>Delivery Fee </Text><Text fontWeight={"600"}>₹99/-</Text></Flex>
          <Flex justifyContent={"space-between"}  fontSize={"14px"} ><Text fontSize={"20px"} fontWeight={"600"}>Total Amount</Text><Text fontSize={"20px"} fontWeight={"600"}>₹{59860+99}.00</Text></Flex>
          
          <Button width="100%" color="white" bgColor="#d5a249" fontWeight="600" fontSize="1rem" mt="15px" p="1.5em" _hover={{bgColor:"teal"}}  >PROCEED TO SHIPPING</Button>
          
          </Flex>

        </Flex>
      </Box>
 
    </Box>
    
    </>
  )
};

export default Cart