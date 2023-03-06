import axios from "axios";
import { useState } from "react";
import { Accordion, Button, Form, Row } from "react-bootstrap";

function CNews()
   {
        // const [codigo, setCodigo] = useState("");
        const [codigo, setCodigo] = useState("");
        const [titulo, setTitulo] = useState("");
        const [resumo, setResumo] = useState("");
        const [descricacao, setDescricao] = useState("");
        const [tag, setTag] = useState("");
        const [img, setImg] = useState("");
        const [data, setData] = useState("");
        const [destaque, setDestaque] = useState(false);

       
        
        async function handleSubmit(event)
        {
            event.preventDefault();
            try
            {
                
                await axios.post("http://localhost:8080/noticia/add",
                {
                    
                    titulo: titulo,
                    data: data,
                    resumo: resumo,
                    descricacao: descricacao,
                    tag: tag,
                    img: img,
                    destaque: destaque
                });
                alert("Notícia postada com sucesso!");
                // setCodigo("");
                window.location.reload();
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
                                <Form.Label>Título</Form.Label>
                                <Form.Control 
                                    type="text" 
                                    placeholder=""
                                    onChange={(event) => setTitulo(event.target.value)}
                                
                                />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Link da imagem</Form.Label>
                                <Form.Control 
                                    type="text" 
                                    placeholder=""
                                    onChange={(event) => setImg(event.target.value)}
                                
                                />
                            </Form.Group>

                            Data
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
                                <Form.Label>Destaque</Form.Label>
                                <Form.Control  
                                    placeholder=""
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