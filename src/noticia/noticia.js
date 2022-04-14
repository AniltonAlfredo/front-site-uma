import React, { useState, useEffect} from 'react'
import  './noticia.css'
import { Row, Container, Col } from 'react-bootstrap';
import axios from 'axios';
import { Link } from 'react-router-dom';

const News = () => {

    const [news, setNews] = useState([]);

    const fecthNews = () => {
        axios.get("http://196.249.246.165:8080/noticia/destaques").then(res=>{
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
                <Col lg="4">
                            <img src={news.img} alt={news.titulo} width="400px" />
                            <Link to={`/noticia/${news.codigo}`}> <h5>{news.titulo}</h5></Link>
                </Col>

            </>
        );
    })
}


const Noticia = () => {

    return (
        <>
            <Container className='DestaqueStyle'>
                <h1>DESTAQUES</h1>
                <Row>                   
                    <News/>                   
                </Row>
            </Container>
        </>    
    )
}

export default Noticia;


