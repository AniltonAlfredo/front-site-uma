import React from 'react'
import  './posgraduacao.css'
import { Row, Container, Col, Image, Card} from 'react-bootstrap';
import { Link } from 'react-router-dom';

import AC from './AUDITORIA E CONTABILIDADE.pdf'
import EGA from './ECONOMIA E GESTÃO APLICADAS.pdf'
import EOTDR from './EOTDREGIONAL.pdf'
import ER from './ESTUDOS DA RELIGIÃO.pdf'
import GA from './GESTÃO AMBIENTAL.pdf'
import INFO from './INFORMATICA COMPLETO.pdf'
import DouTeo from './Doutoramento-TEOLOGIA.pdf'

const PosGraduacao = () => {
    return (

        <Container className="">
            <Row>
                <Col md="12" className="PoStyle">
                    <h1>PÓS-GRADUAÇÃO</h1>
                </Col>
            </Row>
            <Row>
                <Col md="6" className="PoStyle">
                        <Card bg="light" text="dark" className="">
                            <Card.Header className="Header-Text">
                                <Card.Title>MESTRADOS</Card.Title>
                                <Card.Text>
                                </Card.Text>
                            </Card.Header>
                            <Card.Body>
                                <a target="_blank" href={AC}>AUDITORIA E CONTABILIDADE</a>                          
                                <hr></hr>
                                <a target="_blank" href={EGA}>ECONOMIA E GESTÃO APLICADAS</a> 
                                <hr></hr>
                                <a target="_blank" href={EOTDR}>ECONOMIA, ORDENAMENTO DO TERRITÓRIO E 
                                DESENVOLVIMENTO REGIONAL </a>
                                
                                <hr></hr>
                                <a target="_blank" href={ER}>ESTUDOS DA RELIGIÃO E TEOLOGIA</a>
                                
                                <hr></hr>
                                <a target="_blank" href={GA}>GESTÃO AMBIENTAL</a>
                                
                                <hr></hr>
                                <a target="_blank" href={INFO}>ENGENHARIA INFORMÁTICA</a>
                                
                            </Card.Body>
                            
                        </Card>
                        <br/>
                </Col>
                <Col md="6" className="PoStyle">
                        <Card bg="light" text="dark" className="">
                            <Card.Header className="Header-Text">
                                <Card.Title>DOUTORAMENTO</Card.Title>
                                <Card.Text className="TextoNoticia">
                                </Card.Text>
                            </Card.Header>
                            <Card.Body>
                                <a target="_blank" href={DouTeo}>ESTUDOS DA RELIGIÃO</a>
                                
                            </Card.Body>
                            
                        </Card>
                </Col>
            </Row>
        </Container>

    )
}

export default PosGraduacao;