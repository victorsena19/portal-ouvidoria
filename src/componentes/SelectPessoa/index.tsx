import { ReactNode } from 'react';
import { Select, SelectChangeEvent } from '@mui/material';

interface Props{
    onChange: (event: SelectChangeEvent<string>, child: ReactNode) => void;
    label?: string;
    name?: string;
    value?: string;
    itens?: { label: string; value: string }[];
    required?: boolean;
    children: ReactNode;
    id: string;
    className?: string;
}

export default function SelectPessoa({id, className, label, children, value, name, onChange}:Props) {
    return (
        <div style={{width:"100%", marginRight:"10px"}}>
        <Select 
            fullWidth
            className={className}
            id={id}
            labelId={name}
            value={value}
            onChange={onChange}
            label={label}
        >
            {children}
        </Select>
    </div>
    )
}



/*
const [aberto, setAberto] = useState(false);
const pessoaFisica = pessoa.find(opcao => opcao.id === 1)?.tipoPessoa;
const nomeOrdenador = ordenador && pessoa.find(opcao => opcao.value === ordenador)?.tipoPessoa;
 <div id={style.select}>
            <span>Tipo de Pessoa*</span>
            <button type='button' className={style.ordenador} onClick={() => setAberto(!aberto)}
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
*/