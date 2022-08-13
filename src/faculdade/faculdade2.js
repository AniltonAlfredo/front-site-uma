import  './faculdade.css'
import { Row, Container, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';



const Faculdade2 = () => {

    return (
        <Container fluid >
            <Container className='FaculdadeHeader'>
                <Row>
                    <Col md="12"><h1>Ciências Jurídicas e Sociais</h1></Col>                     
                </Row>
            </Container>

            <Container>
                <Row>
                    <Col md="8">
                        <p className='pfacul'>
                        A Faculdade de Ciências Jurídicas e Sociais oferece um ensino superior de qualidade 
                        centrado no estudante. Distingue-se pela sua habilidade de renovação e pelo seu modelo 
                        académico diferenciador que está reforçado nos princípios da qualidade, da internacionalização
                         e da aproximação às empresa e o mercado de trabalho. Confere graus académicos de licenciatura
                          nos cursos de Direito, Economia, Gestão e Administração de Empresas, Língua Portuguesa e 
                          Comunicação e Turismo Gestão Hoteleira e Animação. <br/> <br/>A preparação dos estudantes visa, 
                          transforma-los nos profissionais globais do futuro, com competências para alcançar o 
                          sucesso profissional nas seguintes áreas: Advocacia, consultoria jurídica, planeamento 
                          e implementação estratégica nas mais variadas áreas económicas, auditoria, banca, gestão 
                          de recursos humanos, marketing, produção editorial, relações públicas e gestão de eventos, 
                          hotelaria, entre outros. Habilita o licenciado a exercer funções nas áreas acima descriminadas, 
                          nos diversos sectores públicos e privados.
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
                                <Link to="/curso12"> <span className='spnFcl'>Direito</span></Link>                            
                                <hr></hr>
                                <Link to="/curso8"> <span className='spnFcl'>Gestão e Administração de Empresas</span></Link> 
                                <hr></hr>
                                <Link to="/curso9"><span className='spnFcl'>Língua Portuguesa e Comunicação</span></Link>                                
                                <hr></hr>
                                <Link to="/curso11"><span className='spnFcl'>Economia</span></Link>                                
                                <hr></hr>
                                <Link to="/curso10"><span className='spnFcl'>Turismo e Gestão Hoteleira</span></Link>
                                
                                
                            </Card.Body>
                            
                        </Card>
                    </Col>
                </Row>
            </Container>
            
              
            
        </Container>       
    )
}

export default Faculdade2;