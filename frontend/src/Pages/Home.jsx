import { Box, Button, Hide, Image, Show, SimpleGrid, Text} from '@chakra-ui/react'
import React from 'react'

const Home = () => {
  return ( <>
        

        <Box width="100%" mt="70px">
           <Hide below='md'><Image src="https://ak1.ostkcdn.com/img/mxc/11102022-HP-A1-INTL-V2-1400x550_DSK-INTL.jpg"  />
           <Image src='https://ak1.ostkcdn.com/img/mxc/11102022-HP-A1-INTL-V2-1400x550_DSK-INTL.svg' position="absolute" mt={["-69%", "-34%", "-36%", "-36%"]} />
           </Hide>
           <Show below='md'><Image objectFit={"cover"} src="https://ak1.ostkcdn.com/img/mxc/11102022-HP-A1-INTL-V2-767x800_MBL-INTL.jpg"  />
           <Image width='100%' src='https://ak1.ostkcdn.com/img/mxc/11102022-HP-A1-INTL-V2-767x800_MBL-INTL.svg' position="absolute" mt={["-100%", "-100%", "-36%", "-36%"]} />
           </Show>
        </Box>

 {/* discount images */}
 <Text textAlign={"center"} fontSize='32px' mt="20px" fontWeight={500} >Limited-Time Deals</Text>

<SimpleGrid  width="96%" m='auto'  mt="20px"  columns={[2,3,4,6]} pt="1rem" pl=".5rem" pb="1rem" bgColor={"#f8f8f8"} >

  <Box   >
    {/* <Image src="https://ak1.ostkcdn.com/img/mxc/10312022_HB_INTL-CAN_1.svg?imwidth=3840" alt="" /> */}
    <Image  width="96%"  height='100px' src="https://media.istockphoto.com/photos/persian-rug-carpet-picture-id135093139"/>
      <Text textAlign={"center"} fontSize='md'>Rugs</Text>
    </Box>

  <Box   >
    {/* <Image src="https://ak1.ostkcdn.com/img/mxc/10312022_HB_INTL-CAN_2.svg?imwidth=1080" alt="" /> */}
    <Image  width="96%"  height='100px' src="https://images.furnituredealer.net/img/collections/john_thomas/select_dining-dop-b1.jpg"/>
      <Text textAlign={"center"} fontSize='md'>Dining Room</Text>
  </Box>
  <Box   >
  {/* <Image src="https://ak1.ostkcdn.com/img/mxc/10312022_HB_INTL-CAN_2.svg?imwidth=1080" alt="" /> */}
  <Image  width="96%"  height='100px' src="https://www.memory-improvement-tips.com/images/adjustable-sleep-number-bed.jpg"/>
      <Text textAlign={"center"} fontSize='md'>Bedding</Text>
  </Box>
  <Box   >
  {/* <Image src="https://ak1.ostkcdn.com/img/mxc/10312022_HB_INTL-CAN_2.svg?imwidth=1080" alt="" /> */}
  <Image  width="96%"  height='100px' src="https://hometown.gumlet.io/media/cms/icons/Kitchenware/artificial.jpg?w=300&dpr=1.3"/>
      <Text textAlign={"center"} fontSize='md'>Home decor</Text>
  </Box> 
  <Box   >
    {/* <Image src="https://ak1.ostkcdn.com/img/mxc/10312022_HB_INTL-CAN_2.svg?imwidth=1080" alt="" /> */}
    <Image  width="96%"  height='100px' src="https://ak1.ostkcdn.com/images/products/is/images/direct/47ec2d990aea2dcec4541518a0da6a4d6305d3d4/Modern-Farmhouse-3-Pack-Black-Barn-Pendant-Lighting-Warehouse-Ceiling-Lighting.jpg"/>
      <Text textAlign={"center"} fontSize='md'>Lighting</Text>
  </Box>
  <Box   >
  {/* <Image src="https://ak1.ostkcdn.com/img/mxc/10312022_HB_INTL-CAN_2.svg?imwidth=1080" alt="" /> */}
  <Image  width="96%"  height='100px' src="https://tse1.mm.bing.net/th?id=OIP.BnSOX9TTI7AMooaiTUWsgQHaIP&pid=Api&P=0"/>
      <Text textAlign={"center"} fontSize='md'>Christmas tree</Text>
  </Box>
</SimpleGrid>

    {/* ////////////////////  */}
  
{/* Brand we love */}
<Text textAlign={"center"} fontSize='32px' mt="20px" fontWeight={500}>Brands We Love</Text>
<SimpleGrid  width="96%" m='auto'  mt="20px"  columns={[2,2,3,3]} pt=".5rem" gap='30px'>
      <Box>
      <Image src="https://ak1.ostkcdn.com/img/mxc/110822-DysonLogo.svg?imwidth=1920" alt="" />
      </Box>
      <Box>
      <Image src="https://ak1.ostkcdn.com/img/mxc/110822-KeurigLogo.svg?imwidth=1920" alt="" />

      </Box>
      <Box>
      <Image src="https://ak1.ostkcdn.com/img/mxc/110822-SharkLogo.svg?imwidth=1920" alt="" />
      </Box>
      <Box>
      <Image src="https://ak1.ostkcdn.com/img/mxc/110822-CasperLogo.svg?imwidth=1920" alt="" />
      </Box>
      <Box>
      <Image src="https://ak1.ostkcdn.com/img/mxc/110822-NinjaLogo.svg?imwidth=1920" alt="" />

      </Box>
      <Box>
      <Image src="https://ak1.ostkcdn.com/img/mxc/110822-CuisinartLogo.svg?imwidth=1920" alt="" />
      </Box>
      <Box>
      <Image src="https://ak1.ostkcdn.com/img/mxc/110822-CalphalonLogo.svg?imwidth=1920" alt="" />
      </Box>
      <Box>
      <Image src="https://ak1.ostkcdn.com/img/mxc/110822-HamiltonBeachLogo.svg?imwidth=1920" alt="" />

      </Box>
      <Box>
      <Image src="https://ak1.ostkcdn.com/img/mxc/110822-CasperLogo.svg?imwidth=1920" alt="" />
      
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

<Text textAlign={"center"} fontSize='32px' mt="20px" fontWeight={500}>Fresh Finds In Each Category</Text>

<SimpleGrid  width="90%" m='auto'  mt="20px"  columns={[2,2,3,4]} pt=".5rem" gap='30px' alignContent={"center"}>
      
      <Box >
        <Image  src='https://ak1.ostkcdn.com/img/mxc/11192021-CatSilo-Furniture.png?imwidth=1920'/>
        <Text textAlign={"center"} fontSize='md'>Furniter</Text>
      </Box>
      <Box >
        <Image src='https://ak1.ostkcdn.com/img/mxc/11152021-CatSilo-AreaRugs.png?imwidth=1920'/>
        <Text textAlign={"center"} fontSize='md'>Area Rugs</Text>
      </Box>
      <Box >
        <Image src='https://ak1.ostkcdn.com/img/mxc/11152021-CatSilo-BedBath.png?imwidth=1920'/>
        <Text textAlign={"center"} fontSize='md'>Bedding</Text>
      </Box>
      <Box >
        <Image src='https://ak1.ostkcdn.com/img/mxc/11152021-CatSilo-Decor.png?imwidth=1920'/>
        <Text textAlign={"center"} fontSize='md'>Home Decor</Text>
      </Box>
      <Box >
        <Image src='https://ak1.ostkcdn.com/img/mxc/CatSilo-Window-040721.jpg?imwidth=1920'/>
        <Text textAlign={"center"} fontSize='md'>Window Treatments</Text>
      </Box>
      <Box >
        <Image src='https://ak1.ostkcdn.com/img/mxc/11152021-CatSilo-Kitchen.png?imwidth=1920'/>
        <Text textAlign={"center"} fontSize='md'>Kitchen</Text>
      </Box>
      <Box >
        <Image src='https://ak1.ostkcdn.com/img/mxc/11192021-CatSilo-Outdoor.png?imwidth=1920'/>
        <Text textAlign={"center"} fontSize='md'>Outdoor</Text>
      </Box>
      <Box >
        <Image src='https://ak1.ostkcdn.com/img/mxc/01112021-CatSilo-HomeImp.jpg?imwidth=1920'/>
        <Text textAlign={"center"} fontSize='md'>Home Improvement</Text>
      </Box>
      <Box >
        <Image src='https://ak1.ostkcdn.com/img/mxc/11152021-CatSilo-Storage.png?imwidth=1920'/>
        <Text textAlign={"center"} fontSize='md'>Storage</Text>
      </Box>
      <Box >
        <Image src='https://ak1.ostkcdn.com/img/mxc/01112021-CatSilo-Mattresses.jpg?imwidth=1920'/>
        <Text textAlign={"center"} fontSize='md'>Mattresses</Text>
      </Box>
      <Box >
        <Image src='https://ak1.ostkcdn.com/img/mxc/11152021-CatSilo-Lighting.png?imwidth=1920'/>
        <Text textAlign={"center"}  fontSize='md'>Lighting</Text>
      </Box>
      <Box >
        <Image src='https://ak1.ostkcdn.com/img/mxc/CatSilo-AllDeals-040721.jpg?imwidth=1920'/>
        <Text textAlign={"center"}  fontSize='md'>Shop All Deals</Text>
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

<Text  textAlign={"center"} fontSize='32px' mt="20px" fontWeight={700}>Trending Serches</Text>

<Box mt="20px">
  
<SimpleGrid
bg='gray.50'
columns={["2","2","3","3"]}
spacing='8'
p='10'
textAlign='center'
rounded='lg'
color='black'
>
<Box  p='6' as='b' fontSize={["16px","16px","20px","20px"]} rounded='md' bg='white'>
Mugs
</Box>
<Box  p='6' as='b' fontSize={["16px","16px","20px","20px"]} rounded='md' bg='white'>
Blanckets
</Box>
<Box  p='6' as='b' fontSize={["16px","16px","20px","20px"]} rounded='md' bg='white'>
Cookie Cutters
</Box>
<Box  p='6' as='b' fontSize={["16px","16px","20px","20px"]} rounded='md' bg='white'>
Air Fryers
</Box>
<Box  p='6' as='b' fontSize={["16px","16px","20px","20px"]} rounded='md' bg='white'>
Kitchen Mixers
</Box>
<Box  p='6'as='b' fontSize={["16px","16px","20px","20px"]} rounded='md' bg='white'>
Lamps
</Box>
<Box  p='6' as='b' fontSize={["16px","16px","20px","20px"]} rounded='md' bg='white'>
Towels
</Box>
<Box  p='6'as='b'  fontSize={["16px","16px","20px","20px"]} rounded='md' bg='white'>
Tree Skirts
</Box>
<Box  p='6' as='b'fontSize={["16px","16px","20px","20px"]} rounded='md' bg='white'>
Garland
</Box>
<Box  p='6' as='b'fontSize={["16px","16px","20px","20px"]} rounded='md' bg='white'>
Fall Wreaths
</Box>
<Box  p='6' as='b'fontSize={["16px","16px","20px","20px"]} rounded='md' bg='white'>
Christmas Trees
</Box>
<Box  p='6' as='b'fontSize={["16px","16px","20px","20px"]} rounded='md' bg='white'>
Fireplaces
</Box>
</SimpleGrid>

</Box>

    
      
        </>
  )
}

export default Home;
