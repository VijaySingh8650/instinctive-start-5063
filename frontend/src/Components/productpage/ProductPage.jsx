import { Box, Button, Flex, Hide, Image, MenuButton, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'
import { RiArrowDropDownLine } from 'react-icons/ri';
import { AiFillStar  } from 'react-icons/ai';
import { BiHeartCircle  } from 'react-icons/bi';
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
          },
          {
            image:"https://ak1.ostkcdn.com/images/products/is/images/direct/466343107cab3e7c879f53099991f03c082bcca1/Modern-Arched-Mirror-Full-length-Floor-Mirror-with-Standing.jpg?imwidth=480&impolicy=medium",
            title:"Modern Arched Mirror Full-Length Floor Mirror with Stand",
            price:"12250.54",
            rating:"3.5"
          },
          {
            image:"https://ak1.ostkcdn.com/images/products/is/images/direct/06e14596ad69dd33017f0343e2cdaf0c366770cb/Rathburn-Metal-Venetian-Wall-Mounted-Mirror.jpg?imwidth=480&impolicy=medium",
            title:"Modern Arched Mirror Full-Length Floor Mirror with Stand",
            price:"12250.54",
            rating:"3.5"
          },
          {
            image:"https://ak1.ostkcdn.com/images/products/is/images/direct/466343107cab3e7c879f53099991f03c082bcca1/Modern-Arched-Mirror-Full-length-Floor-Mirror-with-Standing.jpg?imwidth=480&impolicy=medium",
            title:"Modern Arched Mirror Full-Length Floor Mirror with Stand",
            price:"12250.54",
            rating:"3.5"
          },
          {
            image:"https://ak1.ostkcdn.com/images/products/is/images/direct/06e14596ad69dd33017f0343e2cdaf0c366770cb/Rathburn-Metal-Venetian-Wall-Mounted-Mirror.jpg?imwidth=480&impolicy=medium",
            title:"Modern Arched Mirror Full-Length Floor Mirror with Stand",
            price:"12250.54",
            rating:"3.5"
          },
          {
            image:"https://ak1.ostkcdn.com/images/products/is/images/direct/466343107cab3e7c879f53099991f03c082bcca1/Modern-Arched-Mirror-Full-length-Floor-Mirror-with-Standing.jpg?imwidth=480&impolicy=medium",
            title:"Modern Arched Mirror Full-Length Floor Mirror with Stand",
            price:"12250.54",
            rating:"3.5"
          },
          {
            image:"https://ak1.ostkcdn.com/images/products/is/images/direct/466343107cab3e7c879f53099991f03c082bcca1/Modern-Arched-Mirror-Full-length-Floor-Mirror-with-Standing.jpg?imwidth=480&impolicy=medium",
            title:"Modern Arched Mirror Full-Length Floor Mirror with Stand",
            price:"12250.54",
            rating:"3.5"
          },
          {
            image:"https://ak1.ostkcdn.com/images/products/is/images/direct/466343107cab3e7c879f53099991f03c082bcca1/Modern-Arched-Mirror-Full-length-Floor-Mirror-with-Standing.jpg?imwidth=480&impolicy=medium",
            title:"Modern Arched Mirror Full-Length Floor Mirror with Stand",
            price:"12250.54",
            rating:"3.5"
          },
          {
            image:"https://ak1.ostkcdn.com/images/products/is/images/direct/466343107cab3e7c879f53099991f03c082bcca1/Modern-Arched-Mirror-Full-length-Floor-Mirror-with-Standing.jpg?imwidth=480&impolicy=medium",
            title:"Modern Arched Mirror Full-Length Floor Mirror with Stand",
            price:"12250.54",
            rating:"3.5"
          },
          {
            image:"https://ak1.ostkcdn.com/images/products/is/images/direct/466343107cab3e7c879f53099991f03c082bcca1/Modern-Arched-Mirror-Full-length-Floor-Mirror-with-Standing.jpg?imwidth=480&impolicy=medium",
            title:"Modern Arched Mirror Full-Length Floor Mirror with Stand",
            price:"12250.54",
            rating:"3.5"
          },
          {
            image:"https://ak1.ostkcdn.com/images/products/is/images/direct/466343107cab3e7c879f53099991f03c082bcca1/Modern-Arched-Mirror-Full-length-Floor-Mirror-with-Standing.jpg?imwidth=480&impolicy=medium",
            title:"Modern Arched Mirror Full-Length Floor Mirror with Stand",
            price:"12250.54",
            rating:"3.5"
          },
          {
            image:"https://ak1.ostkcdn.com/images/products/is/images/direct/466343107cab3e7c879f53099991f03c082bcca1/Modern-Arched-Mirror-Full-length-Floor-Mirror-with-Standing.jpg?imwidth=480&impolicy=medium",
            title:"Modern Arched Mirror Full-Length Floor Mirror with Stand",
            price:"12250.54",
            rating:"3.5"
          },






]
  



const ProductPage = () => {
  return (
   <>
   <Box  width="100%" mt="100px" >
    <Box textAlign="left" pt="1.5%" pl="2%" mb="2%">
      <Text>Home Decor/Decorative Accessories/Mirrors</Text>
      <Text fontWeight="600" fontSize="36px">Floor Mirror</Text>
    </Box>
    <Flex gap="2%" width='98%' m="auto" height="auto" mb="140px">
      
          {/* ////////////// Filter By/////////////// */}
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
         <Button  bgColor="#f5f5f6"><Flex width="100%" justifyContent="space-between" pl=".5rem" pr='.1rem'><Text>Availability</Text><Box><RiArrowDropDownLine size="24px" /></Box></Flex></Button>
         </Flex>
          </Box>
         

      <SimpleGrid columns={[1,2,3,3]} width="80%" pl="1%" pr="1%" rowGap={"1.5%"} >

          {/* //////////////// Product display card ///////////////// */}
          {data && data.map((el)=>{

        return(<Box align="left" boxShadow="rgba(0, 0, 0, 0.16) 0px 1px 4px" width="95%">
        <Image  src={el.image} alt="productImages"></Image>
        <Button p="0" position="absolute" mt={["-69%", "-34%", "-23%", "-23%"]} ml={["58%", "28%", "18.5%", "20%"]} borderRadius="50%" bgColor="hsl(0deg 0% 100% / 80%)" color='hsl(0deg 0% 55%)' _hover={{color:'#c7202c'}} ><BiHeartCircle  size='25px' /></Button>
        <Box p="2%">
        <Text color="#c7202c" fontSize="18px" fontWeight="600">Sale Starts at INR {el.price}</Text>
        <Flex align="center" gap="5px"><AiFillStar color="#bf9852"/> <AiFillStar color="#bf9852"/><AiFillStar color="#bf9852"/> {el.rating} </Flex>
        <Text fontSize="14px">{el.title}</Text>
        </Box>
        </Box>
        )


          })}
        

      </SimpleGrid>

    </Flex>
    
    <Box border="2px solid red" height="300px">

            <Text>Other Content</Text>
            <br></br>
            <br></br>
            <Text>Footer</Text>


    </Box>

   </Box>
   </>
  )
}

export default ProductPage