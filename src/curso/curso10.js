import "./curso.css";
import { Row, Container, Col, Image, Table } from 'react-bootstrap';
import imagem from '../assets/703B0201.jpg'
import Doc from '../assets/PLANO CURRICULAR/Turismo, Gestão Hoteleira e Animação.pdf'



const Curso10 = () => {

    return (
        <Container fluid >
            <Container className='FaculdadeHeader'>
                <Row>
                    <Col md="12"><h1>Turismo e Gestão Hoteleira</h1></Col>                     
                </Row>
            </Container>

            <Container>
                <Row>
                    <Col md="8">
                        <p className='pfacul'>
                        O Turismo é uma actividade económica de grande relevo e um fenómeno sociocultural de enorme impacto 
                        na sociedade contemporânea, motivo pelo qual a Universidade Metodista de Angola, no seu leque de
                         cursos de licenciatura, tem o curso de Turismo, Gestão Hoteleira e Animação com o objectivo de
                          proporcionar uma maior valorização das actividades turísticas bem como no contributo da melhoria
                           das políticas voltadas ao turismo, gestão hoteleira e animação.
<br/><br/>A estrutura curricular do curso pretende dar resposta às diferentes realidades de Angola e ao seu actual estado 
de desenvolvimento turístico, de modo a que os profissionais aqui formados sejam capazes de intervir em níveis tão diversos
 que vão do empreendedorismo turístico, com criação, gestão e animação de empreendimentos de reduzida dimensão, a uma 
 intervenção mais unidireccionada como gestores hoteleiros ou profissionais dos diversos sectores dessa indústria.
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

export default Curso10;