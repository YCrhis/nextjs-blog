import { Box, Text, Image } from "@chakra-ui/react"

const Contact = ({ img, name, occupation }) => {
    return (
        <Box align="center">
            <Image
                src={img}
                borderRadius='full'
                boxSize='100px'
                objectFit='cover'
            />
            <Text>{name}</Text>
            <Text fontSize="10px" color="pink.500">{occupation}</Text>
        </Box>
    )
}
export default Contact