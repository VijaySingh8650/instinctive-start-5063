
import {Box,Text ,Button, Container, Flex, Icon, Input, InputGroup, InputLeftElement, Menu, MenuButton, MenuItem, MenuList, Table, TableContainer, Tbody, Td, Th, Thead, Tr, } from "@chakra-ui/react"
import { AddIcon, PlusSquareIcon, SearchIcon ,EditIcon, ChevronDownIcon, DeleteIcon, CopyIcon, SmallCloseIcon} from '@chakra-ui/icons'

import React from 'react'

const GiftCard = () => {
  return (
   <Container  maxW='95%'>
    <Text fontSize='4xl'>Gift Cards</Text>
    <Text>Manage the Gift Cards of your Medusa store</Text>
     <Box  maxW='49%'mt={"2rem"} boxShadow='xs' p='6' rounded='md' bg='white'>
     <Text fontSize='2xl'>Are you ready to sell your first Gift Card?</Text>
     <Text fontSize='xs'>No Gift Card has been added yet.</Text>
     <Text fontSize='md' color={"blue"}>Create Gift Card</Text>
  </Box>
  <Box  maxW='95%'mt={"2rem"} boxShadow='xs' p='6' rounded='md' bg='white'>
  <Flex justifyContent="space-between" mt={6}>
<Box>
<Text fontSize='2xl'>History</Text>
<Text fontSize='xs'>See the history of purchased Gift Cards</Text>
</Box>
<Button gap={"0.5rem"}><AddIcon />Custome Gift Card</Button>

</Flex>

<Flex justifyContent="space-between" mt={6}>
<Box>
    <Button >filters 0</Button><Button ml={2}><PlusSquareIcon /></Button></Box>
<Box>
    {/* <SearchIcon/> */}
    <InputGroup size='md'>
        <InputLeftElement width='4.5rem' mr={"0.5rem"}>
            {/* <Button h='1.75rem' size='sm' > */}
            <SearchIcon />
            {/* </Button> */}
        </InputLeftElement>
        <Input
            pr='0rem'
            ml={"1rem"}
            type='text'
            placeholder='Search '
        />


    </InputGroup>

</Box>

</Flex>

<TableContainer>
<Table variant='simple'>

    <Thead>
        <Tr>
            <Th>Code</Th>
            <Th>Order</Th>
            <Th >Original Amount</Th>
            <Th >Balance</Th>
            <Th >Created</Th>
        </Tr>
    </Thead>
    <Tbody>
        <Tr>
            <Td>WINTERSALE20</Td>
            <Td>winter sale 2021</Td>
            <Td >20%</Td>
            <Td ><Icon viewBox='0 0 200 200' color='green.500'>
                <path
                    fill='currentColor'
                    d='M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0'
                />
            </Icon>Active</Td>
            <Td >
            
                 <EditIcon/>
            {/* <Menu>
                 <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                 </MenuButton>
                 <MenuList>
                   <MenuItem><EditIcon/>Edit</MenuItem>
                   <MenuItem><SmallCloseIcon/>Unpublish</MenuItem>
                   <MenuItem ><CopyIcon/>Duplicate</MenuItem>
                   <MenuItem color={"red.500"}><DeleteIcon />Delete</MenuItem>

                 </MenuList>
               </Menu> */}
            
            </Td>
            
        </Tr>


    </Tbody>

</Table>
</TableContainer>

  </Box>

   </Container>
  )
}

export default GiftCard