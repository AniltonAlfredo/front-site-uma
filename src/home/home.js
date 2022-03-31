import React from "react";
import Carrocel from "../carrocel/carrocel";
import Novidades from "../novidade/novidade";
import BemVindo from "../welcome/BemVindo";
import Faculdades from "../faculdades/faculdades";
import Noticia from "../noticia/noticia";
import Evento from "../evento/evento";
import Estatistica from "../dadosEst/estatistica";
import Video from "../video/video";
import Links from "../linksExternos/links";
import Radio from "../radio/radio";
import Mapa from "../mapa/mapa";


function Home() {
  return (
    <>
        <Carrocel />
        <Novidades />
        <BemVindo/>
        <Faculdades/>
        <Noticia/>
        <hr></hr>
        <Evento/>
        <Estatistica/>
        <Radio/>
        <hr></hr>
        <Video/>
        <hr></hr>
        <Links/>
        {/* <Mapa/> */}
    </>
  );
}

export default Home;