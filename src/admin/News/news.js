import axios from "axios";
import { useEffect, useState } from "react";
import  './news.css'
import { Accordion, Card, Col, Container, Form, Row, Table } from "react-bootstrap";
import CNews from "./create";
import { Button, Modal } from 'react-bootstrap';
import moment from "moment/moment";

const Listar = () => {

    const [show, setShow] = useState(false);

    const [codigo, setCodigo] = useState("");
    const [titulo, setTitulo] = useState("");
    const [resumo, setResumo] = useState("");
    const [descricao, setDescricao] = useState("");
    const [tag, setTag] = useState("");
    const [img, setImg] = useState("");
    const [data, setData] = useState("");
    const [destaque, setDestaque] = useState(false);

    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);

    const [not, setNot] = useState([]);
    const [selectedNot, setSelectedNot] = useState(null); // novo estado para armazenar a notícia selecionada

    async function handleSubmit(event)
        {
            event.preventDefault();
            try
            {
                
                await axios.put("http://localhost:8080/noticia/update",
                {
                    codigo: selectedNot.codigo,
                    titulo: titulo,
                    data: data,
                    resumo: resumo,
                    descricao: descricao,
                    tag: tag,
                    img: img,
                    destaque: destaque
                });
                alert("Notícia actualizada com sucesso!");
                // setCodigo("");
                window.location.reload();
            }
            catch(err)
            {
                alert("Erro ao actualizar a notícia!");
            }
        }

    const handleClose = () => {
        setShow(false);
        setSelectedNot(null); // limpa a notícia selecionada quando o modal é fechado
      };
      
      const handleShow = (not) => { // atualiza o estado com a notícia selecionada e mostra o modal
        setSelectedNot(not);
        setShow(true);
      };


    const fecthNoticias = () => {
        axios.get("http://localhost:8080/noticia/all").then(res=>{
            console.log(res);
            setNot(res.data);
            
    })
    }

    useEffect(()=>{
        fecthNoticias();
    },[]);

    return not.map((not) => {
       
        
        var codigo=not.codigo;
        var titulo=not.titulo;
        var resumo=not.resumo;
        var descricao=not.descricao;
        var destaque=not.destaque;
        var data=not.data;
        var tag=not.tag;
        var img=not.img;

        return(
            <>
            
            

                <Col md="4" className="NotGeral">
                            {codigo}
                            <br/>
                            {/* <img src={news.img} alt={news.titulo} width="400px" height="300px" /> */}
                            <img src={not.img} alt="" width="400px"/>
                            {/* <Link to={`/noticia/${news.codigo}`}> <h5>{news.titulo}</h5></Link>
                            <p>{Moment(news.data).format('DD MMMM YYYY')}</p> */}
                            
                            <h6>{not.titulo}</h6>
                            
                            {/* <button onClick={() => setModalOpen(true)}><span>Actualizar</span></button> */}

                            <Button variant="warning" onClick={() => handleShow(not)}> {/* Passa a notícia como parâmetro ao clicar no botão */}
                                Atualizar
                            </Button>
                            {/* <button onClick={()=>{alert("Eliminar notícia "+titulo+" codigo "+codigo)}}>Eliminar</button> */}
                            <Button variant="danger" onClick={
                                ()=>{axios.delete(`http://localhost:8080/noticia/${codigo}`,window.location.reload())}
                                        }> {/* Passa a notícia como parâmetro ao clicar no botão */}
                                Eliminar
                            </Button>
                            {/* <button onClick={
                                ()=>{axios.delete(`http://localhost:8080/noticia/${codigo}`,window.location.reload())}
                                        }
                            >Eliminar</button> */}

                            
                </Col>
                <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{selectedNot && selectedNot.titulo}</Modal.Title>{/*  Mostra o título da notícia selecionada no cabeçalho */}
                </Modal.Header>
                <Modal.Body>
                    {selectedNot && (
                    <>
                               
                        
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3">
                                <Form.Label>Título</Form.Label>
                                <Form.Control 
                                    type="text" 
                                    placeholder={selectedNot.titulo}
                                    onChange={(event) => setTitulo(event.target.value)}
                                
                                />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Link da imagem</Form.Label>
                                <Form.Control 
                                    type="text" 
                                    placeholder={selectedNot.img}
                                    onChange={(event) => setImg(event.target.value)}
                                
                                />
                            </Form.Group>

                            Data
                            <input type="date"
                            className="register-input"
                            name="data"
                            placeholder={selectedNot.data}
                            // value={selectedNot.data}
                            onChange={(event) =>
                            {
                                setData(event.target.value);      
                            }}
                            />

                            <Form.Group>
                                <Form.Label>Descrição</Form.Label>
                                
                                <textarea class="form-control"  
                                rows="10"
                                placeholder={selectedNot.descricao}
                                onChange={(event) =>
                                    {
                                        setDescricao(event.target.value);      
                                    }}  
                                ></textarea>
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Destaque</Form.Label>
                                <Form.Control  
                                    placeholder={selectedNot.destaque}
                                    onChange={(event) =>
                                        {
                                            setDestaque(event.target.value);      
                                        }}  
                                
                                />
                                <Form.Text className="text-muted">
                                Para sim=true, para não=false
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Tag</Form.Label>
                                <Form.Control  
                                    placeholder={selectedNot.tag}
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


function News()
{
    
        
    return (
        <>
        <CNews/>
        <br/><br/>
        <Container fluid>
            <Row>
                <Accordion defaultActiveKey="">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header><h4>TODAS AS NOTÍCIAS</h4></Accordion.Header>
                            <Accordion.Body>
                                <Row>
                                    <Listar/>
                                </Row>                                
                            </Accordion.Body>
                        </Accordion.Item>
                </Accordion>                
            </Row>
        </Container>

        
                
        </>
    )

    
}


export default News;