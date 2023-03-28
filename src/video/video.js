import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './video.css'
import vd from '../assets/Natal.mp4'

const Video = () => {
    return (
        <Container className="AreaVideo">
            <br/>
            <Row>
                <Col md="12" className="p">                    
                
                {/* <iframe className="video" src="https://youtube.com/embed/Nm4ht2lL7fE?feature=share" */}
                <iframe className="video" src="https://www.youtube.com/embed/eDEQdOCSsSs"
                    title="YouTube video player" frameborder="0" allowfullscreen="false" width="30%">
                        
                    </iframe>

                
                </Col>
            </Row>
        </Container>
    )
}

export default Video;