import { Image, Box } from '@chakra-ui/react';
import theLogo from '../Assets/Logo.svg';

function Logo() {
    return (
        <Image src={theLogo} alt='TaxedIncome'/>
    )
}

export default Logo;