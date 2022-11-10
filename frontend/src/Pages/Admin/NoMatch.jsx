import { Box } from '@chakra-ui/react'
import React, { useEffect } from 'react'

const NoMatch = () => {

  useEffect(() => {
    window.document.title = "Welcome Admin - something went wrong";
  }, [])

  return (
    <Box>
       404 | Not Found
    </Box>
  )
}

export default NoMatch
