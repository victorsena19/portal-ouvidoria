import React from 'react';
import style from './CadastroPessoaFisica.module.scss';
import { FormikProps } from 'formik';
import IFormulario from 'interfaces/IFormulario';
import ComponentSelect from 'componentes/ComponentSelect';
import ComponentText from 'componentes/ComponentText';
import ComponentDate from 'componentes/ComponentDate';
import pessoa from '../../../data/Pessoa.json';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store';
import SelectPessoa from 'componentes/SelectPessoa';
import { MenuItem, SelectChangeEvent } from '@mui/material';
import { setOrdenador } from 'store/reducers/ordenadorReducer';
import ButtonConfirmar from 'componentes/ButtonConfirmar';
import ButtonCancelar from 'componentes/ButtonCancelar';
import ComponentMask from 'componentes/ComponentMask';

interface CadastroPessoaFisicaProps {
    formik: FormikProps<IFormulario>;
    handleBlurCep: (event: React.FocusEvent<HTMLInputElement>) => void;
    formData: IFormulario;
}

const CadastroPessoaFisica: React.FC<CadastroPessoaFisicaProps> = ({ ...props }) => {
    const pessoaFisica = pessoa.find(event => event.value === "1")?.value;
    const ordenador = useSelector((state: RootState) => state.ordenador).ordenador
    const dispatch = useDispatch();
    const handleChange = (event: SelectChangeEvent<string>) => {
        const { value } = event.target;
        dispatch(setOrdenador(value));
        props.formik.setFieldValue("tipoPessoa", value);
    }
    return (
        <div className={style.container}>
            <div className={style.box}>
                <SelectPessoa className={style.campogrande}
                    id="1"
                    name="tipoPessoa"
                    value={ordenador || pessoaFisica}
                    onChange={handleChange}>
                    {pessoa.map(pessoa =>
                        <MenuItem key={pessoa.id} value={pessoa.value}>{pessoa.tipoPessoa}</MenuItem>
                    )}

                </SelectPessoa>
                <ComponentText
                    type="text"
                    label="Nome Completo*"
                    name="nome_razao"
                />
            </div>

            <div className={style.box}>
                <ComponentMask
                    estilo={{marginRight:"10px"}}
                    className={style.campogrande}
                    mask={"999.999.999.99"}
                    label="CPF*"
                    name="cpf_cnpj" 
                    id="cpf_cnpj"
                    />
                <ComponentText
                    className={style.campogrande}
                    type="text"
                    label="RG*"
                    name="rg_ie"
                />
                <ComponentSelect
                    className={style.campogrande}
                    label='Genero*'
                    name="genero"
                    itens={[
                        { label: "None", value: "" },
                        { label: "Masculino", value: "masculino" },
                        { label: "Feminino", value: "feminino" },
                        { label: "Outros", value: "outros" }]}
                />
                <ComponentDate
                    className={style.campogrande}
                    id="dataNascimento"
                    label="Data de Nascimento*"
                    name="dataNascimento" />
            </div>

            <div className={style.box}>
                <ComponentMask
                    estilo={{marginRight:"10px"}}
                    className={style.campogrande}
                    mask={"(99)99999-9999"}
                    name="telefone"
                    label="Telefone*"
                    id="telefone" />
                <ComponentMask
                    estilo={{marginRight:"10px"}}   
                    className={style.campogrande}
                    mask={"(99)99999-9999"}
                    label="Celular*"
                    name="celular"
                    id="celular"
                />
                <ComponentSelect
                    label="Escolaridade*"
                    name="escolaridade"
                    itens={[
                        { label: "None", value: "" },
                        { label: "Ensino fundamental incompleto", value: "ensino fundamental incompleto" },
                        { label: "Ensino fundamental completo", value: "ensino fundamental completo" },
                        { label: "Ensino médio incompleto", value: "ensino medio incompleto" },
                        { label: "Ensino médio completo", value: "ensino medio completo" },
                        { label: "Ensino superior incompleto", value: "ensino superior incompleto" },
                        { label: "Ensino superior completo", value: "ensino superior completo" },
                    ]}
                />
            </div>

            <div className={style.box}>
                <ComponentMask
                    estilo={{marginRight:"10px"}}
                    className={style.campogrande}
                    mask={"99.999-999"}
                    label="Cep*"
                    name="cep"
                    onBlur={props.handleBlurCep}
                    id="cep"
                />
                <ComponentText
                    className={style.campogrande}
                    type="text"
                    label="Cidade*"
                    name="localidade"
                />
                <ComponentText
                    type="text"
                    label="Estado*"
                    name="uf"
                />
            </div>

            <div className={style.box}>
                <ComponentText
                    className={style.campogrande}
                    type="text"
                    label="Bairro*"
                    name="bairro"
                />
                <ComponentText
                    className={style.campogrande}
                    type="text"
                    label="Logradouro*"
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
                    label="Complemento"
                    name="complemento"
                />
            </div>

            <div className={style.box}>
                <ComponentText
                    className={style.campogrande}
                    type="text"
                    label="E-mail*"
                    name="email"
                />
                <ComponentText
                    type="text"
                    label="Confirmar E-mail*"
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
                <ButtonCancelar to="/">Cancelar</ButtonCancelar>
            </div>
        </div>
    );
};
export default CadastroPessoaFisica;
