import { useState } from 'react';
import style from './SelectPessoa.module.scss';
import pessoa from '../../data/Pessoa.json';
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from 'react-icons/md';

interface Props{
    id?: string;
}

export default function SelectPessoa({id}:Props) {
    const [aberto, setAberto] = useState(false);
    const [ordenador, setOrdenador] = useState("");
    const pessoaFisica = pessoa.find(opcao => opcao.id === 1)?.tipoPessoa;
    const nomeOrdenador = ordenador && pessoa.find(opcao => opcao.value === ordenador)?.tipoPessoa;
    return (
        <div id={style.select}>
            <span>Tipo de Pessoa*</span>
            <button id={id} className={style.ordenador} onClick={() => setAberto(!aberto)}
                onBlur={() => setAberto(false)}>
                <span>{nomeOrdenador || pessoaFisica}</span>
                {aberto ? <MdKeyboardArrowUp className={style.arrow} size={20} /> : <MdKeyboardArrowDown className={style.arrow} size={20} />}
                <div className={`${style.ordenador_options} 
                ${aberto === true ? style['ordenador_options--ativo'] : false}`}>
                    <div className={style.border}>
                        {pessoa.map(opcao => (
                            <div className={style.ordenador_options_option}
                                key={opcao.value} onClick={() => setOrdenador(opcao.value)}>
                                {opcao.tipoPessoa}
                            </div>
                        ))}
                    </div>
                </div>
            </button>
        </div>
    )
}