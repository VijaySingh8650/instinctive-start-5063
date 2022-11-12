import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Customers from '../../Pages/Admin/Customers/Customers'
import Discounts from '../../Pages/Admin/Discounts'
import GiftCards from '../../Pages/Admin/GiftCards'
import NoMatch from '../../Pages/Admin/NoMatch'
import Orders from '../../Pages/Admin/Orders/Orders'
import OrdersCustomer from '../../Pages/Admin/Orders/OrdersDetails'
import Pricing from '../../Pages/Admin/Pricing'
import NewProducts from '../../Pages/Admin/Products/NewProducts'
import Products from '../../Pages/Admin/Products/Products'
import Setting from '../../Pages/Admin/Setting'
import PriceIn from '../../Pages/Admin/PriceIn'
import DiscountIn from '../../Pages/Admin/DiscountIn'

const Router = () => {
  return (
    <Routes>
       
              <Route path={"/"} element={<Navigate to="/admin/orders"/>}/>   
              <Route path={"/orders"} element={<Orders/>} />   
              <Route path={"/orders/:id"} element={<OrdersCustomer/>} /> 
                
              <Route path="/products" element={<Products/>} />   
              <Route path="/products/newproducts" element={<NewProducts/>} />   
              
              <Route path="/pricing" element={<Pricing/>} />   
              <Route path="/setting" element={<Setting/>} />   
              <Route path="/giftcards" element={<GiftCards/>} />   
              <Route path="/discounts" element={<Discounts/>} />   
              <Route path="/customers" element={<Customers/>} />   
              <Route path="/priceinner" element={<PriceIn/>} />   
              <Route path="/discountinner" element={<DiscountIn/>} />   
              <Route path="/*" element={<NoMatch/>} />   
     
    </Routes>
  )
}

export default Router
