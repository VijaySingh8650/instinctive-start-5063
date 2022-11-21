import { Box, Button, Flex, Image, Select,  Text,  useToast } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import styles from "./bedroom.module.css";
import { Link } from 'react-router-dom';
import { addProductsTocart } from '../../Store/Cart/cart.action';
import { useDispatch, useSelector } from 'react-redux';


const BedroomSingle = () => {
  const dispatch = useDispatch();
  const [sizeOf, setSize] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
   const {id}=useParams();
  const toast = useToast();
  const { accessToken } = useSelector(store => store.auth);
  
  const [data, setData] = useState({});

   const getData = async () => {
   
     let res = await axios.get(`https://homedecoraserver.onrender.com/api/furniture/bedroom/${id}`);
     console.log(res.data);
     setData(res.data);
    
   };
 
 
   useEffect(() => {

     getData();
       
   },[id]);

  
  const addProduct = () => {
    toast({
          position: 'top',
          title: 'Log-In',
          description: "Get HomeDecor To Your Home",
          status: 'error',
          duration: 1500,
          isClosable: true,
        })
    
  }
  
  const productTocart = () => {
   const productId = id;
    const size = sizeOf;
    console.log(accessToken, productId, size, price, quantity);
    dispatch(addProductsTocart(accessToken,productId,size, quantity, price))
    toast({
          position: 'top',
          title: 'Item Added',
          description: "Lets buy it!!",
          status: 'success',
          duration: 1500,
          isClosable: true,
        })
  }


  return (<>
    <Box mt="8%" width="100%" align="left">
        

        {/* ////////////////// Single product display card ///////////// */}
        {data.bedroom && <> 
        <Text width="94%" m="auto" pt="20px" pb='20px' fontSize="14px" >
         <Link to="/">Home Decor</Link>  / <Link to="/furniture">{data.bedroom.set}</Link> / <Link to="/bedroom">{data.bedroom.subSet}</Link></Text>
        <Flex width="94%" m="auto" gap="26px">
          

          <Box w={[200,250,350]} h={[200,250,350]} className={styles.slider}>
            
            <Image className={styles.imageSlider}   src={data.bedroom.images[image]} objectFit="fill" />
            
          </Box>

        <Box>
            <Text fontSize="18px" >{data.bedroom.heading}</Text>
            <Flex gap = "1rem" m="1rem 0">

              <Text color="#bf9850" fontSize="18px" fontWeight="600"> ₹ {price.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",") || data.bedroom.price.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}</Text>
              {!price && setPrice(data.bedroom.price)}
              <Text gap="5px">MRP ₹ {data.bedroom.originalPrice.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")} </Text>
              
            </Flex>
            {
              data.ColorAndSize[0].size && <Flex mt="1rem">
                <Text fontWeight={500}>Size : {sizeOf || data.ColorAndSize[0].size}</Text>
                {!sizeOf && setSize(data.ColorAndSize[0].size)}
            </Flex>
            }
            
            <Flex gap="1rem" mt="1rem">

              {
                data.ColorAndSize[0].size && data.ColorAndSize?.map((sizeOfProduct, index) => {
                  const { price, size } = sizeOfProduct;
                    return <Button variant="outline" key={index} onClick={() => {
                      setSize(size);
                      setPrice(price);
                      console.log(price);
                    }}>{size}</Button>
                  })

                }
            </Flex>
            <Flex m="1rem 0" gap="1rem" alignItems={"center"}>
                   <Flex>
                    
                      <Text fontWeight={500}>Quantity: {quantity === "" ? "Select Quantity" : quantity}</Text>
                
                   </Flex>
                    <Select width="4rem" onChange={(e)=>setQuantity(e.target.value)}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </Select>
                    
            </Flex>
            <Flex m="1rem 0" gap="1rem">

              {
              data.bedroom.images.map((image, index) => {
                return <Image cursor="pointer"  w={[20,30,50]} h={[20,30,50]} key={index} src={image} alt="bedroom"  onClick={()=>setImage(index)}/>
              })
            }
            </Flex>
            <Button onClick={() => 
              !accessToken ? addProduct() : productTocart()
            }
              width="200px" bg="#bf9850" color={"white"}>Add to Cart</Button>

          </Box>
          

        </Flex>

        <Box m="1rem 2rem">
        <hr/>
          <Text fontWeight={"500"}>DETAILS: </Text>
          {data.bedroom.details}
        </Box>

        {/* features */}
        <Box m="1rem 2rem">
        <hr/>
          <Text fontWeight={"500"}>FEATURES: </Text>
          {
            data.bedroom.features?.map((feature, index) => {
              return <Text key={index}>{index+1}. {feature}</Text>
           }) 
         }
        </Box>

        {/* dimensions */}
        <Box m="1rem 2rem">
        <hr/>
          <Text fontWeight={"500"}>DIMENSIONS: </Text>
          {
            data.bedroom.dimensions?.map((dimension, index) => {
              return <Text key={index}>{index+1}. {dimension}</Text>
           }) 
         }
        </Box>
        
        
        </>}
        
            

    </Box>
    </>)
}

export default BedroomSingle