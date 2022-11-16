import { Box, Button, Flex, Image, Select, SimpleGrid, Text, Toast, useToast } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import styles from "./bedroom.module.css";
import { Link } from 'react-router-dom';

const MattressesSingle = () => {

  const [sizeOf, setSize] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
   const {id}=useParams();
   const toast = useToast()
  
  const [data, setData] = useState({});

   const getData = async () => {
   
     let res = await axios.get(`https://homedecoraserver.onrender.com/api/furniture/mattresses/${id}`);
     console.log(res.data);
     setData(res.data);
    
   };
 
 
   useEffect(() => {

     getData();
       
   },[id]);


  return (<>
    <Box mt="8%" width="100%" align="left">
        

        {/* ////////////////// Single product display card ///////////// */}
        {data.mattresses && <> 
        <Text width="94%" m="auto" pt="20px" pb='20px' fontSize="14px" >
         <Link to="/">Home Decor</Link>  / <Link to="/furniture">{data.mattresses.set}</Link> / <Link to="/mattresses">{data.mattresses.subSet}</Link></Text>
        <Flex width="94%" m="auto" gap="26px">
          

          <Box w={[200,250,350]} h={[200,250,350]} className={styles.slider}>
            
            <Image className={styles.imageSlider}   src={data.mattresses.images[image]} objectFit="fill" />
            
          </Box>

        <Box>
            <Text fontSize="18px" >{data.mattresses.heading}</Text>
            <Flex gap = "1rem" m="1rem 0">

              <Text  color="#bf9850"  fontSize="18px" fontWeight="600"> ₹ {price.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",") || data.mattresses.price.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}</Text>
              <Text gap="5px">MRP ₹ {data.mattresses.originalPrice.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")} </Text>
              
            </Flex>
            {
              data.ColorAndSize[0]?.size && <Flex mt="1rem">
              <Text fontWeight={500}>Size : {sizeOf === "" ? "Choose Size" : sizeOf}</Text>
            </Flex>
            }
            
            <Flex gap="1rem" mt="1rem">

              {
                data.ColorAndSize[0]?.size && data.ColorAndSize?.map((sizeOfProduct, index) => {
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
              data.mattresses.images.map((image, index) => {
                return <Image cursor="pointer"  w={[20,30,50]} h={[20,30,50]} key={index} src={image} alt="bedroom"  onClick={()=>setImage(index)}/>
              })
            }
            </Flex>
            <Button onClick={() =>
        toast({
          position: 'top-center',
          title: 'Added to cart.',
          description: "We've added the selected item to you cart.",
          status: 'success',
          duration: 2000,
          isClosable: true,
        })
      }  width="200px" bg="#bf9850" color={"white"}>Add to Cart</Button>

          </Box>
          

        </Flex>
        <Box m="1rem 2rem">
          <hr/>
          <Text fontWeight={"500"}>DETAILS: </Text>
          {data.mattresses.details}
        </Box>

        {/* features */}
        <Box m="1rem 2rem">
          <hr/>
          <Text fontWeight={"500"}>FEATURES: </Text>
          {
            data.mattresses.features?.map((feature, index) => {
              return <Text key={index}>{index+1}. {feature}</Text>
           }) 
         }
        </Box>
        
        {/* dimensions */}
        <Box m="1rem 2rem">
          <hr/>
          <Text fontWeight={"500"}>DIMENSIONS: </Text>
          {
            data.mattresses.dimensions?.map((dimension, index) => {
              return <Text key={index}>{index+1}. {dimension}</Text>
           }) 
         }
        </Box>
        
        
        </>}
        
            

    </Box>
    </>)
}

export default MattressesSingle;