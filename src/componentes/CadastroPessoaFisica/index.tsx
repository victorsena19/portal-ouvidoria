import InputGrande from 'componentes/InputGrande';
import style from './CadastroPessoaFisica.module.scss';
import InputMedio from 'componentes/InputMedio';
import InputMini from 'componentes/InputMini';
import InputPequeno from 'componentes/InputPequeno';

export default function CadastroPessoaFisica(){
    return(
        <div>
            <div>
                <InputGrande/>
                <InputMedio/>
                <InputMini/>
            </div>
            <div>
                <InputPequeno/>
                <InputPequeno/>
                <InputMini/>
                <InputMedio/>
            </div>
            <div>
                <InputGrande/>
                <InputGrande/>
            </div>
        </div>
    )
}