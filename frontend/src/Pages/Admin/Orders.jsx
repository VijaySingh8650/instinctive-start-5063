import { Box, Button, Input, Text, InputGroup, InputLeftElement } from '@chakra-ui/react'
import React from 'react'
import styles from "./admin.module.css";
import { SearchIcon } from '@chakra-ui/icons'
import {
  Table,
  Thead,
  Tbody,
  
  Tr,
  Th,

  TableContainer,
} from '@chakra-ui/react'
import OrdersTable from '../../Components/Admin/Table/OrdersTable';






const Orders = () => {
  return (
    <Box className={styles.container}>
      <Text className={styles.heading}>Orders</Text>
      <Box className={styles.containerBox}>
        <Box className={styles.box}>

          <Text className={styles.name}>Filter</Text>
          <Button variant='outline' bg={"#f9fafb"} size="xs" className={styles.btn}>Complete</Button>
          <Button variant='outline' bg={"#f9fafb"} size="xs" className={styles.btn}>Incomplete</Button>
          
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
                <Th>Order</Th>
                <Th>Date</Th>
                <Th>Customer</Th>
                <Th>Payment Status</Th>
                <Th>Total</Th>
                
              </Tr>
            </Thead>
            <Tbody>
              {/* {data?.map((order) => {
                const { _id } = order;
                return <OrdersTable key={_id} />
              })} */}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  )
}

export default Orders
