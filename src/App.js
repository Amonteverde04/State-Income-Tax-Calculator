import { Box } from '@chakra-ui/react';
import Logo from './Components/Logo';
import './App.css';
import Heading from './Components/Heading';
import MainForm from './Components/MainForm';
import PopUp from './Components/PopUp';

function App() {
  return (
    <Box backgroundColor='black' maxW='100vw' height='100vh'>
      <Box bgGradient='linear(to-b, bg.300, bg.200, bg.100)' color='white' 
      height='100vh' display='flex' alignItems='center' justifyContent='center'
      flexDirection='column' rowGap='10%'>
          {<Heading/>}
          {<MainForm/>}
          {!<PopUp/>}
          {!<Logo/>}
      </Box>
    </Box>
  );
}

export default App;
