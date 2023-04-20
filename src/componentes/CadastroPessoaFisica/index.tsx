import InputTexto from 'componentes/InputTexto';
import style from './CadastroPessoaFisica.module.scss';

export default function CadastroPessoaFisica() {
    return (
        <div className={style.conteiner}>
            <div className={style.box}>
                <InputTexto className={style.campopequeno} label='CPF*' required />
                <InputTexto className={style.campopequeno} label='RG*' required />
                <InputTexto className={style.campomini} label='Sexo' />
                <InputTexto className={style.campomini} label='Data de Nascimento' />
            </div>
            <div className={style.box}>
                <InputTexto className={style.campopequeno} label='Telefone' />
                <InputTexto className={style.campopequeno} label='Celular' />
                <InputTexto className={style.campomedio} label='Escolaridade' />
            </div>
            <div className={style.box}>
                <InputTexto className={style.campopequeno} label='Cep' />
                <InputTexto className={style.campopequeno} label='Cidade' />
                <InputTexto className={style.campomini} label='UF' />
                <InputTexto className={style.campomini} label='Bairro' />
            </div>
            <div className={style.box}>
                <InputTexto className={style.campopequeno} label='Lagradouro' />
                <InputTexto className={style.campopequeno} label='Número' />
                <InputTexto className={style.campomedio} label='Complemento' />
            </div>
            <div className={style.box}>
                <InputTexto className={style.campogrande} label='Email' />
                <InputTexto className={style.campomedio} label='Confirmar Email' />
            </div>
            <div className={style.box}>
                <InputTexto className={style.campogrande} label='Senha' />
                <InputTexto className={style.campomedio} label='Confirmar Senha' />
            </div>
        </div>

    )
}