import { Box, Button, Flex, Hide, Image, MenuButton, SimpleGrid, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { RiArrowDropDownLine } from 'react-icons/ri';
import { AiFillStar  } from 'react-icons/ai';
import { BiHeartCircle  } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import axios from 'axios';

  



const LivingRoom = () => {
  const [data, setData] = useState(false)
  const getKids = async () => {
    let res = await axios.get(
      `https://homedecoraserver.onrender.com/api/furniture/living`
    );
    setData(res.data.livingRoom);
  };


  useEffect(() => {
    getKids();
  },[]);

 

  return (
   <>
   <Box  width="100%" mt="100px" >
    <Box width="96%" m="auto" textAlign="left" pt="1.5%"  mb="2%">
    { data && <><Text>Home Decor/ {data[0].set} / {data[0].subSet}</Text>
      <Text fontWeight="600" fontSize="36px">{data[0].subSet}</Text></>}
    </Box>
    <Flex gap="2%" width="96%" m="auto" height="auto" mb="140px">
      
          {/* ////////////// Filter By/////////////// */}
          <Hide below="md">
        <Box  position={"sticky"} top={"120px"} width="20%" height="320px">

        <Flex flexDir={"column"} gap="10px" >
         <Button  bgColor="#f5f5f6"><Flex width="100%" justifyContent="space-between" pl=".5rem" pr='.1rem'><Text>Types</Text><Box><RiArrowDropDownLine size="24px" /></Box></Flex></Button>
         <Button  bgColor="#f5f5f6"><Flex width="100%" justifyContent="space-between" pl=".5rem" pr='.1rem'><Text>Price</Text><Box><RiArrowDropDownLine size="24px" /></Box></Flex></Button>
         <Button  bgColor="#f5f5f6"><Flex width="100%" justifyContent="space-between" pl=".5rem" pr='.1rem'><Text>Colors</Text><Box><RiArrowDropDownLine size="24px" /></Box></Flex></Button>
         <Button  bgColor="#f5f5f6"><Flex width="100%" justifyContent="space-between" pl=".5rem" pr='.1rem'><Text>Sizes</Text><Box><RiArrowDropDownLine size="24px" /></Box></Flex></Button>
         <Button  bgColor="#f5f5f6"><Flex width="100%" justifyContent="space-between" pl=".5rem" pr='.1rem'><Text>Shapes</Text><Box><RiArrowDropDownLine size="24px" /></Box></Flex></Button>
         <Button  bgColor="#f5f5f6"><Flex width="100%" justifyContent="space-between" pl=".5rem" pr='.1rem'><Text>Brand</Text><Box><RiArrowDropDownLine size="24px" /></Box></Flex></Button>
         <Hide below="md"><Button  bgColor="#f5f5f6"><Flex width="100%" justifyContent="space-between" pl=".5rem" pr='.1rem'><Text>Customer Ratings</Text><Box><RiArrowDropDownLine size="24px" /></Box></Flex></Button> </Hide>
         <Button  bgColor="#f5f5f6"><Flex width="100%" justifyContent="space-between" pl=".5rem" pr='.1rem'><Text>Types</Text><Box><RiArrowDropDownLine size="24px" /></Box></Flex></Button>
         <Hide below="md"><Button  bgColor="#f5f5f6"><Flex width="100%" justifyContent="space-between" pl=".5rem" pr='.1rem'><Text>Availability</Text><Box><RiArrowDropDownLine size="24px" /></Box></Flex></Button></Hide>
         </Flex>
          </Box>
          </Hide>

      <SimpleGrid columns={[1,2,3,3]} width="80%" m="auto" rowGap={"20px"} >

          {/* //////////////// Product display card ///////////////// */}
          {data && data.map((el)=>{

        return(<Box align="left" boxShadow="rgba(0, 0, 0, 0.16) 0px 1px 4px" width="95%">
        <Link to={`/furniture/living/${el._id}`} ><Image  src={el.images[0]} alt="productImages"></Image></Link>
        <Button p="0" position="absolute" mt={["-69%", "-34%", "-23%", "-23%"]} ml={["58%", "28%", "18.5%", "20%"]} borderRadius="50%" bgColor="hsl(0deg 0% 100% / 80%)" color='hsl(0deg 0% 55%)' _hover={{color:'#bf9850'}} ><BiHeartCircle  size='25px' /></Button>
        <Link to={`/furniture/living/${el._id}`} ><Box p="2%">
        <Text color="#bf9850" fontSize="18px" fontWeight="600">Price ₹ {el.price.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}</Text>
        <Flex align="center" gap="5px"><AiFillStar color="#bf9852"/>MRP<s >₹ {el.originalPrice.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}</s>  </Flex>
        <Text fontSize="14px">{el.heading}</Text>
        </Box></Link>
        </Box>
        )


          })}
        

      </SimpleGrid>

    </Flex>
    
    {/* <Box border="2px solid red" height="300px">

            <Text>Other Content</Text>
            <br></br>
            <br></br>
            <Text>Footer</Text>


    </Box> */}

   </Box>
   </>
  )
}

export default LivingRoom