import React from 'react'
import  './BemVindo.css'
import { Row, Container, Col, Image } from 'react-bootstrap';
import LogoHorizontal from '../assets/lgV5C.png'
const BemVindo = () => {
    return (

        <Container className="ContainerWelcome">
            <Row>
                <Col md="9" className="Titulo">
                    <h1>BEM VINDO À METODISTA!</h1>
                    <p className="BV">Bem-vindos à Metodista de Angola! Conectada a uma rede 
                            internacional de mais de 1.000 instituições de educação 
                            em todos os continentes, é a universidade pra você, é o 
                            compromisso com o desenvolvimento do País.</p>
                </Col>
                <Col md="3" className="LogoImagem">
                    <Image src={LogoHorizontal} fluid height="450px" width="450px"/>
                </Col>
            </Row>
        </Container>

        /*<section className={estilo.bem_vindo}>
            <div className={estilo.texto}>
                <h1>BEM VINDO À METODISTA!</h1>
                <p>Bem-vindos à Metodista de Angola! Conectada a uma rede 
                    internacional de mais de 1.000 instituições de educação 
                    em todos os continentes, é a universidade pra você, é o 
                    compromisso com o desenvolvimento do País.</p>
            </div>
            <div className={estilo.logo}></div>
        </section>*/
    )
}

export default BemVindo;
