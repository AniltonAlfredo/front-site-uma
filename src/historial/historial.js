import React from 'react'
import  './historial.css'
import ImgContinental from '../historial/continental.png'
import { Row, Container, Col, Image } from 'react-bootstrap'
const Historial = () => {
    return (
        <>
            
            <Container className="PerfilHistorial">
                <Row>
                    <Col md="8">
                    <h1>Universidade Metodista de Angola</h1>
                    <p>
                        A UNIVERSIDADE METODISTA DE ANGOLA, autorizada pelo Decreto 30/07, dá continuidade à acção educacional metodista no país, que remonta à data de 18 de março de 1885, com a chegada do bispo William Taylor e 45 mulheres e homens em missão, a erguerem escolas, hospitais e igrejas no serviço ao povo Kimbundu. Nos dois primeiros anos, estabeleceram as suas actividades para além de Luanda, ao longo do Rio Kwanza, em Nhangue-a-Pepe, Quiongua, Quéssua, Hombo-a-Njinji, Mufuque e Mucondo. Essas missões tinham como princípio o autossustento, que definiu a identidade metodista em Angola.
                        <br />Um dos principais efeitos da missão foi o despertamento e a capacitação de líderes autóctones, como Florinda Bessa, João Gaspar Fernandes, Mateus Pereira Inglês, João Leão Webba, Maria Chaves e Adão Gaspar Domingos, que serviram à Igreja e à sociedade, impulsionados pela mensagem da libertação dos oprimidos, proclamada pelo próprio Jesus, nos Evangelhos.
                        <br />Desde então, a atuação do povo metodista angolano, cada vez mais consciente da espoliação e da humilhação vividas sob o governo colonial, evoluiu para o compromisso com a independência e a soberania do País. Esse compromisso se expressou na formação de líderes autóctones para a sociedade por meio da educação, no incentivo da emancipação das mulheres, na proteção das crianças e dos adolescentes, no desenvolvimento de oportunidades para a juventude, na afirmação da dignidade dos idosos, em conformidade com os Princípios Sociais expressos no Livro de Disciplina da Igreja Metodista Unida.
                        <br />A UNIVERSIDADE METODISTA DE ANGOLA resulta, portanto, de mais de um século de firme acção metodista na educação básica em todo o território nacional. Foi criada no episcopado do bispo Gaspar João Domingos, no ano de 2007, no esforço da reconstrução nacional que resultou do Acordo de Paz e Reconciliação. A Universidade integra uma rede global de mais de 1000 universidades e escolas em todos os continentes, afiliadas à International Association of Methodist Schools, Colleges and Universities (IAMSCU). Sustenta-se nos compromissos do movimento metodista com a educação de acesso universal, para a promoção humana, para o diálogo entre a fé e a ciência, para a liberdade de pensamento e expressão. São preceitos firmados desde a criação da Kingswood School pelo reverendo John Wesley, na Inglaterra, em 1748, durante a Revolução Industrial.

                    </p>
                    </Col>
                    <Col md="4">
                        <Image src={ImgContinental} fluid className="ImgStyle"/>
                    </Col>
                </Row>
            </Container>
            {/* <div class="container">
            <div class="row">
                <div class="col-md-7">
                    <h2>Universidade Metodista de Angola</h2>
                    <p style="text-align:justify">
                        A UNIVERSIDADE METODISTA DE ANGOLA, autorizada pelo Decreto 30/07, dá continuidade à acção educacional metodista no país, que remonta à data de 18 de março de 1885, com a chegada do bispo William Taylor e 45 mulheres e homens em missão, a erguerem escolas, hospitais e igrejas no serviço ao povo Kimbundu. Nos dois primeiros anos, estabeleceram as suas actividades para além de Luanda, ao longo do Rio Kwanza, em Nhangue-a-Pepe, Quiongua, Quéssua, Hombo-a-Njinji, Mufuque e Mucondo. Essas missões tinham como princípio o autossustento, que definiu a identidade metodista em Angola.
                        <br />Um dos principais efeitos da missão foi o despertamento e a capacitação de líderes autóctones, como Florinda Bessa, João Gaspar Fernandes, Mateus Pereira Inglês, João Leão Webba, Maria Chaves e Adão Gaspar Domingos, que serviram à Igreja e à sociedade, impulsionados pela mensagem da libertação dos oprimidos, proclamada pelo próprio Jesus, nos Evangelhos.
                        <br />Desde então, a atuação do povo metodista angolano, cada vez mais consciente da espoliação e da humilhação vividas sob o governo colonial, evoluiu para o compromisso com a independência e a soberania do País. Esse compromisso se expressou na formação de líderes autóctones para a sociedade por meio da educação, no incentivo da emancipação das mulheres, na proteção das crianças e dos adolescentes, no desenvolvimento de oportunidades para a juventude, na afirmação da dignidade dos idosos, em conformidade com os Princípios Sociais expressos no Livro de Disciplina da Igreja Metodista Unida.
                        <br />A UNIVERSIDADE METODISTA DE ANGOLA resulta, portanto, de mais de um século de firme acção metodista na educação básica em todo o território nacional. Foi criada no episcopado do bispo Gaspar João Domingos, no ano de 2007, no esforço da reconstrução nacional que resultou do Acordo de Paz e Reconciliação. A Universidade integra uma rede global de mais de 800 universidades e escolas em todos os continentes, afiliadas à International Association of Methodist Schools, Colleges and Universities (IAMSCU). Sustenta-se nos compromissos do movimento metodista com a educação de acesso universal, para a promoção humana, para o diálogo entre a fé e a ciência, para a liberdade de pensamento e expressão. São preceitos firmados desde a criação da Kingswood School pelo reverendo John Wesley, na Inglaterra, em 1748, durante a Revolução Industrial.

                    </p>
                </div>
                <div class="col-md-5">
                    <img src="~/images/hiatorial.gif" />
                </div>
            </div>
        </div> */}

        </>   
    )
}

export default Historial;