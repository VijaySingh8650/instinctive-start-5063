import React from "react";
import { Box, Button, Flex, Image, Input, Text, SimpleGrid } from "@chakra-ui/react";
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


const Navbar = () => {
  return (
    <Box boxShadow="rgba(33, 35, 38, 0.1) 0px 10px 10px -10px">
      {/* ///////////////// Nav 1 ////////////// */}
      <Flex p=".5rem" justifyContent="space-between" pl="3%" pr="3%" >
        <Flex align="center" gap="10px">
        <Image src={logo} alt="logo" width="38px"  ></Image>
        <Text color="#bf9852" fontSize="20px" fontWeight={500}>HomeDecor</Text>
        </Flex>
        <Flex alignItems="center" bgColor="#f5f5f6" width="60%" pl=".6rem" borderRadius="5px">
          <Box width="6%">
            <BiSearchAlt2 color="#717288" />
          </Box>
          <Input
            height="100%"
            variant="unstyled"
            bgColor="#f5f5f6"
            fontSize={"14px"}
            
            placeholder="Search... everything you find ships for free"
          />
        </Flex>
        {/* ///////////// Account /////////////// */}
        <Flex width="auto" gap="20px" >
        <Flex flexDir="column" align="center">
          <Box ><BsPerson size="20px" color="#717288" /></Box>
          <Text mt="-2px" fontSize="12px" fontWeight="bold">Profile</Text>
        </Flex>

        <Flex flexDir="column"  align="center">
          <Box ><AiOutlineHeart size="20px" color="#717288" /></Box>
          <Text mt="-2px" fontSize="12px" fontWeight="bold">Wishlist</Text>
        </Flex>

        <Flex flexDir="column"  align="center">
          <Box ><BsCart3 size="20px" color="#717288"  /></Box>
          <Text mt="-2px" fontSize="12px" fontWeight="bold">Bag</Text>
        </Flex>
        </Flex>

      </Flex>

      {/* /////////////////// Nav 2 /////////// */}

      <Flex p=".2rem" justifyContent="space-between" pl="3%" pr="3%" fontSize="14px">
        
        <Button variant="unstyled">Furniture</Button>
        <Button variant="unstyled">Rugs</Button>
        <Button variant="unstyled">Decor</Button>
        <Button variant="unstyled">Bedding</Button>
        <Button variant="unstyled">Home Improvement</Button>
        <Button variant="unstyled">Kitchen</Button>
        <Button variant="unstyled">Outdoor</Button>
        <Button variant="unstyled">Lighting</Button>
        <Button variant="unstyled">Kids & Baby</Button>
        <Button variant="unstyled">More</Button>
        <Button variant="unstyled" color='grey'>|</Button>
        <Button variant="unstyled">Ideas</Button>
        <Button variant="unstyled">Sales & Deals</Button>

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
