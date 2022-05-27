import "./curso.css";
import { Row, Container, Col, Image, Table } from 'react-bootstrap';
import imagem from '../assets/703B0201.jpg'




const Curso6 = () => {

    return (
        <Container fluid >
            <Container className='FaculdadeHeader'>
                <Row>
                    <Col md="12"><h1>Engenharia Industrial e Sistemas Eléctricos</h1></Col>                     
                </Row>
            </Container>

            <Container>
                <Row>
                    <Col md="8">
                        <p className='pfacul'>
                        O curso de Engenharia Industrial e Sistemas Eléctricos da Metodista de Angola forma engenheiros 
                        habilitados a exercer a sua actividade com rigor científico e actualidade tecnológica, adequados
                         à realidade do país. Está estruturado de modo a proporcionar uma formação marcadamente prática 
                         e experimental, com três laboratórios - Instrumentação e Automação, Electrónica e Telecomunicação,
                          e de Energias Renováveis - e um vasto programa de aulas de campo e visitas de estudo nas principais
                           centrais e subestações eléctricas vizinhas a Luanda.<br/><br/>
O Engenheiro diplomado pela Metodista de Angola está preparado para exercer a sua actividade nas áreas da produção,
 transporte, distribuição, processamento e utilização da energia eléctrica. As competências adquiridas, para além das
  inerentes à especificidade do curso, permitem ainda o desempenho de funções ao nível das chefias e de direcção em 
  empresas industriais, de comércio e prestação de serviços, em sectores de 
actividade inerentes à Engenharia Eléctrica
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

export default Curso6;