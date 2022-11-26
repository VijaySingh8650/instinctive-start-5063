import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton , Button, Container, FormControl, FormLabel, Input, Box, Select, FormHelperText, InputLeftAddon, InputGroup} from '@chakra-ui/react';
import { useEffect, useRef, useState } from 'react';
import styles from "./addAddress.module.css";
import countries from "./countries";
import { useToast } from '@chakra-ui/react'
import axios from 'axios';
import { useSelector } from 'react-redux';

function BasicUsage({ show, setShow,getTheAddress }) {
  const toast = useToast();
  const [addressData, setAddressData] = useState({ name: "", contact_number: "", house_number: "", block_no: "", city: "", mail: "", country: "", pin_code:"" });
  const [cityByCountry, setCityByCountry] = useState("");
  const [checkRef, setCheckRef] = useState(false);
  const ref = useRef(""); 
  const { accessToken } = useSelector(store => store.auth);
  
  const handleCountry = (e) => {
    setCityByCountry(e.target.value);
   }
   
  
  useEffect(() => {
      
      if (cityByCountry) {
        ref.current = countries.filter((country) => country.country === cityByCountry);
       
        setCheckRef(!checkRef);
    } 
        

  },[cityByCountry]);
  
  const postTheAddress = async(addressData) => {
    try{
      let res = await axios.post(`${process.env.REACT_APP_URL}/api/address`,addressData, {
            headers: {
                authorization:accessToken
            }
      });
      getTheAddress();
      console.log(res);
    }
    catch (err) {
      console.log({error:err.message})
    }
  }
  
  const handleChange = (e) => {
    const { value, name } = e.target;
    setAddressData({ ...addressData, [name]: value });
  }
 
  const handleClickAddress = () => {

    if (addressData.name === "" || addressData.house_number === "" || addressData.city === "" || addressData.contact_number.length!==10 || addressData.country !== "India" || addressData.mail === "" || addressData.pin_code.length!==6) {
     return  toast({
          title: (!addressData.name && "Name is required") || (addressData.contact_number.length!==10 && "Contact number must of 10 digits") || (addressData.country!=="India" && "We deliver only in India") || (!addressData.city && "City is required")   || (!addressData.mail && "Email is required") || (addressData.pin_code.length!==6 && "Pin Code must be of 6 digits only") || (!addressData.house_number && "House Number is required"),
          status: 'error',
          position:"top",
          duration: 2000,
          isClosable: true,
        })
    }
    setShow(false);
    postTheAddress(addressData);
    toast({
      title: "Address added successfully",
      status: 'success',
      position:"top",
      duration: 2000,
      isClosable: true,
      
      
    })
  }
  
  
  return (
    <>
      

      <Modal  height="auto" size="3xl" isCentered isOpen={show} onClose={()=>setShow(false)}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader >Address</ModalHeader>
          <ModalCloseButton  />
          <ModalBody>
            <Container mt="-1rem">
                <FormControl isRequired>
                  <FormLabel mb=".1rem">Your Name</FormLabel>
                  <Input type="text" name="name" placeholder='Your Name' onChange={handleChange} />
                </FormControl>
                <FormControl isRequired>
                  
                    <FormLabel mb=".1rem">Contact Number</FormLabel>
                    <InputGroup>
                      <InputLeftAddon children='+91' />
                      <Input type="number" name="contact_number" placeholder='Your Contact Number' onChange={handleChange} />
                    </InputGroup>
                </FormControl>
                <Box className={styles.house_block}>
                    
                    <FormControl isRequired>
                        <FormLabel mb=".1rem">House Number</FormLabel>
                        <Input type="text" name="house_number" placeholder='House Number' onChange={handleChange} />
                    </FormControl>
                    <FormControl >
                        <FormLabel mb=".1rem">Block Number</FormLabel>
                        <Input type="text" name="block_no" placeholder='Block Number' onChange={handleChange} />
                    </FormControl>
                              
                </Box>
                <Box className={styles.house_block}>
                    <FormControl isRequired>
                        <FormLabel mb=".1rem">Country</FormLabel>
                  <Select name="country" placeholder='Country' onChange={(e) => {
                    handleCountry(e);
                    handleChange(e);
                        }}  >
                        {countries.map((country, index) => {
                        
                            return <option value={country.country} key={index}>{country.country}</option>
                        })}
                        </Select>
                    </FormControl>
                   
                    <FormControl isRequired>
                        <FormLabel mb=".1rem">City</FormLabel>
                        <Select name="city" placeholder='City' onChange={handleChange} >
                        {ref.current[0]?.cities.map((city, index) => {
                            return <option value={city} key={index}>{city}</option>
                        })}
                        </Select>
                    </FormControl>
                    
                     
                    
                              
                </Box>
                <Box className={styles.house_block}>
                <FormControl isRequired>
                    <FormLabel mb=".1rem">Email</FormLabel>
                    <Input name="mail" type="email" placeholder='Your Email' onChange={handleChange}  />
                </FormControl>
                <FormControl isRequired>
                        <FormLabel mb=".1rem">Pin Code (6 digits)</FormLabel>
                        <Input name="pin_code" type="number" placeholder='Pin Code' onChange={handleChange} />
                    </FormControl>
                </Box>
            </Container>
          </ModalBody>
            
          <ModalFooter mt="-1rem">
            <Button color="white" bgColor="#d5a249" _hover={{ bgColor: "#d5a249" }} onClick={handleClickAddress}>
              Save
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
export default BasicUsage;