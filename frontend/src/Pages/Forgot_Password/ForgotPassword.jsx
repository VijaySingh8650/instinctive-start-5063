import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./forgot.module.css";
const ForgotPassword = () => {
  const [value, setValue] = useState({
    email: "",
  });
  const { email } = value;

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <Box className={styles.container}>
      <Link to="/signup">
        <Text color="black" fontWeight="bold" textAlign="end">
          Don't have an account? Sign Up
        </Text>{" "}
      </Link>
      <FormControl>
        <FormLabel>Forgot Password</FormLabel>
        <Text>Enter your email address and we will send you a link.</Text>
        <Input
          bg="white"
          type="text"
          value={email}
          name="email"
          placeholder="Email Address"
          required
        />
        <Stack mt="30px" align="center">
          <Button
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
            Send Reset Password Email
          </Button>
        </Stack>
        <Link to="/signin">
          <Text mt="10px" color="black" fontWeight="bold" textAlign="end">
            Already have an account? Log in
          </Text>{" "}
        </Link>
      </FormControl>
    </Box>
  );
};

export default ForgotPassword;
