import  './noticia.css'
import { Link } from 'react-router-dom';
import React, { useState, useEffect} from 'react'
import axios from 'axios';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';


import img1 from '../assets/703B0201.jpg'
import img2 from '../assets/intercambio.jpg'
import img3 from '../assets/703B5404.jpg'


function Noticia() {

    const [news, setNews] = useState([]);

    const fecthNews = () => {
        axios.get("http://localhost:8080/noticia/all").then(res=>{
            console.log(res);
            setNews(res.data);
            
    })
    }

    useEffect(()=>{
        fecthNews();
    },[]);


  return (
    <>
        <Container className="ContainerNoticia">
            <div>
                <h1>Destaques</h1>
                <br/>
                <br/>
            </div>

            {
                
            }

            <Row className="RowNot">
                <Col md="4" >
                    <Card className="carde">
                        <Card.Img variant="top" src={img1} />
                        <Card.Body>
                            <Card.Title>ESTÁGIOS PARA ESTUDANTES</Card.Title>
                            <Card.Text  className="TextoNoticia">
                                    O curso de Engenharia Civil, em 
                                    parceria com a empresa Casais-Engenharia 
                                    e Construção, abre programa de estágio 
                                    profissional para os estudantes analistas e 
                                    recém-licenciados.
                            </Card.Text>
                            <Button variant="primary">Ver mais...</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md="4">
                    <Card className="carde">
                        <Card.Img variant="top" src={img2} />
                        <Card.Body>
                            <Card.Title>ESTUDANTE APROVADA PARA O INTERCÂMBIO NOS EUA</Card.Title>
                            <Card.Text className="TextoNoticia">
                            Elisabete Cardoso, estudante do 5º ano do curso de Direito da Universidade Metodista de Angola, 
                            foi recentemente seleccionada para representar Angola no programa internacional (SUSI), 
                            sobre engajamento cívico para líderes estudantis dos EUA, promovido pelo departamento de 
                            Estado dos EUA, em colaboração com a embaixada americana em Angola. 

                            </Card.Text>
                            <Button variant="primary">Ver mais...</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md="4">
                    <Card className="carde">
                        <Card.Img variant="top" src={img3} />
                        <Card.Body>
                            <Card.Title>EDUCAÇÃO EM DIREITOS HUMANOS</Card.Title>
                            <Card.Text className="TextoNoticia">
                                Com vista à inclusão dos direitos humanos 
                                em todos os níveis no sistema de ensino do país, a 
                                Metodista, no âmbito do protocolo de 
                                cooperação entre o Ministério da Justiça e dos 
                                Direitos Humanos e a Embaixada da Noruega,
                            </Card.Text>
                            <Button variant="primary">Ver mais...</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <div>
                <Link to="/noticia"> <span>ÚLTIMAS NOTÍCIAS...</span></Link> 
            </div>
        </Container>
        
          
    </>

    
    
  );
}

export default Noticia;