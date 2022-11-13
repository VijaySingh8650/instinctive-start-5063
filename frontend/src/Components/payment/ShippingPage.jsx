import { useEffect, useState } from "react"
import { PricingTable } from "./PricingTable"
import './shipping.css'
import "./pricingTable.css"
export const Shipping = ({setCurrState}) =>{
    const [shippingAdd, setShippingAdd] = useState([])
    const [cartTotal,setCartTotal] = useState(0) 
    const [showAdd,setShowAdd] = useState(true)
    
    
    //setting data to localstorage
   

  

    //price updation function(updated)
    const priceUpdate = ()=>{
        const cartItems = JSON.parse(localStorage.getItem("srk"))||[]
        setCart(cartItems)
        let total = 0;
        cartItems.forEach(ele=>{
             total += ele.price
        })
        setCartTotal(total)
    }

      //parsing data from localstorage
      const [cart, setCart] = useState([])
      useEffect(()=>{
         //updated
         priceUpdate();
          
      },[])

      // remove item (updated)
      const handleRemove = (_id)=>{

        const remainingItems = cart.filter((item)=> item._id !== _id) 
        setCart(remainingItems)
        localStorage.setItem("srk",JSON.stringify(remainingItems))
        priceUpdate()    
 
     }
    const [address,setAddress] = useState({})
    //parsing address data from local storage
    useEffect(()=>{
        let add = JSON.parse(localStorage.getItem("sephoraAddress"))||[]
        if(add){
            setAddress(add)
            setShowAdd(true)
        }
        else {
            setShowAdd(false)
        }

    },[])
    // console.log(address)

    
    return (
        <div className = "s_page_wrapper">
            <div className = "s_det">
               <div className = "s_shipping_address">
                    <div><span>Shipping Options for</span> <span style = {{color:"rgb(255,51,153)",textDecoration:"underline"}}>{}</span></div>
                    <div>Deliver Address</div>
                    {showAdd?
                    <>
                    <div>Name:<span>{address.name}</span></div> 
                    <div>Address:<span>{address.address}</span></div>
                    <div>PinCode:<span>{address.pincode}</span></div>

                     <div>Mobile Number:<span>{address.number}</span></div> 
                    </> : null
}
               </div>
               {/* updated */}
           {cart.map((ele,i)=>
            <div key = {i} className = "product_det">
                <img className = "image" src = {ele.image_url} alt = "product Img"/>
                <div>
                    <ul style={{listStyle:"none"}}>
                        <li>{ele.brandname}</li>
                        <li><strong>{ele.productName}</strong></li>
                        <li><span>{ele.available}</span></li>
                        <li><strong>Price - {ele.price}/-</strong></li>
                    </ul>
                    {/*  updated */}
                    <button onClick = {()=>handleRemove(ele._id)} id="removebutton">Remove</button>
                </div>
            </div>
           )}
           </div>
           <div className="price_det">
               <div className="promo_code">
                   <img src="https://static.nnnow.com/client/assets/images/promotions/icon_promo.png" alt="" />
                   <span>APPLY PROMO CODE</span>
               </div>
               
              <PricingTable total = {cartTotal}/>
       
               <div className="continue" onClick={()=>setCurrState("payment")}>

                   <span>CONTINUE</span>
               </div>
              
           </div>
        </div>
    )
}