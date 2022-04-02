import React from 'react'
import {  Container, Row, Col } from 'react-bootstrap';
import  './links.css'
import kairos from './kairos.jpg'
import emm from './Escola.png'


function Links() {
  return (
    <>
        
        <Container fluid  className="Links">
            <div>
                <h1>Links de Interesse</h1>
                <br/>
            </div>

            <Row>
                <Col md="3" className="Links">  
                    <a target="_blank" href="https://iamscu.org/">
                        <div >
                            <img src="https://iamscu.org/wp-content/uploads/2021/01/iamscu-logo.png" alt="IAMSCU" width="300px" />
                        </div>
                    </a>     
                
                </Col>
                <Col md="3" className="Links">
                    <a target="_blank" href="https://www.africau.ac.zw//">
                        <div >
                            <img src="https://www.africau.ac.zw/images/logo.png" alt="Africa University" width="200"/>
                        </div>
                    </a> 
                </Col >
                <Col md="3" className="Links">
                    <a target="_blank" href="https://escoladamissao.ao/">
                        <div >
                            <img src={emm} alt="EMM" width="200"/>
                        </div>
                    </a> 
                </Col>
                <Col md="3" className="Links">
                    <a target="_blank" href="https://governo.gov.ao/ao/">
                        <div >
                            <img src="https://governo.gov.ao/temas/governo/assets/img/logo-angola.png" alt="Governo de Angola" width="300"/>
                        </div>
                    </a> 
                </Col>
                <Col md="3" className="Links">
                    <a target="_blank" href="https://radiometodistakairos.com/">
                        <div >
                            <img src={kairos} alt="Rádio Kairós" width="250"/>
                        </div>
                    </a> 
                </Col>
            </Row>
            
            <br/>
        </Container>
        
          
    </>

    
    
  );
}

export default Links;