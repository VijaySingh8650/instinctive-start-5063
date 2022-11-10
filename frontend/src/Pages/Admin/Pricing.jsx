import React from 'react'
import { Box, Button, Container, Flex, Icon, Input, InputGroup, InputLeftElement, Menu, MenuButton, MenuItem, MenuList, Table, TableContainer, Tbody, Td, Th, Thead, Tr, } from "@chakra-ui/react"
import { AddIcon, PlusSquareIcon, SearchIcon ,EditIcon, ChevronDownIcon, DeleteIcon, CopyIcon, SmallCloseIcon} from '@chakra-ui/icons'

const Pricing = () => {
   
    return (
         
        
        <Container maxW='95%'>
             
            <Flex justifyContent="space-between" mt={6}>

                <Box>Price List</Box>
                <Button gap={"0.5rem"}><AddIcon />Add price list</Button>

            </Flex>

            <Flex justifyContent="space-between" mt={6}>
                <Box>
                    <Button >filters 0</Button><Button ml={2}><PlusSquareIcon /></Button></Box>
                <Box>
                    {/* <SearchIcon/> */}
                    <InputGroup size='md' b={0}>
                        <InputLeftElement width='4.5rem' mr={"0.5rem"}>
                            {/* <Button h='1.75rem' size='sm' > */}
                            <SearchIcon />
                            {/* </Button> */}
                        </InputLeftElement>
                        <Input
                           
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
                            <Th>Name</Th>
                            <Th>Description</Th>
                            
                            <Th >Status</Th>
                            <Th >Groups</Th>
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
                            
                            <Menu>
                                 <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                                 <EditIcon/>
                                 </MenuButton>
                                 <MenuList>
                                   <MenuItem><EditIcon/>Edit</MenuItem>
                                   <MenuItem><SmallCloseIcon/>Unpublish</MenuItem>
                                   <MenuItem ><CopyIcon/>Duplicate</MenuItem>
                                   <MenuItem color={"red.500"}><DeleteIcon />Delete</MenuItem>
    
                                 </MenuList>
                               </Menu>
                            
                            </Td>
                            
                        </Tr>


                    </Tbody>

                </Table>
            </TableContainer>

        </Container>

    )
}

export default Pricing