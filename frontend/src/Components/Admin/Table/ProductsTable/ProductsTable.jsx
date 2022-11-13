import { Td, Tr , Text,Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import React from 'react'

import styles from "./ProductsTable.module.css";
import moment from "moment";
import {EditIcon} from '@chakra-ui/icons'

import {FiTrash2, FiEdit3} from 'react-icons/fi';

const ProductsTable = ({set, subSet, price, createdAt, }) => {
  
  return (
    <Tr className={styles.row}>
      
      <Td>{set}</Td>
      <Td>{subSet}</Td>
      <Td>₹ {price.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}</Td>
      <Td>{moment(createdAt).format("MMM Do YY")}</Td>
      <Td>
        <Menu>
          <MenuButton>
            <EditIcon className={styles.icon_products}/>
          </MenuButton>
          <MenuList className={styles.edit_container}>
            <MenuItem className={styles.edit_box}><FiTrash2/> <Text>Delete</Text></MenuItem>
            <MenuItem className={styles.edit_box}><FiEdit3/> <Text>Update</Text></MenuItem>
          </MenuList>
        </Menu>
      </Td>
      
    </Tr>
  )
}

export default ProductsTable
