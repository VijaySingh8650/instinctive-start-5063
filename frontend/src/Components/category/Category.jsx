import { Box, Button, Hide, Image, Show, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Category = () => {

  return (<>
    <Box  width="100%" mt="120px">
        <Box width="95%" m="auto">
        <Text fontSize="36px" fontWeight={700}>Furniture</Text>
        <Text textAlign={"center"} fontSize="24px" fontWeight={500} mt="10px">Popular Furniture Categories</Text>
        </Box>
        <SimpleGrid columns={[1,2,3,4]} width="95%" m="auto" gap="20px" mt="30px">
            <Link to="/living" _hover={{color:"#bf9852" }} ><Box bgColor="#f5f6f7">
                <Image width='100%' objectFit="cover" src="https://ak1.ostkcdn.com/img/mxc/10312022_HOLIDAY2022_Furniture_PopCat_1.jpg?imwidth=400"/>
                <Text textAlign="center" pt="10px" pb="10px">Living Room Furniture</Text>
            </Box></Link>
            <Link to="/living" _hover={{color:"#bf9852" }} ><Box bgColor="#f5f6f7">
                <Image width='100%' objectFit="cover" src="https://ak1.ostkcdn.com/img/mxc/10312022_HOLIDAY2022_Furniture_PopCat_2.jpg?imwidth=400"/>
                <Text textAlign="center" pt="10px" pb="10px">Dining Room Furniture</Text>
            </Box></Link>
            <Link to="/bedroom" _hover={{color:"#bf9852" }} ><Box bgColor="#f5f6f7">
                <Image width='100%' objectFit="cover" src="https://ak1.ostkcdn.com/img/mxc/10312022_HOLIDAY2022_Furniture_PopCat_3.jpg?imwidth=400"/>
                <Text textAlign="center" pt="10px" pb="10px">Bedroom Furniture</Text>
            </Box></Link>
            <Link to="/mattresses" _hover={{color:"#bf9852" }} ><Box bgColor="#f5f6f7">
                <Image width='100%' objectFit="cover" src="https://ak1.ostkcdn.com/img/mxc/09292022_furniture_PopCat_5.jpg?imwidth=400"/>
                <Text textAlign="center" pt="10px" pb="10px">Mattresses</Text>
            </Box></Link>
            <Link to="/kitchen" _hover={{color:"#bf9852" }} ><Box bgColor="#f5f6f7">
                <Image width='100%' objectFit="cover" src="https://ak1.ostkcdn.com/img/mxc/09292022_furniture_PopCat_8.jpg?imwidth=400"/>
                <Text textAlign="center" pt="10px" pb="10px">Kitchen Furniture</Text>
            </Box></Link>
            <Link to="/" _hover={{color:"#bf9852" }} ><Box bgColor="#f5f6f7">
                <Image width='100%' objectFit="cover" src="https://ak1.ostkcdn.com/img/mxc/10312022_HOLIDAY2022_Furniture_PopCat_4.jpg?imwidth=400"/>
                <Text textAlign="center" pt="10px" pb="10px">Small Space Furniture</Text>
            </Box></Link>
            <Link to="/" _hover={{color:"#bf9852" }} ><Box bgColor="#f5f6f7">
                <Image width='100%' objectFit="cover" src="https://ak1.ostkcdn.com/img/mxc/10312022_HOLIDAY2022_Furniture_PopCat_8.jpg?imwidth=400"/>
                <Text textAlign="center" pt="10px" pb="10px">Bathroom Furniture</Text>
            </Box></Link>
            <Link to="/kid" _hover={{color:"#bf9852" }} ><Box bgColor="#f5f6f7">
                <Image width='100%' objectFit="cover" src="https://ak1.ostkcdn.com/img/mxc/10312022_HOLIDAY2022_Furniture_PopCat_missing_1.jpg?imwidth=400"/>
                <Text textAlign="center" pt="10px" pb="10px">Kids & Toddler Room Furniture</Text>
            </Box></Link>


        </SimpleGrid>

        {/* ////////////////////// below part /////////// */}

        <Box width="95%" m="auto" mt="50px">
            <SimpleGrid columns={[1,1,2,2]} gap="20px">
                <Image width='100%' objectFit="cover"  src="https://ak1.ostkcdn.com/img/mxc/10312022_HOLIDAY2022_Furniture_688x444_BG01.jpg?imwidth=1024"/>
                <Box >
                    <Text fontSize='20px'fontWeight={"600"} lineHeight="29px" width="95%">How to Keep Your House Warm Without Turning up the Heat</Text>
                    <Text fontSize='14px' width="95%" mt="30px">As the temperature falls, your home becomes a cozy haven from the cold. Before you reach for the thermostat, find out how to keep your house warm in the fall and winter using interior design. With a few simple swaps, you can maximize heat without running up the electricity bill.</Text>
                    <Button variant="outline" mt="30px" p='1.5rem'>Read More</Button>
                </Box>
            </SimpleGrid>
            <SimpleGrid columns={[1,1,2,2]} gap="20px" mt="30px" >
                <Show below='md'><Image width='100%' objectFit="cover"  src="https://ak1.ostkcdn.com/img/mxc/10312022_HOLIDAY2022_Furniture_688x444_BG02.jpg?imwidth=1024"/></Show>
                <Box >
                    <Text fontSize='20px'fontWeight={"600"} lineHeight="29px" width="95%">How to Combat Seasonal Affective Disorder With Design</Text>
                    <Text fontSize='14px' width="95%" mt="30px">As the temperature falls, your home becomes a cozy haven from the cold. Before you reach for the thermostat, find out how to keep your house warm in the fall and winter using interior design. With a few simple swaps, you can maximize heat without running up the electricity bill.</Text>
                    <Button variant="outline" mt="30px" p='1.5rem'>Read More</Button>
                </Box>
                <Hide below='md'><Image width='100%' objectFit="cover"  src="https://ak1.ostkcdn.com/img/mxc/10312022_HOLIDAY2022_Furniture_688x444_BG02.jpg?imwidth=1024"/></Hide>
            </SimpleGrid>


        </Box>



    </Box>
  
  
  </>
  )
}

export default Category