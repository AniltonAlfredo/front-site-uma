import News from './News/news';
import Evento from './Events/evento';
import React, { useState} from 'react'
import { Button, Modal } from 'react-bootstrap';

//const dataProvider = jsonServerProvider('http://localhost:8080/noticia/');
// const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");

function Admin_Uma() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return (

    <>
      <h1>PAINEL ADMINISTRATIVO</h1>
      <News/>
      <br/><br/>
      <Evento/>

    </>
    
    
  );
}

export default Admin_Uma;