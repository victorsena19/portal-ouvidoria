import style from './Menu.module.scss';
import { Box, Icon } from '@mui/material';
import { Link } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';
import React from "react";

interface Props{
    menuRef: React.RefObject<HTMLHeadingElement>;
    onClick: React.MouseEventHandler<SVGSVGElement>;
    abrirTermosUso: React.MouseEventHandler<HTMLDivElement>;
    abrirContato: React.MouseEventHandler<HTMLDivElement>;
    abrirPerguntasFrequentes: React.MouseEventHandler<HTMLDivElement>;
}

const Menu = (({menuRef, onClick, abrirTermosUso, abrirContato, abrirPerguntasFrequentes}:Props) => {
    
    return(
        <Box className={style.box} ref={menuRef}>
            <Icon 
                fontSize='small' 
                sx={{cursor:'pointer', float:'right', padding:'5px 2px'}} 
                onClick={onClick} 
                component={CloseIcon}>

            </Icon>
            
            <ul>
                <Link className={style.box_link} to="/home"><li>Inicio</li></Link>
                <Link className={style.box_link} to=""><li>Cadastre-se</li></Link>

                <div className={style.box_link} onClick={abrirTermosUso}>
                    <li>Termos de Uso</li>
                </div>

                <div className={style.box_link} onClick={abrirContato}>
                    <li>Contato</li>
                </div>

                <div className={style.box_link} onClick={abrirPerguntasFrequentes}>
                    <li>Perguntas Frequentes</li>
                </div>
            </ul>
        </Box>
    )
})

export default Menu;