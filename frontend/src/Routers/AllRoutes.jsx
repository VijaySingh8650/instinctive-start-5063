import React from "react";
import { Route, Routes } from "react-router-dom";
import ForgotPassword from "../Pages/Forgot_Password/ForgotPassword";
import SignIn from "../Pages/Signin/Signin";
import SignUp from "../Pages/Signup/Signup";
// import Navbar from '../Components/Admin/Navbar/Navbar';
import Navbar from "../Components/navbar/Navbar";
import Cart from "../Components/cart/Cart";
import ProductPage from "../Components/productpage/ProductPage";

const AllRoutes = () => {
  return (
    <>
    <Navbar />
    {/* <ProductPage /> */}
    {/* <Cart /> */}
    <SingleProduct />
    </>
    // <Routes>
    //   <Route path="/signup" element={<SignUp />} />
    //   <Route path="/signin" element={<SignIn />} />
    //   <Route path="/forgot_password" element={<ForgotPassword />} />
    //   <Route path="/admin/*" element={<Navbar/>}></Route>
    // </Routes>
  );
};

export default AllRoutes;
