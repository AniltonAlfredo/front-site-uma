import "./curso.css";
import { Row, Container, Col, Image, Card, Table } from 'react-bootstrap';
import imagem from '../assets/703B0201.jpg'
import Doc from '../assets/PLANO CURRICULAR/ENG. MECATR.pdf'



const Curso7 = () => {

    return (
        <Container fluid >
            <Container className='FaculdadeHeader'>
                <Row>
                    <Col md="12"><h1>Engenharia Mecatrónica</h1></Col>                     
                </Row>
            </Container>

            <Container>
                <Row>
                    <Col md="8">
                        <p className='pfacul'>
                        O curso de Engenharia Mecatrónica da Metodista de Angola tem por objectivo principal formar
                         engenheiros habilitados a exercer a sua actividade com rigor científico e actualidade tecnológica,
                          adequados à realidade do país. <br/><br/>
O desenvolvimento e a integração de tecnologias mecânicas, eletrônicas, e computacionais potencializou a criação e 
optimização de produtos e processos inovadores nos mais variados ramos da actividade produtiva e industrial. Desde 
eletrodomésticos, passando por aparelhos sofisticados empregues na área médica, na indústria automobilística, aviação
 até sistemas robóticos, são incontáveis os exemplos de inovações criadas a partir do desenvolvimento de sistemas mecatrônicos.<br/><br/>
Para desenvolver sistemas que integram conhecimentos de áreas tão distintas são necessários profissionais com perfil 
multidisciplinar, com conhecimentos e habilidades avançadas para o atendimento de necessidades tecnológicas e cientificas 
nas mais variadas áreas que requerem soluções mecatrónicas. 
Com uma formação marcadamente prática e experimental. O engenheiro mecatrónico diplomado pela Metodista tem um vasto
 campo de aplicação dos seus conhecimentos, estando preparado para exercer a sua actividade nas áreas da mecânica,
  electricidade, electrónica e informática.
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
                                <td>5 anos</td>
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

export default Curso7;