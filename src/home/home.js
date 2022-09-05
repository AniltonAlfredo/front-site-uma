import React, { useState } from 'react';
import Carrocel from "../carrocel/carrocel";
import Novidades from "../novidade/novidade";
import BemVindo from "../welcome/BemVindo";
import Faculdades from "../faculdades/faculdades";
import Noticia from "../noticia/noticia";
import Evento from "../evento/evento";
import Estatistica from "../dadosEst/estatistica";
import Video from "../video/video";
import Links from "../linksExternos/links";
import Radio from "../radio/radio";
import Mapa from "../mapa/mapa";

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import ImgModal from "./PopupInscricao.jpg";


function Home() {

  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  //const handleShow = () => setShow(true);


  return (
    <>  
        <Carrocel />
        <Novidades />
        <BemVindo/>
        <Faculdades/>
        <Noticia/>
        <hr></hr>
        <Evento/>
        <Estatistica/>
        <Radio/>
        <hr></hr>
        <Video/>
        <hr></hr>
        <Links/>
        {/* <Mapa/> */}


        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
         
        >
            <Modal.Header closeButton>
              {/* <Modal.Title>Inscrições para Exame de Acesso</Modal.Title> */}
            </Modal.Header>
            <Modal.Body>
              <img
                width="100%"
                src={ImgModal}
                alt=""
              />

              
            </Modal.Body>
            <Modal.Footer>
               <Button variant="secondary" onClick={handleClose}>Entendido</Button> 
              <Button variant="primary" href='https://mutue.ao/register' target='_blank' >Inscrever-se</Button>
            </Modal.Footer>
          </Modal>



    </>
  );
}

export default Home;