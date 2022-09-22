import { Button } from '@chakra-ui/react';

function SubmitButtons(props) {
    function activateStatsPopUp() {
        props.setPopUpType('Calculated Income');
        props.setPopUp(true);
    }
    
    return (
        <Button backgroundColor={props.buttonColor} width='80%' 
        borderRadius='15px' 
        _hover={{color: 'button.100', backgroundColor: 'white'}}
        _active={{color: 'white', backgroundColor:'button.100'}}
        onClick={activateStatsPopUp}
        >
              Calculate Income!
        </Button>
    )
}

export default SubmitButtons;