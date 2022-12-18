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
import React, { useEffect } from "react";
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


  useEffect(() => {
    window.document.title = 'Signup - HomeDecor';
  }, []);

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
    <Box mt="80px">
     <Text className={styles.text} color="#bf9850">Let's Decor Your Home</Text>
    <Box className={styles.signup}>
      <Link to="/signin">
        <Text className={styles.text1}>
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
        <Checkbox className={styles.checkbox} defaultChecked>
          <Text className={styles.text2} > Sign up today for exclusive offers from HomeDecor delivered right
          to your inbox**</Text>
        </Checkbox>
        <Spacer />
        <Stack direction="column" spacing={8} align="center">
          <Button
          width="100%"
            display="block"
            alignItems="flex-center"
            color="white"
            backgroundColor="#bf9850"
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
          
        </Stack>
      </FormControl>
    </Box>
    </Box>
  );
};

export default SignUp;