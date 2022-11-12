import React from 'react'
import { Box, Button, Text } from "@chakra-ui/react";
import {ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons'
import styles from "./NewProducts.module.css";


const Pagination = ({ setPage, page, total, limit }) => {
    console.log(total / limit)
    const totalPage = Math.ceil(total / limit);
  return (
    <Box className={styles.box_pagination}>
          <Text>{`${page} of ${totalPage} Pages`}</Text>
        <Box >
           <Button mr="1rem" size="xs" onClick={() => setPage(page - 1)} disabled={page===1}><ChevronLeftIcon className={styles.icon_pagination} /></Button>
          
      <Button size="xs"  onClick={()=>setPage(page+1)} disabled={page===totalPage}><ChevronRightIcon className={styles.icon_pagination}/></Button>    
        </Box>
       
    </Box>
  )
}

export default Pagination
