import { Container, Row, Col, Image } from 'react-bootstrap';
import "./rodape.css"
import LogoBranca from '../assets/verticalLbranca.png'

import { TiMail } from "react-icons/ti";
import { BsTelephoneForward } from "react-icons/bs";
import { AiOutlineHome } from "react-icons/ai";
import { Link } from 'react-router-dom';


function Rodape() {
  return (    
      <>
        <Container fluid className="ContainerRodape">
            <Row className="RowStyle">                
                
                <Col md="4" className="Navegacacao">
                    <h3>Navegação</h3>
                    <ul>
                        <li><Link to="/historial">Historial</Link></li>
                        <li><Link to="/reitoria">Reitoria</Link></li>
                        <li><a target="_blank" href="https://escoladamissao.ao/">Escola da Missão Metodista</a></li>                                
                        <li><a target="_blank" href="https://mutue.ao/register">Inscrições</a></li>
                        <li><a target="_blank" href="https://mutue.ao/login">Matrículas</a></li>
                    </ul>
                </Col>
                

                <Col md="4" className="LogoMarca">
                    <Image src={LogoBranca} fluid height="350px" width="350px"/>
                </Col>

                
                
                <Col md="4" className="Contactos">
                    <h3>Contactos</h3>
                    <ul>
                        
                        <li> <TiMail size="35px"/> geral@uma.co.ao</li>
                        <li> <BsTelephoneForward size="35px"/> +244 942364667</li>
                        <li> <BsTelephoneForward size="35px"/> +244 947716113</li>
                        <li>  <AiOutlineHome size="35px"/> Agostinho Pedro Neto, esquina com rua Nossa Senhora da Muxima, Bairro Kinaxixi, Luanda.</li>
                    </ul>
                </Col>
                
            </Row>
            
        </Container>  
        
      
      </>
    


  );
}

export default Rodape;