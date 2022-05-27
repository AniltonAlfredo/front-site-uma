import "./curso.css";
import { Row, Container, Col, Image,Table } from 'react-bootstrap';
import imagem from '../assets/703B0201.jpg'




const Curso13 = () => {

    return (
        <Container fluid >
            <Container className='FaculdadeHeader'>
                <Row>
                    <Col md="12"><h1>Ciências do Desporto e Educação Física</h1></Col>                     
                </Row>
            </Container>

            <Container>
                <Row>
                    <Col md="8">
                        <p className='pfacul'>
                        O Curso de Ciências do Desporto e Educação Física da Metodista de Angola forma profissionais 
                        competentes no âmbito da educação física e do desporto, para seu desempenho eficiente nos diferentes 
                        contextos desportivos. É reconhecido no país pela experiência de anos na formação dos 
                        profissionais, pelo elevado nível de seu corpo docente, pela inserção dos seus graduados 
                        em importantes instituições desportivas do país, pelos equipamentos disponíveis, pelos 
                        estágios nos melhores clubes, ginásios e escolas de Luanda, pela alta componente prática 
                        do ensino ligado à pesquisa e pela excelente localização no centro da cidade. O curso favorece
                         a inserção dos profissionais no mercado de trabalho como professor de Educação Física, treinador
                          desportivo, preparador físico, professor de fitness, gestor desportivo, professor de turismo desportivo.
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
                                <td>pdf</td>
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

export default Curso13;