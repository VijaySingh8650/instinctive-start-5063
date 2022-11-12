import { Box, Button, Flex, Image, Select, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'
import { AiFillStar  } from 'react-icons/ai';




import { MdEmail  } from 'react-icons/md';
import { BsFacebook  } from 'react-icons/bs';
import { AiFillTwitterCircle  } from 'react-icons/ai';
import { BsPinterest  } from 'react-icons/bs';


let data=[
    {
      image:"https://ak1.ostkcdn.com/images/products/is/images/direct/466343107cab3e7c879f53099991f03c082bcca1/Modern-Arched-Mirror-Full-length-Floor-Mirror-with-Standing.jpg?imwidth=480&impolicy=medium",
      title:"Modern Arched Mirror Full-Length Floor Mirror with Stand",
      price:"12250.54",
      rating:"3.5"
    }]


const SingleProduct = () => {
  return (
    <Box mt="8%" width="100%" align="left" pl="2%">
        <Text p="1%" fontSize="14px" >Home Decor / Rugs / Area Rugs / Transitional Rugs</Text>

        {/* ////////////////// Single product display card ///////////// */}

        <Flex p="1%"  gap="26px">
        <Image width="34%" src={data[0].image} />
        <Box>
            <Text  fontSize="18px" >{data[0].title}</Text>
            <Flex mt="4%" align="center" gap="5px"><AiFillStar color="#bf9852"/> <AiFillStar color="#bf9852"/><AiFillStar color="#bf9852"/> {data[0].rating} </Flex>
            <Text mt="4%" color="#c7202c" fontSize="18px" fontWeight="600">Sale Starts at INR{data[0].price}</Text>
            <Flex mt="14%"><Text mr='10px'>Size :</Text>
            <Text  fontWeight={600}>Choose Size</Text></Flex>
            <SimpleGrid columns={[3,3,4,5]} gap='10px' >
                <Button color={"#626669"} fontSize='12px' fontWeight={400} variant={"outline"} _hover={{border:"1px solid black"}} > 2'2" X 9'</Button>
                <Button color={"#626669"} fontSize='12px' fontWeight={400} variant={"outline"} _hover={{border:"1px solid black"}}>2'2" X 11'</Button>
                <Button color={"#626669"} fontSize='12px' fontWeight={400} variant={"outline"} _hover={{border:"1px solid black"}}>2'2" X 4'</Button>
                <Button color={"#626669"} fontSize='12px' fontWeight={400} variant={"outline"} _hover={{border:"1px solid black"}}>2'2" X 5'</Button>
                <Button color={"#626669"} fontSize='12px' fontWeight={400} variant={"outline"} _hover={{border:"1px solid black"}}>2'2" X 7'</Button>
                <Button color={"#626669"} fontSize='12px' fontWeight={400} variant={"outline"} _hover={{border:"1px solid black"}}>3' X 5'</Button>
                <Button color={"#626669"} fontSize='12px' fontWeight={400} variant={"outline"} _hover={{border:"1px solid black"}}>3' X 3'</Button>
                <Button color={"#626669"} fontSize='12px' fontWeight={400} variant={"outline"} _hover={{border:"1px solid black"}}>4' X 4'</Button>
                <Button color={"#626669"} fontSize='12px' fontWeight={400} variant={"outline"} _hover={{border:"1px solid black"}}>4' X 6'</Button>
                <Button color={"#626669"} fontSize='12px' fontWeight={400} variant={"outline"} _hover={{border:"1px solid black"}}>5'1" X 5'1"</Button>
                <Button color={"#626669"} fontSize='12px' fontWeight={400} variant={"outline"} _hover={{border:"1px solid black"}}>5'1" X 7'6"</Button>
                <Button color={"#626669"} fontSize='12px' fontWeight={400} variant={"outline"} _hover={{border:"1px solid black"}}>6'7" X 6'7"</Button>
                <Button color={"#626669"} fontSize='12px' fontWeight={400} variant={"outline"} _hover={{border:"1px solid black"}} >6'7" X 9'</Button>
                <Button color={"#626669"} fontSize='12px' fontWeight={400} variant={"outline"} _hover={{border:"1px solid black"}}>8' X 8'</Button>
                <Button color={"#626669"} fontSize='12px' fontWeight={400} variant={"outline"} _hover={{border:"1px solid black"}}>8' X 10'</Button>
                <Button color={"#626669"} fontSize='12px' fontWeight={400} variant={"outline"} _hover={{border:"1px solid black"}}>9' X 12'</Button>
                <Button color={"#626669"} fontSize='12px' fontWeight={400} variant={"outline"} _hover={{border:"1px solid black"}}>9' X 9'</Button>
                <Button color={"#626669"} fontSize='12px' fontWeight={400} variant={"outline"} _hover={{border:"1px solid black"}}>10' X 14'</Button>
                <Button color={"#626669"} fontSize='12px' fontWeight={400} variant={"outline"} _hover={{border:"1px solid black"}}>11' X 15'</Button>
                <Button color={"#626669"} fontSize='12px' fontWeight={400} variant={"outline"} _hover={{border:"1px solid black"}}>2'2" X 13'</Button>
                <Button color={"#626669"} fontSize='12px' fontWeight={400} variant={"outline"} _hover={{border:"1px solid black"}}>2'2" X 15'</Button>

            </SimpleGrid>
        </Box>

        </Flex>
            {/* /////////////////// add to cart tags///////////////// */}
            <Flex p="1%">
                    <Flex align={"center"} gap="10px">
                    <Text fontStyle='italic' fontSize={"14px"} >Share This Product: </Text>
                    <MdEmail size='30px' />
                    <BsFacebook size='30px' />
                    <AiFillTwitterCircle size='32px' />
                    <BsPinterest size='30px' />
                    </Flex>
                    
                    {/* /////// Quantity ////////// */}
                    <Flex ml="160px">
                    <Select width="200px">
                        <option>Quantity: 1</option>
                        <option>Quantity: 2</option>
                        <option>Quantity: 3</option>
                        <option>Quantity: 4</option>
                        <option>Quantity: 5</option>
                        <option>Quantity: 5</option>
                        <option>Quantity: 7</option>
                        <option>Quantity: 8</option>
                        <option>Quantity: 9</option>
                        <option>Quantity: 10</option>
                        <option>Quantity: 11</option>
                        <option>Quantity: 12</option>
                    </Select>
                    <Button bg="teal" color={"white"}>Add to Cart</Button>
                    </Flex>
            </Flex>




    </Box>
  )
}

export default SingleProduct