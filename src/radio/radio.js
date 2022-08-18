
import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import  './radio.css'
import { FaMicrophoneAlt } from "react-icons/fa";
import audio1 from '../radio/UNIVERSIDADE EM MOVIMENTO 15.08.2022.mp3'
import audio2 from '../radio/UNIVERSIDADE EM MOVIMENTO 17.08.2022.mp3'
import audio3 from '../radio/UNIVERSIDADE EM MOVIMENTO 12.08.2022.mp3'

function Radio() { 
  return (
    <>        
        <Container>
            <br/>
            <div className="RadioStyle">
                <h1>UNIVERSIDADE EM MOVIMENTO</h1>
                <h6>PROGRAMA RADIOFÓNICO <FaMicrophoneAlt size="20px"/></h6><br/><br/>
            </div>

            <Row className="rowradio">
                <Col md="4">
                    <span class="sr-only">15.08.2022<br/>Segunda-feira</span><br/>
                    <audio controls>                        
                        <source src={audio1} type="audio/mp3">                        
                        </source>
                    </audio>
                </Col>
                <Col md="4">
                    <span class="sr-only">17.08.2022<br/>Quarta-feira</span><br/>
                    <audio controls>                        
                        <source src={audio2} type="audio/mp3">                        
                        </source>
                    </audio>
                </Col>
                <Col md="4">
                    <span class="sr-only">12.08.2022<br/>Sexta-feira</span><br/>
                    <audio controls>                        
                        <source src={audio3} type="audio/mp3">                        
                        </source>
                    </audio>
                </Col>
            </Row>
        </Container>       
          
    </>  
    
  );
}

export default Radio;