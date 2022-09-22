import { Box, Text} from '@chakra-ui/react';
import PopUpHeading from './PopUpHeading';

function PopUp(props) {
    return (
        <Box width='90%' height='50%' background='none' position='relative'
        marginLeft='auto' marginRight='auto' borderRadius='20px'
        >
            <Box backgroundColor='white' mixBlendMode='overlay'
            position='absolute' width='100%' height='100%' borderRadius='20px'
            >
            </Box>

            { props.popUpType === 'Help' ?
            <Box position='absolute' display='flex'
            alignItems='center' flexDirection='column'
            padding='5%' width='100%'>
                <PopUpHeading setPopUp={props.setPopUp} setPopUpType={props.setPopUpType} popUpType={props.popUpType}/>
                <Text fontSize='14px'>
                    To use this web app:<br></br><br></br>
        
                    Select the state where you anticipate paying taxes in, by clicking the drop down menu.<br></br><br></br>
        
                    Next enter your current or anticipated salary into the input box.<br></br><br></br>
        
                    Lastly, tap or click the ‘Calculate Income’ button to get your results.<br></br>
                </Text>
            </Box> : ''
            }
            { props.popUpType === 'Calculated Income' ? 
            <Box position='absolute' display='flex'
            alignItems='center' flexDirection='column'
            padding='5%' width='100%' textAlign='center'>
                <PopUpHeading setPopUp={props.setPopUp} setPopUpType={props.setPopUpType} popUpType={props.popUpType}/>
                <Text fontSize='14px'>
                    According to the 2022 State Income tax data for your state, 'yourState', you can expect to make 'calculatedIncome' after state taxes.<br></br><br></br>
        
                    Your income is 'percentage'% 'above/below' the national average.<br></br><br></br>
                </Text>
            </Box> : ''
            }
        </Box>
    )
}

export default PopUp;