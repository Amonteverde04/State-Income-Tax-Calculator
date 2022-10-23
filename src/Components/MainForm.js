import { Box, Button, Tag, TagLabel, TagCloseButton, ScaleFade } from '@chakra-ui/react';
import './MainForm.css';
import SalaryInput from '../Components/SalaryInput';
import DropDownButton from '../Components/DropDownButton';
import { useState } from 'react';

function MainForm(props) {
    const [stateName, setStateName] = useState('');
    const [salaryAmount, setSalaryAmount] = useState('');
    const [Alert, setAlert] = useState(false);

    function activateStatsPopUp() {
        props.setPopUpType('Calculated Income');
        props.setPopUp(true);
    }

    const handleButtonClick = async () => {
        if(stateName.length <= 0 || salaryAmount.length <= 0)
        {
            setAlert(true);
        }
        else 
        {
            setAlert(false);
            console.log('Do some asynchronous api call here to GET data based on the data input');
            activateStatsPopUp();
        }
    }

    return(
        <Box width='80%' height='30%'
          marginLeft='auto' marginRight='auto' display='flex'
          alignItems='center' flexDirection='column' rowGap='20%'
          >
            { Alert ?
                <ScaleFade initialScale={0.1} in={Alert}
                >
                    <Tag size={['sm','md','lg']}
                         bg='rgba(255,0,0,.9)' 
                    >
                        <TagLabel color='white'>
                            Please fill out the form to calculate your projected income.
                        </TagLabel>
                        <TagCloseButton onClick={()=>{setAlert(false)}}/>
                    </Tag>
                </ScaleFade>
                : ''
            }
            <form className='MainForm'>
                <DropDownButton setStateName={setStateName} stateName={stateName}/>
                <SalaryInput setSalaryAmount={setSalaryAmount} salaryAmount={salaryAmount}/>
                <Button onClick={handleButtonClick}
                        backgroundColor='button.100' width='80%' minHeight='40px'
                        borderRadius='15px' 
                        _hover={{color: 'button.100', backgroundColor: 'white'}}
                        _active={{color: 'white', backgroundColor:'button.100'}}
                >
                      Calculate Income!
                </Button>
            </form>
        </Box>
    )
}

export default MainForm;