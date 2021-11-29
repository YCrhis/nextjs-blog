import { Text } from '@chakra-ui/react'
import Link from 'next/link'

const Footer = () => {
    return (
        <Text color="gray.600" textAlign="center" mb="10" mt="10">
            Yeridi Crhis &copy; 2021<br />
            <Link href="/autors"><a>Models and images are from ...</a></Link>
        </Text>
    )
}
export default Footer