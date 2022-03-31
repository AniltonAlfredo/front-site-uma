import React, { useState, useEffect} from 'react'
import  './faculdade.css'
import { Container } from 'react-bootstrap';
import axios from 'axios';


const Facul = () => {

    const [facul, setFacul] = useState([]);

    const fecthFacul = () => {
        axios.get("http://localhost:8080/faculdade/all").then(res=>{
            console.log(res);
            setFacul(res.data);
            
    })
    }

    useEffect(()=>{
        fecthFacul();
    },[]);

    return facul.map((facul, codigo)=>{

        return(
            <div>
                <h1>{facul.nome}</h1>
                <p>{facul.descricao}</p>
            </div>
            
        )

    })
}

const Faculdade = () => {

    return (
        <Container fluid >
            <h1>Descrição Individual da Faculdade</h1>   
            <Facul />         
        </Container>       
    )
}

export default Faculdade;