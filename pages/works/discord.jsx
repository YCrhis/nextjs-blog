import Article from "../../components/layout/article"
import { Box, Container } from "@chakra-ui/layout"
import { Button, Flex, Text, Grid, UnorderedList, ListItem, Image, Badge } from "@chakra-ui/react"
import { ChevronRightIcon } from '@chakra-ui/icons'
import Link from 'next/link'
import Paragraph from '../../components/paragraph'

const Discord = () => {
    return (
        <Article title="Discord Clone">
            <Container maxW="container.md">
                <Flex align="center">
                    <Link href="/work">
                        <Button color="pink.500" variant="link">
                            Works
                        </Button>
                    </Link>
                    <ChevronRightIcon boxSize="20px" />
                    <Text fontSize="20px" fontWeight="bolder">Discord Clone</Text>
                </Flex>
                <Box p="3">
                    <Paragraph>This project consists of a <Link href="https://discord.com/"><a className="link">Discord</a></Link> clone, which has the main functions that this application has (send messages and create communication channels), in order to use it you need to log in with your Google account and you can communicate with anyone who is in the application.</Paragraph>
                    <Box mt="5">
                        <Box ml="5">
                            <UnorderedList>
                                <ListItem mb="3">
                                    <Badge colorScheme="green" mr="3">Used technology:</Badge>
                                    <span>React - Redux - Material UI - Firebase</span>
                                </ListItem>
                                <ListItem>
                                    <Badge colorScheme="pink" mr="3">Link to repository:</Badge>
                                    <Link href="https://github.com/YCrhis/discord-clone"><a className="link">https://github.com/YCrhis/discord-clone</a></Link>
                                </ListItem>
                            </UnorderedList>
                        </Box>
                        <Box p="8" align="center">
                            <Badge colorScheme="gray" fontSize="18px" mb="7">Images: </Badge>
                            <Image
                                width="80%"
                                src="/images/login.PNG"
                                mb="3"
                                borderRadius="20"
                            />
                            <Image
                                width="80%"
                                src="/images/initial.PNG"
                                mb="3"
                                borderRadius="20"
                            />
                            <Image
                                width="80%"
                                src="/images/channel.PNG"
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
export default Discord