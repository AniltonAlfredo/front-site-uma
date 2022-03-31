import "./curso.css";
import { Row, Container, Col, Image, Table } from 'react-bootstrap';
import imagem from '../assets/703B0201.jpg'




const Curso15 = () => {

    return (
        <Container fluid >
            <Container className='FaculdadeHeader'>
                <Row>
                    <Col md="12"><h1>Biologia</h1></Col>                     
                </Row>
            </Container>

            <Container>
                <Row>
                    <Col md="8">
                        <p className='pfacul'>
                        O Curso de Biologia da Metodista de Angola permite que os seus licenciados, para além de uma sólida 
                        formação generalista em Biologia, que não exclui nenhum dos níveis de integração da vida, e noutras 
                        disciplinas das ciências naturais e exactas (Ciências do Ambiente, Geociências, Física, Matemática, 
                        Química), atinjam igualmente competências aprofundadas em diversos sectores da Biologia. Especialmente,
                         permite a especialização em três áreas fundamentais para o desenvolvimento científico e tecnológico
                          de Angola e para a exploração sustentada dos recursos biológicos: Biologia Marinha, Biologia da 
                          Conservação e Biologia Humana.<br/><br/>
Na área do Ambiente, poderá actuar como consultor ambiental, de ordenamento do território, desenvolvimento local, gestor de
 conservação da natureza e da biodiversidade, análise e monitorização 
ambiental.
Na área da Biologia Humana e Saúde como investigador e técnico nos laboratórios de análises clínicas ligados à Saúde.
Na área da Biotecnologia como investigador e técnico nos Laboratórios, da indústria alimentar, farmacêutica e
 cosmética, aquacultura, agricultura e pecuária.
                        </p>                
                    </Col>
                    <Col md="4">
                        <Table striped bordered hover>
                            <tbody>
                                <tr>
                                <td>Mensalidade</td>
                                <td>37.812,50 kz</td>
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

export default Curso15;