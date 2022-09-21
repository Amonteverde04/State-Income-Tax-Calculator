import { Button, Text, Box, Square } from '@chakra-ui/react';

function DropDownButton() {
    return (
    <Box width='100%' display='flex' alignItems='center' 
    justifyContent='center'>
      <Button background='none'
      width='100%' borderRadius='20px'>
        <Text color='green' position='absolute' zIndex='1' color='white'
        >
          Select your state:
        </Text>
        <Square backgroundColor='white' mixBlendMode='overlay'
        position='absolute' height='100%'
        width='100%' borderRadius='20px' color='none'>
        </Square>
      </Button>
    </Box>
    )
}

export default DropDownButton;