import "./curso.css";
import { Row, Container, Col, Table } from 'react-bootstrap';
import Doc from '../assets/PLANO CURRICULAR/ENG. AGRO PEC.pdf'



const Curso22 = () => {

    return (
        <Container fluid >
            <Container className='FaculdadeHeader'>
                <Row>
                    <Col md="12"><h1>Engenharia Agropecuária</h1></Col>                     
                </Row>
            </Container>

            <Container>
                <Row>
                    <Col md="8">
                        <p className='pfacul'>
                        O curso de Engenharia Agropecuária tem como objectivo principal formar profissionais que sejam 
                        capazes de melhorar a produtividade de actividades do campo, para encontrar formas eficientes 
                        de lidar com recursos naturais, matérias-primas, novas tecnologias e mão-de-obra no campo. 
                        O engenheiro agropecuário actua em todas as etapas da produção e comercialização dos produtos,
                         acompanhando desde o plantio até o armazenamento e distribuição da mercadoria, manejo das 
                         lavouras, pastos ou granjas, até a fase de investigação científica e desenvolvimento. Com um 
                         mercado de trabalho diverso, pode actuar nas lavras e atender as demandas de controlo de doenças
                          e cuidado da saúde dos animais, da reprodução ao abate, com amplas oportunidades no sector industrial.
O curso dará ênfase à agricultura urbana e à segurança alimentar da população.
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
{/* 
                <Row>
                <Col md="6" >
                    <Image className="cursoImg" src={imagem} />
                </Col>
                </Row> */}
            </Container>
            
              
            
        </Container>       
    )
}

export default Curso22;