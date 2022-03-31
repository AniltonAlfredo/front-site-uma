import React, { useState, useEffect} from 'react'
import { Row, Container, Col, Image, Table } from 'react-bootstrap';
import "./curso.css";
import axios from 'axios';
import { useParams } from 'react-router-dom';



const Curso = () => {
  const {codigo} = useParams();

  const [curso, setCurso] = useState([]);

  const fecthCurso = () => {
      axios.get(`http://localhost:8080/curso/${codigo}`).then(res=>{
          console.log(res);
          setCurso(res.data);
          
  })
  }
  useEffect(()=>{
      fecthCurso();
  },[]);


  return(
      <>
        <Container fluid >
            <Container className='FaculdadeHeader'>
                <Row>
                    <Col md="12"><h1>{curso.nome}</h1></Col>                     
                </Row>
            </Container>

            <Container>
                <Row>
                    <Col md="8">
                        <p className='pfacul'>
                        {curso.descricao}
                        </p>                
                    </Col>
                    <Col md="4">
                        <Table striped bordered hover>
                            <tbody>
                                <tr>
                                <td>Mensalidade</td>
                                <td>{curso.mensalidade}</td>
                                </tr>
                                <tr>
                                <td>Duração</td>
                                <td>{curso.duracao}</td>
                                </tr>
                                <tr>
                                <td>Plano Curricular</td>
                                <td>pdf</td>
                                </tr>
                                
                            </tbody>
                        </Table>
                    </Col>
                </Row>

            </Container>
            
              
            
        </Container>    
      </>
  )
}

const CursoDescricao = () => {
  return (
      <>
        <Curso/>
      </>
  );
};

export default CursoDescricao;