import "./curso.css";
import { Row, Container, Col, Image, Table } from 'react-bootstrap';
import imagem from '../assets/703B0201.jpg'
import Doc from '../assets/PLANO CURRICULAR/Filosofia.pdf'



const Curso21 = () => {

    return (
        <Container fluid >
            <Container className='FaculdadeHeader'>
                <Row>
                    <Col md="12"><h1>Filosofia </h1></Col>                     
                </Row>
            </Container>

            <Container>
                <Row>
                    <Col md="8">
                        <p className='pfacul'>
                        A Filosofia estuda as correntes de pensamento que moldaram a realidade em que 
                        a humanidade vive. O filósofo, por meio da crítica e da análise, reflete sobre 
                        questões éticas, morais e políticas, para a compreensão dos problemas que afligem 
                        as sociedades actuais. A maior parte dos profissionais formados em Filosofia segue
                         a carreira acadêmica. O objectivo do curso é formar profissionais com conhecimentos 
                         em ética, metafísica, política e epistemologia, que sejam capazes de actuar como 
                         professores, formuladores de ideias inovadoras, consultores em projectos de 
                         desenvolvimento, pareceristas em comités de ética, e na divulgação da cultura filosófica.
                        </p>                
                    </Col>
                    <Col md="4">
                        <Table striped bordered hover>
                            <tbody>
                                <tr>
                                <td>Mensalidade</td>
                                <td>45.753,00 kz</td>
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

export default Curso21;