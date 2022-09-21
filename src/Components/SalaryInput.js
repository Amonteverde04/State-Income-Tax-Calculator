import { Input, Box } from '@chakra-ui/react';

function SalaryInput() {
    return(
    <Box width='100%' display='flex' alignItems='center' 
    justifyContent='center'>
        <Input width='80%' position='absolute' 
        backgroundColor='white' mixBlendMode='overlay' border='none' 
        focusBorderColor='none' borderRadius='20px'/>

        <Input width='80%' placeholder='$' position='absolute'
        background='none' border='none' zIndex='10'
        focusBorderColor='button.100' borderRadius='20px'/>
    </Box>
    )
}

export default SalaryInput;