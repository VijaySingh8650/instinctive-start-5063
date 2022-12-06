import {  Flex } from '@chakra-ui/react'
import React, { useEffect } from 'react'

const NotFound = () => {

  useEffect(() => {
    window.document.title = "Welcome Admin - something went wrong";
  }, [])

  return (
    <Flex m="auto"  justifyContent={"center"} height="60vh" alignItems={"center"}>
       404 | Not Found
    </Flex>
  )
}

export default NotFound;
