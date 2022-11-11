import React from "react";
import { Route, Routes } from "react-router-dom";
import ForgotPassword from "../Pages/Forgot_Password/ForgotPassword";
import SignIn from "../Pages/Signin/Signin";
import SignUp from "../Pages/Signup/Signup";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/signup" element={<SignUp />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/forgot_password" element={<ForgotPassword />} />
    </Routes>
  );
};

export default AllRoutes;
