import "./curso.css";
import { Row, Container, Col, Image, Table } from 'react-bootstrap';
import imagem from '../assets/703B0201.jpg'
import Doc from '../assets/PLANO CURRICULAR/ACP PLANO PDF.pdf'
import Doc1 from '../assets/PLANO CURRICULAR/DECRETO EXECUTIVO.pdf'


const Curso14 = () => {

    return (
        <Container fluid >
            <Container className='FaculdadeHeader'>
                <Row>
                    <Col md="12"><h1>Análises Clínicas e Saúde Pública</h1></Col>                     
                </Row>
            </Container>

            <Container>
                <Row>
                    <Col md="8">
                        <p className='pfacul'>
                        Com destaque para os laboratórios específicos e modernos, num alinhamento teoria e 
                        prática desde o início, o curso de Análises Clínicas e Saúde Pública, da Metodista de 
                        Angola, forma biomédicos com espírito reflexivo e crítico, competentes e habilidosos, 
                        que poderão contribuir positivamente para a sociedade. O licenciado poderá exercer 
                        funções em ambiente angolano ou em ambiente internacional em Laboratórios de Análises
                         Clínicas e Serviços de Patologia Clínica, públicos e privados; Serviços de Imuno-hemoterapia; 
                         Laboratórios de Análises de Alimentos, Águas e Ar; Laboratórios de Controlo de 
                         Qualidade (indústria farmacêutica, cosmética, química, agroalimentar, etc.), entre outras actividades.
                        </p>                
                    </Col>
                    <Col md="4">
                        <Table striped bordered hover>
                            <tbody>
                                <tr>
                                <td>Mensalidade</td>
                                <td>52.408,20 kz</td>
                                </tr>
                                <tr>
                                <td>Duração</td>
                                <td>4 anos</td>
                                </tr>
                                <tr>
                                <td>Plano Curricular</td>
                                <td><a target="_blank" href={Doc}>pdf</a></td>
                                </tr>
                                <tr>
                                <td>Decreto Executivo</td>
                                <td><a target="_blank" href={Doc1}>pdf</a></td>
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

export default Curso14;