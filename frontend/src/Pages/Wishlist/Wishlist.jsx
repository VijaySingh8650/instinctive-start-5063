import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import * as React from "react";

import { AiOutlineDown} from "react-icons/ai";
import style from "./Wishlist.module.css";
import { useSelector } from "react-redux";
import { ADD, DEL, REMOVE } from "../../Store/Wishlist/wishlist.actions";
import { useDispatch } from "react-redux";
import { ImBin } from "react-icons/im";
import { useToast } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import WishlistSuggestion from "./WishlistSuggestion";


export const Wishlist = () => {
  //const {data} = useSelector((store) => store.wishlistReducer.wishlist);
  // console.log(data);
  let dispatch = useDispatch();
  const toast = useToast();

  

  //delete function
  function dlt(id) {
    dispatch(DEL(id));
    toast({
      title: "Removed Item from Wishlist",
      position: "top",

      status: "success",
      duration: 9000,
      isClosable: true,
    });
  }
 
  function qty(e) {
    dispatch(ADD(e));
  }
  //remove one
  function qtydec(item) {
    dispatch(REMOVE(item));
  }

  return (
    <Box marginTop="130px">
      <Flex gap="75%" marginLeft="2rem">
        <Heading textAlign={"start"} fontWeight="bold">
          Your Wishlist:
        </Heading>
        <Link to="/signin">
          <Button  
          backgroundColor="black"
          color="white"
            _hover={{
              outline: "#FA5D00",
              bgColor: "#27865F",
              color:"white",
            }}
            _focus={{
              color:"white",
              outline: "#FA5D00",
              bgColor: "#3BA63E",
            }} w={["100%", "100%", "100%", "100%"]}>
            SignIn
          </Button>
        </Link>
      
      </Flex>
      <br />
      <Flex className={style.flexcontainer}>
        <TableContainer w={["100%", "100%", "100%", "100%"]}>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Items</Th>
                <Th>Price</Th>
                <Th>Quantity</Th>
                <Th>Subtotal</Th>
              </Tr>
            </Thead>
            {/* <Tbody>
              {data?.map((items) => (
                <Tr key={items.id}>
                  <Td>
                    <Image src={items.product_image} w="40%" />
                  </Td>
                  <Td>${items.product_price}</Td>
                  <Td>
                    {" "}
                    <Button
                      disabled={items.quantity === 1}
                      onClick={() => qtydec(items)}
                    >
                      -
                    </Button>
                    <Button
                      borderRadius="none"
                      bg="white"
                      _hover={{ bg: "white" }}
                    >
                      {items.quantity}
                    </Button>
                    <Button onClick={() => qty(items)}>+</Button>
                  </Td>
                  <Td>${Math.ceil(items.quantity * items.product_price)}</Td>
                  <Td>
                    <Button bg="white" onClick={() => dlt(items.id)}>
                      <ImBin color="red" />
                    </Button>
                  </Td>
                </Tr>
              ))}
              <Tr>
                <Th></Th>
                <Th></Th>
                <Th></Th>
                <Th textAlign={"right"} fontSize="lg">
                  Subtotal : ${price}
                </Th>
              </Tr>
            </Tbody> */}
          </Table>
        </TableContainer>
        <Box
          bg="#f8f8f8"
          w={["100%", "100%", "100%", "60%"]}
          padding="2% 2% 2%"
          h="140px"
        >
          <Flex gap="60%">
            <Text textAlign={"left"} fontWeight="semibold">
              Gift Selection{" "}
            </Text>
            <AiOutlineDown />
          </Flex>
          <br />
          <Flex gap="60%">
            <Text textAlign={"left"} fontWeight="normal">
              Spend $165.00 or more to qualify{" "}
            </Text>

            <Text textAlign={"right"} fontWeight="bold">
              $128.00{" "}
            </Text>
          </Flex>
        </Box>
      </Flex>
      <br />
      <br /> 
      <br />
      <br />
      <br /> 
      <br />
        <WishlistSuggestion />
    </Box>
  );
};
