import { Box } from '@chakra-ui/react';
import Welcome from '../Components/Welcome';
import HelpButton from '../Components/HelpButton';

function Heading(props) {
    return (
        <Box position='relative' display='flex' alignItems='center' justifyContent='center'
          flexDirection='column' rowGap='25px' >
            <Welcome/>
            <HelpButton setPopUp={props.setPopUp} setPopUpType={props.setPopUpType}/>
        </Box>
    )
}

export default Heading;