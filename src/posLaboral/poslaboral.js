import React from 'react'
import  './poslaboral.css'
import { Row, Container, Col, Image, Card} from 'react-bootstrap';
import { Link } from 'react-router-dom';
 
const PosLaboral = () => {
    return (

        <Container className="">
            <Row>
                <Col md="12" className="PoStyle">
                    <h1>PÓS-LABORAL</h1>
                </Col>
            </Row>
            <Row>
                <Col md="4" className="PoStyle">
                        <Card bg="light" text="dark" className="">
                            <Card.Header className="Header-Text-PL">
                                <Card.Title>FACULDADE DE ENGENHARIA E ARQUITECTURA</Card.Title>
                                <Card.Text>
                                </Card.Text>
                            </Card.Header>
                            <Card.Body>
                                <Link to="/curso1"> <span className='spnFcl'>Engenharia Informática</span></Link>                            
                                <hr></hr>
                                <Link to="/curso4"> <span className='spnFcl'>Engenharia Civil</span></Link> 
                                <hr></hr>
                                <Link to="/curso6"><span className='spnFcl'>Engenharia Industrial e Sistemas Eléctricos</span></Link>
                                <hr></hr>
                                <Link to="/curso7"><span className='spnFcl'>Engenharia Mecatrónica</span></Link>
                                
                                
                            </Card.Body>
                            
                        </Card>
                        <br/>
                </Col>

                <Col md="4" className="PoStyle">
                        <Card bg="light" text="dark" className="">
                            <Card.Header className="Header-Text-PL">
                                <Card.Title>FACULDADE DE SAÚDE E BEM-ESTAR</Card.Title>
                                <Card.Text>
                                </Card.Text>
                            </Card.Header>
                            <Card.Body>
                                <Link to="/curso14"> <span className='spnFcl'>Análises Clínicas e Saúde Pública</span></Link>                            
                                <hr></hr>
                                <Link to="/curso17"> <span className='spnFcl'>Enfermagem</span></Link> 
                                
                            </Card.Body>
                            
                        </Card>
                        <br/>
                </Col>

                <Col md="4" className="PoStyle">
                        <Card bg="light" text="dark" className="">
                            <Card.Header className="Header-Text-PL">
                                <Card.Title>FACULDADE CIÊNCIAS JURÍDICAS E SOCIAIS</Card.Title>
                                <Card.Text>
                                </Card.Text>
                            </Card.Header>
                            <Card.Body>
                                <Link to="/curso12"> <span className='spnFcl'>Direito</span></Link>                            
                                <hr></hr>
                                <Link to="/curso8"> <span className='spnFcl'>Gestão e Administração Empresarial</span></Link> 
                                <hr></hr>
                                <Link to="/curso9"><span className='spnFcl'>Língua Portuguesa e Comunicação</span></Link>                                
                                <hr></hr>
                                <Link to="/curso11"><span className='spnFcl'>Economia</span></Link>   
                                
                            </Card.Body>
                            
                        </Card>
                        <br/>
                </Col>

                
            </Row>
        </Container>

    )
}

export default PosLaboral;