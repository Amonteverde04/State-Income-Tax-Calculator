import { Input } from '@chakra-ui/react';

function SalaryInput() {
    return(
        <Input width='100%' placeholder='$' 
        backgroundColor='tint.100' border='none' 
        focusBorderColor='button.100' borderRadius='20px'/>
    )
}

export default SalaryInput;