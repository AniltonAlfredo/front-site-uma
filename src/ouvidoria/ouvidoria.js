import "./ouvidoria.css";
import { Row, Container, Col, Image, Table } from 'react-bootstrap'
import emailjs from "emailjs-com";
import React, { useRef,useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Accordion from 'react-bootstrap/Accordion';
import ListGroup from 'react-bootstrap/ListGroup';
import Modal from 'react-bootstrap/Modal';



const Ouvidoria = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_vjulp1b', 'template_gdg5m5k', form.current, '_tt0Qt0EG9OIW71Gl')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };


    return (
        <>
        <Container fluid >
            <Container className='FaculdadeHeader'>
                <Row>
                
                    <Col md="12"><br/><h1>OUVIDORIA</h1><br/>  </Col>        
                               
                </Row>
            </Container>

            <Container>
                <Row>

                    <Col md="12">
                    <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>O QUE É A OUVIDORIA</Accordion.Header>
                            <Accordion.Body>
                            A Ouvidoria é o serviço disponibilizado pela Universidade Metodista de Angola (UMA), como 
um de comunicação entre a comunidade académica, docentes, trabalhadores técnicos e administrativos, 
colaboradores, sociedade civil e administração da UMA no encaminhamento para resolução das preocupações 
e problemas, na prestação de serviço da instituição.

O gabinete de Ouvidoria não tem o poder de decisão, mas tem uma grande antonomia no acesso de todos 
os departamentos da universidade. Busca de solução, na forma de agir como mediador na participação do cidadão.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>PAPEL DA OUVIDORIA</Accordion.Header>
                            <Accordion.Body>
                            <ListGroup>
                                <ListGroup.Item>Assegurar aos utentes a oportunidade de ter sua preocupação ou desejo reavaliada, caso o atendimento recebido pelo sector
                                da instituição, anteriormente, não tenha sido considerado satisfatório.</ListGroup.Item>

                                <ListGroup.Item>Assegurar que o atendimento seja acessível a todos os públicos. </ListGroup.Item>

                                <ListGroup.Item>Assegurar a imparcialidade e a igualdade nos atendimentos prestados pela Instituição.</ListGroup.Item>
                                
                                <ListGroup.Item>Assegurar o direito à manifestação, independentemente da consideração ser procedente ou não.</ListGroup.Item>
                                
                                <ListGroup.Item>Assegurar que o manifestante receba retorno, com as devidas justificações, para todo e qualquer assunto, 
                            desde que cumpra os requisitos estabelecidos neste regulamento. </ListGroup.Item>
                                
                                <ListGroup.Item>Assegurar que o manifestante receba retorno, com as devidas justificações, para todo e qualquer assunto, 
                            desde que cumpra os requisitos estabelecidos neste regulamento. </ListGroup.Item>
                                <ListGroup.Item>Assegurar que o manifestante receba retorno, com as devidas justificações, para todo e qualquer assunto, 
                            desde que cumpra os requisitos estabelecidos neste regulamento. </ListGroup.Item>
                                <ListGroup.Item>Assegurar ao manifestante a oportunidade de ter o seu propósito levado ao conhecimento das áreas 
                            de interesse, da Reitoria e da Promotora.</ListGroup.Item>
                                <ListGroup.Item>Assegurar o relacionamento de respeito e confiança entre a Instituição e os manifestantes.</ListGroup.Item>
                            </ListGroup>
                            
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                                    
                    </Col>
                </Row>

                <Row>
                </Row>
            </Container>
            <br/><br/>
            <Container className='FaculdadeHeader'>
                <Row>
                    <Col md="12">
                    <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>FALA CONNOSCO</Accordion.Header>
                            <Accordion.Body>

                            <form ref={form} onSubmit={sendEmail}>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Digite o seu nome</Form.Label>
                                <Form.Control type="name" placeholder="digite aqui o seu nome" name="name" />
                                <br/>
                                <Form.Label>Assunto</Form.Label>
                                <Form.Control type="name" placeholder="assunto" name="subject" />
                                <br/>
                                <Form.Label>Digite o seu email</Form.Label>
                                <Form.Control type="email" placeholder="digite aqui o seu email" name="email" />
                                <br/>
                                <Form.Label>Digite a sua mensagem</Form.Label>
                                <Form.Control as="textarea" name="message" rows={4}/>
                            </Form.Group>



                            <Button variant="primary" type="submit" onClick={handleShow}>
                                Enviar
                            </Button>

                        </form>

                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                        
                    
                        
                    </Col>                     
                </Row>
            </Container>
            
        </Container>    
        
        


      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Mensagem Enviada com Sucesso!</Modal.Title>
        </Modal.Header>
        <Modal.Body>A equipa da Ouvidoria vai responder o mais rápido que poder, obrigado por entrar em contacto.</Modal.Body>
    </Modal>

    
    </>
    )
}

export default Ouvidoria;