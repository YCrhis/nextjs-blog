import Article from "../components/layout/article"
import { Text, Container, SimpleGrid } from "@chakra-ui/layout"
import Card from "../components/card"
import Link from "next/link"

const Work = () => {
    return (
        <Article title="My Work">
            <Container maxW="container.md">
                <Text fontWeight="bolder" fontSize="20px" mb="5">Works</Text>
                <Container maxW="container.md">
                    <SimpleGrid columns={[1, 2]} spacing={5}>
                        <Card
                            description="An app to childrens who wants to learn about programming in C# language"
                            title="PlayTec"
                            url="/playtec"
                            image="https://www.crear4d.com/wp-content/uploads/2018/01/playtec.jpg"
                        />
                        <Card
                            description="An application for any type of company"
                            title="Provee Pyme"
                            url="/provee"
                            image="/images/ProveeImage.jpg"
                        />
                        <Card
                            description="Landing page of a book"
                            title="HampyBook"
                            url="/hampybook"
                            image="/images/Hampy.PNG"
                        />
                        <Card
                            description="An application to buy clothes online"
                            title="YourShop"
                            url="/yourshop"
                            image="/images/yourshop.PNG"
                        />
                    </SimpleGrid>
                </Container>
                <Text fontWeight="bolder" fontSize="20px" mb="5" mt="10">Personal Projects</Text>
                <Container maxW="container.md">
                    <SimpleGrid columns={[1, 2]} spacing={5}>
                        <Card
                            description="This is an app to use spotify from your favourite browser"
                            title="My Spotify"
                            url="/spotify"
                            image="/images/SpotifyClone.PNG"
                        />
                        <Card
                            description="I created a clone of the app Disney"
                            title="Disney Clone" url="/disney"
                            image="/images/disney/login.PNG"
                        />
                        <Card
                            description="I created a clone of the app Discord"
                            title="Discord Clone"
                            url="/discord"
                            image="/images/channel.PNG"
                        />
                        <Card
                            description="I created an app with some simple games"
                            title="Games"
                            url="/games"
                            image="https://image.freepik.com/free-vector/online-games-concept-illustration-with-computer_23-2148534483.jpg"
                        />
                    </SimpleGrid>
                    <Text align="center" mt="10">If you wanna see more about my projects just <Link href="https://github.com/YCrhis"><a className="link">Click here</a></Link></Text>
                </Container>
            </Container>
        </Article >
    )
}
export default Work