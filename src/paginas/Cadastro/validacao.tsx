import * as Yup from 'yup';

const validarFormularioPF = Yup.object().shape({
    nome_razao: Yup.string()
        .min(3, "O campo deve ter no mínimo 3 caracteres!")
        .max(150, "O campo atingiu o maximo de caracteres")
        .required("Campo obrigatório"),

    cpf_cnpj: Yup.string()
        .required("Campo obrigatório"),

    rg_ie: Yup.string()
        .required("Campo obrigatório"),

    genero: Yup.string()
        .required("Campo obrigatório"),

    dataNascimento: Yup.date()
        .required("Campo obrigatório"),
     
    telefone: Yup.string()
        .matches(/\([0-9]{2}\)[0-9]/),

    celular: Yup.string()
        .required("Campo obrigatório")
        .matches(/\([0-9]{2}\)9[0-9]/),

    escolaridade: Yup.string()
        .required("Campo obrigatório"),

    cep: Yup.string()
        .required("Campo obrigatório"),

    localidade: Yup.string()
        .required("Campo obrigatório"),

    uf: Yup.string()
        .required("Campo obrigatório"),

    bairro: Yup.string()
        .required("Campo obrigatório"),

    logradouro: Yup.string()
        .required("Campo obrigatório"),

    numero: Yup.string()
        .required("Campo obrigatório"),
    email: Yup.string()
        .email("Email inválido")
        .required("Campo obrigatório"),

    confirmarEmail: Yup.string()
        .required("Campo obrigatório")
        .oneOf([Yup.ref("email")], "Os Emails devem ser iguais!"),
    senha: Yup.string()
        .required("Campo obrigatório"),

    confirmarSenha: Yup.string()
        .required("Campo obrigatório")
        .oneOf([Yup.ref("senha")], "As senhas devem ser iguais!"),

});

const validarFormularioPJ = Yup.object().shape({
    nome_razao: Yup.string()
        .min(3, "O campo deve ter no mínimo 3 caracteres!")
        .max(150, "O campo atingiu o maximo de caracteres")
        .required("Campo obrigatório"),

    cpf_cnpj: Yup.string()
        .required("Campo obrigatório"),

    rg_ie: Yup.string()
        .required("Campo obrigatório"),

    telefone: Yup.string()
        .required("Campo obrigatório")
        .matches(/\([0-9]{2}\)[0-9]/),

    cep: Yup.string()
        .required("Campo obrigatório"),

    localidade: Yup.string()
        .required("Campo obrigatório"),

    uf: Yup.string()
        .required("Campo obrigatório"),

    bairro: Yup.string()
        .required("Campo obrigatório"),

    logradouro: Yup.string()
        .required("Campo obrigatório"),

    numero: Yup.string()
        .required("Campo obrigatório"),
    email: Yup.string()
        .email("Email inválido")
        .required("Campo obrigatório"),

    confirmarEmail: Yup.string()
        .required("Campo obrigatório")
        .oneOf([Yup.ref("email")], "Os Emails devem ser iguais!"),
    senha: Yup.string()
        .required("Campo obrigatório"),

    confirmarSenha: Yup.string()
        .required("Campo obrigatório")
        .oneOf([Yup.ref("senha")], "As senhas devem ser iguais!"),

});

export {validarFormularioPF};
export {validarFormularioPJ};