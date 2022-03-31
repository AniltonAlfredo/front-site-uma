import  './faculdade.css'
import { Row, Container, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import React, { useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';


const Facul = () => {
    const {codigo} = useParams();
  
    const [facul, setFacul] = useState([]);
    


    const fecthFacul = () => {
        axios.get(`http://localhost:8080/faculdade/${codigo}`).then(res=>{
            console.log(res);
            setFacul(res.data);
            
    })
    }
    useEffect(()=>{
        fecthFacul();
    },[]);
  
    return(
        <>
          <Container fluid >
            <Container className='FaculdadeHeader'>
                <Row>
                    <Col md="12"><h1>{facul.nome}</h1></Col>                     
                </Row>
            </Container>

            <Container>
                <Row>
                    <Col md="8">
                        <p className='pfacul'>
                        {facul.descricao} 
                        </p>                
                    </Col>
                    <Col md="4">
                        <Card bg="light" text="dark" className="carde">
                            <Card.Header>
                                <Card.Title>Cursos</Card.Title>
                                <Card.Text className="TextoNoticia">
                                </Card.Text>
                            </Card.Header>
                            <Card.Body>
                                <Link to="/curso1"> <span className='spnFcl'>Engenharia Informática</span></Link>                            
                                <hr></hr>
                                <Link to="/curso4"> <span className='spnFcl'>Engenharia Civil</span></Link> 
                                <hr></hr>
                                <Link to="/curso5"><span className='spnFcl'>Engenharia do Ambiente</span></Link>
                                {
                                    
                                }
                                
                            </Card.Body>
                            
                        </Card>
                    </Col>
                </Row>
            </Container>
            
              
        </Container>   
        </>
    )

  }


const FaculdadeDescricao = () => {

    return (
        <>
            <Facul/>
        </>     
    )
}

export default FaculdadeDescricao;




