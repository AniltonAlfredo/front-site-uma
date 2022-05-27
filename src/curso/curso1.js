import "./curso.css";
import { Row, Container, Col, Image, Table } from 'react-bootstrap';
import imagem from '../assets/703B0201.jpg'




const Curso1 = () => {

    return (
        <Container fluid >
            <Container className='FaculdadeHeader'>
                <Row>
                    <Col md="12"><h1>Curso de Engenharia Informática</h1></Col>                     
                </Row>
            </Container>

            <Container>
                <Row>
                    <Col md="8">
                        <p className='pfacul'>
                        A Engenharia Informática é uma área estratégica no desenvolvimento tecnológico das sociedades e 
                        apresenta um domínio transversal nas actividades industriais e nos sectores de serviços de economias 
                        competitivas. O curso da Metodista de Angola aposta em equipamentos laboratoriais actuais, e presentes 
                        na Indústria, bem como em meios computacionais de cálculo e de simulação. Oferece, assim, uma formação 
                        teórica e prática na área das tecnologias de informação e comunicação, permitindo o desenvolvimento de 
                        capacidades e competências, e proporcionando versatilidade e adaptação às condições do mercado de trabalho.
                        <br/><br/>As competências adquiridas permitem o desempenho de funções ao nível das chefias intermédias
                         e na direcção em diferentes tipos de empresas. Entre as variadas saídas temos a destacar: administração
                          de Sistemas, auditoria e consultoria em informática, administração de bases de dados, administração 
                          de redes de computadores, investigação científica e analista de Sistema, gestão de projectos e
                           desenvolvimento de Sistema.
                        </p>                
                    </Col>
                    <Col md="4">
                        <Table striped bordered hover>
                            <tbody>
                                <tr>
                                <td>Mensalidade</td>
                                <td>47.643,80 kz</td>
                                </tr>
                                <tr>
                                <td>Duração</td>
                                <td>5 anos</td>
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

export default Curso1;