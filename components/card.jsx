import { Box, Image, Text } from '@chakra-ui/react'
import { useColorModeValue } from '@chakra-ui/color-mode'
import Link from 'next/link'

const Card = ({ description, title, url, image }) => {

    const bg = useColorModeValue("gray.100", "gray.900")

    return (
        <Link href={`works/${url}`}>
            <Box align="center" bg={bg} pb="5">
                <Image
                    width="100%"
                    height="200px"
                    src={image}
                    mb="3"
                />
                <Text fontSize="18px" fontWeight="bold">{title}</Text>
                <Text fontSize="16px" p="1">{description}</Text>
            </Box>
        </Link >
    )
}
export default Card