import Article from "../components/layout/article"
import { Box, Container, GridItem, Spacer } from "@chakra-ui/layout"
import { Button, Flex, Text, SimpleGrid, Image, Badge, List, ListItem, ListIcon } from "@chakra-ui/react"
import { ChevronRightIcon } from '@chakra-ui/icons'
import Link from 'next/link'
import Paragraph from '../components/paragraph'
import { CheckIcon } from '@chakra-ui/icons'
import { useColorModeValue } from "@chakra-ui/color-mode"
import Contact from "../components/contact"

const Me = () => {
    const bg = useColorModeValue("gray.100", "gray.900")
    return (
        <Article title="About Me">
            <Container maxW="container.lg">
                <Flex align="center" mb="10">
                    <Link href="/">
                        <Button color="pink.500" variant="link">
                            About
                        </Button>
                    </Link>
                    <ChevronRightIcon boxSize="20px" />
                    <Text fontSize="20px" fontWeight="bolder">More information</Text>
                </Flex>
                <Box p="3">
                    <SimpleGrid gap={6} templateColumns={["repeat(2, 1fr)", "repeat(5, 1fr)"]} width="100%" alignItems="center">
                        <GridItem colSpan={2} >
                            <Box>
                                {/* <Image
                                    src="/myimage.jpg"
                                    widt
                                /> */}
                                <video
                                    autoplay
                                    controls
                                    muted
                                    width="100%"
                                    poster="/myimage.jpg"
                                >
                                    <source
                                        type="video/mp4"
                                        src="/Pitch.mp4"
                                    />
                                </video>
                            </Box>
                        </GridItem>
                        <GridItem colSpan={3} >
                            <Box>
                                <div>
                                    <Text fontSize="20px" fontWeight="bold" mb="6">Yeridi Crhis Huaman Taquire</Text>
                                    <Paragraph>
                                        I am a programmer from Peru, with many technical skills in technologies that are more required lately and with the aim of doing a good job and improving every day
                                    </Paragraph>
                                    <Badge colorScheme='green' fontSize="15px" mt="7" mb="5">Frontend Technologies</Badge>
                                    <List spacing={3} ml="3">
                                        <ListItem>
                                            <ListIcon as={CheckIcon} color='green.500' />
                                            React  - Material UI - Chakra UI - Bootstrap - ThreeJS
                                        </ListItem>
                                        <ListItem>
                                            <ListIcon as={CheckIcon} color='green.500' />
                                            Redux - Redux Tools - React Context - NextJS
                                        </ListItem>
                                        <ListItem>
                                            <ListIcon as={CheckIcon} color='green.500' />
                                            Angular
                                        </ListItem>
                                    </List>
                                </div>
                                <div>
                                    <Badge colorScheme='pink' fontSize="15px" mt="7" mb="5">DataBases</Badge>
                                    <List spacing={3} ml="3">
                                        <ListItem>
                                            <ListIcon as={CheckIcon} color='green.500' />
                                            SQL - MYSQL
                                        </ListItem>
                                        <ListItem>
                                            <ListIcon as={CheckIcon} color='green.500' />
                                            MongoDB
                                        </ListItem>
                                    </List>
                                </div>
                                <div>
                                    <Badge colorScheme='purple' fontSize="15px" mt="7" mb="5">Backend</Badge>
                                    <List spacing={3} ml="3">
                                        <ListItem>
                                            <ListIcon as={CheckIcon} color='green.500' />
                                            Laravel - NodeJS - SpringBoot
                                        </ListItem>
                                        <ListItem>
                                            <ListIcon as={CheckIcon} color='green.500' />
                                            Python - Javascript - Java
                                        </ListItem>
                                    </List>
                                </div>
                            </Box>
                        </GridItem>

                    </SimpleGrid>
                    <Spacer mb="10" />
                </Box>
                <Box>
                    <Container maxW="container.sm">
                        <Text fontSize="20px" fontWeight="bold" align="center" mb="7">They trust me</Text>
                        <SimpleGrid gap={6} templateColumns={["repeat(2, 1fr)", "repeat(4, 1fr)"]}>
                            <Contact
                                img="https://media-exp1.licdn.com/dms/image/C4E03AQFyRap1COiqXg/profile-displayphoto-shrink_800_800/0/1638647357880?e=1643846400&v=beta&t=jIPNtFXIUsmx0ML-ygzKsa2fIcqSb-DhhY7NXXHkFek"
                                name="Gustavo Blanco"
                                occupation="Programmer"
                            />
                            <Contact
                                img="https://media-exp1.licdn.com/dms/image/C4E03AQHnXUig1LOxVA/profile-displayphoto-shrink_800_800/0/1633197393166?e=1643846400&v=beta&t=ZyxJ7zgWr3nIS30-K-A2R0aRsoycEyZ5xGiUSe-8cbU"
                                name="Yamil Delgado"
                                occupation="Programmer"
                            />
                            <Contact
                                img="https://media-exp1.licdn.com/dms/image/D5603AQH_ZDB_sVrpoA/profile-displayphoto-shrink_400_400/0/1631689671419?e=1643846400&v=beta&t=iJrjaLzbpZ-ux0JNGFrY5Y34DBAdygWpdZu7ML29D_s"
                                name="Katherine Carrera"
                                occupation="Programmer"
                            />
                            <Contact
                                img="https://media-exp1.licdn.com/dms/image/C4E03AQFVVjEFDIzN4w/profile-displayphoto-shrink_800_800/0/1589915155444?e=1643846400&v=beta&t=XgG_7kvGFjAsgEDmmHlAYY3J0xOyKHvSiKXC4mnfKuc"
                                name="Linder Hassinger"
                                occupation="Programmer / Teacher"
                            />
                        </SimpleGrid>
                    </Container>
                </Box>
            </Container >
        </Article >
    )
}
export default Me