import React, { useState, useEffect} from 'react'
import  './noticia.css'
import { Row, Container, Col} from 'react-bootstrap';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const News = () => {
    const {codigo} = useParams();

    const [news, setNews] = useState([]);

    const fecthNews = () => {
        axios.get(`http://196.249.246.165:8080/noticia/${codigo}`).then(res=>{
            console.log(res);
            setNews(res.data);
            
    })
    }
    useEffect(()=>{
        fecthNews();
    },[]);


    return(
        <>
            

                    <Col md="8" className='ColDestaque'>
                        <div>
                            <div>
                                <img src={news.img} alt={news.titulo} width="100%" />
                                <h3>{news.titulo}</h3>  
                                <p dangerouslySetInnerHTML={{__html:news.descricao}}/>
                            </div>
                        </div>
                    </Col> 

                   
            
        </>
    )
}


const NoticiaDescricao = () => {
    return (
        <>
            <Container className='ContainerNoticia'>
                <Row>
                    <Col md="2" className='ColDestaque'>
                    </Col> 

                    <News/>                   

                    <Col md="2" className='ColDestaque'>
                    </Col> 

                </Row>
                </Container>
        </>    
    )
}

export default NoticiaDescricao;