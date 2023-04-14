import style from './ModalContato.module.scss';
import Modal from 'react-modal';
import { Button, Icon } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';

interface Props{
    isOpen: boolean;
    onRequestClose: React.MouseEventHandler<HTMLButtonElement>;
    onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export default function ModalContato({isOpen, onRequestClose, onClick}:Props){
    return(
        <Modal className={style.modal_contato}
            appElement={document.getElementById('root') || undefined}
            isOpen={isOpen} 
            onRequestClose={onRequestClose}>
                <div>
                    <h2>Contato - Ouvidoria</h2>
                    <div className={style.div_phone}>
                        <Icon className={style.phone} component={PhoneIcon}/>
                        <h3>Fone: (69)999924738</h3>
                    </div>
                    <h4>Horário para atendimento: Segunda à sexta - 8:00 às 17:00h</h4>
                    <h4>E-mail para contato: mailto:victor_sena19@hotmail.com</h4>
                    <Button className={style.modal_buttom} variant="contained" onClick={onClick}>Fechar</Button>
                </div>
        </Modal>
    )
}