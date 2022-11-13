import { Box, Button, Flex, Image, Select, SimpleGrid, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { AiFillStar  } from 'react-icons/ai';
import { MdEmail  } from 'react-icons/md';
import { BsFacebook  } from 'react-icons/bs';
import { AiFillTwitterCircle  } from 'react-icons/ai';
import { BsPinterest  } from 'react-icons/bs';
import delivery from "./images/delivery.png"
import { useParams } from 'react-router-dom';
import axios from 'axios';

// let data=[
//     {
//       image:"https://ak1.ostkcdn.com/images/products/is/images/direct/466343107cab3e7c879f53099991f03c082bcca1/Modern-Arched-Mirror-Full-length-Floor-Mirror-with-Standing.jpg?imwidth=480&impolicy=medium",
//       title:"Modern Arched Mirror Full-Length Floor Mirror with Stand",
//       price:"12250.54",
//       rating:"3.5"
//     }]


const SingleProduct = () => {

  const [size, setSize]=useState("");
   const {id}=useParams();

   console.log(id)
   const [data, setData] = useState([]);

   const getKids = async () => {
     let res = await axios.get(
       `https://homedecoraserver.onrender.com/api/furniture/bedroom/${id}`
     );
     setData(res.data.bedroom);
   };
 
 
   useEffect(() => {
     getKids();
   },[id]);

   
  return (<>
    <Box mt="8%" width="100%" align="left">
        <Text width="94%" m="auto" pt="20px" pb='20px' fontSize="14px" >Home Decor / Rugs / Area Rugs / Transitional Rugs</Text>

        {/* ////////////////// Single product display card ///////////// */}

        <Flex width="94%" m="auto"  gap="26px">
        <Image width="34%" height="400px" src={data.images[0]} objectFit="fill" />
        <Box>
            <Text  fontSize="18px" >{data.heading}</Text>
            <Flex mt="4%" align="center" gap="5px"><AiFillStar color="#bf9852"/> <AiFillStar color="#bf9852"/><AiFillStar color="#bf9852"/>MRP <s>{data.originalPrice}</s> </Flex>
            <Text mt="4%" color="#c7202c" fontSize="18px" fontWeight="600">Sale Starts at INR {data.price}</Text>
            <Flex mt="14%"><Text mr='10px'>Size :</Text>
            <Text  fontWeight={600}>{size==="" ? "Choose Size" : size}</Text></Flex>
            <SimpleGrid columns={[3,3,4,5]} gap='10px' mt='20px' >
                <Button onClick={()=>setSize("Small")} color={"#626669"} fontSize='12px' fontWeight={400} variant={"outline"} _hover={{border:"1px solid black"}} >2'2" X 9'</Button>
                <Button onClick={()=>setSize("Medium")} color={"#626669"} fontSize='12px' fontWeight={400} variant={"outline"} _hover={{border:"1px solid black"}}>2'2" X 11'</Button>
                <Button  onClick={()=>setSize("Large")}color={"#626669"} fontSize='12px' fontWeight={400} variant={"outline"} _hover={{border:"1px solid black"}}>2'2" X 4'</Button>
                <Button  onClick={()=>setSize("Xtra-Large")} color={"#626669"} fontSize='12px' fontWeight={400} variant={"outline"} _hover={{border:"1px solid black"}}>2'2" X 5'</Button>
                <Button onClick={()=>setSize("Small")}color={"#626669"} fontSize='12px' fontWeight={400} variant={"outline"} _hover={{border:"1px solid black"}}>2'2" X 7'</Button>
                <Button color={"#626669"} fontSize='12px' fontWeight={400} variant={"outline"} _hover={{border:"1px solid black"}}>3' X 5'</Button>
                <Button color={"#626669"} fontSize='12px' fontWeight={400} variant={"outline"} _hover={{border:"1px solid black"}}>3' X 3'</Button>
                <Button color={"#626669"} fontSize='12px' fontWeight={400} variant={"outline"} _hover={{border:"1px solid black"}}>4' X 4'</Button>
                <Button color={"#626669"} fontSize='12px' fontWeight={400} variant={"outline"} _hover={{border:"1px solid black"}}>4' X 6'</Button>
        </SimpleGrid>
        <Flex mt="10%" gap="20px">
                    <Select width="200px">
                        <option>Quantity: 1</option>
                        <option>Quantity: 2</option>
                        <option>Quantity: 3</option>
                        <option>Quantity: 4</option>
                        <option>Quantity: 5</option>
                        <option>Quantity: 6</option>
                        <option>Quantity: 7</option>
                        <option>Quantity: 8</option>
                        <option>Quantity: 9</option>
                        <option>Quantity: 10</option>
                        <option>Quantity: 11</option>
                        <option>Quantity: 12</option>
                    </Select>
                    <Button width="200px" bg="teal" color={"white"}>Add to Cart</Button>
                    </Flex>

        </Box>

        </Flex>
            {/* /////////////////// add to cart tags///////////////// */}
            <Flex width="94%" m="auto" mt="50px" >
                    <Flex align={"center"} gap="10px">
                    <Text fontStyle='italic' fontSize={"14px"} >Share This Product: </Text>
                    <MdEmail size='30px' />
                    <BsFacebook size='30px' />
                    <AiFillTwitterCircle size='32px' />
                    <BsPinterest size='30px' />
                    </Flex>
                    
                    {/* /////// Quantity ////////// */}
                    
            </Flex>

    <Flex mt="50px" mb="40px" >
      <Image src={delivery} ml="30px" />
    </Flex>


    </Box>
    </>)
}

export default SingleProduct