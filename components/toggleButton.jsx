import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { useColorModeValue, useColorMode } from '@chakra-ui/color-mode';
import { IconButton } from '@chakra-ui/button';

const ToggleButton = () => {

    const { toggleColorMode } = useColorMode();

    return (
        <>
            <button onClick={toggleColorMode}>
                <IconButton
                    aria-label="Toggle theme"
                    colorScheme={useColorModeValue('purple', 'yellow')}
                    icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
                    onClick={toggleColorMode}
                />
            </button>
        </>
    )
}
export default ToggleButton