import React from "react";
import { Route, Routes } from "react-router-dom";
import ForgotPassword from "../Pages/Forgot_Password/ForgotPassword";
import SignIn from "../Pages/Signin/Signin";
import SignUp from "../Pages/Signup/Signup";
import { Wishlist } from "../Pages/Wishlist/Wishlist";
import Navbar from '../Components/Admin/Navbar/Navbar';
import Cart from "../Components/cart/Cart";
import {Payment} from "../Components/payment/Payment";
import { CheckoutPage } from "../Components/checkout/CheckoutPage";


const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/wishlist" element={<Wishlist />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/forgot_password" element={<ForgotPassword />} />

      <Route path="/checkout" element={<CheckoutPage/>} />

      <Route path="/admin/*" element={<Navbar />}></Route>
      <Route path="/cart" element={<Cart/>} />

      
    </Routes>
  );
};

export default AllRoutes;
