import "./curso.css";
import { Row, Container, Col, Image, Table } from 'react-bootstrap';
import imagem from '../assets/703B0201.jpg'




const Curso3 = () => {

    return (
        <Container fluid >
            <Container className='FaculdadeHeader'>
                <Row>
                    <Col md="12"><h1>Ambiente e Gestão do Território</h1></Col>                     
                </Row>
            </Container>

            <Container>
                <Row>
                    <Col md="8">
                        <p className='pfacul'>
                        O curso de Ambiente e Gestão do Território, da Metodista de Angola, 
                        forma profissionais com sensibilidade para os dados, factos e realidade 
                        concreta que caracteriza o território, buscando suprir necessidades básicas
                         comuns ao cidadão, ligadas, sobretudo, ao saneamento básico e à preparação
                          da sociedade relativamente às questões ambientais. <br/><br/> Tem por objectivo 
                          intervenções que busquem a transformação de áreas rurais e a modernização
                           das áreas urbanas, para promover o bem-estar, a coesão social e o 
                           desenvolvimento económico. Assim, também, a protecção e preservação do 
                           património cultural, evitando que não haja desfasamento entre o pretendido 
                           e o culturalmente aceite. Igualmente, o curso forma técnicos para as novas
                            demandas motivadas pela criação iminente das autarquias, ou seja, aptos a 
                            trabalhar nos domínios do território/urbanismo, planos e actividades de 
                            consultoria, gestão e direcção de projectos urbanos e rurais, planificação, 
                            coordenação e avaliação de projectos de desenvolvimento territorial. 
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

export default Curso3;