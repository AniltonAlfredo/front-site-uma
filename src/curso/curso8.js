import "./curso.css";
import { Row, Container, Col, Image, Table } from 'react-bootstrap';
import imagem from '../assets/703B0201.jpg'
import Doc from '../assets/PLANO CURRICULAR/AGE.pdf'
import Doc1 from '../assets/PLANO CURRICULAR/GAE RAM.pdf'
import Doc2 from '../assets/PLANO CURRICULAR/GAE. RAM GEST.pdf'
import Doc3 from '../assets/PLANO CURRICULAR/GAE. RAM MARK.pdf'



const Curso8 = () => {

    return (
        <Container fluid >
            <Container className='FaculdadeHeader'>
                <Row>
                    <Col md="12"><h1>Gestão e Administração de Empresas</h1></Col>                     
                </Row>
            </Container>

            <Container>
                <Row>
                    <Col md="8">
                        <p className='pfacul'>
                        O curso de Gestão e Administração de Empresas da Metodista de Angola possibilita uma formação de carácter
                         genérico em gestão, adequada aos crescentes desafios de competitividade e mutação do meio 
empresarial, gerados pela globalização das economias à escala mundial. Este ambiente de grande concorrência e em constante 
mudança exige uma gestão eficiente com rapidez na tomada de decisões, uma capacidade de liderança eficaz e competente, uma 
visão estratégia adequada e consequente capacidade de promover e gerir a mudança organizacional.<br/><br/>

O Curso proporciona aos seus licenciados uma formação de grande versatilidade, permitindo-lhes exercer 
funções em áreas tão diversificadas como contabilidade, fiscalidade, auditoria, banca, seguradoras, gestão 
de recursos humanos e comportamento organizacional, finanças empresariais, gestão de produção e logística, 
planeamento e controle de gestão e marketing.
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
                                <td><a target="_blank" href={Doc}>Geral</a>  |  <a target="_blank" href={Doc1}>Ramo 1</a>  |  <a target="_blank" href={Doc2}>Ramo 2</a>  |  <a target="_blank" href={Doc3}>Ramo 3</a></td>
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

export default Curso8;