import React from "react";
import { Route, Routes } from "react-router-dom";
import ForgotPassword from "../Pages/Forgot_Password/ForgotPassword";
import SignIn from "../Pages/Signin/Signin";
import SignUp from "../Pages/Signup/Signup";
// import Navbar from '../Components/Admin/Navbar/Navbar';
import Navbar from "../Components/navbar/Navbar";
import Cart from "../Components/cart/Cart";
import SingleProduct from "../Components/singleProduct/SingleProduct";
import ProductPage from "../Components/productpage/ProductPage";
import Footer from "../Components/footer/Footer";
import Category from "../Components/category/Category";

const AllRoutes = () => {
  return (
    <>
   <Routes>
    //   <Route path="/" element={<><Navbar /><ProductPage /><Footer /></>} />
    //   <Route path="/furniture" element={<><Navbar /><Category/><Footer /></>} />
    //   <Route path="/furniture/:id" element={<><Navbar /><SingleProduct/><Footer /></>} />
    //   <Route path="/cart" element={<><Navbar /><Cart/><Footer /></>}></Route>
    // </Routes>
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
