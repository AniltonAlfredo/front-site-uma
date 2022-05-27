import "./curso.css";
import { Row, Container, Col, Image, Table } from 'react-bootstrap';
import imagem from '../assets/703B0201.jpg'




const Curso18 = () => {

    return (
        <Container fluid >
            <Container className='FaculdadeHeader'>
                <Row>
                    <Col md="12"><h1>Fisioterapia</h1></Col>                     
                </Row>
            </Container>

            <Container>
                <Row>
                    <Col md="8">
                        <p className='pfacul'>
                        O curso de Fisioterapia da Metodista de Angola promove a formação de profissionais capazes 
                        de actuar em vários níveis de atenção à saúde, e não apenas sobre a sintomatologia dos indivíduos,
                         com rigor científico e técnico. Garante que o profissional fisioterapeuta esteja apto a actuar
                          na prevenção, emitir diagnóstico fisioterapêutico das incapacidades, elaborar estratégias de
                           tratamento fisioterapêutico que contemplem os deficits funcionais, atendendo às reais 
                           necessidades individuais e específicas.<br/><br/> Ou seja, o curso de Fisioterapia capacita o 
                           aluno para prevenir, habilitar, reabilitar, tratar, curar, integrar e reintegrar o 
                           indivíduo à sociedade. O fisioterapeuta hoje pode actuar em diferentes lugares, como 
                           clínicas, hospitais, postos de saúde, centros de reabilitação e equipas desportivas, 
                           actuando em todos os níveis do processo saúde-doença.
                        </p>                
                    </Col>
                    <Col md="4">
                        <Table striped bordered hover>
                            <tbody>
                                <tr>
                                <td>Mensalidade</td>
                                <td>41.593,80 kz</td>
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

export default Curso18;