import Article from "../../components/layout/article"
import { Box, Container } from "@chakra-ui/layout"
import { Button, Flex, Text, Grid, UnorderedList, ListItem, Image, Badge } from "@chakra-ui/react"
import { ChevronRightIcon } from '@chakra-ui/icons'
import Link from 'next/link'
import Paragraph from '../../components/paragraph'


const Playtec = () => {
    return (
        <Article title="Playtec">
            <Container maxW="container.md">
                <Flex align="center">
                    <Link href="/work">
                        <Button color="pink.500" variant="link">
                            Works
                        </Button>
                    </Link>
                    <ChevronRightIcon boxSize="20px" />
                    <Text fontSize="20px" fontWeight="bolder">PlayTec</Text>
                </Flex>
                <Box p="3">
                    <Paragraph>This project consists of making a 3D section where the user can perform actions with a car as required. For this, a 3D environment was created with a car, roads and commands to perform functions (advance the car, turn on lights and other more).</Paragraph>
                    <Text mt="3" fontWeight="bold" fontSize="18px" color="teal.400">Used technology:</Text>
                    <Box mt="5">
                        <Box ml="5">
                            <UnorderedList>
                                <ListItem mb="3">
                                    <Badge colorScheme="green" mr="3">Used technology:</Badge>
                                    <span>React - ThreeJS - Material UI</span>
                                </ListItem>
                            </UnorderedList>
                        </Box>
                        <Box p="8" align="center">
                            <Badge colorScheme="gray" fontSize="18px" mb="7">Images: </Badge>
                            <Image
                                width="80%"
                                src="https://www.crear4d.com/wp-content/uploads/2018/01/playtec.jpg"
                                mb="3"
                                borderRadius="20"
                                height="300px"
                            />
                        </Box>
                    </Box>
                </Box>
            </Container>
        </Article>
    )
}
export default Playtec