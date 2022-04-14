import React, { useState, useEffect} from 'react'
import  './evento.css'
import { Row, Container, Col } from 'react-bootstrap';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Event = () => {
    const {codigo} = useParams();

    const [event, setEvent] = useState([]);

    const fecthEvent = () => {
        axios.get(`http://196.249.246.165:8080/evento/${codigo}`).then(res=>{
            console.log(res);
            setEvent(res.data);
            
    })
    }
    useEffect(()=>{
        fecthEvent();
    },[]);


    return(
        <>
            <Container className='ContainerNoticia'>
                <Row>
                    <Col md="2" className='ColDestaque'>
                    </Col>  

                    <Col md="8">
                        <div>
                            <div>
                                <h3>{event.titulo}</h3>  
                                <p dangerouslySetInnerHTML={{__html:event.descricao}}/>
                            </div>
                        </div>
                    </Col> 

                    <Col md="2" className='ColDestaque'>
                    </Col>                     
                </Row>
            </Container>
            
        </>
    )
}


const EventoDescricao = () => {
    return (
        <>
            
            
            <Event/>
        </>    
    )
}

export default EventoDescricao;