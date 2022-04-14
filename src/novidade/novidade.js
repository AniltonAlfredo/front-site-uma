import React, { useState, useEffect} from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './novidade.css'
import axios from 'axios';
import { Link } from 'react-router-dom';

const _9dades = () => {

    const [news, setNews] = useState([]);

    const fecthNews = () => {
        axios.get("http://196.249.246.165:8080/noticia/listLast5").then(res=>{
            console.log(res);
            setNews(res.data.content);
    })
    }

    useEffect(()=>{
        fecthNews();
    },[]);

    return news.map((news) => {
        

        return(
            <>
                
                            {/* <p> <a href="#">ESTÁGIOS PARA ESTUDANTES</a> | NOVOS MEMBROS NA EQUIPA REITORAL | EDUCAÇÃO EM DIREITOS HUMANOS | 
                            CONSCIENTIZAÇÃO DO CÂNCER DE MAMA
                            </p> */}                        
                            <Link to={`/noticia/${news.codigo}`}>{news.titulo} | </Link>
                

            </>
        );
    })
}

const Novidades = () => {
    return (

        <Container fluid className="ContainerNovidade">
            <Row>
                <Col md="2" className="Nov">                 
                    
                    <Link to='/noticia'> <p> ÚLTIMAS NOTÍCIAS </p></Link>
                </Col>
                <Col md="10" className="Novdesc">
                    
                        <marquee className="marque_novdade">
                            <p> <_9dades/>
                            </p>
                        </marquee>
                </Col>
            </Row>
        </Container>
    )
}

export default Novidades; 