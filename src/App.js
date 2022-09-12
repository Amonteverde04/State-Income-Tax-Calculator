import { Box } from '@chakra-ui/react';
import Logo from './Components/Logo';
import './App.css';
import Welcome from './Components/Welcome';
import HelpButton from './Components/HelpButton';

function App() {
  return (
    <Box backgroundColor='black' maxW='100vw' height='100vh'>
      <Box bgGradient='linear(to-b, bg.300, bg.200, bg.100)' color='white' 
      height='100vh'>
        {
        <Box position='relative' display='flex' alignItems='center' justifyContent='center'
          flexDirection='column' rowGap='25px' top='12%'>
            <Welcome/>
            <HelpButton/>
          </Box>
        }
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
