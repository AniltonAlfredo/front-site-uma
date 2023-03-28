import axios from "axios";
import { useState } from "react";

function UNews(news, onUpdated)
   {
        // const [codigo, setCodigo] = useState("");
        const [titulo, setTitulo] = useState(news.titulo);
        const [resumo, setResumo] = useState(news.resumo);
        const [descricao, setDescricao] = useState(news.descricao);
        const [tag, setTag] = useState(news.tag);
        const [img, setImg] = useState(news.img);
        const [data, setData] = useState(news.data);
        const [destaque, setDestaque] = useState(news.destaque);

 
        const handleSubmit = async (e) =>
        {
            e.preventDefault();
            const updatedNews = {
                codigo: news.codigo,
                titulo: titulo,
                data: data,
                resumo: resumo,
                descricao: descricao,
                destaque: destaque,
                tag: tag,
                img: img,
              };
              try {
                const response = await axios.put(
                  `http://localhost:8080/noticia/${news.codigo}`,
                  updatedNews
                );
                console.log(response);
                onUpdated(response.data);
              } catch (error) {
                console.log(error);
              }
        }
        
        return (
            <form onSubmit={handleSubmit}>
              <label>
                Título:
                <input type="text" value={titulo} onChange={(e) => setTitulo(e.target.value)} />
              </label>
              <br />
              <label>
                Resumo:
                <input type="text" value={resumo} onChange={(e) => setResumo(e.target.value)} />
              </label>
              <br />
              <label>
                Descrição:
                <textarea value={descricao} onChange={(e) => setDescricao(e.target.value)} />
              </label>
              <br />
              <label>
                Destaque:
                <select value={destaque} onChange={(e) => setDestaque(e.target.value)}>
                  <option value="true">Sim</option>
                  <option value="false">Não</option>
                </select>
              </label>
              <br />
              <label>
                Tag:
                <input type="text" value={tag} onChange={(e) => setTag(e.target.value)} />
              </label>
              <br />
              <label>
                Imagem:
                <input type="file" onChange={(e) => setImg(e.target.files[0])} />
              </label>
              <br />
              <button type="submit">Atualizar Notícia</button>
            </form>
          );
}

export default UNews;