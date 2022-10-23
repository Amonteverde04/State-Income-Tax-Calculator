import { Box, Select } from '@chakra-ui/react';
import './DropDownButton.css';

function DropDownButton(props) {
  const updateStateName = (e) => {
    props.setStateName(e.target.value);
  }

  return (
  <Box width='100%' display='flex' alignItems='center' 
       justifyContent='center' position='relative'>
    <Select onChange={(e)=>updateStateName(e)}
            variant="outline" bg='none' zIndex='10'
            width='100%' borderRadius='20px' 
            placeholder={'Click or tap to select a state!'}
            textAlign="center" border="none" color="white"
            isRequired={true}
    >
      <option id='Options' value="New Jersey">New Jersey</option>
      <option id='Options' value="New York">New York</option>
      <option id='Options' value="North Carolina">North Carolina</option>
    </Select>
    <Box backgroundColor='rgba(255,255,255,.5)' mixBlendMode='overlay'
    position='absolute' width='100%' height='100%' borderRadius='20px'
    >
    </Box>
  </Box>
  )
}

export default DropDownButton;