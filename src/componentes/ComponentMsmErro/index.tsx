import { ReactNode } from "react";
import style from './ComponentMsmErro.module.scss';

interface Props{
    children?: ReactNode
}
const ComponentMsmErro = ({children}: Props) => {
    return (
        <div className={style.msmerro}>
            {children}
        </div>
    );
}

export default ComponentMsmErro;