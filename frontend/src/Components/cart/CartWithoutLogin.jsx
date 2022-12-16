import {
  Box,
  Button,
  Flex,
  Image,
  Input,
  Select,
  Text,
} from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { AiFillDelete } from 'react-icons/ai';
import styles from './CartDetails.module.css';
import { Link } from 'react-router-dom';

const CartWithoutLogin = ({ cartItem, deletCartItem }) => {
    const { price, quantity, size, productId } = cartItem;
    console.log(cartItem);
  return (
    <>
      <Box
        className={styles.box}
        m="0  1rem 1rem 1rem"
        boxShadow=""
        borderRadius={'1rem'}
        p="1rem"
      >
        <Flex justifyContent="space-between" gap="1rem">
          <Link
            to={`/${productId.set.toLowerCase()}/${productId.subSet
              .split(' ')[0]
              .toLowerCase()}/${productId._id}`}
          >
            <Image
              h={[100, 150, 200]}
              src={productId.images[0]}
              alt="cartImage"
            />
          </Link>
          <Box width="70%">
            <Text>{productId.heading}</Text>

            {/* Size and quantity of products */}
            <Flex m="1rem 0" alignItems="center" gap="2rem">
              <Flex gap="1rem" alignItems={'center'}>
                <Text fontWeight="600" color="#bf9850">
                  Price : ₹{' '}
                  {price
                    .toString()
                    .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')}
                </Text>
              </Flex>
              <Flex gap="1rem" alignItems={'center'}>
                <Text fontWeight="600">Size : {size ? size : 'Default'}</Text>
              </Flex>
              <Flex gap="1rem" alignItems={'center'}>
                <Text fontWeight="600">Qty : {quantity}</Text>
              </Flex>
            </Flex>

            {/* total price */}
            <Flex m="1rem 0" alignItems="center" gap="2rem">
              <Text fontWeight="600" color="#bf9850">
                Total : ₹{' '}
                {(quantity*price)
                  .toString()
                  .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')}
              </Text>
            </Flex>
          </Box>
        </Flex>
        <Box className={styles.delete}>
          <Button
            variant={'outline'}
            color="#bf9850"
            gap=".5rem"
            onClick={() => deletCartItem(productId._id)}
          >
            <AiFillDelete pr="1rem" />
            Delete
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default CartWithoutLogin;
