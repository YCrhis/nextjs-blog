import Article from "../components/layout/article"
import { Box, Image, Text, Button, Spacer, Container, Flex, Heading, SimpleGrid } from "@chakra-ui/react"
import { useColorModeValue } from "@chakra-ui/color-mode"

import Paragraph from '../components/paragraph'
import NewsCard from "../components/newsCard"

const Home = () => {
    //icons
    return (
        <Article title="News">
            <Container maxW="container.md">
                <Text fontSize="20px" fontWeight="bolder" mb="5">Check it out</Text>
                <Paragraph>here you can find the most relevant news, which in my opinion are the most important, besides that all the news is updated</Paragraph>
                <Container maxW="container.md" mt="10">
                    <SimpleGrid columns={[1, 2]} spacing={5} mt="20px">
                        <NewsCard
                            image="https://www.stackscale.com/wp-content/uploads/2021/09/popular-programming-languages-2021.jpg"
                            description="Los lenguajes de programación más populares de 2021"
                            date="13/09/2021"
                            link="https://www.stackscale.com/es/blog/lenguajes-programacion-populares-2021/"
                        />
                        <NewsCard
                            image="https://www.hostingplus.cl/wp-content/uploads/2020/07/programacionDart.jpg"
                            description="Frameworks de Frontend más demandados en Junio de 2020"
                            date="20/11/2021"
                            link="https://cursosdedesarrollo.com/2020/06/mercado-laboral-frameworks-de-frontend-mas-demandados-en-junio-de-2020/"
                        />
                        <NewsCard
                            image="https://computacioninteractiva.com/wp-content/uploads/2020/09/AdobeStock_305967697_1600_0_72_RGB.jpg"
                            description="5 Tendencias en tecnologías digitales para 2021"
                            date="5/8/2021"
                            link="https://computacioninteractiva.com/las-5-principales-tendencias-tecnologicas-para-2021/"
                        />
                        <NewsCard
                            image="https://www.bambu-mobile.com/wp-content/uploads/2021/09/Desarrollo-de-Software-Diseno-Integracion-y-Despliegue-continuos.jpg"
                            description="Las 10 principales tendencias del desarrollo de software en el 2021"
                            date="17/11/2021"
                            link="https://evolbit.net/blog/las-10-principales-tendencias-de-desarrollo-de-software-en-el-2021para-2021/"
                        />
                        <NewsCard
                            image="https://concepto.de/wp-content/uploads/2014/08/programacion-2-e1551291144973.jpg"
                            description="Los lenguajes de programación mejor pagados: informe del 2021"
                            date="20/10/2021"
                            link="https://getwith.io/es/los-lenguajes-de-programacion-mejor-pagados-informe-del-2020/"
                        />
                    </SimpleGrid>
                </Container>
            </Container>
        </Article >
    )
}
export default Home