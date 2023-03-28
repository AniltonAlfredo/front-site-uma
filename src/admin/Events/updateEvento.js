import axios from "axios";
import { useState } from "react";

function UEvento()
   {
        // const [codigo, setCodigo] = useState("");
        // const [codigo, setCodigo] = useState("");
        const [titulo, setTitulo] = useState("");
        const [resumo, setResumo] = useState("");
        const [descricacao, setDescricao] = useState("");
        const [tag, setTag] = useState("");
        const [img, setImg] = useState("");
        const [data, setData] = useState("");

 
        async function handleSubmit(event)
        {
            event.preventDefault();
            try
            {
                await axios.post("http://localhost:8080/evento/update",
                {
                    
                    titulo: titulo,
                    data: data,
                    resumo: resumo,
                    descricacao: descricacao,
                    tag: tag,
                    img: img
                });
                alert("Notícia postada com sucesso!");
                // setCodigo("");
                setTitulo("");
                setData("");
                setResumo("");
                setDescricao("");
                setTag("");
                setImg("");
            }
            catch(err)
            {
                alert("Erro ao postar a notícia!");
            }
        }
        
    return (
        <div className="register-container">
    
            <form className="register-form" onSubmit={handleSubmit}>
                <br></br>      
                <h1>Criar Notícia</h1>
                <p>Preenche os campos</p>
    
                {/* <input type="text"
                name="codigo"
                placeholder="codigo"
                        
                onChange={(event) =>
                {
                    setCodigo(event.target.value);      
                }}
                /> */}
                
                <input type="text"
                name="titulo"
                placeholder="Título"
                onChange={(event) =>
                {
                    setTitulo(event.target.value);      
                }}
                />
                <input type="date"
                name="data"
                placeholder="Data"
                onChange={(event) =>
                {
                    setData(event.target.value);      
                }}
                />

                <input type="text"
                name="resumo"
                placeholder="Resumo"
                onChange={(event) =>
                    {
                        setResumo(event.target.value);      
                    }}          
                />

                <input type="text"
                name="descricao"
                placeholder="Descrição"
                onChange={(event) =>
                    {
                        setDescricao(event.target.value);      
                    }}          
                />


                <input type="text"
                name="tag"
                placeholder="Tag"
                onChange={(event) =>
                    {
                        setTag(event.target.value);      
                    }}          
                />
                <input type="text"
                name="img"
                placeholder="Carrega a imagemm"
                onChange={(event) =>
                    {
                        setImg(event.target.value);      
                    }}          
                />

                

                <button type="submit">Criar</button>


            </form>    


        </div>
    )
}

export default UEvento;