import { Input, Box } from '@chakra-ui/react';
import { useState } from 'react';
import Dollar from '../Assets/DollarSign.svg';
import './SalaryInput.css';

function SalaryInput(props) {
    const [notValid, setNotValid] = useState(
        {
            invalid: false,
            color: 'button.100'
        }
    );
    
    let updateSalary = (e) => {
        var dollarAmount; 
        dollarAmount = Number(e.target.value);
        if(isNaN(dollarAmount)) 
        {
            setNotValid(
                {
                    invalid: true,
                    color: 'red'
                }
            ); 
        }
        else 
        {
            props.setSalaryAmount(e.target.value);
            setNotValid(
                {
                    invalid: false,
                    color: 'button.100'
                }
            );   
        }
    }

    return(
    <Box width='100%' display='flex' alignItems='center' 
    justifyContent='left' position='relative'>
        <Input width='100%' position='absolute' 
        backgroundColor='rgba(255,255,255,.5)' mixBlendMode='overlay' border='none' 
        focusBorderColor='none' borderRadius='20px'/>
        <label id='DollarSign'><img src={Dollar} alt='Dollar Sign'></img></label>
        <Input
        value={props.salaryAmount}
        onChange={(e)=>{updateSalary(e)}}
        isInvalid={notValid.invalid} 
        className='SalaryInput' width='100%' position='absolute'
        background='none' border='none' zIndex='10'
        focusBorderColor={notValid.color} borderRadius='20px'/>
    </Box>
    )
}

export default SalaryInput;