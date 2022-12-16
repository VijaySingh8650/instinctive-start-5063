import React from "react";
import { Box, Button, Flex, Image, Input, Text, SimpleGrid, Hide, WrapItem, Avatar } from "@chakra-ui/react";
import logo from "./images/logo.png";
import { BiSearchAlt2 } from "react-icons/bi";
import { BsPerson } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { BsCart3 } from "react-icons/bs";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutAPI } from "../../Store/Auth/auth.actions";
import style from "./navbar.module.css"
import styles from "../Admin/Navbar/navbar.module.css";
import profile from "./images/profile.png"
import jwt from "jwt-decode"
const Navbar = () => {

  const token = useSelector((store)=>store.auth.accessToken);
  const email = useSelector((store)=>store.auth.email);
  const dispatch = useDispatch();
const navigate = useNavigate()

  const handleSignOut = ()=>{
      dispatch(logoutAPI());
       navigate('/signin');
  }

const { accessToken } = useSelector(store => store.auth);
  let isAdminTrue; 
  
  if (accessToken) {
    const decode = jwt(accessToken);
    const { isAdmin } = decode;
    isAdminTrue = isAdmin;
  }



  return (
    <Box width="100%" boxShadow="rgba(33, 35, 38, 0.1) 0px 10px 10px -10px" position="fixed" top={0} bgColor="white" zIndex={4}>
      {/* ///////////////// Nav 1 ////////////// */}
      <Flex p=".5rem" justifyContent="space-between" pl="3%" pr="3%" height="50px" pb="10px">
      <Link to="/"><Flex align="center" gap="10px">
        <Image src={logo} alt="logo" width="38px"></Image>
        <Hide below="lg">
        <Text color="#bf9852" fontSize="20px" fontWeight={500}>HomeDecor</Text>
        </Hide>
        </Flex>
      </Link>
        
        <Hide below="md">
        <Flex alignItems="center" bgColor="#f5f5f6" width="40%" pl=".6rem" borderRadius="5px">
          <Box width="10%">
            <BiSearchAlt2 color="#717288" />
          </Box>
          

            <Input
              height="60%"
              variant="unstyled"
              bgColor="#f5f5f6"
              fontSize={"14px"}
              
              placeholder="Search... which suits your home"
            />
          
          </Flex>
          </Hide>
        {/* ///////////// Account /////////////// */}
        <Flex gap="1rem" alignItems={"center"}>
          {
            token ? 
              <Menu>
              
             
               <MenuButton>
                <WrapItem >
                      <Avatar
                        width="40px" height="38px"
                        
                        src={profile}
                        borderRadius="0"
                        pt="0"
                        mt="0"
                      />{" "}
                    </WrapItem>
              </MenuButton>
              
              <MenuList minW="0" w={"auto"} className={style.home_navbar_menu}>
                <MenuItem>
                  {isAdminTrue ? <Text>Welcome Admin</Text> : <Text>Welcome</Text>}
                </MenuItem>
                <MenuItem>
                  {isAdminTrue && <Button onClick={()=>navigate('/admin')} > <Text>Go To Admin Page</Text></Button>}
                </MenuItem>
                <MenuItem align="center">
                 <Text>{email}</Text>
                </MenuItem>
                <MenuItem onClick={()=>navigate("/cart")}>
                  <Text>Cart</Text>
                </MenuItem>
                <MenuItem  className={styles.edit_box} onClick={()=>{
                  dispatch(logoutAPI())
                  navigate("/signin")
                }}>
                  
                  <Text>Sign Out</Text>
                </MenuItem>
                
              
              </MenuList>
            </Menu> : 
              <Menu>
              
             
               <MenuButton>
                <WrapItem >
                      <Avatar
                        width="40px" height="38px"
                        
                        src={profile}
                        borderRadius="0"
                        pt="0"
                        mt="0"
                      />{" "}
                    </WrapItem>
              </MenuButton>
              
              <MenuList minW="0" w={"auto"} className={style.home_navbar_menu}>
                
               
               
                <MenuItem onClick={()=>navigate("/cart")}>
                  <Text>Cart</Text>
                </MenuItem>
                <MenuItem  className={styles.edit_box} onClick={()=>{
                  
                  navigate("/signin")
                }}>
                  
                  <Text>Sign in</Text>
                </MenuItem>
                
              
              </MenuList>
            </Menu> 
         }
      
         
        <Link to="/wishlist" ><Flex flexDir="column"  align="center" cursor="pointer" _hover={{color:"#bf9852" }}>
          <Box ><AiOutlineHeart size="20px" color="#717288" /></Box>
          <Text mt="-2px" fontSize="12px" fontWeight="bold">Wishlist</Text>
        </Flex></Link>
       
        <Link to="/cart" _hover={{color:"#bf9852" }}><Flex flexDir="column"  align="center" cursor="pointer" _hover={{color:"#bf9852" }}>
          <Box ><BsCart3 size="20px" color="#717288"  /></Box>
          <Text mt="-2px" fontSize="12px" fontWeight="bold">Bag</Text>
        </Flex></Link>
        </Flex>

      </Flex>

      {/* /////////////////// Nav 2 /////////// */}

      <Flex  justifyContent="space-between" pl="2%" pr="2%" fontSize="14px">
        
        <Link to="/furniture" ><Button variant="unstyled" fontSize="13px" fontWeight="400" _hover={{color:"#bf9852", borderBottom:"1px solid #bf9852", borderRadius:"none" }}>Furniture</Button></Link>
        <Link to="/furniture" ><Button variant="unstyled" fontSize="13px" fontWeight="400"  _hover={{color:"#bf9852", borderBottom:"1px solid #bf9852", borderRadius:"none" }}>Rugs</Button></Link>
        <Link to="/furniture" ><Button variant="unstyled" fontSize="13px" fontWeight="400"  _hover={{color:"#bf9852", borderBottom:"1px solid #bf9852", borderRadius:"none" }}>Decor</Button></Link>
        <Hide below="lg">
        <Link to="/furniture" ><Button variant="unstyled" fontSize="13px" fontWeight="400"  _hover={{color:"#bf9852", borderBottom:"1px solid #bf9852", borderRadius:"none" }}>Bedding</Button></Link>
        <Link to="/furniture" ><Button variant="unstyled" fontSize="13px" fontWeight="400"  _hover={{color:"#bf9852", borderBottom:"1px solid #bf9852", borderRadius:"none" }}>Home Improvement</Button></Link>
        <Link to="/furniture" ><Button variant="unstyled" fontSize="13px" fontWeight="400"  _hover={{color:"#bf9852", borderBottom:"1px solid #bf9852", borderRadius:"none" }}>Kitchen</Button></Link>
        <Link to="/furniture" ><Button variant="unstyled" fontSize="13px" fontWeight="400"  _hover={{color:"#bf9852", borderBottom:"1px solid #bf9852", borderRadius:"none" }}>Outdoor</Button></Link>
        <Link to="/furniture" ><Button variant="unstyled" fontSize="13px" fontWeight="400"  _hover={{color:"#bf9852", borderBottom:"1px solid #bf9852", borderRadius:"none" }}>Lighting</Button></Link>
        </Hide>
        <Link to="/furniture" ><Button variant="unstyled" fontSize="13px" fontWeight="400"  _hover={{color:"#bf9852", borderBottom:"1px solid #bf9852", borderRadius:"none" }}>Kids & Baby</Button></Link>
        <Link to="/furniture" ><Button variant="unstyled" fontSize="13px" fontWeight="400"  _hover={{color:"#bf9852", borderBottom:"1px solid #bf9852", borderRadius:"none" }}>More</Button></Link>
        <Hide below="md">
        <Link to="/furniture" ><Button variant="unstyled" fontSize="13px" fontWeight="400"  _hover={{color:"#bf9852", borderBottom:"1px solid #bf9852", borderRadius:"none" }} color='grey'>|</Button></Link>
       
        <Link to="/furniture" ><Button variant="unstyled" fontSize="13px" fontWeight="400"  _hover={{color:"#bf9852", borderBottom:"1px solid #bf9852", borderRadius:"none" }}>Ideas</Button></Link>
        <Link to="/furniture" ><Button variant="unstyled" fontSize="13px" fontWeight="400" color="#bf9852">Sales & Deals</Button></Link>
        </Hide>

        <Menu  >
            {/* //////////// Button ///////////// */}
        {/* <MenuButton as={Button} _focusVisible={"none"}></MenuButton> */}
        
        <MenuList height="sm" width="xl" >
          <SimpleGrid columns={[2, 2, 3, 4]}>
          <Text>Olivia</Text>
          <Text>Emma</Text>
          <Text>Charlotte</Text>
          <Text>Amelia</Text>
          <Text>Ava</Text>
          <Text>Sophia</Text>
          <Text>Isabella</Text>
          <Text>Mia</Text> 

          <Text cursor={"pointer"}>Evelyn</Text>
          <Text>Harper</Text>
          <Text>Luna</Text>
          <Text>Camila</Text>
          <Text>Gianna</Text>
          <Text>Elizabeth</Text>
          <Text>Eleanor</Text>
          <Text>Ella</Text>
          <Text>Abigail</Text>
          <Text>Sofia</Text>
          <Text>Avery</Text>
          <Text>Scarlett</Text>
          </SimpleGrid>       
                   
        </MenuList>
      </Menu>
      </Flex>

    </Box>
  );
};

export default Navbar;
