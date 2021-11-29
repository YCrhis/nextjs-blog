import Article from "../../components/layout/article"
import { Box, Container } from "@chakra-ui/layout"
import { Button, Flex, Text, UnorderedList, ListItem, Image, Badge } from "@chakra-ui/react"
import { ChevronRightIcon } from '@chakra-ui/icons'
import Link from 'next/link'
import Paragraph from '../../components/paragraph'

const YourShop = () => {
    return (
        <Article title="YourShop">
            <Container maxW="container.md">
                <Flex align="center">
                    <Link href="/work">
                        <Button color="pink.500" variant="link">
                            Works
                        </Button>
                    </Link>
                    <ChevronRightIcon boxSize="20px" />
                    <Text fontSize="20px" fontWeight="bolder">YourShop</Text>
                </Flex>
                <Box p="3">
                    <Paragraph>YourShop is an application that I make with the support of my colleagues, this project is about selling clothes online (something similar like an ecommerce), in order to use it you had to register in the application. <br /><br />
                        This application had two views, one that was for a normal user and the other for an administrator type
                    </Paragraph>

                    <Box mt="5">
                        <Box ml="5">
                            <UnorderedList>
                                <ListItem mb="3">
                                    <Badge colorScheme="green" mr="3">Used technology:</Badge>
                                    <span>Html- Css - Bootstrap - JavaScript</span>
                                </ListItem>
                            </UnorderedList>
                        </Box>
                        <Box p="8" align="center">
                            <Image
                                width="80%"
                                src="/images/yourshop.PNG"
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
export default YourShop