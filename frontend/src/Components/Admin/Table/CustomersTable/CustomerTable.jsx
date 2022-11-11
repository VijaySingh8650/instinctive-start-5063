import { Td, Tr } from '@chakra-ui/react'
import React from 'react'
import {useNavigate } from 'react-router-dom'
import styles from "./CustomerTable.module.css";


const CustomerTable = () => {
  const navigate = useNavigate();
  return (
    <Tr className={styles.row} onClick={()=>navigate(`/admin/orders/${1}`)}>
      <Td>Vijay</Td>
      <Td>v@gmail.com</Td>
      <Td>2</Td>
    </Tr>
  )
}

export default CustomerTable
