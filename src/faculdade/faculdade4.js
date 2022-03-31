import  './faculdade.css'
import { Row, Container, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';




const Faculdade4 = () => {

    return (
        <Container fluid >
            <Container className='FaculdadeHeader'>
                <Row>
                    <Col md="12"><h1>Saúde e Bem-Estar</h1></Col>                     
                </Row>
            </Container>

            <Container>
                <Row>
                    <Col md="8">
                        <p className='pfacul'>
                        A Faculdade de Teologia se identifica no campo da investigação pan-africanista de
                         unidade e diversidade de África nas perspectivas cultural, política e história e
                          também epistêmica, voltados para a formação de investigadores/as capazes de produzirem 
                          conhecimento teológicos a partir dos contextos angolanos e África em geral, sensíveis às 
                          demandas de igualdade, justiça, paz e solidariedade. A Faculdade de Teologia forma teólogos
                           com consciência crítica e reflexiva, abertos ao diálogo ecuménico e inter-religioso.
                            Confere ao teólogo, competência Bíblica, Sociológica, Psicológica, Filosófica e Teológica. 
                            Capacita o exercício do ministério eclesiástico, como pesquisador, assessor de ONGs e
                             práticas de assistência Social em instituições públicas e privadas, nas áreas de ensino,
                              saúde e serviços de capelania em hospitais, em todos os ramos das Forças Armadas e 
                              Polícia Nacional e, em outras áreas de actuação eclesiástica, pastoral e social. 
                              A Faculdade de Teologia tem ainda a disposição um Programa de pós-graduação em estudos da 
                              Religião e Teologia, que comporta o Mestrado e o Doutoramento.
                        </p>                
                    </Col>
                    <Col md="4">
                        <Card bg="light" text="dark" className="carde">
                            <Card.Header>
                                <Card.Title>Cursos</Card.Title>
                                <Card.Text className="TextoNoticia">
                                </Card.Text>
                            </Card.Header>
                            <Card.Body>
                                <Link to="/curso20"> <span className='spnFcl'>Estudos da Religião e Teologia</span></Link>                            
                                <hr></hr>
                                <Link to="/curso21"> <span className='spnFcl'>Filosofia</span></Link> 
                                
                                
                            </Card.Body>
                            
                        </Card>
                    </Col>
                </Row>
            </Container>
            
              
            
        </Container>        
    )
}

export default Faculdade4;