import "./curso.css";
import { Row, Container, Col, Image, Table } from 'react-bootstrap';
import imagem from '../assets/703B0201.jpg'




const Curso19 = () => {

    return (
        <Container fluid >
            <Container className='FaculdadeHeader'>
                <Row>
                    <Col md="12"><h1>Psicologia</h1></Col>                     
                </Row>
            </Container>

            <Container>
                <Row>
                    <Col md="8">
                        <p className='pfacul'>
                        Sem vincular-se unilateralmente a nenhuma das correntes, escolas ou metodologias,
                         o curso de Psicologia da Metodista de Angola, oferece conhecimentos e competências
                          em uma perspectiva integradora, que permitirão uma visão crítica, complexa e
                           actualizada desta profissão. Assim, também, adapta-se às necessidades do mercado
                            angolano, enfatizando uma formação que permite a inserção em contextos profissionais 
                            de diversas naturezas, conforme as esferas de aplicação da profissão: psicologia
                             organizacional director(a) de recursos humanos, técnico em selecção, formação e/ou
                              desenvolvimento de RH, consultor; psicologia social; psicologia da educação, entre
                               outros. O curso conta com laboratórios específicos de Anatomorfisiologia, 
                               Neuropsicologia, Avaliação Desenvolvimental e Psicopatológica, Intervenção 
                               Biopsicossocial, Educativa e Organizacional, e sala projectada para Atendimento/Consulta 
                               Psicológica.
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
                                <td>pdf</td>
                                </tr>
                                
                            </tbody>
                        </Table>
                    </Col>
                </Row>

                <Row>
                <Col md="6" >
                    <Image className="cursoImg" src={imagem} />
                </Col>
                </Row>
            </Container>
            
              
            
        </Container>       
    )
}

export default Curso19;