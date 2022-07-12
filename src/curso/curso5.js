import "./curso.css";
import { Row, Container, Col, Image, Table } from 'react-bootstrap';
import imagem from '../assets/703B0201.jpg'
import Doc from '../assets/PLANO CURRICULAR/ENG. AMBIENTAL.pdf'



const Curso5 = () => {

    return (
        <Container fluid >
            <Container className='FaculdadeHeader'>
                <Row>
                    <Col md="12"><h1>Engenharia do Ambiente</h1></Col>                     
                </Row>
            </Container>

            <Container>
                <Row>
                    <Col md="8">
                        <p className='pfacul'>
                        O curso de Engenharia do Ambiente é dirigido para as áreas da tecnologia e gestão 
ambiental. O curso trata os problemas ambientais numa perspectiva integrada - ecológica, social, económica e tecnológica, 
necessária para se obter um desenvolvimento equilibrado e sustentável das actividades produtivas. Privilegia a 
interdisciplinaridade e as tecnologias mais recentes, de modo a considerar o carácter horizontal da Engenharia do 
Ambiente e a permanente evolução das tecnologias e das ciências do 
ambiente. <br/><br/>O curso de Engenharia do Ambiente forma profissional capaz de conceber, planear, projectar, gerir e 
executar soluções; o que significa com competências no domínio da gestão de resíduos, da requalificação ambiental, 
dos estudos de impacto ambiental, do ordenamento de espaços naturais, da monitorização ambiental, dos sistemas 
de informação, da educação e informação na área 
ambiental.
                        </p>                
                    </Col>
                    <Col md="4">
                        <Table striped bordered hover>
                            <tbody>
                                <tr>
                                <td>Mensalidade</td>
                                <td>45.753,20 kz</td>
                                </tr>
                                <tr>
                                <td>Duração</td>
                                <td>5 anos</td>
                                </tr>
                                <tr>
                                <td>Plano Curricular</td>
                                <td><a target="_blank" href={Doc}>pdf</a></td>
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

export default Curso5;