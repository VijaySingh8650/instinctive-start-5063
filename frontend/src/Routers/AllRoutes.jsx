import React from "react";
import { Route, Routes } from "react-router-dom";
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
import { Wishlist } from "../Pages/Wishlist/Wishlist";

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
      <Route path="/signup" element={<><Navbar /><SignUp /><Footer /></>} />
      <Route path="/signin" element={<><Navbar /><SignIn /><Footer /></>} />
      <Route path="/forgot_password" element={<><Navbar /><ForgotPassword /><Footer /></>} />
      <Route path="/admin/*" element={<NavbarAdmin />}></Route>
      <Route path="/" element={<><Navbar /><Home /><Footer /></>} />
      <Route path="/bedroom" element={<><Navbar/><Bedroom /><Footer /></>} />
      <Route path="/mattresses" element={<><Navbar /><Mattresses /><Footer /></>} />
      <Route path="/living" element={<><Navbar /><LivingRoom /><Footer /></>} />
      <Route path="/furniture" element={<><Navbar /><Category/><Footer /></>} />
       <Route path="/furniture/bedroom/:id" element={<><Navbar /><BedroomSingle /><Footer /></>} />
       <Route path="/furniture/mattresses/:id" element={<><Navbar /><MattressesSingle/><Footer /></>} />
       <Route path="/furniture/living/:id" element={<><Navbar /><LivingRoomSingle/><Footer /></>} />
       <Route path="/cart" element={<><Navbar /><Cart/><Footer /></>}></Route>
       <Route path="/wishlist" element={<><Navbar /><Wishlist/><Footer /></>}></Route>

    </Routes>
  );
};

export default AllRoutes;