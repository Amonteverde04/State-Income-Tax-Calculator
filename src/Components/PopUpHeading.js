import { Box, Text, Button } from '@chakra-ui/react';

function PopUpHeading(props) {
    function deActivateHelpPopUp() {
        props.setPopUpType('');
        props.setPopUp(false);
    }
    
    return (
        <Box display='flex' flexDirection='row'
            alignItems='center' justifyContent='center' position='relative'
            width='100%' padding='5%'>
                <Text fontSize='18px'>{props.popUpType}</Text>
                <Button fontSize='24px' height='50%' width='10%' 
                position='absolute' background='none'
                right='0' _hover={{color: 'red'}}
                _active={{color: 'red'}}
                onClick={deActivateHelpPopUp}>
                X
                </Button>
        </Box>
    )
}

export default PopUpHeading;