import InputTexto from 'componentes/InputTexto';
import style from './CadastroPessoaJuridica.module.scss';

export default function CadastroPessoaJuridica(){
    return(
        <div className={style.conteiner}>
            <div className={style.box}>
            <InputTexto label='Nome'/>
            </div>
            <div className={style.box}>
            <InputTexto label='Nome'/>
            </div>
            <div className={style.box}>
                [aqui vai um input select]
            </div>
            <div className={style.box}>
                <InputTexto label='Nome'/>
                <InputTexto label='Nome'/>
            </div>
        </div>
    )
}