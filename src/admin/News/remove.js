import axios from "axios";
import { useState } from "react";

function ENews(Noticia)
   { 
    const [codigo, setCodigo] = useState("");
    const [titulo, setTitulo] = useState("");
    const [resumo, setResumo] = useState("");
    const [descricacao, setDescricao] = useState("");
    const [tag, setTag] = useState("");
    const [img, setImg] = useState("");
    const [data, setData] = useState("");
    const [destaque, setDestaque] = useState(false);

    setCodigo=Noticia.codigo;
    setTitulo=Noticia.titulo;
    setResumo=Noticia.resumo;
    setDescricao=Noticia.descricacao;
    setTag=Noticia.tag;
    setImg=Noticia.img;
    setData=Noticia.data;
    setDestaque=Noticia.destaque;
    handleSubmit(Noticia);
    
    async function handleSubmit(event)
        {
            event.preventDefault();
        
            try
            {
                axios.delete("http://localhost:8080/noticia/delete",
                {
                    codigo,
                    titulo,
                    resumo,
                    descricacao,
                    tag,
                    img,
                    data,
                    destaque
                });
                alert("Notícia eliminada com sucesso!");
            }
            catch(err)
            {
                alert("Erro ao Eliminar a notícia!");
            }
        
        }

        
        
}

export default ENews;