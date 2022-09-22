import { Box } from '@chakra-ui/react';
import SubmitButton from '../Components/SubmitButton';
import SalaryInput from '../Components/SalaryInput';
import DropDownButton from '../Components/DropDownButton';

function MainForm(props) {
    return(
        <Box width='80%' height='30%'
          marginLeft='auto' marginRight='auto' display='flex'
          alignItems='center' flexDirection='column' rowGap='20%'
          >
            <DropDownButton/>
            <SalaryInput/>
            <SubmitButton setPopUp={props.setPopUp} setPopUpType={props.setPopUpType} buttonColor='button.100'/>
        </Box>
    )
}

export default MainForm;