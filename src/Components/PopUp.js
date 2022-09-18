import { Box, Text } from '@chakra-ui/react';
import PopUpHeading from './PopUpHeading';

function PopUp() {
    return (
        <Box width='90%' height='50%' backgroundColor='window.100' 
        borderRadius='20px' mixBlendMode='overlay'
        marginLeft='auto' marginRight='auto' display='flex'
        alignItems='center' flexDirection='column' rowGap='5%'
        color='purple' padding='5%'
          >
            <PopUpHeading/>
            <Text fontSize='14px'>
                To use this web app:<br></br><br></br>

                Select the state where you anticipate paying taxes in, by clicking the drop down menu.<br></br><br></br>

                Next enter your current or anticipated salary into the input box.<br></br><br></br>

                Lastly, tap or click the ‘Calculate Income’ button to get your results.<br></br>
            </Text>
        </Box>
    )
}

export default PopUp;