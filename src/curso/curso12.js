import "./curso.css";
import { Row, Container, Col, Image, Table } from 'react-bootstrap';
import imagem from '../assets/703B0201.jpg'
import Doc from '../assets/PLANO CURRICULAR/DIREITO PDF.pdf'
import Doc1 from '../assets/PLANO CURRICULAR/DIR. RAMO JURIDIC.pdf'
import Doc2 from '../assets/PLANO CURRICULAR/DIR RAM JURID. PUBL. PDF.pdf'
import Doc3 from '../assets/PLANO CURRICULAR/DECRETO EXECUTIVO.pdf'

const Curso12 = () => {

    return (
        <Container fluid >
            <Container className='FaculdadeHeader'>
                <Row>
                    <Col md="12"><h1>Direito</h1></Col>                     
                </Row>
            </Container>

            <Container>
                <Row>
                    <Col md="8">
                        <p className='pfacul'>
                        Com uma matriz curricular moderna e inúmeras actividades extra-curriculares, 
                        o curso de Direito da Metodista de Angola capacita seus estudantes em acordo
                         com os desafios do nosso tempo, para melhor aplicar o Direito e fazer Justiça, 
                         seja no ramo do direito privado ou público. E recorre aos mais qualificados 
                         aplicadores do Direito, para que, com metodologias e técnicas de administração
                          da justiça, se possa alcançar uma significativa e excelente preparação técnica
                           e científica que lhes permita optar por seguir uma das carreiras profissionais
                            possíveis na área forense, como sejam, de entre muitas outras, a de juristas,
                             consultores, académicos, magistraturas judicial e do Ministério Público, advocacia.
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
                                <td><a target="_blank" href={Doc}>pdf</a>  |  <a target="_blank" href={Doc1}>Ramo 1</a>  |E  <a target="_blank" href={Doc2}>Ramo 2</a></td>
                                </tr>
                                <tr>
                                <td>Decreto Executivo</td>
                                <td><a target="_blank" href={Doc3}>pdf</a></td>
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

export default Curso12;