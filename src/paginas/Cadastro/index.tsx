import style from './Cadastro.module.scss';
import CadastroPessoaFisica from 'componentes/CadastroPessoaFisica';
import CadastroPessoaJuridica from 'componentes/CadastroPessoaJuridica';
import InputTexto from 'componentes/InputTexto';
import SelectPessoa from 'componentes/SelectPessoa';

export default function Cadastro(){
    return(
        <div className={style.conteiner}>
            <div className={style.box}>
                <div className={style.centralizar}>
                    <h2>Realizando Cadastro</h2>
                </div>
                <div className={style.central}>
                    <h3>Informações necessárias</h3>
                </div>
                <h6>Os campos sinalizados com asterisco ( * ) são de preenchimento obrigatório</h6>
            </div>
            <div className={style.header}>
                <InputTexto label='Nome Completo*' className={style.campogrande} required />
                <SelectPessoa />
            </div>
            <div className={style.box}>
                <CadastroPessoaFisica/>
            </div>
            <div className={style.box}>
                <CadastroPessoaJuridica/>
            </div>
        </div>
    )
}