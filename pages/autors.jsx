import Article from "../components/layout/article"
import { Text, Container, Badge, UnorderedList, ListItem } from "@chakra-ui/layout"
import Link from "next/link"

const Work = () => {
    return (
        <Article title="Thanks to">
            <Container maxW="container.md">
                <Text fontWeight="bolder" fontSize="20px" mb="5">Autors</Text>
                <Text>This project is using models and images of some people, that is why in this section you can find information about the creators of this type of content</Text>
                <UnorderedList mt="5">
                    <ListItem mb="3">
                        <Badge colorScheme="green" mr="3">Dog Model 3D:</Badge>
                        <span>Takuya Matzuyama</span>
                    </ListItem>
                </UnorderedList>
            </Container>
        </Article >
    )
}
export default Work