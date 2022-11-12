import { AddIcon, MinusIcon } from '@chakra-ui/icons'
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Button, Center, Container, Flex, Input, Radio, Select, Text } from '@chakra-ui/react'
import React from 'react'

const PriceIn = () => {
  return (
    <Container maxW={"95%"}>
    <Box>
        <Flex justifyContent={"space-around"}>
            <Button>X</Button>
            <Box><Button mr={2}>Save as draft</Button><Button colorScheme='blue'>Publish price list</Button></Box>
        </Flex>
    </Box>
    {/* <Text fontSize='x-large'>Create new Discount</Text> */}

    <Accordion allowMultiple>


        <AccordionItem>
            {({ isExpanded }) => (
                <>
                    <h2>
                        <AccordionButton>
                            <Box flex='1' textAlign='left' fontSize='x-large'>
                                Price list type
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

                            <Flex><Box boxShadow='xs' p='8 ' pl='2rem' rounded='md' bg='white'><RadioGroup defaultValue=''><Radio value='2'><Text>Sale</Text><Text>Use is if you are creating prices for a sale.</Text></Radio></RadioGroup></Box><Box></Box><Box></Box></Flex>
                            <Flex><Box boxShadow='xs' p='6' pl='2rem' rounded='md' bg='white'><RadioGroup defaultValue=''><Radio value='2'><Text>Override</Text><Text>Use this to override prices.</Text></Radio></RadioGroup></Box></Flex>
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
                       <Box maxW={"90%"}  boxShadow='xs' p='2 ' pl='2rem' rounded='md' bg='gray.100'><Text>Name</Text><Input w={"15rem"} placeholder='B 2 B Black Friday...'/></Box>
                       <Box mt={6} maxW={"90%"}  boxShadow='xs' p='2 ' pl='2rem' rounded='md' bg='gray.100'><Text>Description</Text><Input  w={"15rem"} placeholder='For Business partners...'/></Box>
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
                        <Text>The price overrides apply from the time you hit the publish button and forever if left untouched.</Text>


                        <Container mt={4} maxW={"90%"}><Flex justifyContent="space-between"><Box><Text fontSize='2xl'>Price overrides has a start date?</Text><Text>Schedule the price overrides to activate in the future.</Text></Box><Radio></Radio></Flex></Container>
                        <Container mt={4} maxW={"90%"}><Flex justifyContent="space-between"><Box><Text fontSize='2xl'>Price overrides has an expiry date?
                        </Text><Text>Schedule the price overrides to deactivate in the future.</Text></Box><Radio></Radio></Flex></Container>
                        <Container mt={4} maxW={"90%"}><Flex justifyContent="space-between"><Box><Text fontSize='2xl'>Customer availabilty</Text><Text>Specifiy which customer groups the price overrides should apply for.</Text></Box><Radio></Radio></Flex></Container>


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
                                Prices
                            </Box>
                            {isExpanded ? (
                                <MinusIcon fontSize='12px' />
                            ) : (
                                <AddIcon fontSize='12px' />
                            )}
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>

  
                        <Box boxShadow='xs' p='8 ' pl='2rem' rounded='md' bg='gray.100'><Text>You will be able to override the prices for the products you add here</Text><Center><Button><span><AddIcon mr={4}/></span>Add Products Manualy</Button></Center></Box>
                        <Box></Box>

                    </AccordionPanel>
                </>
            )}
        </AccordionItem>
    </Accordion>
</Container>
    )
}

export default PriceIn