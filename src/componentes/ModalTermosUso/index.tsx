import style from './ModalTermosUso.module.scss';
import Modal from 'react-modal';
import { Button } from '@mui/material';
import termosUso from '../../data/TermosDeUso.json';

interface Props{
    isOpen: boolean;
    onRequestClose: React.MouseEventHandler<HTMLButtonElement>;
    onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export default function ModalTermosUso({isOpen, onRequestClose, onClick}:Props){

    return(
        <Modal className={style.modal_termos_uso} 
                            appElement={document.getElementById('root') || undefined}
                            isOpen={isOpen} 
                            onRequestClose={onRequestClose}> 
                                <div>
                                    <h2>Termos de Uso</h2>
                                    {termosUso.map(termoUso => ( 
                                        <div key={termoUso.titulo}>
                                            <h3>{termoUso.titulo}</h3>
                                            <h4>{termoUso.contexto}</h4>
                                        </div>
                                    ))}
                                    <Button className={style.modal_buttom}  variant="contained" onClick={onClick}>Fechar</Button>
                                </div>
                            </Modal> 
    )
}