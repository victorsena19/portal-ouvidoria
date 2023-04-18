import styled from './InputComponentIcon.module.scss';
import { Icon } from '@mui/material';
import { ComponentType } from 'react';
interface Props{
    placeholder: string;
    obrigatorio: boolean;
    type: string ;
    component: ComponentType;
}
export default function InputComponent({placeholder, obrigatorio, type, component}:Props){
    return(
        <div className={styled.input}>
            <input className={styled.inputFor} type={type} placeholder={placeholder} required={obrigatorio}/>
            <Icon className={styled.icon} component={component}></Icon>
        </div>
    );
}

//