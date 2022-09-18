import { Button } from '@chakra-ui/react';

function DropDownButton() {
    return (
    <Button backgroundColor='tint.100'
    width='100%' borderRadius='20px'>
      Select your state: v {/*Need to find a way for the overlay to not affect text*/}
    </Button>
    )
}

export default DropDownButton;