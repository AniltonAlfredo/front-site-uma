import "./curso.css";
import { Row, Container, Col, Image, Table } from 'react-bootstrap';
import imagem from '../assets/703B0201.jpg'
import Doc from '../assets/PLANO CURRICULAR/ENFERMAGEM.pdf'
import Doc1 from '../assets/PLANO CURRICULAR/DECRETO EXECUTIVO.pdf'


const Curso17 = () => {

    return (
        <Container fluid >
            <Container className='FaculdadeHeader'>
                <Row>
                    <Col md="12"><h1>Enfermagem</h1></Col>                     
                </Row>
            </Container>

            <Container>
                <Row>
                    <Col md="8">
                        <p className='pfacul'>
                        O enfermeiro actua na promoção, protecção recuperação da saúde e reabilitação das pessoas, respeitados
                         os preceitos éticos e legais (Ordem dos Enfermeiros de Angola, 2019).
O curso de Enfermagem, da Metodista de Angola, forma profissionais habilitados a desenvolver a sua actividade 
em unidades de cuidados de saúde, públicas ou privadas.<br/><br/>
O laboratório de Enfermagem é um espaço de aprendizagem com infra-estrutura especializada para o desenvolvimento de
 actividades do ciclo profissional e pesquisa. Este espaço simula o real e possibilita o desenvolvimento de competências
  técnicas nos procedimentos de Enfermagem, em um ambiente mais realístico possível, a fim de preparar os discentes para
   actuar de forma segura para si e para os pacientes, nos hospitais, centros de saúde, postos de saúde, lares de infância,
    creches, lares de idosos e outros.
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

export default Curso17;