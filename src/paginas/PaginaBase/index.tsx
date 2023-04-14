/* eslint-disable jsx-a11y/alt-text */
import { AppBar, Box, Button} from '@mui/material';
import Icon from '@mui/material/Icon';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import HelpIcon from '@mui/icons-material/Help';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import PhoneIcon from '@mui/icons-material/Phone';
import SendIcon from '@mui/icons-material/Send';
import HomeIcon from '@mui/icons-material/Home';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/system';
import {Link, Outlet} from 'react-router-dom';
import FormControl from '@mui/material/FormControl';
import MenuIcon from '@mui/icons-material/Menu';
import brasao from '../../imagens/Brasao.png';
import InputComponent from '../../componentes/InputComponent';
import style from './PaginaBase.module.scss';
import { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'store';
import { setModalPerguntasFrequentes } from '../../store/reducers/modalPerguntasFrequentesReducer';
import ModalPerguntasFrequentes from 'componentes/ModalPerguntasFreguentes';
import ModalTermosUso from 'componentes/ModalTermosUso';
import ModalContato from 'componentes/ModalContato';
import Menu from 'componentes/Menu';

export default function PaginaBase(){
    const dispatch = useDispatch();
    const modalPerguntasFrequentes = useSelector((state:RootState) => state.modalPerguntasFrequentes.modal);
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef<HTMLHeadingElement>(null);
    const [modalContato, setModalContato] = useState(false);
    const [modalTermosUso, setModalTermosUso] = useState(false);

    useEffect(() => {
        function clickExterno(ev: MouseEvent){
            if(menuRef.current && !menuRef.current.contains(ev.target as Node)){
                setIsOpen(false)
            }
        }
        document.addEventListener('click', clickExterno, true);
        return () => {
            document.removeEventListener('click', clickExterno);
        }
    }, [menuRef]);
    
    function abrirMenu(){
        setIsOpen(true);
    }

    function fecharMenu(){
        setIsOpen(false);
    }

    function abrirModalContato(){
        setModalContato(true);
        setIsOpen(false);
    }

    function fecharModalContato(){
        setModalContato(false);
    }

    function abrirModalTermosUso(){
        setModalTermosUso(true);
        setIsOpen(false);
    }
    function fecharModalTemosUso(){
        setModalTermosUso(false);
    }
    
    function fecharModalPerguntasFrequentes(){
        dispatch(setModalPerguntasFrequentes(false));

    }

    function abrirModalPerguntasFrequentes(){
        dispatch(setModalPerguntasFrequentes(true))
        setIsOpen(false);
        
    }

    return(
        <div>
        <AppBar position='static'>
            <Container className={style.container_container} maxWidth='xl'>
                <Toolbar className={style.toolbar}>
                    <Box className={style.toolbar_box}>
                        <Icon component={HomeIcon}/>
                        <Typography variant="h6" marginLeft={1} marginRight={5}>
                        <Link style={{textDecoration: 'none', color:'#fff'}} to="/home">Inicio</Link>
                        </Typography>
                    </Box>
                    <Box className={style.toolbar_box}>
                        <Icon component={PersonAddAlt1Icon}/>
                        <Typography variant="h6" marginLeft={1} marginRight={5}>
                        <Link style={{textDecoration: 'none', color:'#fff'}} to="/home">Cadastre-se</Link>
                        </Typography>
                    </Box>
                    <Box className={style.toolbar_box}>
                        <Icon component={InsertDriveFileIcon}/>
                        <Typography variant="h6"  marginLeft={1} marginRight={5}>
                        <div style={{textDecoration: 'none', color:'#fff'}} onClick={abrirModalTermosUso}>Termos de Uso</div>
                        </Typography>
                    </Box>
                    {modalTermosUso && (
                            <ModalTermosUso
                            isOpen={modalTermosUso}
                            onRequestClose={fecharModalTemosUso}
                            onClick={fecharModalTemosUso}/> 
                        
                    )}
                    <Box  className={style.toolbar_box}>
                        <Icon component={PhoneIcon}/>
                        <Typography variant="h6"  marginLeft={1} marginRight={5}>
                        <div style={{textDecoration: 'none', color:'#fff'}} onClick={abrirModalContato}>Contato</div>
                        </Typography>
                    </Box>
                    {modalContato && (
                        <ModalContato
                        isOpen={modalContato}
                        onRequestClose={fecharModalContato}
                        onClick={fecharModalContato}/>
                    )}
                                        
                    <Box className={style.toolbar_box}>
                        <Icon component={HelpIcon}/>
                        <Typography variant="h6"  marginLeft={1}>
                        <div style={{textDecoration: 'none', color:'#fff'}} onClick={abrirModalPerguntasFrequentes} >Perguntas Frequentes</div>
                        </Typography>
                    </Box>
                    {modalPerguntasFrequentes && (
                        <ModalPerguntasFrequentes
                        isOpen={modalPerguntasFrequentes}
                        onRequestClose={fecharModalPerguntasFrequentes}
                        onClick={fecharModalPerguntasFrequentes}/>
                    )}

                    <Box className={style.toolbar_menuIcon}>
                        {!isOpen && (<Icon onClick={abrirMenu} component={MenuIcon}></Icon>)}
                        
                    </Box>
                    {isOpen && (<Menu menuRef={menuRef}
                        onClick={fecharMenu}
                        abrirTermosUso={abrirModalTermosUso}
                        abrirContato={abrirModalContato}
                        abrirPerguntasFrequentes={abrirModalPerguntasFrequentes}
                        />
                    )}
                </Toolbar>
            </Container>
            <Container maxWidth= 'xl' className={style.container}>
                <Box className={style.container_box}>
                    <img src={brasao}/>
                    <Box>
                        <Typography variant='h5'>Prefeitura do Município Registro - SP</Typography>
                        <Typography variant='h6'> Sistema de Ouvidoria</Typography>
                    </Box>
                </Box>
                    <FormControl margin='dense' className={style.form}>
                        <Box className={style.form_box}>
                            <Box className={style.form_box_box}>
                                    <InputComponent component={EmailIcon} type="text" placeholder="Login" obrigatorio={true}/>
                            </Box>
                            <Box className={style.form_box_box}>
                                <Box>
                                    <InputComponent component={LockIcon} type="password" placeholder="Senha" obrigatorio={true}/>
                                    </Box>
                            </Box>
                            <Box className={style.form_box_box}>
                                <Button className={style.form_button} color='info' size='small' variant='contained' endIcon={<SendIcon/>}>Entrar</Button>
                            </Box>
                        </Box>
                    </FormControl>
            </Container>
            
            
        </AppBar>
        <Outlet/>
        <footer className={style.Rodape}>
            <Typography variant='h6'>Desenvolvido para: Singus Automação Eireli - ME</Typography>
            <Typography variant='h6'>@{new Date().getFullYear()}</Typography>

        </footer>
    </div>
    );
}