import React from 'react'
import  './reitoria.css'
import ImgReitora from '../reitoria/ImagemDaReitora.jpg'
import ImgViceReitor from '../reitoria/vice-reitor-2021.jpg'
import { Row, Container, Col, Image } from 'react-bootstrap'
const Reitoria = () => {
    return (
        <>
            <Container fluid>
                <Container>
                <Row>
                    <Col md="12">                 
                    </Col>                    
                </Row>
                </Container>
                
            </Container>

            <Container className="PerfilReitoria">
                <Row>
                    <Col md="4">
                        <Image src={ImgReitora} thumbnail className="ImgStyle"/>
                    </Col>
                    <Col md="8">
                            <h2>Reitora</h2>
                            <p>
                                Martha Nyanungo Sambanje, reitora da Universidade Metodista de Angola, no mandato de 2019 a 2022, é nascida em Mutare, no Zimbábue. Cursou a licenciatura em Ciências da Educação com especialização em Ciências Biológicas, em Cuba; alcançou o grau de Mestre em Ciências Biológicas, Humana e Molecular, na Alemanha; obteve o grau de doutoramento em Ciências da Educação, em Portugal.
                                Em 2007, deixou a carreira académica como professora universitária no Zimbábue e dedica-se, desde então, à Universidade Metodista de Angola, onde, além de ministrar disciplinas de Biologia Celular e Molecular, Genética e Anatomia, foi decana da Faculdade de Ciências da Saúde e do Desporto.
                                É autora de várias publicações científicas na área da Biologia, com efectiva participação em congressos, conferências, simpósios e outros eventos científicos.É também especializada em auditoria e gestão de laboratórios.Como investigadora científica, a reitora é membro do International Scientific Medical Journal.
                            </p>
                    </Col>
                </Row>
            </Container>
            {/* <hr></hr>
            <Container className="PerfilReitoria">
                <Row>
                    <Col md="4">
                        <Image src={ImgViceReitor} thumbnail/>
                    </Col>
                    <Col md="8">
                            <h2>Vice-Reitor</h2>
                            <p>
                                Luciano Júlio Chingui, vice-reitor da Universidade Metodista de Angola, natural do Huambo, 
                                Angola. Possui graduação e Mestrado em Fisioterapia pela Universidade Metodista de Piracicaba, 
                                Doutorado em Fisioterapia pela Universidade Federal de São Carlos, ambos no Brasil. Naquele país, 
                                foi docente e pesquisador nos cursos de graduação e de especialização e coordenou o Programa Regional 
                                de Iniciação Científica das Faculdades Anhanguera.

                                No seu percurso na Metodista de Angola, além de docente/pesquisador nos 
                                cursos de graduação e pós-graduação, foi director do Centro de Estudos e 
                                Investigação Científica –CEIC e vice-reitor para área científica (2015 a 2017). 
                                Tem produção científica sustentada em publicação de artigos, participação em congressos e prémios 
                                nacionais e internacionais. Actualmente, o vice-reitor é também coordenador do grupo de pesquisa Eletro-Termo-Fototerapia e 
                                Plasticidade Neuromuscular da Metodista de Angola.
                            </p>
                    </Col>
                </Row>
            </Container> */}

            
            




                {/* <div class="row">
                    <div class="col-md-4">
                        <div class="teachers-img_block">
                            <img src="~/images/blog/Vice-Reitor.jpg" class="img-fluid" alt="#"></>
                        </div>
                    </div>
                    <div class="col-md-8">
                        <div class="row">
                            <div class="col-md-12" style="Margin-top:10%">
                                <div class="teacher-profile_block qualification_detaile">
                                    <h4>Vice-reitor</h4>
                                    <p style="text-align:justify">
                                        João Manuel da Costa Canoquena, vice-reitor da Universidade Metodista de Angola.Natural de Luanda, Angola, onde foi professor de 1986 a 1991, imigrou para Austrália, em 1992, onde concluiu o Bacharelato e deu continuidade aos estudos.Doutor/PhD em Filosofia, Mestre em Educação, Mestre em Administração de Empresas, Bacharel em Educação, está em fase de conclusão do Pós-Doutoramento em Economia Financeira.Desde o ano de 2002 a 2018, exerceu activamente a área de Gestão Educacional, tendo já sido Director e Administrador em várias Escolas, todas na Austrália.É também Revisor de periódicos acadêmicos, Professor Universitário (Austrália), Escritor de romance histórico, autor de vários Artigos e Relatórios Científicos e Revisor de Revistas Cientificas.Tem três livros publicados, todos em língua inglesa.
                                    </p>

                                </div>
                            </div>
                        </div>

                    </div>
                </div> */}

        </>   
    )
}

export default Reitoria;