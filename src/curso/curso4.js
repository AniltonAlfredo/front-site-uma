import "./curso.css";
import { Row, Container, Col, Image, Table } from 'react-bootstrap';
import imagem from '../assets/703B0201.jpg'
import Doc from '../assets/PLANO CURRICULAR/ENG. CIVIL.pdf'



const Curso4 = () => {

    return (
        <Container fluid >
            <Container className='FaculdadeHeader'>
                <Row>
                    <Col md="12"><h1>Engenharia Civil</h1></Col>                     
                </Row>
            </Container>

            <Container>
                <Row>
                    <Col md="8">
                        <p className='pfacul'>
                        O curso de Engenharia Civil da Metodista de Angola proporciona uma 
                        formação marcadamente prática e experimental nas diferentes áreas do 
                        curso, o que permite aos estudantes o desenvolvimento das suas capacidades
                         e competências, proporcionando versatilidade e adaptação às condições
                          do mercado de trabalho, nacional e internacionalmente. <br/><br/>Sendo as 
                          estruturas e construção uma das áreas tradicionais da Engenharia Civil, 
                          o curso habilita os seus licenciados a desenvolverem aplicações no domínio 
                          do projecto (concepção e dimensionamento) de sistemas estruturais diversos 
                          (edifícios, silos, reservatórios) e a intervir no processo da construção
                           (materiais e processos construtivos), organização e gestão de obras.<br/><br/>
                            O engenheiro diplomado pela Metodista de Angola está preparado para
                             exercer a sua actividade nas áreas de estrutura, geotecnia, urbanismo, 
                             hidráulica, construções e gestão e avaliação de património.
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

export default Curso4;