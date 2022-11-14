import React from "react";
import { Route, Routes } from "react-router-dom";
import ForgotPassword from "../Pages/Forgot_Password/ForgotPassword";
import SignIn from "../Pages/Signin/Signin";
import SignUp from "../Pages/Signup/Signup";

import Navbar from "../Components/navbar/Navbar";
import Cart from "../Components/cart/Cart";
import SingleProduct from "../Components/singleProduct/SingleProduct";
import ProductPage from "../Components/productpage/Mattresses";
import Footer from "../Components/footer/Footer";
import Category from "../Components/category/Category";
import NavbarAdmin from "../Components/Admin/Navbar/NavbarAdmin";
import Home from "../Pages/Home/Home"
import LivingRoom from "../Components/productpage/LivingRoom";
import Bedroom from "../Components/productpage/Bedroom";
import Mattresses from "../Components/productpage/Mattresses";
import jwt from "jwt-decode";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { Navigate } from "react-router-dom";

const AllRoutes = () => {
  const { accessToken } = useSelector(store => store.auth);
  let isAdminTrue; 
  
  if (accessToken) {
    const decode = jwt(accessToken);
    const { isAdmin } = decode;
    isAdminTrue = isAdmin;
  }
  
  return (
    <Routes>
      <Route path="/signup" element={<SignUp />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/forgot_password" element={<ForgotPassword />} />
      <Route path="/admin/*" element={isAdminTrue ? <NavbarAdmin /> :<Navigate to="/signin"/>}></Route>
      <Route path="/" element={<><Navbar /><Home /><Footer /></>} />
      <Route path="/bedroom" element={<><Navbar/><Bedroom /><Footer /></>} />
      <Route path="/mattresses" element={<><Navbar /><Mattresses /><Footer /></>} />
      <Route path="/living" element={<><Navbar /><LivingRoom /><Footer /></>} />
      <Route path="/furniture" element={<><Navbar /><Category/><Footer /></>} />
       <Route path="/furniture/:id" element={<><Navbar /><SingleProduct/><Footer /></>} />
       <Route path="/cart" element={<><Navbar /><Cart/><Footer /></>}></Route>

    </Routes>
  );
};

export default AllRoutes;