import React, {useState} from 'react';

import { Box } from '@chakra-ui/react';
import Logo from './Components/Logo';
import './App.css';
import Heading from './Components/Heading';
import MainForm from './Components/MainForm';
import PopUp from './Components/PopUp';

function App() {
  const [popUp, setPopUp] = useState(false);
  const [popUpType, setPopUpType] = useState('');

  return (
    <Box backgroundColor='black' maxW={'100vw'} height='100vh'>
      <Box bgGradient='linear(to-b, bg.200, bg.300, bg.100)' color='white' 
      height='100vh' display='flex' alignItems='center' justifyContent='center'
      flexDirection='column' rowGap='5%'>
        <Box display='flex' alignItems='center' justifyContent='center'
             flexDirection='column' rowGap={['10%']} height='100vh' 
             width={['100vw', '100vw','100vw', '60vw']}>
          {!<Logo/>}
          {popUp ? '' : <Heading setPopUp={setPopUp} setPopUpType={setPopUpType}/>}
          {popUp ? '' : <MainForm setPopUp={setPopUp} setPopUpType={setPopUpType}/>}
          {popUp ? <PopUp setPopUp={setPopUp} setPopUpType={setPopUpType} popUpType={popUpType}/> : ''}
        </Box>
      </Box>
    </Box>
  );
}

export default App;
