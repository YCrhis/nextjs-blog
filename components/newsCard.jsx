import { Box, Image, Text, Button, Spacer, Container, Flex, Badge, Link } from "@chakra-ui/react"
import { useColorModeValue } from '@chakra-ui/color-mode'

const NewsCard = ({ image, description, date, link }) => {

    const bg = useColorModeValue("gray.100", "gray.900")
    return (
        <Link
            href={link}
            isExternal
        >
            <Box
                bg={bg}
                position="relative"
            >
                <Flex
                    alignItems="center"
                    justifyContent="center"
                >
                    <Image
                        src={image}
                        alt="2022"
                        boxSize='170px'
                        objectFit='cover'
                    />
                    <Box ml="10px" width="100%">
                        <Text fontSize="16px">{description}</Text>
                        <Badge
                            colorScheme="teal"
                            variant='subtle'
                            position="absolute"
                            bottom="0"
                            right="0"
                        >{date}</Badge>
                    </Box>
                </Flex>
            </Box>
        </Link>
    )
}
export default NewsCard