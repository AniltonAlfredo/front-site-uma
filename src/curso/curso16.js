import "./curso.css";
import { Row, Container, Col, Image, Table } from 'react-bootstrap';
import imagem from '../assets/703B0201.jpg'
import Doc from '../assets/PLANO CURRICULAR/CARD PDF.pdf'
import Doc1 from '../assets/PLANO CURRICULAR/DECRETO EXECUTIVO.pdf'


const Curso16 = () => {

    return (
        <Container fluid >
            <Container className='FaculdadeHeader'>
                <Row>
                    <Col md="12"><h1>Cardiopneumologia</h1></Col>                     
                </Row>
            </Container>

            <Container>
                <Row>
                    <Col md="8">
                        <p className='pfacul'>
                        O profissional de Cardiopneumologia actua integrado numa equipa de saúde multidisciplinar, habilitado 
                        para identificação e resolução de problemas da comunidade e diagnóstico e terapêutica das doenças
                         cardiovasculares e respiratórias.

<br/><br/>O curso de Cardiopneumologia, da Metodista de Angola, destaca-se por uma sólida formação teórica, aliada a
 um componente prático importante, que compreende o treino em laboratórios específicos e em estágios. Ao final do curso,
  o recém-licenciado terá competências que lhe permitam intervir de forma autónoma nos mais diversos contextos. 
  O cardiopneumologista está habilitado para exercer as suas funções em instituições de saúde públicas e privadas,
   tais como unidades hospitalares; centros de saúde; clínicas; centros ou institutos de diagnóstico e terapêutica;
    centros desportivos;
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

export default Curso16;