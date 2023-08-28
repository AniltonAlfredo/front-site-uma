import React from 'react'
import  './poslaboral.css'
import { Row, Container, Col, Image, Card, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';

import PT from './PT.pdf'
import CN from './CN.pdf'
import AR from './AR.pdf'
import EN from './EN.pdf'
import KMB from './KMB.pdf'
 
const EscolaIdioma = () => {
    return (

        <Container className="">
            <Row>
                <Col md="12" className="PoStyle">
                    <h1>ESCOLA DE IDIOMAS</h1>
                </Col>
            </Row>
            <Row>
            <Col md="2"></Col>
            <Col md="8">

            <p className='pfacul'>
                1.	Vai suprir a demanda da Universidade por docentes de Língua Inglesa nos diversos cursos de graduação.
                <br/><br/>2.	Busca atender ao indicador do Sector de Cooperação Internacional de massificar o acesso de estudantes e professores da Universidade à língua inglesa e outras línguas de crescente produção científica, com vistas às oportunidades que os convénios com instituições estrangeiras oferecem de <br/>a) mobilidade académica <br/>b) oportunidades de formação na modalidade EAD <br/>c) constituição de grupos para produção científica conjunta à distância <br/>d) produção e publicação científica comuns <br/>e) integração de bibliotecas com acesso ao acervo bibliográfico em línguas diversas.
                <br/><br/>3.	Visa à formação de comunidades de falantes que expressem a diversidade da academia e da sociedade angolana e propõe-se a desenvolver a competência para a escrita.
            </p>
                        {/* <p className='pfacul'>
                        A Universidade Metodista dá um salto importante no seu processo de internacionalização, com foco na formação de comunidades de falantes e na competência para a formação escrita, com a sua Escola de Idiomas. Esse avanço, significativo, com a oferta de cursos descritos abaixo, pode ser um elemento catalisador de qualificação profissional, proporcionando maior oportunidade de empregabilidade e de intercâmbio em instituições estrangeiras para professores e estudantes.  
<br/><br/>A Universidade tem reforçado o seu convénio com Universidades do Brasil, da China, entre outros países, também, com algumas empresas de destaque no mercado angolano. Daí a necessidade de que a comunidade académica esteja apta a essa internacionalização.  
<br/><br/>A Escola de Idiomas oferece cursos intensivos com 60 horas de aulas presenciais, distribuídas em dois módulos de 30 horas aula cada um. 
<br/><br/>O primeiro módulo acontece de 3 de Outubro a 9 de dezembro, o segundo módulo de 02 de Janeiro a 02 de Março de 2024. A inscrição é feita a cada módulo, cujo valor é de 20 mil kwanzas, pagos no acto da inscrição. Turmas de 30 alunos cada.
                        </p>                 */}
                    </Col>
                    <Col md="2">
                        
                    </Col>
                </Row>
                <Row>
                    <Col md="2"></Col>
                    <Col md="8"><br/><br/>
                        <p className='pfacul'>
                        <strong>Cursos intensivos</strong><br/>
                        <i>Opções de turmas e horários:</i><br/>
                        1.	Segunda e terça-feira, 17h às 18h40<br/>
                        2.	Segunda e terça-feira, 18h50 às 20h30<br/>
                        3.	Quarta e quinta-feira, 17h às 18h40<br/>
                        4.	Quarta e quinta-feira, 18h50 às 20h30<br/>
                        5.	Sexta-feira, das 17h às 20h30<br/>
                        6.	Sábado, 8h às 11h30<br/><br/>

                        <strong>Preço:</strong> 20 mil Kwanzas por módulo<br/>
                        <strong><i>Certificado de conclusão ao final do curso</i></strong><br/>

                         (exigida a frequência no mínimo de 80% das aulas)
                        </p>
                    </Col>
                    <Col md="2"></Col>
                </Row>
                <Row>
                <Col md="12" className="PoStyle">
                    
                            <Button variant="primary">
                                INSCRIÇÃO BREVEMENTE
                            </Button>
                    
                </Col>
            </Row>
            <br/><br/>
            <Row>
                <Col md="4" className="PoStyle">
                        <Card bg="light" text="dark" className="">
                            <Card.Header className="Header-Text-PL">
                            
                            <Card.Title>INGLÊS</Card.Title> 
                                <Card.Text>
                                </Card.Text>
                            </Card.Header>
                            <Card.Body>
                                <a target="_blank" href={EN}>Programa</a>       
                            </Card.Body>
                        </Card>
                        <br/>
                </Col>

                <Col md="4" className="PoStyle">
                        <Card bg="light" text="dark" className="">
                            <Card.Header className="Header-Text-PL">
                                <Card.Title>ÁRABE</Card.Title>
                                <Card.Text>
                                </Card.Text>
                            </Card.Header>
                            <Card.Body>
                                <a target="_blank" href={AR}>Programa</a>       
                            </Card.Body>
                        </Card>
                        <br/>
                </Col>

                <Col md="4" className="PoStyle">
                        <Card bg="light" text="dark" className="">
                            <Card.Header className="Header-Text-PL">
                                <Card.Title>KIMBUNDU</Card.Title>
                                <Card.Text>
                                </Card.Text>
                            </Card.Header>
                            <Card.Body>
                                <a target="_blank" href={KMB}>Programa</a>       
                            </Card.Body>
                        </Card>
                        <br/>
                </Col>

                <Col md="4" className="PoStyle">
                        <Card bg="light" text="dark" className="">
                            <Card.Header className="Header-Text-PL">
                                <Card.Title>PORTUGUÊS E REDACÇÃO</Card.Title>
                                <Card.Text>
                                </Card.Text>
                            </Card.Header>
                            <Card.Body>
                                <a target="_blank" href={PT}>Programa</a>       
                            </Card.Body>
                        </Card>
                        <br/>
                </Col>

                <Col md="4" className="PoStyle">
                        <Card bg="light" text="dark" className="">
                            <Card.Header className="Header-Text-PL">
                                <Card.Title>CHINÊS MANDARIM</Card.Title>
                                <Card.Text>
                                </Card.Text>
                            </Card.Header>
                            <Card.Body>
                                <a target="_blank" href={CN}>Programa</a>       
                            </Card.Body>
                        </Card>
                        <br/>
                </Col>

                
            </Row>
        </Container>

    )
}

export default EscolaIdioma;