import { FormikProps } from 'formik';
import style from './CadastroPessoaJuridica.module.scss';
import ComponentText from 'componentes/ComponentText';
import IFormulario from '../../../interfaces/IFormulario';
import SelectPessoa from 'componentes/SelectPessoa';
import pessoa from '../../../data/Pessoa.json'
import { MenuItem, SelectChangeEvent } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { setOrdenador } from 'store/reducers/ordenadorReducer';
import { RootState } from 'store';
import ButtonConfirmar from 'componentes/ButtonConfirmar';
import ButtonCancelar from 'componentes/ButtonCancelar';
import ComponentMask from 'componentes/ComponentMask';

interface CadastroPessoaJuridicaProps {
    formik: FormikProps<IFormulario>;
    handleBlurCep: (event: React.FocusEvent<HTMLInputElement>) => void;
    formData: IFormulario;
}

const CadastroPessoaJuridica: React.FC<CadastroPessoaJuridicaProps> = ({ ...props }) => {
    const ordenador = useSelector((state: RootState) => state.ordenador).ordenador
    const pessoaJuridica = pessoa.find(event => event.value === "2")?.value;
    const dispatch = useDispatch();
    const handleChange = (event: SelectChangeEvent<string>) => {
        const { value } = event.target;
        dispatch(setOrdenador(value));
        props.formik.setFieldValue("tipoPessoa", value);
    }

    return (
        <div className={style.container}>
            <div className={style.box}>
                <SelectPessoa
                    className={style.campogrande}
                    id="tipoPessoa"
                    name="tipoPessoa"
                    value={ordenador || pessoaJuridica}
                    onChange={handleChange}>
                    {pessoa.map(pessoa =>
                        <MenuItem key={pessoa.id} value={pessoa.value}>{pessoa.tipoPessoa}</MenuItem>
                    )}
                </SelectPessoa>
                <ComponentText
                    max={150}
                    type="text"
                    label="Razão Social*"
                    name="nome_razao"
                />
            </div>

            <div className={style.box}>
                <ComponentMask
                    estilo={{marginRight:"10px"}}
                    className={style.campomedio}
                    mask={"99.999.999/9999-99"}
                    label="CNPJ*"
                    name="cpf_cnpj"
                    id="cpf_cnpj"
                />
                <ComponentMask
                    estilo={{marginRight:"10px"}}
                    className={style.campomedio}
                    mask={"999.999.999.999"}
                    label="Inscrição Estadual*"
                    name="rg_ie"
                    id="rg_ie"
                />
                <ComponentMask
                    mask={"(99)99999-9999"}
                    label="Telefone*"
                    name="telefone"
                    id="telefone"
                />
            </div>

            <div className={style.box}>
                <ComponentMask
                    estilo={{marginRight:"10px"}}
                    className={style.campomedio}
                    mask="99.999-999"
                    label="CEP*"
                    name="cep"
                    id="cep"
                    onBlur={props.handleBlurCep}
                />
                <ComponentText
                    className={style.campomedio}
                    type="text"
                    label="UF*"
                    name="uf"
                />
                <ComponentText
                    className={style.campomedio}
                    type="text"
                    label="Cidade*"
                    name="localidade"
                />
                <ComponentText
                    type="text"
                    label="Bairro*"
                    name="bairro"
                />
            </div>
            <div className={style.box}>
                <ComponentText
                    max={100}
                    className={style.campogrande}
                    type="text"
                    label="Lagradouro*"
                    name="logradouro"
                />
                <ComponentText
                    className={style.campogrande}
                    type="text"
                    label="Número*"
                    name="numero"
                />
                <ComponentText
                    type="text"
                    label="Complemento*"
                    name="complemento"
                />

            </div>

            <div className={style.box}>
                <ComponentText
                    className={style.campogrande}
                    type="text"
                    label="Email*"
                    name="email"
                />
                <ComponentText
                    type="text"
                    label="Confirmar Email*"
                    name="confirmarEmail"
                />
            </div>
            <div className={style.box}>
                <ComponentText
                    className={style.campogrande}
                    type="password"
                    label="Senha*"
                    name="senha"
                />
                <ComponentText
                    type="password"
                    label="Confirmar Senha*"
                    name="confirmarSenha"
                />
            </div>
            <div className={style.box}>
                <ButtonConfirmar type='submit'>Cadastrar</ButtonConfirmar>
                <ButtonCancelar to='/'>Cancelar</ButtonCancelar>
            </div>
        </div>
    )
}

export default CadastroPessoaJuridica;