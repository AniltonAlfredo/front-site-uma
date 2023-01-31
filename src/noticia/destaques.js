import  './noticia.css'
import { Link } from 'react-router-dom';
import React, { useState, useEffect} from 'react'
import axios from 'axios';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';


import img1 from '../assets/703B0201.jpg'
import img2 from '../assets/intercambio.jpg'
import img3 from '../assets/703B5404.jpg'
import f1 from '../assets/noticias/1.jpg'
import f2 from '../assets/noticias/2.jpg'
import f3 from '../assets/noticias/3.jpeg'
import f4 from '../assets/noticias/4.jpeg'

function Noticia() {

  return (
    <>
        <Container className="ContainerNoticia">
            <div>
                <h1>Destaques</h1>
                <br/>
                <br/>
            </div>
        </Container>          
    </>

    
    
  );
}

export default Noticia;