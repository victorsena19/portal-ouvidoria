import InputGrande from 'componentes/InputGrande';
import style from './CadastroPessoaJuridica.module.scss';
import InputMedio from 'componentes/InputMedio';
import InputMini from 'componentes/InputMini';
import InputPequeno from 'componentes/InputPequeno';

export default function CadastroPessoaJuridica(){
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
                [aqui vai um input select]
            </div>
            <div>
                <InputGrande/>
                <InputGrande/>
            </div>
        </div>
    )
}