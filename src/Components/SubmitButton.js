import { Button } from '@chakra-ui/react';

function SubmitButtons({buttonColor}) {
    return (
        <Button backgroundColor={buttonColor} width='80%' borderRadius='15px'>
              Calculate Income!
        </Button>
    )
}

export default SubmitButtons;