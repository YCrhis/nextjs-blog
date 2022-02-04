import Article from "../../components/layout/article"
import { Box, Container } from "@chakra-ui/layout"
import { Button, Flex, Text, Grid, UnorderedList, ListItem, Image, Badge } from "@chakra-ui/react"
import { ChevronRightIcon } from '@chakra-ui/icons'
import Link from 'next/link'
import Paragraph from "../../components/paragraph"

const Provee = () => {
    return (
        <Article title="ProveePyme">
            <Container maxW="container.md">
                <Flex align="center">
                    <Link href="/work">
                        <Button color="pink.500" variant="link">
                            Works
                        </Button>
                    </Link>
                    <ChevronRightIcon boxSize="20px" />
                    <Text fontSize="20px" fontWeight="bolder">Provee Pyme</Text>
                </Flex>
                <Box p="3">
                    <Paragraph>This is the most recent application where I have worked, basically what the application does is help large and small companies to be able to relate, giving talks and / or holding events where anyone can participate.<br /><br />This application helps a lot if you want to make any type of contact with any type of company (large, small or medium), you only need to send a request to be able to work with other companies, it is in this way that the company can grow.
                        <br />
                        <br />
                        I was working as Frontend in these project, i made some styles and create the page to that will be friendly to everybody
                    </Paragraph>
                    <Box mt="5">
                        <Box ml="5">
                            <UnorderedList>
                                <ListItem mb="3">
                                    <Badge colorScheme="green" mr="3">Used technology:</Badge>
                                    <span>React- React Context  - Material UI</span>
                                </ListItem>
                            </UnorderedList>
                        </Box>
                        <Box p="8" align="center">
                            <Badge colorScheme="gray" fontSize="18px" mb="7">Images: </Badge>
                            <Image
                                width="80%"
                                src="/images/provee/image1.PNG"
                                mb="3"
                                borderRadius="20"
                            />
                            <Image
                                width="80%"
                                src="/images/provee/image2.PNG"
                                mb="3"
                                borderRadius="20"
                            />
                            <Image
                                width="80%"
                                src="/images/provee/image3.PNG"
                                mb="3"
                                borderRadius="20"
                            />
                            <Image
                                width="80%"
                                src="/images/provee/image4.PNG"
                                mb="3"
                                borderRadius="20"
                            />
                        </Box>
                    </Box>
                </Box>
            </Container>
        </Article>
    )
}
export default Provee