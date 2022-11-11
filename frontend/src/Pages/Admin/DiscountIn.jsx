import { AddIcon, MinusIcon } from '@chakra-ui/icons'
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Button, Center, Container, Flex, Input, Radio, Select, Text } from '@chakra-ui/react'
import React from 'react'

const DiscountIn = () => {
    return (
        <Container maxW={"95%"}>
            <Box>
                <Flex justifyContent={"space-around"}>
                    <Button>X</Button>
                    <Box><Button mr={2}>Save as draft</Button><Button colorScheme='blue'>Publish discount</Button></Box>
                </Flex>
            </Box>
            <Text fontSize='x-large'>Create new Discount</Text>

            <Accordion allowMultiple>


                <AccordionItem>
                    {({ isExpanded }) => (
                        <>
                            <h2>
                                <AccordionButton>
                                    <Box flex='1' textAlign='left' fontSize='x-large'>
                                        Discount Type
                                    </Box>
                                    {isExpanded ? (
                                        <MinusIcon fontSize='12px' />
                                    ) : (
                                        <AddIcon fontSize='12px' />
                                    )}
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                <Flex gap={8}>

                                    <Flex><Box boxShadow='xs' p='8 ' pl='2rem' rounded='md' bg='white'><Radio /><Text>Percentage</Text><Text>Discount applied in %</Text></Box><Box></Box><Box></Box></Flex>
                                    <Flex><Box boxShadow='xs' p='6' pl='2rem' rounded='md' bg='white'><Radio /><Text>Percentage</Text><Text>Discount applied in %</Text></Box><Box></Box><Box></Box></Flex>
                                    <Flex><Box boxShadow='xs' p='6' pl='2rem' rounded='md' bg='white'><Radio /><Text>Percentage</Text><Text>Discount applied in %</Text></Box><Box></Box><Box></Box></Flex>
                                </Flex>

                            </AccordionPanel>
                        </>
                    )}
                </AccordionItem>
                <AccordionItem>
                    {({ isExpanded }) => (
                        <>
                            <h2>
                                <AccordionButton>
                                    <Box flex='1' textAlign='left' fontSize='x-large'>
                                        General
                                    </Box>
                                    {isExpanded ? (
                                        <MinusIcon fontSize='12px' />
                                    ) : (
                                        <AddIcon fontSize='12px' />
                                    )}
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                <Select placeholder='Choose Valid Regions'>
                                    <option value='india'>India</option>
                                    <option value='us'>United State</option>
                                    <option value='china'>China</option>
                                </Select>
                                <Flex justifyContent={"space-around"} textAlign='left' gap={2} mt={2}><Box maxW={"35rem"} bg='gray.100' boxShadow='xs' p='4 ' pl='2rem' rounded='md'><Text>Code</Text><Input placeholder='SUMERSALE10' /></Box><Box boxShadow='xs' p='4 ' pl='2rem' rounded='md' bg='gray.100'><Text>Percentage</Text><Input placeholder='%' /></Box></Flex>

                                <Text>The code your customers will enter during checkout. This will appear on your customer’s invoice.
                                    Uppercase letters and numbers only.</Text>

                                <Box boxShadow='xs' p='4 ' pl='2rem' rounded='md' bg='gray.100'><Text>Description</Text><Input maxW={"15rem"} placeholder='Summer Sale 2022...' /></Box>
                            </AccordionPanel>
                        </>
                    )}

                </AccordionItem>
                <AccordionItem>
                    {({ isExpanded }) => (
                        <>
                            <h2>
                                <AccordionButton>
                                    <Box flex='1' textAlign='left' fontSize='x-large'>
                                        Configuration
                                    </Box>
                                    {isExpanded ? (
                                        <MinusIcon fontSize='12px' />
                                    ) : (
                                        <AddIcon fontSize='12px' />
                                    )}
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                <Text>Discount code applies from you hit the publish button and forever if left untouched.</Text>


                                <Container mt={4} maxW={"90%"}><Flex justifyContent="space-between"><Box><Text fontSize='2xl'>Start date</Text><Text>Schedule the discount to activate in the future.</Text></Box><Radio></Radio></Flex></Container>
                                <Container mt={4} maxW={"90%"}><Flex justifyContent="space-between"><Box><Text fontSize='2xl'>Discount has an expiry date?
                                </Text><Text>Schedule the discount to activate in the future.</Text></Box><Radio></Radio></Flex></Container>
                                <Container mt={4} maxW={"90%"}><Flex justifyContent="space-between"><Box><Text fontSize='2xl'>Limit the number of redemptions?</Text><Text>Schedule the discount to activate in the future.</Text></Box><Radio></Radio></Flex></Container>


                            </AccordionPanel>
                        </>
                    )}
                </AccordionItem>
                <AccordionItem>
                    {({ isExpanded }) => (
                        <>
                            <h2>
                                <AccordionButton>
                                    <Box flex='1' textAlign='left' fontSize='x-large'>
                                        Conditions
                                    </Box>
                                    {isExpanded ? (
                                        <MinusIcon fontSize='12px' />
                                    ) : (
                                        <AddIcon fontSize='12px' />
                                    )}
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>


                                <Box boxShadow='xs' p='8 ' pl='2rem' rounded='md' bg='gray.100'><Text>Discount code apply to all products if left untouched.</Text><Center><Button><span><AddIcon mr={4}/></span>Add Condition</Button></Center></Box>
                                <Box></Box>

                            </AccordionPanel>
                        </>
                    )}
                </AccordionItem>
            </Accordion>
        </Container>
    )
}

export default DiscountIn