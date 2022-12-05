
import { Box, Button, Checkbox, Flex, Hide, Image, MenuButton, SimpleGrid, Stack, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { RiArrowDropDownLine } from 'react-icons/ri';
import { AiFillStar  } from 'react-icons/ai';
import { BiHeartCircle  } from 'react-icons/bi';
import { Link, useSearchParams } from 'react-router-dom';
import axios from 'axios';

  



const LivingRoom = () => {
  const [data, setData] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const initialPage = Number(searchParams.get("page")) || 1;
  const [page, setPage] = useState(initialPage);
  const [totalPage, setTotalPage] = useState("");
  const [showPrice, setShowPrice] = useState(false);
  const [maxPrice, setShowMaxPrice] = useState(0);
  const [maxCheck1, setMaxCheck1] = useState(false);
  const [maxCheck2, setMaxCheck2] = useState(false);
  
  const [minPrice, setShowMinPrice] = useState(0);
  const [minCheck1, setMinCheck1] = useState(false);
  const [minCheck2, setMinCheck2] = useState(false);

  const getKids = async () => {
    let res = await axios.get(
      `https://homedecoraserver.onrender.com/api/furniture/living?limit=6&page=${page}`
    );
    setData(res.data.livingRoom);
    setTotalPage(res.data.totalPages);
  };

  const getKidsSort = async (max,min) => {
    let res = await axios.get(
      `https://homedecoraserver.onrender.com/api/furniture/living?limit=6&page=${page}`, {params:{
        max,min
      }}
    );
    setData(res.data.livingRoom);
    setTotalPage(res.data.totalPages);
  };


  useEffect(() => {
    getKids();
  },[page]);

  useEffect(() => {
    
    if (minPrice && maxPrice) {
      let max = maxPrice;
      let min = minPrice;
      getKidsSort(max, min);
      
    }
    else if (!minPrice && maxPrice) {
      let max = maxPrice;
      let min = undefined;
      getKidsSort(max, min);
      
    }
    else if (minPrice && !maxPrice) {
      let min = minPrice;
      let max = undefined;
      getKidsSort(max, min);
      
    } else {
      getKids();
    }
  },[minPrice, maxPrice,page])
  

  const changeMaxPrice = (e) => {
    const { value, checked } = e.target;
    let checkValue = checked ? +value : 0;
    if (checkValue === 30000) {
      
        setMaxCheck2(!maxCheck2);
        setMaxCheck1(false);
        setShowMaxPrice(checkValue);

       
      } else if (checkValue === 20000) {
        setMaxCheck1(!maxCheck1);
        setMaxCheck2(false);
        setShowMaxPrice(checkValue);

        
    } else {
        setMaxCheck1(false);
        setMaxCheck2(false);
        setShowMaxPrice(0);
      }
    
  }

    const changeMinPrice = (e) => {
    const { value, checked } = e.target;
    let checkValue = checked ? +value : 0;
    if (checkValue === 8000) {
      
        setMinCheck2(!minCheck2);
        setMinCheck1(false);
        setShowMinPrice(checkValue);

        
      } else if (checkValue === 4000) {
        setMinCheck1(!minCheck1);
        setMinCheck2(false);
        setShowMinPrice(checkValue);

        
    } else {
        setMinCheck1(false);
        setMinCheck2(false);
        setShowMinPrice(0);
      }
    
  }

  useEffect(() => {
    setSearchParams({
      page,
      limit:6
    })
  },[page])
 

  return (
   <>
   <Box  width="100%" mt="100px" >
    <Box width="96%" m="auto" textAlign="left" pt="1.5%"  mb="2%">
      { data && <><Text><Link to="/">Home Decor </Link>/ <Link to="/furniture">{data[0].set} </Link>/ <Link to="/living">{data[0].subSet} </Link></Text>
      </>}
      
    </Box>
    <Flex gap="2%" width="96%" m="auto" height="auto">
      
          {/* ////////////// Filter By/////////////// */}
          
        <Box  position={"sticky"} top={"120px"} width="25%" height="230px">

        <Flex flexDir={"column"} gap="10px">
         <Button  bgColor="#f5f5f6" onClick={()=>setShowPrice(!showPrice)}><Flex width="100%" justifyContent="space-between" pl=".5rem" pr='.1rem'><Text>Price</Text><Box><RiArrowDropDownLine size="24px" /></Box></Flex></Button>
          {
                showPrice && <Box style={{display:"flex", alignItems:"center", justifyContent:"space-between"}}>
                  <Box>
                    <Text>
                      Minimum
                    </Text>
                    <Stack spacing={1} direction='column'>
                      <Checkbox isChecked={minCheck1} colorScheme='blue' value={4000}  onChange={(e)=>changeMinPrice(e)}>
                        ₹ 4,000
                      </Checkbox>
                      <Checkbox isChecked={minCheck2} colorScheme='blue' value={8000} onChange={(e)=>changeMinPrice(e)}>
                        ₹ 8,000
                      </Checkbox>
                    </Stack>
                  </Box>

                  <Box>
                    <Text>
                      Maximum
                    </Text>
                    <Stack spacing={1} direction='column'>
                      <Checkbox  isChecked={maxCheck1} colorScheme='blue' value={20000} onChange={(e)=>changeMaxPrice(e)}>
                        ₹ 20,000
                      </Checkbox>
                      <Checkbox isChecked={maxCheck2} colorScheme='blue' value={30000} onChange={(e)=>changeMaxPrice(e)}>
                         ₹ 30,000
                      </Checkbox>
                    </Stack>
                  </Box>
             </Box>
         }
         <Button  bgColor="#f5f5f6"><Flex width="100%" justifyContent="space-between" pl=".5rem" pr='.1rem'><Text>Colors</Text><Box><RiArrowDropDownLine size="24px" /></Box></Flex></Button>
         <Button  bgColor="#f5f5f6"><Flex width="100%" justifyContent="space-between" pl=".5rem" pr='.1rem'><Text>Sizes</Text><Box><RiArrowDropDownLine size="24px" /></Box></Flex></Button>
         <Button  bgColor="#f5f5f6"><Flex width="100%" justifyContent="space-between" pl=".5rem" pr='.1rem'><Text>Shapes</Text><Box><RiArrowDropDownLine size="24px" /></Box></Flex></Button>
         <Button  bgColor="#f5f5f6"><Flex width="100%" justifyContent="space-between" pl=".5rem" pr='.1rem'><Text>Brand</Text><Box><RiArrowDropDownLine size="24px" /></Box></Flex></Button>
         </Flex>
          </Box>
        

      <SimpleGrid columns={[1,1,3,3]} width="75%" m="auto" rowGap={"20px"} >

          {/* //////////////// Product display card ///////////////// */}
          {data && data.map((el)=>{

        return(<Box align="left" boxShadow="rgba(0, 0, 0, 0.16) 0px 1px 4px" width="95%">
        <Link to={`/furniture/living/${el._id}`} ><Image  src={el.images[0]} alt="productImages"></Image></Link>
        <Button p="0" position="absolute" mt={["-69%", "-34%", "-23%", "-23%"]} ml={["58%", "28%", "18.5%", "20%"]} borderRadius="50%" bgColor="hsl(0deg 0% 100% / 80%)" color='hsl(0deg 0% 55%)' _hover={{color:'#c7202c'}} ><BiHeartCircle  size='25px' /></Button>
        <Link to={`/furniture/living/${el._id}`} ><Box p="2%">
        <Text color="#c7202c" fontSize="18px" fontWeight="600">Price ₹ {el.price}</Text>
        <Flex align="center" gap="5px"><AiFillStar color="#bf9852"/>MRP<s >₹ {el.originalPrice}</s>  </Flex>
        <Text fontSize="14px">{el.heading}</Text>
        </Box></Link>
        </Box>
        )


          })}
        

      </SimpleGrid>

    </Flex>
   
          
    {
      totalPage && <Flex gap="1rem" justifyContent={"center"} mt="1rem">
         <Button disabled={page===1} onClick={()=>setPage(page-1)}>PREV</Button>   
            <Button>{page}</Button>   
         <Button disabled={page===totalPage} onClick={()=>setPage(page+1)}>NEXT</Button>   
      </Flex>
    }
    

   </Box>
   </>
  )
}

export default LivingRoom