import { Box, Text, Image, Button, SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import {FiChevronRight} from "react-icons/fi";
import styles from "./OrdersDetails.module.css";
import { useState } from 'react';
import RefundModal from './Modals/RefundModal';
import FulfillmentModal from './Modals/FulfillmentModal';
import { CheckCircleIcon } from '@chakra-ui/icons'

const OrdersDetails = () => {

  const [showModal, setShowModal] = useState(false);
  const [fullModal, setFullModal] = useState(false);

  return (
    <Box className={styles.parent}>

        {/* BreadCrumb */}
        <Box className={styles.breadcrumb}>
           <Link to="/admin/orders" className={styles.link}>Orders</Link> 
           <FiChevronRight className={styles.breadIcon}/>
           <Text>Order Details</Text>
        </Box>
        
      
      <SimpleGrid columns={["1","1","2"]} width="100%" gap="20px">

          {/* Purchasing details */}
          <Box>
            
          

            {/* Summary */}
            <Box className={styles.container}>
              <Text className={styles.heading}>Summary</Text>
              
              {/* Products Details */}
              <Box className={styles.box}>
                <Box className={styles.box1}>
                  <Image className={styles.productsImage} src="https://medusa-public-images.s3.eu-west-1.amazonaws.com/bottle.png" alt="Products"/>
                  <Text className={styles.box1_name}>Bottles</Text>
                </Box>
                
                <Box className={styles.box2}>
                  <Text className={styles.box2_name} color="#4d4e4f">₹30</Text>
                  <Text className={styles.box2_name} color="#4d4e4f">x3</Text>
                  <Text className={styles.box2_name}>₹90</Text>
                  <Text className={styles.box2_name}>Rupees</Text>
                </Box>
                
                
              </Box>
              
              {/* Total Cost */}
                <Box className={styles.totalCost}>
                  <Text>Subtotal</Text>
                  <Text>₹90</Text>
                </Box>
                
              {/* Shipping charges */}
                  <Box className={styles.totalCost}>
                  <Text>Shipping</Text>
                  <Text>₹20</Text>
                </Box>
                
              {/* Tax */}
                  <Box className={styles.totalCost}>
                  <Text>Tax</Text>
                  <Text>₹0</Text>
                </Box>
                
            
              {/* Total */}
                  <Box className={styles.totalCost}>
                  <Text fontWeight={"600"}>Total</Text>
                  <Text fontWeight={"600"}>₹110</Text>
                  </Box>
                  
            
              {/* Refund */}
                  <Box className={styles.totalCost}>
                  <Text fontWeight={"600"}>Refund</Text>
                  <Text fontWeight={"600"}>₹0</Text>
                  </Box>
                  
              {/* Refund */}
                  <Box className={styles.totalCost}>
                  <Text fontWeight={"600"}>Net Total</Text>
                  <Text fontWeight={"600"}>₹110</Text>
                  </Box>
                  
            
              </Box>
              
              {/* Payment Details */}
              <Box className={styles.container2}>
                <Box className={styles.container2_Payment_first}>
                  <Text className={styles.heading}>Payment</Text>
                  <Box className={styles.container2_Payment_first2}>
                    <Text>Paid</Text>
                    <Button className={styles.container2_Payment_first2_btn} variant='outline' size="sm" onClick={()=>setShowModal(true)}>Refund</Button>
                    {showModal && <RefundModal showModal={showModal} setShowModal={setShowModal} />} 
                  </Box>
                </Box>
                {/* Total */}
                  <Box className={styles.totalCost}>
                  <Text fontWeight={"600"}>Total</Text>
                  <Text fontWeight={"600"}>₹110</Text>
                  </Box>
              </Box>
              
          

              {/* Fulfillment Details */}
              <Box className={styles.container2}>
                <Box className={styles.container2_Payment_first}>
                  <Text className={styles.heading}>Fulfillment</Text>
                  <Box className={styles.container2_Payment_first2}>
                    
                    <Button className={styles.container2_Payment_first2_btn} variant='outline' size="sm" onClick={()=>setFullModal(true)}>Create Fulfillment</Button>
                    {fullModal && <FulfillmentModal fullModal={fullModal} setFullModal={setFullModal} />} 
                  </Box>
                </Box>
                <Text>Let's update the customers with their products...</Text>
              </Box>  
              

          </Box>
          
          {/* Tracking details */}
              
          <Box>
              
              <Box className={styles.container3}>
                <Box>
                  <Text className={styles.heading}>Timeline</Text>
                  <Box className={styles.container3_Traking}>
                    <Box className={styles.container3_Traking_update}>
                     <CheckCircleIcon color="rgb(52 211 153)"/>
                      <Text>Order Placed</Text>
                    </Box>
                    <Text>₹110.00</Text>
                  </Box>
                  <Text fontSize={".8rem"}>Mon, 20 Sep 2021 11:30PM</Text>
                </Box>
              </Box> 
                
          </Box>
      </SimpleGrid>
        
      
    </Box>
  )
}

export default OrdersDetails
