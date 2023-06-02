import style from './MsmError.module.scss';

interface Props{
    children?: string;
    }

export default function MsmError({children}: Props){
    return(
        <div className={style.error}>
            {children}
        </div>
    )
}