import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './estatistica.css'
import { FaGraduationCap } from "react-icons/fa";
import { RiComputerLine } from "react-icons/ri";
import { BsGraphUp } from "react-icons/bs";
import { MdUpgrade } from "react-icons/md";


const Estatistica = () => {
    return (
        <Container fluid className="ContainerBack">
            <Container className="ContainerDados">
                <Row>
                    <Col md="3">   
                        <p><RiComputerLine size="50px"/> <span>4 </span> Faculdades</p>
                    </Col>
                    <Col md="3">
                        <p><FaGraduationCap size="50px"/> <span>22 </span> Licenciaturas</p>
                    </Col>
                    <Col md="3">      
                        <p><MdUpgrade size="50px"/> <span>6 </span> Mestrados</p>
                    </Col>
                    <Col md="3">  
                        <p><BsGraphUp size="40px"/> <span>1 </span> Doutoramento</p>
                    </Col>
                </Row>
            </Container>
        </Container>
        
    )
}

export default Estatistica;