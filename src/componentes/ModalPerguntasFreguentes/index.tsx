import perguntasFrequentes from '../../data/PerguntasFreguentes.json'
import style from './modaPerguntasFrequentes.module.scss';
import Modal from 'react-modal';
import { Button } from '@mui/material';
import { useState } from 'react';

interface Props{
    isOpen: boolean;
    onRequestClose: React.MouseEventHandler<HTMLButtonElement>;
    onClick: React.MouseEventHandler<HTMLButtonElement>;

}

export default function ModalPerguntasFrequentes({isOpen, onRequestClose, onClick}:Props){
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [pfAtivo, setPfAtivo] = useState(true);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [selectIdPf, setSelectIdPf] = useState<number | null>(null);
    
    function mostrarPerguntas(id: number){
        if(!pfAtivo){
            setSelectIdPf(id);
            setPfAtivo(true);
        }else{
                setPfAtivo(false);
        }
    }

    return(
        <Modal isOpen={isOpen}
            appElement={document.getElementById('root') || undefined}
            className={style.modal_perguntas_frequentes}
            onRequestClose={onRequestClose}> 
                <div>
                    <h2>Perguntas Frequentes</h2>
                        {perguntasFrequentes.map(pf => ( 
                            <div key={pf.id} className={style.pf} >
                                <div className={style.pf_titulo } onClick={() => mostrarPerguntas(pf.id)}>
                                    <h3>{pf.titulo}</h3>
                                </div>
                                
                                <div className={`${style.pf_contexto}
                                    ${pfAtivo && pf.id === selectIdPf ? style['pf_contexto-ativo'] : ''}`}>
                                    <h4>{pf.contexto}</h4>
                                </div>
                            </div>
                    ))}
                    <Button className={style.modal_buttom} variant="contained" onClick={onClick}>Fechar</Button>
                </div>
        </Modal>
    ) 
}