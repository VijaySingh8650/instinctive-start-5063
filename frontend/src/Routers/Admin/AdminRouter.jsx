import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Customers from '../../Pages/Admin/Customers'
import Discounts from '../../Pages/Admin/Discounts'
import GiftCards from '../../Pages/Admin/GiftCards'
import NoMatch from '../../Pages/Admin/NoMatch'
import Orders from '../../Pages/Admin/Orders'
import Pricing from '../../Pages/Admin/Pricing'
import Products from '../../Pages/Admin/Products'
import Setting from '../../Pages/Admin/Setting'

const Router = () => {
  return (
    <Routes>
       
              <Route path={"/"} element={<Navigate to="/admin/orders"/>} />   
              <Route path={"/orders"} element={<Orders/>} />   
              <Route path="/products" element={<Products/>} />   
              <Route path="/pricing" element={<Pricing/>} />   
              <Route path="/setting" element={<Setting/>} />   
              <Route path="/giftcards" element={<GiftCards/>} />   
              <Route path="/discounts" element={<Discounts/>} />   
              <Route path="/customers" element={<Customers/>} />   
              <Route path="/*" element={<NoMatch/>} />   
     
    </Routes>
  )
}

export default Router