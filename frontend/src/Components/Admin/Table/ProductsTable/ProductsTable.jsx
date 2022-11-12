import { Td, Tr } from '@chakra-ui/react'
import React from 'react'

import styles from "./ProductsTable.module.css";


const ProductsTable = () => {
  
  return (
    <Tr className={styles.row}>
      <Td>order id</Td>
      <Td>Date</Td>
      <Td>Customer Name</Td>
      <Td>Payment status</Td>
      <Td>On The Way</Td>
      
    </Tr>
  )
}

export default ProductsTable
