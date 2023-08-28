import React from 'react'
import {  Container, Row, Col } from 'react-bootstrap';
import  './links.css'
import kairos from './kairos.jpg'
import emm from './Escola.png'
import inst from './inst.jpg'
import MSP from './logo-metodista-SP.png'


function Links() {
  return (
    <>       

        <Container fluid  className="LinksTTL">
            <div>
                <h1>Cooperação Internacional</h1>
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
                    <a target="_blank" href="https://en.cuc.edu.cn/">
                        <div >
                            <img src="https://en.cuc.edu.cn/_upload/tpl/00/83/131/template131/htmlRes/dNXNCleRx7HfRD3PAABjzZgZlYA101.png" width="300px" />
                        </div>
                    </a>     
                
                </Col>
                 <Col md="3" className="Links">  
                    <a target="_blank" href="https://www.ifb.edu.br/">
                        <div >
                            <img src="https://www.ifb.edu.br/images/IFBVertical.png" width="100px" />
                        </div>
                    </a>     
                
                </Col>
                <Col md="3" className="Links">  
                    <a target="_blank" href="https://ufu.br/">
                        <div >
                            <img src="https://ufu.br/sites/ufu.br/files/media/imagem/marca-ufu-45-anos_blue.png" width="200px" />
                        </div>
                    </a>    
                </Col>
                <Col md="3" className="Links">
                    <a target="_blank" href="http://www.africau.edu/">
                        <div >
                            <img src="http://www.africau.edu/images/AU-Logo-trans-bckgr.png" width="120"/>
                        </div>
                    </a> 
                </Col >
                
                <Col md="3" className="Links">
                    <a target="_blank" href="https://metodista.br/">
                        <div >
                            <img src={MSP} alt="EMM" width="250"/>
                        </div>
                    </a> 
                </Col>
                <Col md="3" className="Links">
                    <a target="_blank" href="https://ciaat.org.br/">
                        <div >
                            <img src="https://ciaat.org.br/wp-content/uploads/2021/05/Logo-CIAAT-header.png" width="200"/>
                        </div>
                    </a> 
                </Col >
                <Col md="3" className="Links">
                    <a target="_blank" href="https://icsf.cuc.edu.cn/en/">
                        <div >
                            <img src={inst} width="250"/>
                        </div>
                    </a> 
                </Col>
                <Col md="3" className="Links">
                    <a target="_blank" href="https://new.umum.education/">
                        <div >
                            <img src="https://new.umum.education/wp-content/uploads/2022/09/cropped-1MUM.png" width="120"/>
                        </div>
                    </a> 
                </Col >
            </Row>
            
            <br/>
        </Container>  
        <hr></hr>
        <Container fluid  className="LinksTTL">
            <div>
                <h1>Parceiros</h1>
            </div>

            <Row>
                <Col md="3" className="Links">
                    <a target="_blank" href="https://escoladamissao.co.ao/">
                        <div >
                            <img src={emm} alt="EMM" width="200"/>
                        </div>
                    </a> 
                </Col>
                {/* <Col md="3" className="Links">
                    <a target="_blank" href="https://governo.gov.ao/ao/">
                        <div >
                            <img src="https://governo.gov.ao/temas/governo/assets/img/logo-angola.png" alt="Governo de Angola" width="300"/>
                        </div>
                    </a> 
                </Col> */}
                <Col md="3" className="Links">
                    <a target="_blank" href="http://radiokairosangola.ao/">
                        <div >
                            <img src={kairos} alt="Rádio Kairós" width="250"/>
                        </div>
                    </a> 
                </Col>
                <Col md="3" className="Links">
                    <a target="_blank" href="https://www.huawei.com/en/">
                        <div >
                            <img src="https://www-file.huawei.com/-/media/corporate/images/home/logo/huawei_logo.png" width="200"/>
                        </div>
                    </a> 
                </Col >
            </Row>
            
            <br/>
        </Container> 
    </>

    
    
  );
}

export default Links;