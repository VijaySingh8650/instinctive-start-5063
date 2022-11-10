import { Box, Button, FormControl, FormLabel, Image, Input, InputGroup, InputLeftAddon, Select, Text, Textarea } from '@chakra-ui/react';
import React, {useState} from 'react'
import styles from "./NewProducts.module.css";


const NewProducts = () => {
  
  return (
    <Box className={styles.parent}>

      <Box className={styles.container}>

        {/* Heading */}
        <Box className={styles.heading}>
        <Text className={styles.heading_text1}>General</Text>
        <Text className={styles.heading_text2}>To start selling, all you need is a name, price, and image</Text>
        </Box>

        {/* Details */}
        <Box className={styles.details}>
          <Text className={styles.details_text1}>Details</Text>
          <Text className={styles.details_text2}>Give your product a short and clear name. 50-60 characters is the recommended length for search engines.</Text>
        </Box>


        {/* Description */}
          <FormControl isRequired>
            <Box className={styles.desc}>
              <Box>
                <FormLabel mt="1rem">Name</FormLabel>
                <Input type='text' placeholder='Furniture, Outdoor, Decor...' mb="1rem"/>
              </Box>
              <Box>
                <FormLabel mt="1rem">Price</FormLabel>
                <Input type='text' placeholder='Price...' mb="1rem"/>
              </Box>
              
              <Box>
                <FormLabel mt="1rem">Category</FormLabel>
                <Select placeholder='Choose the category'>
                  <option value='Furniture'>Furniture</option>
                  <option value='Rugs'>Rugs</option>
                  <option value='Decor'>Decor</option>
                  <option value='Bedding'>Bedding</option>
                  <option value='Home Improvement'>Home Improvement</option>
                  <option value='Outdoor'>Outdoor</option>
                  <option value='Lighting'>Lighting</option>
                  <option value='Kids & Baby'>Kids & Baby</option>
                </Select>
              </Box>
            </Box>
            <FormLabel mt="1rem">Image</FormLabel>
            <Input type='text' placeholder='Image URL' mb="1rem"/>
            <FormLabel>Description</FormLabel>
            <Textarea  placeholder='Tell us about the product' />
            
          </FormControl>
          
      </Box>
      
    </Box>
  )
}

export default NewProducts
