import Article from "../../components/layout/article"
import { Box, Container } from "@chakra-ui/layout"
import { Button, Flex, Text, UnorderedList, ListItem, Image, Badge } from "@chakra-ui/react"
import { ChevronRightIcon } from '@chakra-ui/icons'
import Link from 'next/link'
import Paragraph from '../../components/paragraph'

const Spotify = () => {
    return (
        <Article title="My Spotify">
            <Container maxW="container.md">
                <Flex align="center">
                    <Link href="/work">
                        <Button color="pink.500" variant="link">
                            Works
                        </Button>
                    </Link>
                    <ChevronRightIcon boxSize="20px" />
                    <Text fontSize="20px" fontWeight="bolder">Spotify</Text>
                </Flex>
                <Box p="3">
                    <Paragraph>For this project I did my own reproductor of music with <Link href="https://www.spotify.com/pe/"><a className="link">Spotify</a></Link>, to do it I was consuming an API from Spotify which was to see my favorite music that you have in you album. In order to use it, you need to log in with your Spotify account and that's it.</Paragraph>

                    <Box mt="5">
                        <Box ml="5">
                            <UnorderedList>
                                <ListItem mb="3">
                                    <Badge colorScheme="green" mr="3">Used technology:</Badge>
                                    <span>React- Redux - Spotify Api - Material UI</span>
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
                                src="/images/spotify/login.PNG"
                                mb="3"
                                borderRadius="20"
                            />
                            <Image
                                width="80%"
                                src="/images/SpotifyClone.PNG"
                                mb="3"
                                borderRadius="20"
                            />
                            <Image
                                width="80%"
                                src="/images/spotify/Options.PNG"
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
export default Spotify