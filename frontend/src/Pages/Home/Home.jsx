import { Heading } from '@chakra-ui/react';
import { Box, Button, Hide, Image, Show, SimpleGrid, Text} from '@chakra-ui/react'
import React, { useEffect } from 'react'
import styles from "./Home.module.css";

const Home = () => {
  useEffect(() => {
    window.document.title = 'Home - HomeDecor';
  }, []);
  return ( <>
        

        <Box width="100%" mt="70px">
           <Hide below='md'><Image src="https://ak1.ostkcdn.com/img/mxc/11102022-HP-A1-INTL-V2-1400x550_DSK-INTL.jpg"  />
           <Image src='https://ak1.ostkcdn.com/img/mxc/11102022-HP-A1-INTL-V2-1400x550_DSK-INTL.svg' position="absolute" mt={["-69%", "-34%", "-36%", "-36%"]} />
           </Hide>
           <Show below='md'><Image objectFit={"cover"} src="https://ak1.ostkcdn.com/img/mxc/11102022-HP-A1-INTL-V2-767x800_MBL-INTL.jpg"  />
           <Image width='100%' src='https://ak1.ostkcdn.com/img/mxc/11102022-HP-A1-INTL-V2-767x800_MBL-INTL.svg' position="absolute" mt={["-100%", "-100%", "-36%", "-36%"]} />
           </Show>
    </Box>
    
     <Box w="100%" align="center" m="2rem 0">

         <Heading fontWeight="500">Limited-Time Deals</Heading>

      </Box>

 {/* discount images */}
    <Box align="center" display="flex" flexWrap={"wrap"} gap="2rem" padding="1rem" justifyContent={"center"} >
        <Box>
          <Box className={styles.overFlow}>

            <Image className={styles.overFlow_image} src="https://media.istockphoto.com/photos/persian-rug-carpet-picture-id135093139" />
            <Text className={styles.off}><b>10</b>% off*</Text>

          </Box>
          <Box align="center">

            <Text fontSize='md' fontWeight={"500"}>Select Rugs</Text>

          </Box>
      </Box>
        <Box>
          <Box className={styles.overFlow}>

            <Image className={styles.overFlow_image} src="https://images.furnituredealer.net/img/collections/john_thomas/select_dining-dop-b1.jpg" />
            <Text className={styles.off}><b>20</b>% off*</Text>

          </Box>
          <Box align="center">

            <Text fontSize='md' fontWeight={"500"}>Select Dining Room</Text>

          </Box>
      </Box>
        <Box>
          <Box className={styles.overFlow}>

            <Image className={styles.overFlow_image} src="https://www.memory-improvement-tips.com/images/adjustable-sleep-number-bed.jpg" />
            <Text className={styles.off}><b>20</b>% off*</Text>

          </Box>
          <Box align="center">

            <Text fontSize='md' fontWeight={"500"}>Select Bedding</Text>

          </Box>
      </Box>
        <Box>
          <Box className={styles.overFlow}>

            <Image className={styles.overFlow_image} src="https://hometown.gumlet.io/media/cms/icons/Kitchenware/artificial.jpg?w=300&dpr=1.3" />
            <Text className={styles.off}><b>30</b>% off*</Text>

          </Box>
          <Box align="center">

            <Text fontSize='md' fontWeight={"500"}>Select Home Decor</Text>

          </Box>
      </Box>
        <Box>
          <Box className={styles.overFlow}>

            <Image className={styles.overFlow_image} src="https://ak1.ostkcdn.com/images/products/is/images/direct/47ec2d990aea2dcec4541518a0da6a4d6305d3d4/Modern-Farmhouse-3-Pack-Black-Barn-Pendant-Lighting-Warehouse-Ceiling-Lighting.jpg" />
            <Text className={styles.off}><b>20</b>% off*</Text>

          </Box>
          <Box align="center">

            <Text fontSize='md' fontWeight={"500"}>Select Lighting</Text>

          </Box>
      </Box>
        <Box>
          <Box className={styles.overFlow}>

            <Image className={styles.overFlow_image} src="https://tse1.mm.bing.net/th?id=OIP.BnSOX9TTI7AMooaiTUWsgQHaIP&pid=Api&P=0" />
            <Text className={styles.off}><b>15</b>% off*</Text>

          </Box>
          <Box align="center">

            <Text fontSize='md' fontWeight={"500"}>Select Christmas Tree</Text>

          </Box>
      </Box>
      
      
      

    </Box>
  
{/* Brand we love */}
<Box w="100%" align="center" m="2rem 0">

         <Heading fontWeight="500">Brands We Love</Heading>

      </Box>

<SimpleGrid  width="96%" m='auto'  mt="20px"  columns={[2,2,3,3]} pt=".5rem" gap='30px'>
      <Box>
      <Image src="https://ak1.ostkcdn.com/img/mxc/110822-DysonLogo.svg?imwidth=1920" alt="" />
      </Box>
      <Box m="2rem">
        <Image src="https://ak1.ostkcdn.com/img/mxc/110822-KeurigLogo.svg?imwidth=1920" alt="" w="12rem"/>

      </Box>
      <Box m ="2rem">
      <Image src="https://ak1.ostkcdn.com/img/mxc/110822-SharkLogo.svg?imwidth=1920" alt="" w="12rem"/>
      </Box>
      <Box>
      <Image src="https://ak1.ostkcdn.com/img/mxc/110822-CasperLogo.svg?imwidth=1920" alt="" />
      </Box>
      <Box m="2rem">
      <Image src="https://ak1.ostkcdn.com/img/mxc/110822-NinjaLogo.svg?imwidth=1920" alt="" w="12rem"/>

      </Box>
      <Box m="2rem">
      <Image src="https://ak1.ostkcdn.com/img/mxc/110822-CuisinartLogo.svg?imwidth=1920" alt="" w="12rem"/>
      </Box>
      <Box>
      <Image src="https://ak1.ostkcdn.com/img/mxc/110822-CalphalonLogo.svg?imwidth=1920" alt="" />
      </Box>
      <Box m="2rem">
      <Image src="https://ak1.ostkcdn.com/img/mxc/110822-HamiltonBeachLogo.svg?imwidth=1920" alt="" w="12rem"/>

      </Box>
      <Box m="2rem">
      <Image src="https://ak1.ostkcdn.com/img/mxc/110822-CasperLogo.svg?imwidth=1920" alt="" w="12rem"/>
      
      </Box>

    </SimpleGrid>


    <Box width="100%" mt="30px">
           <Hide below='md'><Image src="https://ak1.ostkcdn.com/img/mxc/10242022-SB-Bedding-1400x550_Promo1-INTL.jpg?imwidth=2048"  />
           <Image src='https://ak1.ostkcdn.com/img/mxc/11102022-SB-Bedding-1400x550_Promo1-INTLv3.svg?imwidth=2048' position="absolute" mt={["-69%", "-34%", "-42%", "-42%"]} />
           </Hide>
           <Show below='md'><Image objectFit={"cover"} src="https://ak1.ostkcdn.com/img/mxc/10242022-SB-Bedding-767x800_Promo1-INTL.jpg?imwidth=1200"  />
           <Image width='100%' src='https://ak1.ostkcdn.com/img/mxc/10242022-SB-Bedding-767x800_Promo1-INTL.svg?imwidth=1920' position="absolute" mt={["-105%", "-105%", "-36%", "-36%"]} />
           </Show>
        </Box>

{/* Fresh Finds In Each Category */}

   
    <Box w="100%" align="center" m="2rem 0">

         <Heading fontWeight="500">Fresh Finds In Each Category</Heading>

      </Box>


<SimpleGrid  width="90%" m='auto'  mt="20px"  columns={[2,2,3,4]} pt=".5rem" gap='30px' alignContent={"center"}>
      
      <Box align="center">
        <Image  w="10rem" h="10rem" src='https://ak1.ostkcdn.com/img/mxc/11192021-CatSilo-Furniture.png?imwidth=1920'/>
        <Text textAlign={"center"} fontSize='md' fontWeight={"600"}>Furniture</Text>
      </Box>
      <Box align="center">
        <Image w="10rem" h="10rem" src='https://ak1.ostkcdn.com/img/mxc/11152021-CatSilo-AreaRugs.png?imwidth=1920'/>
        <Text textAlign={"center"} fontSize='md' fontWeight={"600"}>Area Rugs</Text>
      </Box>
      <Box align="center">
        <Image w="10rem" h="10rem" src='https://ak1.ostkcdn.com/img/mxc/11152021-CatSilo-BedBath.png?imwidth=1920'/>
        <Text textAlign={"center"} fontSize='md' fontWeight={"600"}>Bedding</Text>
      </Box>
      <Box align="center">
        <Image w="10rem" h="10rem" src='https://ak1.ostkcdn.com/img/mxc/11152021-CatSilo-Decor.png?imwidth=1920'/>
        <Text textAlign={"center"} fontSize='md' fontWeight={"600"}>Home Decor</Text>
      </Box>
      <Box align="center">
        <Image w="10rem" h="10rem" src='https://ak1.ostkcdn.com/img/mxc/CatSilo-Window-040721.jpg?imwidth=1920'/>
        <Text textAlign={"center"} fontSize='md' fontWeight={"600"}>Window Treatments</Text>
      </Box>
      <Box align="center">
        <Image w="10rem" h="10rem" src='https://ak1.ostkcdn.com/img/mxc/11152021-CatSilo-Kitchen.png?imwidth=1920'/>
        <Text textAlign={"center"} fontSize='md' fontWeight={"600"}>Kitchen</Text>
      </Box>
      <Box align="center">
        <Image w="10rem" h="10rem"  src='https://ak1.ostkcdn.com/img/mxc/11192021-CatSilo-Outdoor.png?imwidth=1920'/>
        <Text textAlign={"center"} fontSize='md' fontWeight={"600"}>Outdoor</Text>
      </Box>
      <Box align="center">
        <Image w="10rem" h="10rem" src='https://ak1.ostkcdn.com/img/mxc/01112021-CatSilo-HomeImp.jpg?imwidth=1920'/>
        <Text textAlign={"center"} fontSize='md' fontWeight={"600"}>Home Improvement</Text>
      </Box>
      <Box align="center">
        <Image  w="10rem" h="10rem" src='https://ak1.ostkcdn.com/img/mxc/11152021-CatSilo-Storage.png?imwidth=1920'/>
        <Text textAlign={"center"} fontSize='md' fontWeight={"600"}>Storage</Text>
      </Box>
      <Box align="center">
        <Image w="10rem" h="10rem" src='https://ak1.ostkcdn.com/img/mxc/01112021-CatSilo-Mattresses.jpg?imwidth=1920'/>
        <Text  textAlign={"center"} fontSize='md' fontWeight={"600"}>Mattresses</Text>
      </Box>
      <Box align="center">
        <Image w="10rem" h="10rem" src='https://ak1.ostkcdn.com/img/mxc/11152021-CatSilo-Lighting.png?imwidth=1920'/>
        <Text textAlign={"center"}  fontSize='md' fontWeight={"600"}>Lighting</Text>
      </Box>
      <Box align="center">
        <Image w="10rem" h="10rem" src='https://ak1.ostkcdn.com/img/mxc/CatSilo-AllDeals-040721.jpg?imwidth=1920'/>
        <Text textAlign={"center"}  fontSize='md' fontWeight={"600"}>Shop All Deals</Text>
      </Box>
    </SimpleGrid>

    <Box width="100%" mt="30px">
           <Hide below='md'><Image src="https://ak1.ostkcdn.com/img/mxc/10242022-SB-LivingRoomFurniture-1400x550_Promo2.jpg?imwidth=2048"  />
           <Image src='https://ak1.ostkcdn.com/img/mxc/11102022-SB-LivingRoomFurniture-1400x550_Promo2-INTLv2.svg?imwidth=2048' position="absolute" mt={["-69%", "-34%", "-42%", "-42%"]} />
           </Hide>
           <Show below='md'><Image objectFit={"cover"} src="https://ak1.ostkcdn.com/img/mxc/10242022-SB-LivingRoomFurniture-767x800_Promo2.jpg?imwidth=1920"  />
           <Image width='100%' src='https://ak1.ostkcdn.com/img/mxc/10242022-SB-LivingRoomFurniture-767x800_Promo2.svg?imwidth=1920' position="absolute" mt={["-105%", "-105%", "-36%", "-36%"]} />
           </Show>
        </Box>

{/* Trending Searches */}

   
     
    <Box w="100%" align="center" m="2rem 0">

         <Heading fontWeight="500">Trending Searches</Heading>

      </Box>

<Box mt="20px">
  
<SimpleGrid
bg='#f9fafb'
columns={["2","2","3","3"]}
spacing='8'
p='10'
textAlign='center'
rounded='lg'
color='black'
>
<Box  p='6' as='b' fontSize={["16px","16px","20px","20px"]} rounded='md' bg='white' border={"1px solid rgba(27, 31, 35, 0.15)"}>
Mugs
</Box>
<Box  p='6' as='b' fontSize={["16px","16px","20px","20px"]} rounded='md' bg='white' border={"1px solid rgba(27, 31, 35, 0.15)"}>
Blanckets
</Box>
<Box  p='6' as='b' fontSize={["16px","16px","20px","20px"]} rounded='md' bg='white' border={"1px solid rgba(27, 31, 35, 0.15)"}>
Cookie Cutters
</Box>
<Box  p='6' as='b' fontSize={["16px","16px","20px","20px"]} rounded='md' bg='white' border={"1px solid rgba(27, 31, 35, 0.15)"}>
Air Fryers
</Box>
<Box  p='6' as='b' fontSize={["16px","16px","20px","20px"]} rounded='md' bg='white' border={"1px solid rgba(27, 31, 35, 0.15)"}>
Kitchen Mixers
</Box>
<Box  p='6'as='b' fontSize={["16px","16px","20px","20px"]} rounded='md' bg='white' border={"1px solid rgba(27, 31, 35, 0.15)"}>
Lamps
</Box>
<Box  p='6' as='b' fontSize={["16px","16px","20px","20px"]} rounded='md' bg='white' border={"1px solid rgba(27, 31, 35, 0.15)"}>
Towels
</Box>
<Box  p='6'as='b'  fontSize={["16px","16px","20px","20px"]} rounded='md' bg='white' border={"1px solid rgba(27, 31, 35, 0.15)"}>
Tree Skirts
</Box>
<Box  p='6' as='b'fontSize={["16px","16px","20px","20px"]} rounded='md' bg='white' border={"1px solid rgba(27, 31, 35, 0.15)"}>
Garland
</Box>
<Box  p='6' as='b'fontSize={["16px","16px","20px","20px"]} rounded='md' bg='white' border={"1px solid rgba(27, 31, 35, 0.15)"}>
Fall Wreaths
</Box>
<Box  p='6' as='b'fontSize={["16px","16px","20px","20px"]} rounded='md' bg='white' border={"1px solid rgba(27, 31, 35, 0.15)"}>
Christmas Trees
</Box>
<Box  p='6' as='b'fontSize={["16px","16px","20px","20px"]} rounded='md' bg='white' border={"1px solid rgba(27, 31, 35, 0.15)"}>
Fireplaces
</Box>
</SimpleGrid>

</Box>

    
      
        </>
  )
}

export default Home;
