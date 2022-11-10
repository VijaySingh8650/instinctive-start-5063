import { Td, Tr } from '@chakra-ui/react'
import React from 'react'
import {useNavigate } from 'react-router-dom'
import styles from "./OrdersTable.module.css";


const OrdersTable = () => {
  const navigate = useNavigate();
  return (
    <Tr className={styles.row} onClick={()=>navigate(`/admin/orders/${1}`)}>
      <Td>order id</Td>
      <Td>Date</Td>
      <Td>Customer Name</Td>
      <Td>Payment status</Td>
      <Td>On The Way</Td>
      <Td>Total</Td>
    </Tr>
  )
}

export default OrdersTable
