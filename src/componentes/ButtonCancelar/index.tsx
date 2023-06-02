import { Link } from 'react-router-dom';
import style from './ButtonCancelar.module.scss';

interface Props{
    className?: string;
    children: string;
    to: string;
}


export default function ButtonCancelar({children, className, to}: Props){
    return(
        <div className={className}>
            <Link  className={style.link} to={to}>
            <button className={style.box_button_cancelar}>{children}</button>
            </Link>
        </div>
    )
}