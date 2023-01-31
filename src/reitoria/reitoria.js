import React from 'react'
import  './reitoria.css'
import ImgReitora from '../reitoria/ImagemDaReitora.jpg'
import ImgViceReitor1 from '../reitoria/Camada-1.png'
import ImgViceReitor2 from '../reitoria/Camada-2.png'
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
                        <Image src={ImgViceReitor2} thumbnail className="ImgStyle"/>
                    </Col>
                    <Col md="8">
                            <h3>REITOR</h3>
                            <br/>
                            <p>
                            Michel Oroceno Aragón, Reitor da Universidade Metodista de Angola, é nascido em de Santiago, República de Cuba. Graduado em Cultura Física e Desporto, pela Universidade de Ciências da Cultura Física e do Desporto; Tem Especialização em Língua Inglesa pelo Instituto Superior Pedagógico, ambos de Santiago de Cuba. 
                            É Doutor em Ciências Pedagógicas do programa de Gestão de Processos Universitários, da Universidade do Oriente. Já exerceu as funções de decano e chefe de departamento de Didática da Educação Física da Universidade de Ciências da Cultura Física e Desporto; Director do Centro de Estudos de Formação de Atletas e Treinadores Desportivos, em Cuba. 
                            Foi coordenador das disciplinas Metodologia da Investigação Científica, Metodologia de Ensino da Educação Física e Metodologia do Treino Desportivo na Universidade Ibero-americana do Desporto em Venezuela; Coordenador do Curso de Ensino da História na Universidade Lueji A´Nkonde, em Angola. Na Metodista, além de docente, foi Vice-reitor da área académica e vida estudantil (2022), decano da Faculdade da Saúde e Bem-Estar (2020-2021) e director do Curso de Ciências do Desporto e Educação Física (2017-2022); 
                            É autor de várias publicações científicas, com efectiva participação em congressos, conferências, simpósios e outros eventos científicos. Tem várias distinções e premiações, com destaque: Prémio Nacional do Ministério de Ciência e Tecnologia de Cuba (2005); Prémio da Reitoria do Instituto Superior de Cultura Física de Cuba, como Melhor Investigador em 2005.
                            </p>
                    </Col>
                </Row>
            </Container>
            <hr></hr>
            <Container className="PerfilReitoria">
                <Row>
                    <Col md="4">
                        <Image src={ImgViceReitor1} thumbnail/>
                    </Col>
                    <Col md="8">
                            <h3>VICE-REITOR</h3>
                            {/* <h5>ÁREA CIENTIFICA, PÓS-GRADUAÇÃO E EXTENSÃO</h5> */}
                            <br/>
                            <p>
                            Tiago Caungo Mutombo, Vice-Reitor da Universidade Metodista de Angola, é natural do município de Malanje–Bairro do Ritondo, província de Malanje. Graduado em Ciências da Educação com especialização em Ensino de História, pelo Instituto Superior de Ciências da Educação de Luanda, antiga unidade orgânica da Universidade Agostinho Neto. É Doutor em Ciências Históricas, pela Facultat de Ciencias Sociales da Universidad de Oriente da República de Cuba. Pós Doutorando em Didática do Ensino Superior pela mesma universidade. É também especialista em Metodologia de Investigação Histórica. 
                            É Membro da Associação Portuguesa dos Historiadores Económicos e Sociais (Portugal); Membro da equipe editorial da Revista electrónica Discente História, da Universidade Federal Recôncavo da Bahia, República Federativa do Brasil; Membro do Conselho Científico da Revista Angolana de Extensão Universitária, afecta a Escola Superior Pedagógica do Bengo, onde foi igualmente Coordenador do Projecto de Investigação Científica RESIOVA; Editor Chefe da Revista Kwijiya, afecto a Faculdade de Teologia da Universidade Metodista de Angola; 
                            Membro da Comissão Instaladora da Associação Angolana dos Historiadores; Professor convidado do Mestrado em Ensino de História de Angola do ISCED-LUANDA, entre outras actividades já exercidas no subsistema do ensino geral e universitário de Angola. Na Metodista, além de professor da graduação e pós-graduação, exerceu a função de Vice-Reitor para Área Científica, Pós-graduação e Extensão. 
                            É autor de várias publicações científicas na área de História e Ciências da Educação, com efectiva participação em congressos, conferências, simpósios e outros eventos científicos.


                            </p>
                    </Col>
                </Row>
            </Container>
            {/* <hr></hr> */}
            {/* <Container className="PerfilReitoria">
                <Row>
                    <Col md="4">
                        <Image src={ImgViceReitor1} thumbnail/>
                    </Col>
                    <Col md="8">
                            <h3>VICE-REITOR</h3>
                            <h5>ÁREA CIENTIFICA, PÓS-GRADUAÇÃO E EXTENSÃO</h5>
                            <br/>
                            <p>
                            Tiago Caungo Mutombo, Vice Reitor para Área Científica, Pós-graduação e Extensão da Universidade Metodista de Angola, é natural do município de Malanje–Bairro do Ritondo, província de Malanje. Graduado em Ciências da Educação com especialização em Ensino de História, pelo Instituto Superior de Ciências da Educação de Luanda, antiga unidade orgânica da Universidade Agostinho Neto. É Doutor em Ciências Históricas, pela Facultat de Ciencias  Sociales da Universidad de Oriente da República de Cuba. Pós Doutorando em Didática do Ensino Superior pela mesma universidade. É também especialista em Metodologia de Investigação Histórica.
É Membro da Associação Portuguesa dos Historiadores Económicos e Sociais (Portugal); Membro da equipe editorial da Revista electrónica Discente História, da Universidade Federal Recôncavo da Bahia, República Federativa do Brasil;  Membro do Conselho Científico da Revista Angolana de Extensão Universitária, afecta a Escola Superior Pedagógica do Bengo, onde foi igualmente Coordenador do Projecto de Investigação Científica RESIOVA; Editor Chefe da Revista Kwijiya, afecto a Faculdade de Teologia da Universidade Metodista de Angola; Membro da Comissão Instaladora da Associação Angolana dos Historiadores; Professor convidado do Mestrado em Ensino de História de Angola do ISCED-LUANDA, entre outras actividades já exercidas no subsistema do ensino geral e universitário do nosso país. 
É Professor da graduação e pós-graduação da Metodista. É autor de várias publicações científicas na área de História e Ciências da Educação, com efectiva participação em congressos, conferências, simpósios e outros eventos científicos.

                            </p>
                    </Col>
                </Row>
            </Container> */}

            
            

        </>   
    )
}

export default Reitoria;