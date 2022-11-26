import { Box , Button, Image, Radio, RadioGroup, SimpleGrid, Text, useToast} from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import BasicUsage from './AddressModal';
import styles from "./addAddress.module.css";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import Home from "./Images/Home.gif";
import {useNavigate } from 'react-router-dom';

const AddAddress = () => {
  const navigate = useNavigate()
  const toast = useToast();
  const [value, setValue] = React.useState("");
  const [show, setShow] = useState(false);
  const [address, setAddress] = useState([]);
  const { accessToken } = useSelector(store => store.auth);

  const getTheAddress = async() => {
    try{
      let res = await axios.get(`${process.env.REACT_APP_URL}/api/address`, {
            headers: {
                authorization:accessToken
            }
      });
      setAddress(res.data.data);
      console.log(res.data.data);
    }
    catch (err) {
      console.log({error:err.message})
    }
  }

  useEffect(() => {
    getTheAddress();
  },[])



  const deleteTheAddress = async(id) => {
     try{
      let res = await axios.delete(`${process.env.REACT_APP_URL}/api/address/${id}`, {
            headers: {
                authorization:accessToken
            }
      });
      
       console.log(res);
       toast({
         title: "Address Deleted",
         position: "top",
         status: 'success',
        position:"top",
        duration: 2000,
        isClosable: true,
         
       });
       getTheAddress();
    }
    catch (err) {
      console.log({error:err.message})
    }
  }
  
  return (
    <Box p="9rem 1rem 0rem 1rem" className={styles.container}>
      <Box className={styles.btn_address}>
         <Button color="white" bgColor="#d5a249" _hover={{ bgColor: "#d5a249" }} onClick={() => setShow(true)}>Add Address</Button>
         
        {show && <BasicUsage show={show} setShow={setShow} getTheAddress={getTheAddress} />}
         
        <Button color="white" bgColor="#d5a249" _hover={{ bgColor: "#d5a249" }}
        isDisabled={address.length===0} onClick={()=>navigate("/payment")}>Proceed To Payment</Button>
      </Box>
      
      
        {
        address?.length === 0 ? <Box className={styles.address_empty}>
          <Box >
           <Image w={[120,150,200]} h={[120,150,200]}  src={Home} alt="home"/>
          </Box>
          
        </Box> :
           <SimpleGrid columns={["1","2","4"]} gap="1rem" m="1rem 0">
            {address?.map((ele) => {
              const { name, house_number, block_no, mail, contact_number, city, country, pin_code, _id } = ele;
              return <Box key={ele._id} className={styles.box}>
                <Box className={styles.box_child}>

                  <Box onClick={() => console.log(_id)}>
                    <RadioGroup onChange={setValue} value={value}>
                  
                      <Radio value={_id}>Select Address</Radio>
                      
                  
                    </RadioGroup>
                  </Box>
                  <Box>
                    <EditIcon className={styles.box_child_child} />
                    <DeleteIcon onClick={() => deleteTheAddress(_id)} className={styles.box_child_child} />
                  </Box>
                
                </Box>
                <Text>{name}</Text>
                <Text>{house_number}, {block_no && `Block:- ${block_no}`}</Text>
                <Text>{city}{" "},{country}{" "},{pin_code}</Text>
                <Text>+91-{contact_number}</Text>
                <Text>Mail:-{mail}</Text>

              </Box>
            })}
         </SimpleGrid>
        }
    </Box>
  )
}

export default AddAddress;
