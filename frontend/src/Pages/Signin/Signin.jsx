import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { signinAPI } from "../../Store/Auth/auth.actions";
import { googleAuthentication } from "../../Store/Google/google.actions";
import styles from "./Signin.module.css";

const SignIn = () => {
  const message = useSelector((store) => store.auth.msg);
  const error = useSelector((store) => store.auth.error);
  const toast = useToast();
  const [googleAuthCheck, setGoogleAuthCheck] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    window.document.title = 'Signin - HomeDecor';
  }, []);

  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = userData;
  const isInvalid = email === "" || password === "";
  const token = useSelector((store) => store.auth.accessToken);
  //const token1 = useSelector((store) => store.google);
  //console.log(token1);

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
        <Box borderRadius={5} align="center" color="white" p={3} bg="#bf9850">
          Log In Successfully
        </Box>
      ),
    });
    navigate("/");
  }

  useEffect(() => {
    if (googleAuthCheck) {
      dispatch(googleAuthentication());
    }
  },[googleAuthCheck])


  const handleClick = (e)=>{
    e.preventDefault();

  //  dispatch(googleAuthentication())
   setGoogleAuthCheck(true);
   window.open("http://localhost:7000/auth/google/", "_self");
  }


  return (
    <Box mt="80px">
    <Text className={styles.text} color="#bf9850">Welcome to the HomeDecor</Text>
    <Box className={styles.signin}>
      <Link to="/signup">
        <Text className={styles.text1} >
          Don't have an account? Sign Up
        </Text>{" "}
      </Link>
      <Stack align="center" mt="20px">
      <Button width="100%"  display="block"
            alignItems="flex-center"
            color="white"
            backgroundColor="#bf9850"
            _hover={{
              outline: "#FA5D00",
              bgColor: "#b5955e",
            }}
            _focus={{
              outline: "#FA5D00",
              bgColor: "#b5955e",
            }}
            onClick={handleClick}
           >
       Sign In with Google
     </Button>
     </Stack>
     <Stack align="center" mb="10px">
     <Text mt="1rem">or</Text>
     </Stack>
      <FormControl method="POST" isRequired>
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
        <Stack mt="1rem" align="center">
          <Button
          width="100%"
            display="block"
            alignItems="flex-center"
            color="white"
            backgroundColor="#bf9850"
            onClick={handleSubmit}
            disabled={isInvalid}
          >
            Sign In
          </Button>
        </Stack>
        <Link to="/forgot_password">
          <Text   align="left" textDecoration={"underline"}>
            Forgot Password?
          </Text>
        </Link>
      </FormControl>
    </Box>
    </Box>
  );
};

export default SignIn;