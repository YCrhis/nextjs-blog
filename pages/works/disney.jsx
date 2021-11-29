import Article from "../../components/layout/article"
import { Box, Container } from "@chakra-ui/layout"
import { Button, Flex, Text, UnorderedList, ListItem, Image, Badge } from "@chakra-ui/react"
import { ChevronRightIcon } from '@chakra-ui/icons'
import Link from 'next/link'
import Paragraph from "../../components/paragraph"

const Disney = () => {
    return (
        <Article title="Disney">
            <Container maxW="container.md">
                <Flex align="center">
                    <Link href="/work">
                        <Button color="pink.500" variant="link">
                            Works
                        </Button>
                    </Link>
                    <ChevronRightIcon boxSize="20px" />
                    <Text fontSize="20px" fontWeight="bolder">Disney Clone</Text>
                </Flex>
                <Box p="3">
                    <Paragraph>This is a project that simulates the Disney application, here you can see information about some movies or series that the platform has, you only need to create or log in with your Google account and you can use the application.</Paragraph>
                    <Box mt="5">
                        <Box ml="5">
                            <UnorderedList>
                                <ListItem mb="3">
                                    <Badge colorScheme="green" mr="3">Used technology:</Badge>
                                    <span>React- Redux - Firebase - Material UI</span>
                                </ListItem>
                            </UnorderedList>
                        </Box>
                        <Box p="8" align="center">
                            <Badge colorScheme="gray" fontSize="18px" mb="7">Images: </Badge>
                            <Image
                                width="80%"
                                src="/images/disney/login.PNG"
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
export default Disney