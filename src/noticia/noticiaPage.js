import React, { useState, useEffect} from 'react'
import  './noticia.css'
import { Row, Container, Col } from 'react-bootstrap';
import axios from 'axios';
import { Link } from 'react-router-dom';

const News = () => {

    const [news, setNews] = useState([]);

    const fecthNews = () => {
        axios.get("http://196.249.246.165:8080/noticia/all").then(res=>{
            console.log(res);
            setNews(res.data);
            
    })
    }

    useEffect(()=>{
        fecthNews();
    },[]);

    return news.map((news) => {
        

        return(
            <>
                <Col md="4" className="NotGeral">
                            {/* <img src={news.img} alt={news.titulo} width="400px" height="300px" /> */}
                            <img src={news.img} alt={news.titulo} width="400px"/>
                            <Link to={`/noticia/${news.codigo}`}> <h5>{news.titulo}</h5></Link>
                </Col>

            </>
        );
    })
}


const NoticiaPage = () => {

    return (
        <>
            <Container className='NotPag'>
                <h1>NOTÍCIAS</h1>
                <Row>                   
                    <News/>                   
                </Row>
            </Container>
        </>    
    )
}

export default NoticiaPage;


