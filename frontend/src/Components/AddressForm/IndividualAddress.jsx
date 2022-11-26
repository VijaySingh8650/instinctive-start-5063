import { Box, Checkbox, Radio, RadioGroup, Text } from '@chakra-ui/react';
import React, { useState } from 'react'
import styles from "./addAddress.module.css";

const IndividualAddress = ({ data }) => {
    
    const [isChecked, setIsChecked] = useState(false);
    const { _id, name, house_number, city, block_no, country, pin_code, contact_number, mail } = data;
    const [value, setValue] = React.useState(_id);
    
    const handleCheckBox = (e) => {
        
        const { checked } = e.target;
        let checkedvalue = checked ? _id : null;
        console.log(checkedvalue);
        setIsChecked(true)
    }
  return (
      <Box className={styles.box}>
              <Box>
                <RadioGroup  onChange={setValue} value={value}>
                
                    <Radio value={_id}>First</Radio>
                    
                
                </RadioGroup>
              </Box>
              <Text>{name}</Text>
              <Text>{house_number}, {block_no && `Block:- ${block_no}`}</Text>
              <Text>{city}{" "},{country}{" "},{pin_code}</Text>
              <Text>+91-{contact_number}</Text>
              <Text>Mail:-{mail}</Text>
    </Box>
  )
}

export default IndividualAddress
