import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './navbar/navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Direitos from './direitos/direitos';
import Home from './home/home';
import Rodape from './rodape/rodape';
import Reitoria from './reitoria/reitoria';
import Curso from './curso/curso';
import Historial from './historial/historial';
import Faculdade1 from './faculdade/faculdade1';
import Faculdade2 from './faculdade/faculdade2';
import Faculdade3 from './faculdade/faculdade3';
import Faculdade4 from './faculdade/faculdade4';
import Curso1 from './curso/curso1';
import Curso2 from './curso/curso2';
import Curso3 from './curso/curso3';
import Curso4 from './curso/curso4';
import Curso5 from './curso/curso5';
import Curso6 from './curso/curso6';
import Curso7 from './curso/curso7';
import Curso8 from './curso/curso8';
import Curso9 from './curso/curso9';
import Curso10 from './curso/curso10';
import Curso11 from './curso/curso11';
import Curso12 from './curso/curso12';
import Curso13 from './curso/curso13';
import Curso14 from './curso/curso14';
import Curso15 from './curso/curso15';
import Curso16 from './curso/curso16';
import Curso17 from './curso/curso17';
import Curso18 from './curso/curso18';
import Curso19 from './curso/curso19';
import Curso20 from './curso/curso20';
import Curso21 from './curso/curso21';
import Curso22 from './curso/curso22';
import NoticiaPage from './noticia/noticiaPage';
import NoticiaDescricao from './noticia/noticiaDescricao';
import FaculdadeDescricao from './faculdade/faculdadeDescricao';
import EventoDescricao from './evento/eventoDescricao';
import PosGraduacao from './posGraduacao/posgraduacao';
import PosLaboral from './posLaboral/poslaboral';


function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/reitoria" element={<Reitoria/>} />
          <Route path="/historial" element={<Historial/>} />
          <Route path="/curso/:codigo" element={<Curso/>} />
          <Route path="/curso1" element={<Curso1/>} />
          <Route path="/curso2" element={<Curso2/>} />
          <Route path="/curso3" element={<Curso3/>} />
          <Route path="/curso4" element={<Curso4/>} />
          <Route path="/curso5" element={<Curso5/>} />
          <Route path="/curso6" element={<Curso6/>} />
          <Route path="/curso7" element={<Curso7/>} />
          <Route path="/curso8" element={<Curso8/>} />
          <Route path="/curso9" element={<Curso9/>} />
          <Route path="/curso10" element={<Curso10/>} />
          <Route path="/curso11" element={<Curso11/>} />
          <Route path="/curso12" element={<Curso12/>} />
          <Route path="/curso13" element={<Curso13/>} />
          <Route path="/curso14" element={<Curso14/>} />
          <Route path="/curso15" element={<Curso15/>} />
          <Route path="/curso16" element={<Curso16/>} />
          <Route path="/curso17" element={<Curso17/>} />
          <Route path="/curso18" element={<Curso18/>} />
          <Route path="/curso19" element={<Curso19/>} />
          <Route path="/curso20" element={<Curso20/>} />
          <Route path="/curso21" element={<Curso21/>} />
          <Route path="/curso22" element={<Curso22/>} />
          <Route path="/Noticia" element={<NoticiaPage/>} />
          <Route path="/Noticia/:codigo" element={<NoticiaDescricao/>} />
          <Route path="/Evento/:codigo" element={<EventoDescricao/>} />
          <Route path="/faculdade/:codigo" element={<FaculdadeDescricao/>} />
          <Route path="/faculdade1" element={<Faculdade1/>} />
          <Route path="/faculdade2" element={<Faculdade2/>} />
          <Route path="/faculdade3" element={<Faculdade3/>} />
          <Route path="/faculdade4" element={<Faculdade4/>} />
          <Route path="/posgraduacao" element={<PosGraduacao/>} />
          <Route path="/poslaboral" element={<PosLaboral/>} />
        </Routes>
        <Rodape/>
        <Direitos/>
      </BrowserRouter>
    </div>
  );
}

export default App;
