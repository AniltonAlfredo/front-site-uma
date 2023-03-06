import axios from "axios";
import { useState } from "react";

function EEvento(Evento)
   { 
    const [codigo, setCodigo] = useState("");
    const [titulo, setTitulo] = useState("");
    const [resumo, setResumo] = useState("");
    const [descricacao, setDescricao] = useState("");
    const [tag, setTag] = useState("");
    const [img, setImg] = useState("");
    const [data, setData] = useState("");
    const [destaque, setDestaque] = useState(false);

    setCodigo=Evento.codigo;
    setTitulo=Evento.titulo;
    setResumo=Evento.resumo;
    setDescricao=Evento.descricacao;
    setTag=Evento.tag;
    setData=Evento.data;
    handleSubmit(Evento);
    
    async function handleSubmit(event)
        {
            event.preventDefault();
        
            try
            {
                axios.delete("http://localhost:8080/evento/delete",
                {
                    codigo,
                    titulo,
                    resumo,
                    descricacao,
                    tag,
                    data
                });
                alert("Evento eliminada com sucesso!");
            }
            catch(err)
            {
                alert("Erro ao Eliminar a evento!");
            }
        
        }

        
        
}

export default EEvento;