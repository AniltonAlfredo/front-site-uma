import axios from "axios";
import { useEffect, useState } from "react";
import  './evento.css'
import { Accordion, Button, Card, Col, Container, Form, Modal, Row, Table } from "react-bootstrap";
import UEvento from "./updateEvento";
import CEvento from "./criarEvento";


const Listar = () => {
    const [show, setShow] = useState(false);

    const [codigo, setCodigo] = useState("");
    const [titulo, setTitulo] = useState("");
    const [resumo, setResumo] = useState("");
    const [descricao, setDescricao] = useState("");
    const [tag, setTag] = useState("");
    const [data, setData] = useState("");

    const [evento, setEvento] = useState([]);

    
    const [selectedEvento, setSelectedEvento] = useState(null); // novo estado para armazenar a evento selecionada

    const handleClose = () => {
        setShow(false);
        setSelectedEvento(null); // limpa a evento selecionada quando o modal é fechado
      };
      
      const handleShow = (evento) => { // atualiza o estado com a evento selecionada e mostra o modal
        setSelectedEvento(evento);
        setShow(true);
      };


      async function handleSubmit(event)
        {
            event.preventDefault();
            try
            {
                
                await axios.put("http://196.249.246.165:8080/evento/update",
                {
                    codigo: selectedEvento.codigo,
                    titulo: titulo,
                    data: data,
                    resumo: resumo,
                    descricao: descricao,
                    tag: tag
                });
                alert("Evento actualizada com sucesso!");
                // setCodigo("");
                // window.location.reload();
            }
            catch(err)
            {
                alert("Erro ao actualizar a evento!");
            }
        }

    const fecthEvent = () => {
        axios.get("http://196.249.246.165:8080/evento/all").then(res=>{
            console.log(res);
            setEvento(res.data);
            
    })
    }

    useEffect(()=>{
        fecthEvent();
    },[]);

    return evento.map((evento) => {
        var codigo=evento.codigo;
        var titulo=evento.titulo;
        var resumo=evento.resumo;
        var descricacao=evento.descricacao;
        var data=evento.data;
        var tag=evento.tag;

        return(
            <>
            
            

                <Col md="4" className="NotGeral">
                            {codigo}
                            <br/>
                            {/* <img src={news.img} alt={news.titulo} width="400px" height="300px" /> */}
                            {/* <Link to={`/evento/${news.codigo}`}> <h5>{news.titulo}</h5></Link>
                            <p>{Moment(news.data).format('DD MMMM YYYY')}</p> */}
                            
                            <h6>{evento.titulo}</h6>
                            
                            {/* <button onClick={() => setModalOpen(true)}><span>Actualizar</span></button> */}

                            <Button variant="warning" onClick={() => handleShow(evento)}> {/* Passa a evento como parâmetro ao clicar no botão */}
                                Atualizar
                            </Button>
                            {/* <button onClick={()=>{alert("Eliminar evento "+titulo+" codigo "+codigo)}}>Eliminar</button> */}
                            <Button variant="danger" onClick={
                                ()=>{axios.delete(`http://196.249.246.165:8080/evento/${codigo}`)}
                                        }> {/* Passa a evento como parâmetro ao clicar no botão */}
                                Eliminar
                            </Button>
                            {/* <button onClick={
                                ()=>{axios.delete(`http://localhost:8080/evento/${codigo}`,window.location.reload())}
                                        }
                            >Eliminar</button> */}

                            
                </Col>
                <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{selectedEvento && selectedEvento.titulo}</Modal.Title>{/*  Mostra o título da evento selecionada no cabeçalho */}
                </Modal.Header>
                <Modal.Body>
                    {selectedEvento && (
                    <>
                               
                        
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3">
                                <Form.Label>Título</Form.Label>
                                <Form.Control 
                                    type="text" 
                                    placeholder=""
                                    onChange={(event) => setTitulo(event.target.value)}
                                
                                />
                            </Form.Group>

                            Data
                            <input type="date"
                            className="register-input"
                            name="data"
                            placeholder=""
                            // value={selectedEvento.data}
                            onChange={(event) =>
                            {
                                setData(event.target.value);      
                            }}
                            />

                            <Form.Group>
                                <Form.Label>Resumo</Form.Label>
                                
                                <textarea class="form-control"  
                                rows="10"
                                placeholder=""
                                onChange={(event) =>
                                    {
                                        setResumo(event.target.value);      
                                    }}  
                                ></textarea>
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>Descrição</Form.Label>
                                
                                <textarea class="form-control"  
                                rows="10"
                                placeholder=""
                                onChange={(event) =>
                                    {
                                        setDescricao(event.target.value);      
                                    }}  
                                ></textarea>
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Tag</Form.Label>
                                <Form.Control  
                                    placeholder=""
                                    onChange={(event) =>
                                        {
                                            setTag(event.target.value);      
                                        }}  
                                
                                />
                            </Form.Group>

                            <Button variant="primary" type="submit">
                                Actualizar
                            </Button>

                            </Form>

                        

                                    
                    </>
                    )}
                </Modal.Body>
                {/* <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                    Fechar
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                    Salvar
                    </Button>
                </Modal.Footer> */}
                </Modal>
            </>
        );
    })
}


function Evento()
{

    
        
    return (
        <>
        <CEvento/>
        
        <br/><br/>
        <Container fluid>
            <Row>
                <Accordion defaultActiveKey="">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header><h4>TODOS OS EVENTOS</h4></Accordion.Header>
                            <Accordion.Body>
                                <Row>
                                    <Listar/>
                                </Row>                                
                            </Accordion.Body>
                        </Accordion.Item>
                </Accordion>                
            </Row>
        </Container>
        <br/>
        </>
    )
}

export default Evento;