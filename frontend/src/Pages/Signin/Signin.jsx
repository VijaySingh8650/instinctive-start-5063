import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { signinAPI } from "../../Store/Auth/auth.actions";
import styles from "./Signin.module.css";

const SignIn = () => {
  const message = useSelector((store) => store.auth.msg);
  const error = useSelector((store) => store.auth.error);
  const toast = useToast();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = userData;
  const isInvalid = email === "" || password === "";
  const token = useSelector((store) => store.auth.accessToken);
  //console.log(token);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };
  //console.log(userData)

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signinAPI(userData));
    setUserData(' ');
  };

  if (token) {
    toast({
      position: "top-center",
      duration: 1000,
      render: () => (
        <Box borderRadius={5} align="center" color="white" p={3} bg="blue.500">
          Logged In Successfully
        </Box>
      ),
    });
    navigate("/");
  }

  return (
    <Box className={styles.signin}>
      <Link to="/signup">
        <Text textAlign="end" fontWeight="bold" color="black">
          Don't have an account? Sign Up
        </Text>{" "}
      </Link>
      <FormControl isRequired>
        <FormLabel>Email Address</FormLabel>
        <Input
          type="email"
          name="email"
          bg="white"
          value={email}
          onChange={handleChange}
          placeholder="Enter Email..."
        />
        <FormLabel>Password</FormLabel>
        <Input
          type="password"
          name="password"
          bg="white"
          value={password}
          onChange={handleChange}
          placeholder="Enter Password..."
        />
        <Text color="brown" align="center" fontWeight="bold">
          {error ? message : " "}
        </Text>
        <Stack mt="30px" align="center">
          <Button
            display="block"
            alignItems="flex-center"
            color="white"
            backgroundColor="#27865F"
            _hover={{
              outline: "#FA5D00",
              bgColor: "#3BA63E",
            }}
            _focus={{
              outline: "#FA5D00",
              bgColor: "#3BA63E",
            }}
            onClick={handleSubmit}
            disabled={isInvalid}
          >
            Sign In
          </Button>
        </Stack>
        <Link to="/forgot_password">
          <Text mt="10px" fontWeight="bold" color="blue" align="center">
            Forgot Password
          </Text>
        </Link>
      </FormControl>
    </Box>
  );
};

export default SignIn;
