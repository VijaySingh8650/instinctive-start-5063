import { Box, Button, Input, InputGroup, InputLeftAddon, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure } from "@chakra-ui/react"
import { AddIcon, MinusIcon, RepeatClockIcon } from '@chakra-ui/icons'
import styles from "./RefundModal.module.css";
import { useState } from "react";

export default function RefundModal({ showModal, setShowModal }) {

    const [count,setCount] = useState(0);
  
  return (
    <>
     

      <Modal isOpen={showModal} onClose={()=>setShowModal(false)} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create a refund</ModalHeader>
          <ModalCloseButton />
          <ModalBody mt="-1rem">
           <Text fontWeight="600" mb="1rem" fontSize="1rem">Details</Text>
           
           {/* first Box */}
           <Box className={styles.box}>
              <Box className={styles.box1}>
                <Text className={styles.box1_text1}>Currency</Text>
                <Text className={styles.box1_text2}>Rupees</Text>
              </Box>
              <Box className={styles.box2}>
                {/* <InputGroup size='sm'>
                  <InputLeftAddon />
                  <Input placeholder='mysite' />
                  
                </InputGroup> */}
                <Text className={styles.box1_text2}>Refund Amount</Text>
                <Box className={styles.box2_input}>
                    <InputGroup size="sm" variant="unstyled">
                      <InputLeftAddon children='₹' pr=".3rem"/>
                      <Input value={count} type='number' placeholder="0.00" onChange={(e)=>setCount(+e.target.value)}/>
                    </InputGroup>
                    <Box className={styles.box2_input_icons}>
                        <Button size="xs" isDisabled={count===0} onClick={()=>setCount(count-1)}>
                                          
                        <MinusIcon className={styles.box2_input_icons1} />
                        
                        </Button>
                        <Button size="xs" onClick={()=>setCount(count+1)}>
                                          
                          <AddIcon  className={styles.box2_input_icons1} />
                          
                        </Button>
                        <Button size="xs" onClick={()=>setCount(0)}>
                                          
                          <RepeatClockIcon className={styles.box2_input_icons1} />
                          
                        </Button>
                    </Box>
                </Box>
              </Box>
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