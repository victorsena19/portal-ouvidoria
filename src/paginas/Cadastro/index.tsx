import CadastroPessoaFisica from 'componentes/CadastroPessoaFisica';
import CadastroPessoaJuridica from 'componentes/CadastroPessoaJuridica';

export default function Cadastro(){
    return(
        <div>
            <div>
                <h2>Realizando Cadastro</h2>
                <h3>Informações necessárias</h3>
            </div>
            <div>
                <CadastroPessoaFisica/>
            </div>
            <div>
                <CadastroPessoaJuridica/>
            </div>
        </div>
    )
}