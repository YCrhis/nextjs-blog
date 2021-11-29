import Article from "../../components/layout/article"
import { Box, Container } from "@chakra-ui/layout"
import { Button, Flex, Text, UnorderedList, ListItem, Image, Badge } from "@chakra-ui/react"
import { ChevronRightIcon } from '@chakra-ui/icons'
import Link from 'next/link'
import Paragraph from "../../components/paragraph"

const Games = () => {
    return (
        <Article title="Games">
            <Container maxW="container.md">
                <Flex align="center">
                    <Link href="/work">
                        <Button color="pink.500" variant="link">
                            Works
                        </Button>
                    </Link>
                    <ChevronRightIcon boxSize="20px" />
                    <Text fontSize="20px" fontWeight="bolder">Games</Text>
                </Flex>
                <Box p="3">
                    <Paragraph>This is a small project that I have been working on recently. In this one I am creating games that will keep you entertained for at least a couple of minutes. At the moment there are only two games but in the future I will add more games.
                        <br /><br />
                        The technology used in this project is simple, I made it to practice my abilities and it's like my hobby
                    </Paragraph>
                    <Box mt="5">
                        <Box ml="5">
                            <UnorderedList>
                                <ListItem mb="3">
                                    <Badge colorScheme="green" mr="3">Used technology:</Badge>
                                    <span>Html - Css - JavaScript - Bootstrap</span>
                                </ListItem>
                                <ListItem>
                                    <Badge colorScheme="pink" mr="3">Link to repository:</Badge>
                                    <Link href="https://github.com/YCrhis/MySpotify"><a className="link">https://github.com/YCrhis/MySpotify</a></Link>
                                </ListItem>
                            </UnorderedList>
                        </Box>
                        <Box p="8" align="center">
                            <Image
                                width="80%"
                                src="/images/games/Image1.PNG"
                                mb="3"
                                borderRadius="20"
                            />
                            <Image
                                width="80%"
                                src="/images/games/Image2.PNG"
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
export default Games