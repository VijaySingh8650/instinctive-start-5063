import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import ForgotPassword from "../Pages/Forgot_Password/ForgotPassword";
import SignIn from "../Pages/Signin/Signin";
import SignUp from "../Pages/Signup/Signup";

import Navbar from "../Components/navbar/Navbar";
import Cart from "../Components/cart/Cart";
import BedroomSingle from "../Components/singleProduct/BedroomSingle";
// import ProductPage from "../Components/productpage/Mattresses";
import Footer from "../Components/footer/Footer";
import Category from "../Components/category/Category";
import NavbarAdmin from "../Components/Admin/Navbar/NavbarAdmin";
import Home from "../Pages/Home/Home"
import LivingRoom from "../Components/productpage/LivingRoom";
import Bedroom from "../Components/productpage/Bedroom";
import Mattresses from "../Components/productpage/Mattresses";
import MattressesSingle from "../Components/singleProduct/MattressesSingle";
import LivingRoomSingle from "../Components/singleProduct/LivingRoomSingle";
import {CheckoutPage} from "../Components/checkout/CheckoutPage"
import { Wishlist } from "../Pages/Wishlist/Wishlist";
import { useDispatch, useSelector } from "react-redux";

import { Navigate } from "react-router-dom";

import jwt from "jwt-decode"
import { logoutAPI } from "../Store/Auth/auth.actions";
import Dining from "../Components/productpage/Dining";

import AddAddress from "../Components/AddressForm/AddAddress";
import { Payment } from "../Components/payment/Payment";

import NotFound from "../Pages/NotFound";


const AllRoutes = () => {
  const { accessToken } = useSelector(store => store.auth);
  let isAdminTrue; 
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  if (accessToken) {

    const decode = jwt(accessToken);
    const { isAdmin, exp } = decode;
    let date = new Date().getTime();
    if ((exp * 1000) < date) {
      dispatch(logoutAPI());
      navigate("/signin");
    }

    isAdminTrue = isAdmin;
    console.log(exp*1000);
    console.log(date, "date");
  }
  
  return (
    <Routes>
      <Route path="/signup" element={<><Navbar /><SignUp /><Footer /></>} />
      <Route path="/signin" element={<><Navbar /><SignIn/><Footer /></>} />
      <Route path="/forgot_password" element={<><Navbar /><ForgotPassword /><Footer /></>} />
      <Route path="/admin/*" element={isAdminTrue ? <NavbarAdmin /> :<Navigate to="/signin"/>}></Route>
      <Route path="/" element={<><Navbar /><Home /><Footer /></>} />
      <Route path="/bedroom" element={<><Navbar/><Bedroom /><Footer /></>} />
      <Route path="/mattresses" element={<><Navbar /><Mattresses /><Footer /></>} />
      <Route path="/living" element={<><Navbar /><LivingRoom /><Footer /></>} />
      <Route path="/dining" element={<><Navbar /><Dining /><Footer /></>} />
      <Route path="/furniture" element={<><Navbar /><Category/><Footer /></>} />
       <Route path="/furniture/bedroom/:id" element={<><Navbar /><BedroomSingle /><Footer /></>} />
       <Route path="/furniture/mattresses/:id" element={<><Navbar /><MattressesSingle/><Footer /></>} />
       <Route path="/furniture/living/:id" element={<><Navbar /><LivingRoomSingle/><Footer /></>} />
       <Route path="/cart" element={<><Navbar /><Cart/><Footer /></>}></Route>
       <Route path="/wishlist" element={<><Navbar /><Wishlist/><Footer /></>}></Route>
       <Route path="/checkout" element={<><Navbar /><CheckoutPage/></>}></Route>
       <Route path="/address" element={<><Navbar /><AddAddress/><Footer /></>}></Route>
      <Route path="/payment" element={<><Navbar /><Payment /><Footer /></>}></Route>
      <Route path="/*" element={<><Navbar /><NotFound/><Footer /></>} /> 


    </Routes>
  );
};

export default AllRoutes;