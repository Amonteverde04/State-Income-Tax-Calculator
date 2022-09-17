import { Box, Button, Input } from '@chakra-ui/react';
import Logo from './Components/Logo';
import './App.css';
import Heading from './Components/Heading';

function App() {
  return (
    <Box backgroundColor='black' maxW='100vw' height='100vh'>
      <Box bgGradient='linear(to-b, bg.300, bg.200, bg.100)' color='white' 
      height='100vh' display='flex' alignItems='center' justifyContent='center'
      flexDirection='column' rowGap='10%'>
          <Heading/>
          <Box width='80%' height='30%'
          marginLeft='auto' marginRight='auto' display='flex'
          alignItems='center' flexDirection='column' rowGap='20%'
          >
            <Button backgroundColor='white'
            width='100%' borderRadius='20px' mixBlendMode='overlay'>
              Select your state: v {/*Need to find a way for the overlay to not affect text*/}
              </Button>
            <Input width='100%' placeholder='$' 
            backgroundColor='white' mixBlendMode='overlay' borderRadius='20px'/>
            <Button width='100%'>Calculate Income!</Button>
          </Box>
        {!
          <Box position='absolute' display='flex' alignItems='center' width='100%'
          justifyContent='center' top='50%' left='50%' transform='translate(-50%, -50%)' margin='0'>
            {<Logo/>}
          </Box>
        }
      </Box>
    </Box>
  );
}

export default App;
