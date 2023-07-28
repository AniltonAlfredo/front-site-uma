import axios from "axios";
import { useState } from "react";
import { Accordion, Button, Form, Row } from "react-bootstrap";

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function CNews()
   {
        // const [codigo, setCodigo] = useState("");
        const [codigo, setCodigo] = useState("");
        const [titulo, setTitulo] = useState("");
        const [resumo, setResumo] = useState("");
        const [descricao, setDescricao] = useState("");
        const [tag, setTag] = useState("");
        const [img, setImg] = useState("");
        const [data, setData] = useState("");
        const [destaque, setDestaque] = useState(false);

       
        
        async function handleSubmit(event)
        {
            event.preventDefault();
            try
            {
                
                await axios.post("http://196.249.246.165:8080/noticia/add",
                {
                    
                    titulo: titulo,
                    data: data,
                    resumo: resumo,
                    descricao: descricao,
                    tag: tag,
                    img: img,
                    destaque: destaque
                });
                setTitulo("");
                setData("");
                setDescricao("");
                setResumo("");
                setTag("");
                setImg("");
                setDestaque("");
                alert("Notícia postada com sucesso!");
                
                // setCodigo("");
                // window.location.reload();
            }
            catch(err)
            {
                alert("Erro ao postar a notícia!");
            }
        }
        
    return (
        <div className="register-container">

            <Accordion defaultActiveKey="">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header><h4>CRIAR NOTÍCIA</h4></Accordion.Header>
                            <Accordion.Body>
                                <Row>
                                    {/* <Upload/> */}
                                     
                                    <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3">
                                <Form.Label><h5>Título</h5></Form.Label>
                                <Form.Control 
                                    type="text" 
                                    placeholder=""
                                    onChange={(event) => setTitulo(event.target.value)}
                                
                                />
                            </Form.Group>
                            <br/>
                            <br/>
                            <Form.Group className="mb-3">
                                <Form.Label><h5>Link da imagem</h5></Form.Label>
                                <Form.Control 
                                    type="text" 
                                    placeholder=""
                                    onChange={(event) => setImg(event.target.value)}
                                
                                />
                            </Form.Group>

                            <br/>
                            <br/>

                            <h5>Data</h5>
                            <input type="date"
                            className="register-input"
                            name="data"
                            placeholder=""
                            // value={selectedNot.data}
                            onChange={(event) =>
                            {
                                setData(event.target.value);      
                            }}
                            />

                            <br/>
                            <br/>
                            <Form.Group>
                                <Form.Label><h4>Descrição</h4></Form.Label>
                                
                                {/* <textarea class="form-control"  
                                rows="10"
                                placeholder=""
                                onChange={(event) =>
                                    {
                                        setDescricao(event.target.value);      
                                    }}  
                                ></textarea> */}
                                <ReactQuill 
                                    value={descricao}
                                    onChange={(content, delta, source, editor) => setDescricao(content)}
                                    rows="5"
                                />
                            </Form.Group>
                            <br/>
                            <br/>
                            <Form.Group>
                                <Form.Label>
                                    <h5>Resumo</h5>
                                </Form.Label>
                                
                                <textarea class="form-control"  
                                rows="5"
                                placeholder=""
                                onChange={(event) =>
                                    {
                                        setResumo(event.target.value);      
                                    }}  
                                ></textarea>
                            </Form.Group>
                            <br/>
                            <br/>

                            <Form.Group className="mb-3">
                                {/* <Form.Label>Destaque</Form.Label>
                                <Form.Control  
                                    placeholder=""
                                    onChange={(event) =>
                                        {
                                            setDestaque(event.target.value);      
                                        }}  
                                
                                />
                                <Form.Text className="text-muted">
                                Para sim=true, para não=false
                                </Form.Text> */}
                                
                                
                                {/* <Form.Label>Destaque</Form.Label> */}
                                <h5><Form.Check 
                                    checked={destaque}
                                    onChange={(event) => {
                                        setDestaque(event.target.checked);
                                    }}
                                    label="Destaque"
                                /></h5>
                            

                            </Form.Group>

                            <br/>
                            <br/>
                            <Form.Group className="mb-3">
                                <Form.Label><h5>Tag</h5></Form.Label>
                                <Form.Control  
                                    placeholder=""
                                    onChange={(event) =>
                                        {
                                            setTag(event.target.value);      
                                        }}  
                                
                                />
                            </Form.Group>

                            <Button variant="primary" type="submit">
                                Criar
                            </Button>

                            </Form>
                                    
                                </Row>                                
                            </Accordion.Body>
                        </Accordion.Item>
                </Accordion>   

        </div>
    )
}

export default CNews;