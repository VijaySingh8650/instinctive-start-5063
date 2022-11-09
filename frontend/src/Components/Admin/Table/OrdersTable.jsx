import { Td, Tr } from '@chakra-ui/react'
import React from 'react'

const OrdersTable = () => {
  return (
    <Tr>
      <Td>order id</Td>
      <Td>Date</Td>
      <Td>Customer Name</Td>
      <Td>Payment status</Td>
      <Td>Total</Td>
    </Tr>
  )
}

export default OrdersTable
