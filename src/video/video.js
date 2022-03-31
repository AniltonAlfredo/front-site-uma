import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './video.css'

const Video = () => {
    return (
        <Container className="AreaVideo">
            <br/>
            <Row>
                <Col md="12" className="p">                    
                <iframe className="video" src="https://www.youtube.com/embed/fspoJ8CK7Rg" 
                    title="YouTube video player" frameborder="0" allowfullscreen></iframe>
                </Col>
            </Row>
        </Container>
    )
}

export default Video;