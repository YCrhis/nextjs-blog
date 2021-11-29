import { useRef } from 'react';
import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverFooter,
    PopoverArrow,
    Button,
    Flex,
    ButtonGroup,
    PopoverCloseButton,
    Image
} from "@chakra-ui/react"

const MyPopover = ({ name, image, description, url }) => {
    const initialFocusRef = useRef()
    return (
        <>
            <Popover
                initialFocusRef={initialFocusRef}
                placement="bottom"
                closeOnBlur={false}
            >
                <PopoverTrigger>
                    <Button colorScheme="teal" variant="link" display="block">
                        {name}
                    </Button>
                </PopoverTrigger>
                <PopoverContent color="white" bg="blue.800" borderColor="blue.800" ml="100">
                    <PopoverHeader pt={4} fontWeight="bold" border="0">
                        This is my {name}
                    </PopoverHeader>
                    <PopoverArrow />
                    <PopoverCloseButton />
                    <PopoverBody>
                        <Flex>
                            {description}
                            <Image
                                src={image}
                                width="35px"
                                height="30px"
                            />
                        </Flex>
                    </PopoverBody>
                    <PopoverFooter
                        border="0"
                        d="flex"
                        alignItems="center"
                        justifyContent="space-between"
                        pb={4}
                    >
                        <ButtonGroup size="sm">
                            <Button colorScheme="green">
                                <a href={url}>Go to {name}</a>
                            </Button>
                        </ButtonGroup>
                    </PopoverFooter>
                </PopoverContent>
            </Popover>
        </>
    )
}
export default MyPopover