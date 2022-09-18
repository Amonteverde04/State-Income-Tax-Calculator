import { Box, Text, Button } from '@chakra-ui/react';

function PopUpHeading() {
    return (
        <Box display='flex' flexDirection='row'
            alignItems='center' justifyContent='center'
            width='100%'>
                <Text fontSize='18px'>Help</Text>
                <Button fontSize='24px' height='0' width='0'>
                X
                </Button>
        </Box>
    )
}

export default PopUpHeading;