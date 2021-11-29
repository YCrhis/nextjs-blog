import { Button } from "@chakra-ui/button"
import { useColorModeValue } from "@chakra-ui/color-mode"
import { SimpleGrid } from '@chakra-ui/react'
import {
    Box, Flex, Container, Stack, Text
} from "@chakra-ui/layout"
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    IconButton
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import Link from 'next/link'
import ToggleButton from "../toggleButton"
const Header = () => {

    const bg = useColorModeValue('#ffffff40', '#20202380')

    return (
        <>
            <Box pos="fixed" top="0" left="0" w="100%" zIndex="10" bg={bg} >
                <Container maxW="container.lg">
                    <Flex height="78px" align="center" justify="space-between">
                        <Link href="/">
                            <a>

                                <Text fontWeight="bold" fontSize="20px">
                                    <Flex align="center" justify="space-between">
                                        <img src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c39a.png" width="20px" alt="" />
                                        Yeridi Crhis
                                    </Flex>
                                </Text>

                            </a>
                        </Link>
                        <Box className="header_main">
                            <Stack
                                direction={{ md: 'row' }}
                                alignItems="center"

                            >
                                <Link href="/">
                                    <Button colorScheme="teal" variant="ghost">
                                        <a>About</a>
                                    </Button>
                                </Link>
                                <Link href="/work">
                                    <Button colorScheme="teal" variant="ghost">
                                        <a>Works</a>
                                    </Button>
                                </Link>
                                <Link href="/autors">
                                    <Button colorScheme="teal" variant="ghost">
                                        <a>Autors</a>
                                    </Button>
                                </Link>
                                <ToggleButton />
                            </Stack>
                        </Box>

                    </Flex>
                    <Box zIndex="11" className="menu__movil" pos="fixed" top="3%" right="10%" w="15%" zIndex="10" textAlign="right">
                        <SimpleGrid columns={2} spacing={10}>
                            <Menu>
                                <MenuButton
                                    as={IconButton}
                                    aria-label='Options'
                                    icon={<HamburgerIcon />}
                                    variant='outline'
                                />
                                <MenuList>
                                    <Link href="/">
                                        <MenuItem>
                                            <a>About</a>
                                        </MenuItem>
                                    </Link>
                                    <Link href="/work">
                                        <MenuItem>
                                            <a>Works</a>
                                        </MenuItem>
                                    </Link>
                                    <Link href="/autors">
                                        <MenuItem>
                                            <a>Autors</a>
                                        </MenuItem>
                                    </Link>
                                </MenuList>
                            </Menu>
                            <ToggleButton />
                        </SimpleGrid>
                    </Box>
                </Container>
            </Box>
        </>
    )
}
export default Header