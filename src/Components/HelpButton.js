import { Button } from '@chakra-ui/react';

function HelpButton(props) {
    function activateHelpPopUp() {
        props.setPopUpType('Help');
        props.setPopUp(true);
    }
    
    return(
        <Button background='button.100' borderRadius='50px' fontSize='24px'
                height='40px' width='40px' display='flex' alignItems='center'
                justifyContent='center'
                _hover={{color: 'button.100', backgroundColor: 'white'}}
                _active={{color: 'white', backgroundColor:'button.100'}}
                onClick={activateHelpPopUp}
        >
            ?
        </Button>
    )
}

export default HelpButton;