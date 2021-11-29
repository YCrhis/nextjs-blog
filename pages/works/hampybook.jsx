import Article from "../../components/layout/article"
import { Box, Container } from "@chakra-ui/layout"
import { Button, Flex, Text, UnorderedList, ListItem, Image, Badge } from "@chakra-ui/react"
import { ChevronRightIcon } from '@chakra-ui/icons'
import Link from 'next/link'
import Paragraph from "../../components/paragraph"


const Hampybooks = () => {
    return (
        <Article title="HampyBook">
            <Container maxW="container.md">
                <Flex align="center">
                    <Link href="/work">
                        <Button color="pink.500" variant="link">
                            Works
                        </Button>
                    </Link>
                    <ChevronRightIcon boxSize="20px" />
                    <Text fontSize="20px" fontWeight="bolder">HampyBook</Text>
                </Flex>
                <Box p="3">
                    <Paragraph>This is a presentation page of a book dedicated to health, for this web page only needed some technologies to make the views and purchases within it. <br /><br />
                        The project contains animations and transitions that help make the web page more user-friendly.
                    </Paragraph>
                    <Box mt="5">
                        <Box ml="5">
                            <UnorderedList>
                                <ListItem mb="3">
                                    <Badge colorScheme="green" mr="3">Used technology:</Badge>
                                    <span>Html - Css - JavaScript - AnimateCSS - WOWJS</span>
                                </ListItem>
                                <ListItem>
                                    <Badge colorScheme="pink" mr="3">Link to repository:</Badge>
                                    <Link href="https://www.hampibooks.com/"><a className="link">https://www.hampibooks.com/</a></Link>
                                </ListItem>
                            </UnorderedList>
                        </Box>
                        <Box p="8" align="center">
                            <Badge colorScheme="gray" fontSize="18px" mb="7">Images: </Badge>
                            <Image
                                width="80%"
                                src="/images/Hampy.PNG"
                                mb="3"
                                borderRadius="20"
                            />
                            <Image
                                width="80%"
                                src="/images/hampy2.PNG"
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
export default Hampybooks