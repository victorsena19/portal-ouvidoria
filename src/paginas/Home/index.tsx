import AppBar from '@mui/material/AppBar/AppBar';
import {FormControl} from '@mui/material';
import Toolbar from '@mui/material/Toolbar/Toolbar';
import Typography from '@mui/material/Typography';
import HomeIcon from '@mui/icons-material/Home';
import CloseIcon from '@mui/icons-material/Close';
import manifestacao from '../../data/Manifestacao.json';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Box } from '@mui/system';
import style from './Home.module.scss';
import { Container, Icon } from '@mui/material';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Modal from 'react-modal';
import SelectComponent from '../../componentes/SelectComponent';
import { useDispatch } from 'react-redux';
import { setModalPerguntasFrequentes } from '../../store/reducers/modalPerguntasFrequentesReducer';

function Home() {
  const [abrirModal, SetAbrirModal] = useState(true);
  const [selectId, setSelectId] = useState<number | null>(null);

  const dispatch = useDispatch();
  const eventoModalAberto = (id: number) => {
    setSelectId(id);
    SetAbrirModal(true);
  }

  const eventoModalFechado = () => {
    SetAbrirModal(false);
    
  }

  function abrirModalPerguntasFrequentes(){
    dispatch(setModalPerguntasFrequentes(true));
  }

  const selectManifestacao = manifestacao.find(item => item.id === selectId);

  return (
    <AppBar color='inherit' position='static' sx={{ boxShadow: 'none', display: 'flex', alignItems: 'center' }}>
      <Toolbar sx={{ width: '90%' }}>
        <Icon sx={{ margin: '5px' }} component={HomeIcon} />
        <Icon sx={{ margin: '5px', fontSize: '2%', color: '#B4B4B4' }} component={ArrowForwardIosIcon} />
        <Typography sx={{ margin: '5px', fontWeight: '800' }}>Tipo</Typography>
        <Icon sx={{ margin: '5px', fontSize: '12px', color: '#B4B4B4' }} component={ArrowForwardIosIcon} />
        <Typography sx={{ margin: '5px' }}>Descrição</Typography>
        <Icon sx={{ margin: '5px', fontSize: '12px', color: '#B4B4B4' }} component={ArrowForwardIosIcon} />
        <Typography sx={{ margin: '5px' }}>Revisão</Typography>
        <Icon sx={{ margin: '5px', fontSize: '12px', color: '#B4B4B4' }} component={ArrowForwardIosIcon} />
        <Typography sx={{ margin: '5px' }}>Conclusão</Typography>
      </Toolbar>
      <Container maxWidth='xl' sx={{ borderTop: '2px solid #DCDCDC', borderBottom: '2px solid #DCDCDC', textAlign: 'center' }}>
        <Typography sx={{ padding: '20px', color: '#1976D2' }} variant='h4'>O que você deseja fazer?</Typography>
      </Container>
      <Toolbar sx={{ width: '90%', padding: '30px', display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>
        {manifestacao.map((evento) => (
          <Box key={evento.id} onClick={() => eventoModalAberto(evento.id)} sx={{ backgroundColor: `${evento.cor}`, color: '#ffff' }} className={style.box}>
            <Typography sx={{ fontWeight: '700' }} className={style.box_typography1} variant='h5'>{evento.title}</Typography>
            <Typography className={style.box_typography2} variant='h6'>{evento.descricao}</Typography>
            <Box>
              <img src={evento.icon} alt={evento.alt} />
            </Box>
          </Box>
        ))}
      </Toolbar>
      {abrirModal && selectManifestacao && (
        <Modal isOpen={abrirModal}
          appElement={document.getElementById('root') || undefined}
          onRequestClose={eventoModalFechado}
          overlayClassName={style.atrasDoModal}
          className={`${style.modal} ${!abrirModal ? style.modal_close : ''}`}>
          <Icon onClick={eventoModalFechado} className={style.closeIcon} fontSize='large' component={CloseIcon} />
          <Box className={style.modal_box}>
            <Typography className={style.modal_box_typography} sx={{ fontWeight: '700' }} variant='h5'>Realizando um registro de &nbsp;</Typography>
            <Typography sx={{ fontWeight: '700' }}
              className={style.modal_box_typography}
              style={{ color: `${selectManifestacao.cor}` }}
              variant='h5'>{selectManifestacao.title}
            </Typography>
          </Box>
          <FormControl className={style.modal_form}>
            <FormControl className={style.modal_form_box}>
              <SelectComponent label='Escolha o Setor que deseja relatar'
                options={[
                  { label: 'Ouvidoria', value: '1' },
                  { label: 'Secretaria de Saúde', value: '2' },
                  { label: 'Procuradoria', value: '3' }
                ]}
                value="valor" />
            </FormControl>
            <FormControl margin='dense' className={style.modal_form_box}>
              <SelectComponent label='Escolha o Setor que deseja relatar'
                options={[
                  { label: 'Ouvidoria', value: '1' },
                  { label: 'Secretaria de Saúde', value: '2' },
                  { label: 'Procuradoria', value: '3' }
                ]}
                value="valor" />
            </FormControl>
          </FormControl>
          <Box className={style.box_button}>
            <button className={style.box_button_continue}>Continuar</button>
            <button onClick={() => eventoModalFechado()} className={style.box_button_cancelar}>Cancelar</button>
          </Box>
        </Modal>
      )}
      <Toolbar>
        <Link to={''} className={style.button}>Consulte suas Manifestações</Link>
        <div onClick={abrirModalPerguntasFrequentes} className={style.button}>Perguntas Frequentes</div>
      </Toolbar>
    </AppBar>
  );
}

export default Home;