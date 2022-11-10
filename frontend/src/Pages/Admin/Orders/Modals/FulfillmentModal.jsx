import { Box,Text,Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay , Image} from '@chakra-ui/react'
import React from 'react'
import styles from "./FulfillmentModal.module.css";
import { Checkbox } from '@chakra-ui/react';
import { Textarea } from '@chakra-ui/react'

const FulfillmentModal = ({fullModal,setFullModal}) => {
    
  return (
    <>
     

      <Modal isOpen={fullModal} onClose={()=>setFullModal(false)} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create Fulfillment</ModalHeader>
          <ModalCloseButton />
          <ModalBody mt="-1rem">
            <Text fontWeight="600" mb="1rem" fontSize="1rem">Items</Text>
            <hr />
            <Box className={styles.heading}>
              <Text className={styles.heading_text}>Products</Text>
              <Text className={styles.heading_text}>Quantity</Text>
            </Box>
            <hr />
            
            {/* Products Details */}
              <Box className={styles.box}>
              <Box className={styles.box1}>
                 <Checkbox></Checkbox>
                  <Image className={styles.productsImage} src="https://medusa-public-images.s3.eu-west-1.amazonaws.com/bottle.png" alt="Products"/>
                  <Box>
                  
                    <Text className={styles.box1_name}>Bottles</Text>
                    <Text className={styles.box1_name}>M</Text>
                  </Box>
                </Box>
                
                <Text className={styles.box2_name} color="#4d4e4f">3</Text>
                   
              </Box>
              {/* Text Area */}
              <Box>
                <Textarea size="sm" variant="filled" placeholder='Lets make the customer upto date' />
              </Box>
         
          </ModalBody>

          <ModalFooter>
            <Button  size="sm"  bg="black" color="white" _hover={{ bg: "#ffffff", color:"#000000", stroke: "#0020b1" }}>Complete</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default FulfillmentModal
