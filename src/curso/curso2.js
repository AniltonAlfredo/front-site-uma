import "./curso.css";
import { Row, Container, Col, Image, Card, Table } from 'react-bootstrap';
import imagem from '../assets/703B0201.jpg'
import Doc from '../assets/PLANO CURRICULAR/ARQ.PLAN PDF.pdf'
import Doc1 from '../assets/PLANO CURRICULAR/DECRETO EXECUTIVO.pdf'


const Curso2 = () => {

    return (
        <Container fluid >
            <Container className='FaculdadeHeader'>
                <Row>
                    <Col md="12"><h1>Arquitectura e Urbanismo</h1></Col>                     
                </Row>
            </Container>

            <Container>
                <Row>
                    <Col md="8">
                        <p className='pfacul'>
                        O curso de Arquitectura e Urbanismo da Metodista de Angola torna o estudante capaz de 
                        desenvolver projectos de criação, concepção, construção completa do interior e do 
                        exterior de espaços residenciais, de espaços de serviço, de lazer, entre outros, quer 
                        se trate de um edifício, espaço urbano, incluídos ao paisagismo. Os programas e objectivos 
                        do curso são adaptados para formar um arquitecto eficiente e criativo, capacitado a construir, 
                        recuperar, regenerar e melhor servir à sociedade e à nação angolana. Prepara o aluno para realizar 
                        projectos que respeitem e valorizem aspectos sociais, económicos e ambientais, sem abrir mão da 
                        beleza na forma e da inovação na técnica. <br/><br/>Com proposta ousada e actual, o curso promove a 
                        aproximação social e cultural, para que a prática no terreno seja feita com arquitectos 
                        urbanistas qualificados.  E dedica especial atenção à contínua procura de soluções 
                        pedagógicas e ferramentas técnicas para as questões que se apresentam e reflectem o sucesso
                         profissional e da sociedade no que toca à intervenção no ambiente construído. Igualmente 
                         importante, constrói relações de interdisciplinaridade, essenciais para uma formação completa 
                         e abrangente do arquitecto urbanista, como técnico e como cidadão.
                        </p>                
                    </Col>
                    <Col md="4">
                        <Table striped bordered hover>
                            <tbody>
                                <tr>
                                <td>Mensalidade</td>
                                <td>52.408,20 kz</td>
                                </tr>
                                <tr>
                                <td>Duração</td>
                                <td>5 anos</td>
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

export default Curso2;