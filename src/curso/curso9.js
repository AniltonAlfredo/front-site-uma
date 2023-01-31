import "./curso.css";
import { Row, Container, Col, Image, Table } from 'react-bootstrap';
import imagem from '../assets/703B0201.jpg'
import Doc from '../assets/PLANO CURRICULAR/LPT. COMUN.pdf'
import Doc1 from '../assets/PLANO CURRICULAR/DECRETO EXECUTIVO.pdf'


const Curso9 = () => {

    return (
        <Container fluid >
            <Container className='FaculdadeHeader'>
                <Row>
                    <Col md="12"><h1>Língua Portuguesa e Comunicação</h1></Col>                     
                </Row>
            </Container>

            <Container>
                <Row>
                    <Col md="8">
                        <p className='pfacul'>
                        O curso de Língua Portuguesa e Comunicação da Metodista de Angola aposta na formação de profissionais 
                        capazes de se adaptarem com flexibilidade às condições e exigências do mercado de trabalho, nos sectores
                         público e privado do ensino, da comunicação e da cultura, nos media e na sua crítica, na investigação
                          e na gestão cultural.
<br/><br/>Assim que, aponta para saídas profissionais como docência em Língua Portuguesa e em Culturas e Literaturas 
Lusófonas; diplomacia; investigação nos campos dos Estudos Linguísticos, Literários, Culturais e da Comunicação de 
Media; Jornalismo e crítica dos/nos Media; edição, revisão, tradução e crítica de textos; assessoria em vários 
sectores da vida socioeconómica, sobretudo em programação e produção cultural, bem como na comunicação em empresas;
 mediação intercultural em organismos nacionais e internacionais.
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

export default Curso9;