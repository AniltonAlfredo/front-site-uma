import  './faculdade.css'
import { Row, Container, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';




const Faculdade1 = () => {

    return (
        <Container fluid >
            <Container className='FaculdadeHeader'>
                <Row>
                    <Col md="12"><h1>Engenharia e Arquitectura</h1></Col>                     
                </Row>
            </Container>

            <Container>
                <Row>
                    <Col md="8">
                        <p className='pfacul'>
                        A Faculdade de Engenharia e Arquitectura é parte integrante da Universidade 
                        Metodista de Angola alberga 7 cursos: Curso de Arquitectura e Urbanismo (AU), 
                        Curso de Ambiente e Gestão do Território (AGT), Curso de Engenharia Civil (ECIVIL), 
                        Curso de Engenharia do Ambiente (EAMB), Curso de Engenharia Mecatrónica (EMEC), Curso 
                        de Engenharia Industrial e Sistemas Eléctricos (EISE) e o Curso de Engenharia Informática 
                        (EINF). <br/><br/>Os cursos da Faculdade de Engenharia e Arquitetura são muito dinâmicos e 
                        interligados, o que sugere uma continuidade na sua acção.  O espírito de missão emanado 
                        pela Faculdade assegura uma formação de técnicos habilitados a exercerem as suas actividades 
                        com rigor científico e actualidade tecnológica, adequados às diversas realidades nacionais e 
                        internacionais. A Faculdade está estruturada de modos a proporcionar uma formação marcadamente 
                        prática e experimental, com vista a estimular o estudante para a investigação científica. Os 
                        quadros diplomados pela nossa Faculdade são dotados de versatilidade e estão preparados para 
                        exercerem actividades na área artística, de produção, de transporte, de distribuição, de processamento 
                        de dados e muitas outras, conforme as especificações plasmadas na descrição de cada um dos Cursos da 
                        Faculdade de Engenharia e Arquitetura. 
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
                                <Link to="/curso1"> <span className='spnFcl'>Engenharia Informática</span></Link>                            
                                <hr></hr>
                                <Link to="/curso4"> <span className='spnFcl'>Engenharia Civil</span></Link> 
                                <hr></hr>
                                <Link to="/curso5"><span className='spnFcl'>Engenharia do Ambiente</span></Link>
                                
                                <hr></hr>
                                <Link to="/curso7"><span className='spnFcl'>Engenharia Mecatrónica</span></Link>
                                
                                <hr></hr>
                                <Link to="/curso6"><span className='spnFcl'>Engenharia Industrial e Sistemas Eléctricos</span></Link>
                                
                                <hr></hr>
                                <Link to="/curso2"><span className='spnFcl'>Arquitectura e Urbanismo</span></Link>
                                
                                <hr></hr>
                                <Link to="/curso3"><span className='spnFcl'>Gestão do Território e Ambiente</span></Link>
                                
                            </Card.Body>
                            
                        </Card>
                    </Col>
                </Row>
            </Container>
            
              
        </Container>       
    )
}

export default Faculdade1;