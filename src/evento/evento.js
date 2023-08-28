import React, { useState, useEffect} from 'react'
import { Card, Container, Row, Col } from 'react-bootstrap';
import  './evento.css'
import axios from 'axios';
import { Link } from 'react-router-dom';
import Moment from 'moment';
import 'moment/locale/pt';

const Event = () => {

    const [event, setEvent] = useState([]);
    
    //Moment = new Moment.locale('pt');    

    const fecthEvents = () => {
        axios.get("https://196.249.246.165:8080/evento/lastsEvents").then(res=>{
            console.log(res);
            setEvent(res.data.content);
            
    })
    }
    
    useEffect(()=>{
        fecthEvents();
    },[]);

    return event.map((event) => {
        

        return(
            <>
                <Col md="3">
                        <Card>
                            <Card.Header className="EventoHeader">
                                <span>
                                    {//Moment.locale('pt-br');
                                        Moment(event.data).format('DD')
                                    }                                    
                                </span>                                
                                <p>{Moment(event.data).format('MMMM YY')}</p>
                            </Card.Header> 
                            <Card.Body>
                                <Card.Title><Link to={`/evento/${event.codigo}`}> <h5>{event.titulo}</h5></Link></Card.Title>
                                <Card.Text className="TextoEvento">
                                {event.resumo}...
                                </Card.Text>
                            </Card.Body>
                        </Card>
                </Col>

            </>
        );
    })
}


function Evento() {
  return (
    <>
        
        <Container className="DestaqueStyle">
            <Row>
                <Col>
                <h1>EVENTOS</h1>
                </Col>
            </Row>
            <br/>
            <Row className="evento">
                <Event/>
            </Row>
        </Container>
        
          
    </>

    
    
  );
}

export default Evento;