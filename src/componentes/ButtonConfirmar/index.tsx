import style from './ButtonConfirmar.module.scss';

interface Props{
    children: string;
    className?: string;
    type?: "button" | "submit" | "reset" ;
}

export default function ButtonConfirmar({children, className, type}:Props){
    return(
        <div className={className}>
            <button type={type} className={style.box_button_continue}>{children}</button>
        </div>
    )
}