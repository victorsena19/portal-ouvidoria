import React, { useState } from 'react';
import { Formik, Form, FormikProps, FormikHelpers } from 'formik';
import axios from 'axios';
import CadastroPessoaFisica from './CadastroPessoaFisica';
import style from './Cadastro.module.scss';
import pessoa from '../../data/Pessoa.json';
import { validarFormularioPF } from './validacao';
import { validarFormularioPJ } from './validacao';
import CadastroPessoaJuridica from './CadastroPessoaJuridica';
import IFormulario from 'interfaces/IFormulario';
import { useSelector } from 'react-redux';
import { RootState } from 'store';

const Cadastro: React.FC = () => {
    const pessoaJuridica = pessoa.find(event => event.id === 2)?.value;
    const pessoaFisica = pessoa.find(event => event.id === 1)?.value;
    const ordenador = useSelector((state: RootState) => state.ordenador).ordenador
    const [formData] = useState<IFormulario>({
        tipoPessoa: pessoaFisica,
        nome_razao: "",
        cpf_cnpj: "",
        rg_ie: "",
        genero: "",
        dataNascimento: "",
        telefone: "",
        celular: "",
        escolaridade: "",
        cep: "",
        localidade: "",
        uf: "",
        bairro: "",
        logradouro: "",
        numero: "",
        complemento: "",
        email: "",
        confirmarEmail: "",
        senha: "",
        confirmarSenha: "",
    });

    const handleBlurCep = async (event: React.FocusEvent<HTMLInputElement>, setFieldValue: FormikProps<IFormulario>['setFieldValue']) => {
        const cep = event.target.value.replace(/[.-]/g, "");
        try {
            const { data } = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
            console.log(data);
            const { logradouro, bairro, localidade, uf } = data;
            setFieldValue("logradouro", logradouro);
            setFieldValue("bairro", bairro);
            setFieldValue("localidade", localidade);
            setFieldValue("uf", uf);

        } catch (err) {
            console.log(err);
        }
    }

    const submeterFormulario = (values: IFormulario, { resetForm }: FormikHelpers<IFormulario>) => {
        alert("formulario submetido");
        console.log(values);
        resetForm();
    };

    return (
        <div className={style.container}>
            <div className={style.box}>
                <div className={style.centralizar}>
                    <h2>Realizando Cadastro</h2>
                </div>
                <div className={style.central}>
                    <h3>Informações Necessárias</h3>
                </div>
                <h6>Os campos sinalizados com asterisco ( * ) são de preenchimento obrigatório</h6>
            </div>

            {ordenador !== pessoaJuridica ? (

                <Formik
                    enableReinitialize={true}
                    initialValues={formData}
                    validateOnBlur={true}
                    validateOnChange={true}
                    validationSchema={validarFormularioPF}
                    onSubmit={submeterFormulario}>
                    {(formik) => (
                        <Form>
                            <CadastroPessoaFisica
                                formik={formik}
                                formData={formData}
                                handleBlurCep={(event: React.FocusEvent<HTMLInputElement>) => handleBlurCep(event, formik.setFieldValue)} />
                        </Form>
                    )}
                </Formik>
            )
                :
                (
                    <Formik
                        enableReinitialize={true}
                        initialValues={formData}
                        validationSchema={validarFormularioPJ}
                        validateOnBlur={true}
                        validateOnChange={true}
                        onSubmit={submeterFormulario}>
                        {(formik) => (
                            <Form>
                                <CadastroPessoaJuridica
                                    formik={formik}
                                    formData={formData}
                                    handleBlurCep={(event: React.FocusEvent<HTMLInputElement>) => handleBlurCep(event, formik.setFieldValue)} />
                            </Form>
                        )}
                    </Formik>
                )}
        </div>
    );
}

export default Cadastro;

/*

    


*/


/*
import ButtonCancelar from 'componentes/ButtonCancelar';
import style from './Cadastro.module.scss';
import CadastroPessoaFisica from 'componentes/CadastroPessoaFisica';
import CadastroPessoaJuridica from 'componentes/CadastroPessoaJuridica';
import InputTexto from 'componentes/InputTexto';
import SelectPessoa from 'componentes/SelectPessoa';
import ButtonConfirmar from 'componentes/ButtonConfirmar';
import pessoa from '../../data/Pessoa.json';
import { useState } from 'react';
import IFormulario from 'interfaces/IFormulario';
import { useForm } from 'react-hook-form';
import { mensagemAviso, mensagemErro, mensagemSucesso } from '../../componentes/Toastr/toastr';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

export default function Cadastro() {
    const pessoaJuridica = pessoa.find(event => event.id === 2)?.value;
    const [ordenador, setOrdenador] = useState("");

    const [formData, setFormData] = useState<IFormulario>({
        nome: "",
        cpf: "",
        rg: "",
        genero: "",
        dataNascimento: "",
        telefone: "",
        celular: "",
        escolaridade: "",
        cep: "",
        localidade: "",
        uf: "",
        bairro: "",
        logradouro: "",
        numero: "",
        complemento: "",
        email: "",
        confirmarEmail: "",
        senha: "",
        confirmarSenha: ""

    })

    function formatCep(cep: string) {
        const regex = new RegExp("[^0-9]", "g");
        return cep.replace(regex, "");
    }

    function somenteLetra(event: React.KeyboardEvent<HTMLInputElement>) {
        const regex = /^[a-zA-Z-\s]*$/
        const chave = event.key
        if (!regex.test(chave)) {
            event.preventDefault();
        }
    }

    function somenteNumero(event: React.KeyboardEvent<HTMLInputElement>) {
        const regex = /^[0-9-]*$/;
        const chave = event.key;
        if (
            chave !== 'Backspace' &&
            chave !== 'Delete' &&
            chave !== 'ArrowRight' &&
            chave !== 'ArrowLeft' &&
            chave !== 'Tab' &&
            !regex.test(chave)
        ) {
            event.preventDefault();

        }
    }

   

    const { register,
        handleSubmit,
        setValue,
        watch,
        formState: { errors }
    } = useForm<IFormulario>({ resolver: yupResolver(validarFormulario) });

    const campoCepAlterado = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const novoCep = formatCep(event.target.value);
        if (novoCep.length === 8) {
            const response = await fetch(`https://viacep.com.br/ws/${novoCep}/json/`)
            const data = await response.json();
            setValue("localidade", data.localidade);
            setValue("uf", data.uf);
            setValue("bairro", data.bairro);
            setValue("logradouro", data.logradouro);
        }
    }

    const onSubmit = () => {
        console.log();
    }

    return (
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

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className={style.header}>
                    <InputTexto
                        name="nome"
                        label={ordenador === pessoaJuridica ? "Nome Completo do Representante*" : "Nome Completo*"}
                        className={style.campogrande} onKeyDown={somenteLetra} />
                    <SelectPessoa ordenador={ordenador} setOrdenador={setOrdenador} />
                </div>
                {ordenador === pessoaJuridica ?
                    <div className={style.box}>
                        <CadastroPessoaJuridica />
                    </div>
                    :
                    <div className={style.box}>

                        <CadastroPessoaFisica
                            idCpf='cpf'
                            nameCpf="cpf"
                            onKeyDownCpf={somenteNumero}
                            cpfValue={formData.cpf}
                            onChangeCpf={(e) => setFormData({...formData, cpf: e.target.value})}
                            {...register("cep")}
                            idRg="rg"
                            nameRg="rg"
                            rgValue={formData.rg}
                            onKeyDownRg={somenteNumero}
                            onChangeRg={(e) => setFormData({...formData, rg: e.target.value})}
                            {...register("rg")}
                            idGenero="sexo"
                            nameGenero="sexo"
                            generoValue={formData.genero}
                            onChangeGenero={(e) => setFormData({...formData, genero: e.target.value})}
                            idDataNascimento="dataNascimento"
                            nameDataNascimento="dataNascimento"
                            dataNascimentoValue={formData.dataNascimento}
                            onChangeDataNascimento={(e) => setFormData({...formData, dataNascimento: e.target.value})}
                            {...register("dataNascimento")}
                            idTelefone="telefone"
                            nameTelefone="telefone"
                            onKeyDownTelefone={somenteNumero}
                            telefoneValue={formData.telefone}
                            onChangeTelefone={(e) => setFormData({...formData, telefone: e.target.value})}
                            {...register("telefone")}
                            idCelular="celular"
                            nameCelular="celular"
                            celularValue={formData.celular}
                            onChangeCelular={(e) => setFormData({...formData, celular: e.target.value})}
                            {...register("celular")}
                            onKeyDownCelular={somenteNumero}
                            idEscolaridade="escolaridade"
                            nameEscolaridade="escolaridade"
                            escolaridadeValue={formData.escolaridade}
                            onChangeEscolaridade={(e) => setFormData({...formData, escolaridade: e.target.value})}
                            {...register("escolaridade")}
                            idCep="cep"
                            nameCep="cep"
                            onChangeCep={campoCepAlterado}
                            {...register("cep")}
                            idCidade="cidade"
                            nameCidade="cidade"
                            cidadeValue={formData.localidade}
                            onChangeCidade={(e) => setFormData({...formData, localidade: e.target.value})}
                            {...register("localidade")}
                            idUf="uf"
                            nameUf="uf"
                            ufValue={formData.uf}
                            onChangeUf={(e) => setFormData({...formData, uf: e.target.value})}
                            idBairro="bairro"
                            nameBairro="bairro"
                            bairroValue={formData.bairro}
                            onChangeBairro={(e) => setFormData({...formData, bairro: e.target.value})}
                            {...register("bairro")}
                            idLogradouro="logradouro"
                            nameLogradouro="logradouro"
                            logradouroValue={formData.logradouro}
                            onChangeLogradouro={(e) => setFormData({...formData, logradouro: e.target.value})}
                            {...register("logradouro")}
                            idNumero="numero"
                            nameNumero="numero"
                            onKeyDownNumero={somenteNumero}
                            numeroValue={formData.numero}
                            onChangeNumero={(e) => setFormData({...formData, numero: e.target.value})}
                            {...register("numero")}
                            idComplemento="complemento"
                            nameComplemento="complemento"
                            complementoValue={formData.complemento}
                            onChangeComplemento={(e) => setFormData({...formData, complemento: e.target.value})}
                            {...register("complemento")}
                            idEmail="email"
                            nameEmail="email"
                            emailValue={formData.email}
                            onChangeEmail={(e) => setFormData({...formData, email: e.target.value})}
                            {...register("email")}
                            idConfirmarEmail="confirmarEmail"
                            nameConfirmarEmail="confirmarEmail"
                            confirmarEmailValue={formData.confirmarEmail}
                            onChangeConfirmarEmail={(e) => setFormData({...formData, confirmarEmail: e.target.value})}
                            {...register("confirmarEmail")}
                            idSenha="senha"
                            nameSenha="senha"
                            senhaValue={formData.senha}
                            onChangeSenha={(e) => setFormData({...formData, senha: e.target.value})}
                            {...register("senha")}
                            idConfirmarSenha="confirmarSenha"
                            nameConfirmarSenha="confirmarSenha"
                            confirmarSenhaValue={formData.confirmarSenha}
                            onChangeConfirmarSenha={(e) => setFormData({...formData, confirmarSenha: e.target.value})}
                            {...register("confirmarSenha")}
                        />

                    </div>

                }
                <div className={style.box_button}>
                    <div className={style.button}>
                        <ButtonConfirmar type='submit' children='Salvar' />
                        <ButtonCancelar to='/' children='Cancelar' />
                    </div>
                </div>
            </form>

        </div>

    )
}
*/
/*

    const [nome, setNome] = useState("");
    const [cpf, setCpf] = useState("");
    const [rg, setRg] = useState("");
    const [sexo, setSexo] = useState("");
    const [dataNascimento, setDataNascimento] = useState("");
    const [telefone, setTelefone] = useState("");
    const [celular, setCelular] = useState("");
    const [escolaridade, setEscolaridade] = useState("");
    const [cepValido, setCepValido] = useState("");
    const [cidade, setCidade] = useState("");
    const [uf, setUf] = useState("");
    const [bairro, setBairro] = useState("");
    const [logradouro, setLogradouro] = useState("");
    const [numero, setNumero] = useState("");
    const [complemento, setComplemento] = useState("");
    const [email, setEmail] = useState("");
    const [confirmarEmail, setConfirmaremail] = useState("");
    const [senha, setSenha] = useState("");
    const [confirmarSenha, setConfirmarSenha] = useState("");

*/