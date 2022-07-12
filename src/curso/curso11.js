import "./curso.css";
import { Row, Container, Col, Image, Table } from 'react-bootstrap';
import imagem from '../assets/703B0201.jpg'
import Doc from '../assets/PLANO CURRICULAR/ECONOMIA.pdf'



const Curso11 = () => {

    return (
        <Container fluid >
            <Container className='FaculdadeHeader'>
                <Row>
                    <Col md="12"><h1>Economia</h1></Col>                     
                </Row>
            </Container>

            <Container>
                <Row>
                    <Col md="8">
                        <p className='pfacul'>
                        O Curso de licenciatura em Economia da Metodista de Angola atende as necessidades educativas 
                        dos cidadãos nacionais e internacionais, assim como atende as preocupações da sociedade e 
                        das políticas do Estado em matéria de produção, distribuição, transportação e consumo de bens
                         e serviços. O curso, de elevadíssimo nível de rigor científico e metodológico, forma 
                         profissionais capazes de desempenharem tarefas de avaliação, assessoria e gestão de 
                         assuntos económicos em diferentes tipos de organizações e preparados para fazer face às 
                         exigências do mercado de trabalho nacional e internacional. Assim, pode desempenhar 
                         funções em áreas tão diversas como: organismos de desenvolvimento económico e financeiro
                          nacionais e internacionais; administrativa, desenvolvimento, financeira ou comercial; 
                          direcção de empresas da indústria e serviços; administração pública nacional ou local; 
                          gabinetes de estudos, ensino e investigação, banca e seguros; consultoria e projectos.
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

export default Curso11;