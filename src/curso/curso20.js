import "./curso.css";
import { Row, Container, Col, Image, Table } from 'react-bootstrap';
import imagem from '../assets/703B0201.jpg'




const Curso20 = () => {

    return (
        <Container fluid >
            <Container className='FaculdadeHeader'>
                <Row>
                    <Col md="12"><h1>Estudos da Religião e Teologia</h1></Col>                     
                </Row>
            </Container>

            <Container>
                <Row>
                    <Col md="8">
                        <p className='pfacul'>
                        O Curso de Teologia da Metodista de Angola identifica-se, no campo da investigação pan-africanista de 
                        unidade e diversidade de África, nas perspectivas cultural, política e histórica e também epistémica, 
                        voltados para a formação de investigadores/as capazes de produzir conhecimentos teológicos a partir 
                        dos contextos angolanos e África em geral, sensíveis às demandas de igualdade, justiça, paz e 
                        solidariedade.<br/><br/>
A Faculdade de Teologia forma teólogos com consciência crítica e reflexiva, abertos ao diálogo ecuménico e inter-religioso. 
Confere ao teólogo, competência Bíblica, Sociológica, Psicológica, Filosófica e Teológica. Capacita o exercício do ministério
 eclesiástico, e também como pesquisador, assessor de ONGs e práticas de assistência social em instituições públicas e 
 privadas, nas áreas de ensino, saúde e serviços de capelania em hospitais, em todos os ramos das Forças Armadas e 
 Polícia Nacional, e em outras áreas de actuação eclesiástica, pastoral e social.
                        </p>                
                    </Col>
                    <Col md="4">
                        <Table striped bordered hover>
                            <tbody>
                                <tr>
                                <td>Mensalidade</td>
                                <td>41.250,00 kz</td>
                                </tr>
                                <tr>
                                <td>Duração</td>
                                <td>4 anos</td>
                                </tr>
                                <tr>
                                <td>Plano Curricular</td>
                                <td>pdf</td>
                                </tr>
                                
                            </tbody>
                        </Table>
                    </Col>
                </Row>

                <Row>
                <Col md="6" >
                    
                </Col>
                </Row>
            </Container>
            
              
            
        </Container>       
    )
}

export default Curso20;