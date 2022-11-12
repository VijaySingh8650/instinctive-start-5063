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
import ProductsTable from '../../../Components/Admin/Table/ProductsTable/ProductsTable';
import { useDispatch, useSelector } from 'react-redux';
import { getProductsAdminSide } from '../../../Store/Admin/products.action';
import Pagination from './Pagination';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';





const Products = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {adminProducts} = useSelector(store=>store.adminProducts);
  const { products, total } = adminProducts;
  const [limit, setLimit] = useState(4);
  const [seacrhParams, setSearchParams] = useSearchParams();
  const initialPageNumber = Number(seacrhParams.get("page")) || 1;
  const [page, setPage] = useState(initialPageNumber);


  useEffect(() => {
    window.document.title = "Welcome Admin - Products";
    
    
  }, []);

  useEffect(() => {
    dispatch(getProductsAdminSide({ page, limit }));
  }, [page, dispatch]);

  useEffect(() => {
    setSearchParams({
      page,
      limit: limit
    })
  }, [page, limit]);

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
          <Table size='sm' height={"200px"}>
            <Thead>
              <Tr>

                
                <Th>Name</Th>
                <Th>SubName</Th>
                <Th>Price</Th>
                <Th>Created At</Th>
                
              </Tr>
            </Thead>
            <Tbody>
              {products?.map((product) => {
                const { _id } = product;
                return <ProductsTable key={_id} {...product} />
             })}
              
            </Tbody>
          </Table>
        </TableContainer>
      </Box>

      {/* Pagination for products */}
      <Pagination page={page} setPage={setPage} total={total} limit={limit} />
    </Box>
  )
}

export default Products
