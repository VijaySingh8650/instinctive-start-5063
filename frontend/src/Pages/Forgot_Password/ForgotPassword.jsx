import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Spacer,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./forgot.module.css";
const ForgotPassword = () => {
  const [data, setData] = useState({
    email: "",
  });
  // const { email } = value;

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email } = data;
  console.log(email)
    fetch("http://localhost:7000/forgot-password",{
      method:"POST",
      headers:{"content-type":"application/json"},
      body:JSON.stringify({email})
    }).then((res)=>res.json()).then((data)=>{
    console.log("userRegister",data)
    alert(data.status)
  })
  };

  return (
    <>
    <Text color='white'>Here</Text>
    <Text color='white'>Here</Text>
    <Box className={styles.container}>
      <Link to="/signup">
        <Text className={styles.text1}>
          Don't have an account? Sign Up
        </Text>{" "}
      </Link>
      <FormControl>
        <FormLabel>Forgot Password</FormLabel>
        <Text className={styles.text2}>Enter your email address and get a link.</Text>
        <Input
          bg="white"
          type="text"
          onChange={(e)=>setData({email:e.target.value})}
          name="email"
          placeholder="Email Address"
          required
        />
        <Stack mt="30px" align="center">
          <Button
          width="100%"
            display="block"
            alignItems="flex-center"
            color="white"
            backgroundColor="#0272A2"
            _hover={{
              outline: "#FA5D00",
              bgColor: "#3BA63E",
            }}
            _focus={{
              outline: "#FA5D00",
              bgColor: "#3BA63E",
            }}
            onClick={handleSubmit}
          >
            Send Email
          </Button>
        </Stack>
        <Link to="/signin">
          <Text  className={styles.text3}>
            Already have an account? Log in
          </Text>{" "}
        </Link>
      </FormControl>
    </Box>
    </>
  );
};

export default ForgotPassword;
