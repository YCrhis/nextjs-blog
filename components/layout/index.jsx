import { Container } from "@chakra-ui/react"
import DogModel from "../DogScenary"
import Footer from "./footer"
import Header from "./Header"

const Content = ({ children }) => {
    return (
        <>
            <Header />
            <Container maxW="container.lg">
                <DogModel />
                {children}
            </Container>
            <Footer />
        </>
    )
}
export default Content