import "./pastoral.css";
import { Row, Container, Col, Image, Table } from 'react-bootstrap'
import emailjs from "emailjs-com";
import React, { useRef,useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Accordion from 'react-bootstrap/Accordion';
import ListGroup from 'react-bootstrap/ListGroup';
import Modal from 'react-bootstrap/Modal';



const Pastoral = () => {

    return (
        <Container fluid >
           
           <Container className="Pastoral">
                <Row>

                    <Col md="12" >
                        <h3>PASTORAL UNIVERSITÁRIA</h3>
                        <p>
                            É mais um serviço que a Universidade Metodista de Angola presta à sua comunidade académica.<br/>
                            <br/>
                            Com actividades voltadas para a promoção do desenvolvimento humano de estudantes e trabalhadores(as),
                            a Pastoral visa a formação ética e solidária de profissionais, para terem compromisso com a construção
                             de uma sociedade mais sintonizada com os valores do evangelho, de justiça e igualdade.
                        </p>
                    <Accordion>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>ACOLHIMENTO</Accordion.Header>
                            <Accordion.Body>
                             Ao zelar, aconselhar e acompanhar estudantes e trabalhadores(as), em situações difíceis
                             e nos momentos de alegria<br/>
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="1">
                            <Accordion.Header>EVANGELIZAÇÃO</Accordion.Header>
                            <Accordion.Body>
                             Ao zelar pelos valores éticos de toda a comunidade; ao promover o diálogo entre a fé e a 
                             ciência; ao oferecer espaço de encontro e diálogo para as diferentes expressão de fé 
                             manifestadas no campus; ao gerar consciência de responsabilidade frente ao ambiente e toda 
                             a natureza;<br/>
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="2">
                            <Accordion.Header>RESPONSABILIDADE SOCIAL</Accordion.Header>
                            <Accordion.Body>
                             Ao actuar em parceria efectiva com os demais projectos da própia Universidade(ensino, 
                             investigação científica e extensão); ao articular pessoas, instituições e movimentos sociais
                              nas lutas por vida digna e por um mundo mais fraterno<br/>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                                    
                    </Col>
                </Row>

                <br/>
            </Container>
              
            
        </Container>       
    )
}

export default Pastoral;