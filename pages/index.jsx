import Article from "../components/layout/article"
import { Box, Image, Text, Button, Spacer, Container, Flex, Heading } from "@chakra-ui/react"
import { useColorModeValue } from "@chakra-ui/color-mode"
import Link from 'next/link'
import MyPopover from "../components/Popover"

import Paragraph from '../components/paragraph'

const Home = () => {
    //icons

    const bg = useColorModeValue("gray.100", "gray.900")
    return (
        <Article title="Hi">
            <Container maxW="container.md">
                <Box bg={bg} w="60%" m="auto" align="center" p={2} borderRadius="15" mb={30}>
                    <h3>Hi, I'm software programmer from Peru</h3>
                </Box>
                <section align="center">
                    <Box textAlign="green" align="center">
                        <Image
                            borderColor="green.300"
                            borderWidth={3}
                            borderStyle="solid"
                            width="120px"
                            borderRadius="full"
                            src="/images/newphoto.jpg"
                        />
                    </Box>
                    <Text fontWeight="bold" fontSize="30px">Yeridi Crhis H.T.</Text>
                    <Text color="pink.500" mb="3">Frondtend Development UI / UX Desing</Text>
                    <Box p="1">
                        <Text textAlign="center" mb="10">
                            I am a software programmer based in Peru (Lima), with some hobbies for technology and photography. I have experienced working on the internet doing some web pages and personal projects.
                        </Text>
                        <Link href="/me">
                            <Button colorScheme="teal" size="md" m="auto" display="block">
                                Read More About Me
                            </Button>
                        </Link>
                    </Box>

                </section>
                <section>
                    <Box mt="10" mb="10">
                        <Text fontWeight="bold" fontSize="20px" variant="section-title">My Work</Text>
                        <Box p="2">
                            <Paragraph>I have been working with the latest technologies required by the market, having a great knowledge in Frontend with technologies (React / Redux / Firebase / ThreeJs / React Context / others) and in the Backend (Java, JavaScript, Python and PHP), I have also worked with some databases (MongoDB, Firebase and SQL).<br /><br />
                                Personally, I qualify myself as very prepared for the Frontend since it is what I like the most compared to data modeling and the creation of web services.
                            </Paragraph>
                            <Spacer />
                            <Box mt={6}>
                                <Link href="/work">
                                    <Button colorScheme="teal" size="md" m="auto" display="block">
                                        Look at my work
                                    </Button>
                                </Link>
                            </Box>
                        </Box>
                    </Box>
                </section>
                <section>
                    <Box mt="10" mb="10">
                        <Heading as="h4" size="md" mb="3">
                            About My Studies
                        </Heading>

                        <Box ml="3">
                            <Text textAlign="justify">Regarding my studies, I have a good academic training regarding my career and learning another language</Text>
                            <Flex mt="4" mb="2" alignItems="start">
                                <Text fontSize="18px" fontWeight="700" m="5" color="pink.500">2021</Text>
                                <Text textAlign="justify" mt="5">So far, I am studying at the <Link href="https://www.britanico.edu.pe/" color="pink.500"><a className="link">Asociacion  cultural peruano británica BRITANICO</a></Link>, where I have learned my second language (English). I currently have intermediate English, i be able to communicate with people from other countries:</Text>
                            </Flex>
                            <Flex mt="4" mb="2">
                                <Text fontSize="18px" fontWeight="700" m="5" color="pink.500">2021</Text>
                                <Text textAlign="justify" mt="5">I completed my studies in Software Design and Development at <Link href="google.com"><a className="link"> Tecsup </a></Link>Institute, being a semi-professional in my career.</Text>
                            </Flex>
                        </Box>
                    </Box>

                </section>

                <section>
                    <Box mb="6">
                        <Text fontWeight="bold" fontSize="20px" variant="section-title" mb="5">I ♥</Text>
                        <Box ml="3">
                            <Text>When I'm in my free time I like to play some videogames, <Link href="https://www.youtube.com/channel/UCuETImqyGcbEoNQGlgsCpuw"><a className="link">making some videos to my channel</a></Link> drawing something or making <Link href="/work"><a className="link"> my personal projects.</a></Link></Text>
                        </Box>
                    </Box>
                </section>
                <section>
                    <Box mb="10">
                        <Text fontWeight="bold" fontSize="20px" variant="section-title" mb="3">Social Networks</Text>
                        <Box ml="5">
                            <MyPopover
                                name='Facebook'
                                description="You can find me here, if you want let me a message"
                                image="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/2048px-Facebook_f_logo_%282019%29.svg.png"
                                url="https://www.facebook.com/profile.php?id=100075706231457"
                            />
                            <MyPopover
                                name="Linkedin"
                                description="If you want, you can find me in linkedin too."
                                image="https://cdn-icons-png.flaticon.com/512/174/174857.png"
                                url="https://www.linkedin.com/in/Yeridi-Crhis"
                            />
                            <MyPopover
                                name="Discord"
                                description="Just leave a message if you wanna work with me"
                                image="https://seeklogo.com/images/D/discord-color-logo-E5E6DFEF80-seeklogo.com.png"
                                url="https://discord.com/"
                            />
                        </Box>
                    </Box>
                </section>
            </Container>
        </Article >
    )
}
export default Home