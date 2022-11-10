import { Box, Button, Input, Text, InputGroup, InputLeftElement } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import styles from "../admin.module.css";
import { SearchIcon } from '@chakra-ui/icons';
import { AddIcon} from '@chakra-ui/icons'

import {
  Table,
  Thead,
  Tbody,

  Tr,
  Th,
  
  TableContainer,
} from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom';





const Products = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.document.title = "Welcome Admin - Products";
  }, []);

  const redirect = () => {
    navigate("/admin/products/newproducts");
  }

  return (
    <Box className={styles.container}>
      <Box  className={styles.heading_products}>
        <Text className={styles.heading}>Products</Text>
        <Button size="sm" className={styles.btn_heading} onClick={redirect}><AddIcon/> <Text> New Products</Text></Button>
      </Box>
      <Box className={styles.containerBox}>
        <Box className={styles.box}>

          <Text className={styles.name}>Filter</Text>
          
        </Box>
        <Box>
          <InputGroup size='sm'>
            <InputLeftElement  pointerEvents='none' children={<SearchIcon color="gray.600"/>} />
            <Input type='tel' placeholder='Search...' borderRadius={"1rem"}/>
          </InputGroup>
        </Box>
      </Box>


      
      <Box>
        <TableContainer>
          <Table size='sm'>
            <Thead>
              <Tr>
                <Th>Name</Th>
                <Th>Collection</Th>
                <Th>Status</Th>
                <Th>Inventory</Th>
                <Th>Edit</Th>
                
              </Tr>
            </Thead>
            <Tbody>
              
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  )
}

export default Products
