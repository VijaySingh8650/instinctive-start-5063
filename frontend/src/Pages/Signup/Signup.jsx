import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormLabel,
  Input,
  Spacer,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signupAPI } from "../../Store/Auth/auth.actions";
import { useDispatch } from "react-redux";
import styles from "./Signup.module.css";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const [confirm_password, setConfirm_password] = useState("");
  const toast = useToast();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const userData = { email, password, confirm_password };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signupAPI(userData));
    toast({
      position: "top-center",
      title: "Account created.",
      description: "We've created your account for you.",
      status: "success",
      duration: 1000,
      isClosable: true,
    });
    setEmail(' ');
    setPassword(' ');
    setConfirm_password(' ');
    navigate("/signin");
  };

  const handleGuest = (e) => {
    e.preventDefault();
    navigate("/cart");
  };

  let isInvalid =
    email === "" ||
    password === "" ||
    confirm_password === "" ||
    password !== confirm_password;
  const checkValidation = (e) => {
    const confirmPassword = e.target.value;
    setConfirm_password(confirmPassword);
    if (password !== confirmPassword) {
      setError("Password should be same as confirm password");
    } else {
      setError("");
    }
  };

  return (
    <Box className={styles.signup}>
      <Link to="/signin">
        <Text textAlign="end" fontWeight="bold" color="black">
          Already have an account? Log in
        </Text>{" "}
      </Link>
      <FormControl isRequired>
        <FormLabel>Email Address</FormLabel>
        <Input
          type="email"
          name="email"
          bg="white"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter Email"
        />
        <FormLabel>Create Password</FormLabel>
        <Input
          type="password"
          name="password"
          bg="white"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <FormLabel>Confirm Password</FormLabel>
        <Input
          type="password"
          name="confirm_password"
          bg="white"
          value={confirm_password}
          onChange={(e) => checkValidation(e)}
          placeholder="Confirm Password"
        />
        <Text align="center" color="brown" fontWeight="bold">
          {error}
        </Text>
        <Checkbox mb="10px" defaultChecked>
          Sign up today for exclusive offers from Overstock.com delivered right
          to your inbox**
        </Checkbox>
        <Spacer />
        <Stack direction="column" spacing={4} align="center">
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
            disabled={isInvalid}
          >
            Create Account
          </Button>
          <Button
            display="block"
            alignItems="flex-center"
            color="white"
            backgroundColor="green"
            _hover={{
              outline: "#FA5D00",
              bgColor: "#3BA63E",
            }}
            _focus={{
              outline: "#FA5D00",
              bgColor: "#3BA63E",
            }}
            onClick={handleGuest}
          >
            Continue as Guest
          </Button>
        </Stack>
      </FormControl>
    </Box>
  );
};

export default SignUp;
