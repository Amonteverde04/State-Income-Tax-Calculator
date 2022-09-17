import { Box } from '@chakra-ui/react';
import Welcome from '../Components/Welcome';
import HelpButton from '../Components/HelpButton';

function Heading() {
    return (
        <Box position='relative' display='flex' alignItems='center' justifyContent='center'
          flexDirection='column' rowGap='25px' >
            <Welcome/>
            <HelpButton/>
        </Box>
    )
}

export default Heading;