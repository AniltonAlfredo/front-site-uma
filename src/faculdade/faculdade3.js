import  './faculdade.css'
import { Row, Container, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';




const Faculdade3 = () => {

    return (
        <Container fluid >
            <Container className='FaculdadeHeader'>
                <Row>
                    <Col md="12"><h1>Saúde e Bem-Estar</h1></Col>                     
                </Row>
            </Container>

            <Container>
                <Row>
                    <Col md="8">
                        <p className='pfacul'>
                        A Faculdade de Ciências da Saúde e Bem-Estar é uma unidade orgânica da 
                        Universidade Metodista vocacionada para a formação de profissionais altamente 
                        competentes e com sentido humanista, comprometidos em servir a sociedade angolana, 
                        dando o seu melhor pela saúde e o bem-estar das populações. Estamos constituída por 
                        sete cursos orientados aos estudos de Análises Clínicas e Saúde Pública, Enfermagem, 
                        Cardiopneumologia, Fisioterapia, Educação Física e Desporto, Psicologia e Biologia.
                        <br/><br/> A faculdade destaca por integrar as referidas áreas na prevenção de doenças e 
                        promoção de estilos de vida saudáveis através de projectos de investigação e extensão 
                        universitária reconhecidos pelo impacto social em várias comunidades vulneráveis da 
                        província de Luanda. <br/><br/> 
                        A nossa formação é distinguida também pela elevada qualidade profissional do corpo docente e o rigor na componente 
                        prática do ensino dentro e fora da Instituição, sustentado em protocolos de cooperação com importantes centros 
                        ligados aos cursos ministrados na faculdade. Contamos ainda com uma sólida infraestructura para o ensino com 
                        laboratórios de química, biologia, biologia molecular, anatomia, microbiologia, salas de enfermagem, 
                        fisioterapia e cardiopneumologia equipadas com tecnologia de alto nível que facilita uma formação 
                        de acordo aos mais exigentes padrões do ensino superior em áreas da saúde e o bem-estar. Os nossos 
                        graduados têm o reconhecimento de importantes entidades angolanas onde prestam serviço. 
                        </p>                
                    </Col>
                    <Col md="4">
                        <Card bg="light" text="dark" className="carde">
                            <Card.Header>
                                <Card.Title>Cursos</Card.Title>
                                <Card.Text className="TextoNoticia">
                                </Card.Text>
                            </Card.Header>
                            <Card.Body>
                                <Link to="/curso14"> <span className='spnFcl'>Análises Clínicas e Saúde Pública</span></Link>                            
                                <hr></hr>
                                <Link to="/curso17"> <span className='spnFcl'>Enfermagem</span></Link> 
                                <hr></hr>
                                <Link to="/curso16"><span className='spnFcl'>Cardiopneumologia</span></Link>                                
                                <hr></hr>
                                <Link to="/curso18"><span className='spnFcl'>Fisioterapia</span></Link>                                
                                <hr></hr>
                                <Link to="/curso13"><span className='spnFcl'>Ciências do Desporto e Educação Física</span></Link>
                                <hr></hr>
                                <Link to="/curso19"><span className='spnFcl'>Psicologia</span></Link>
                                <hr></hr>
                                <Link to="/curso15"><span className='spnFcl'>Biologia</span></Link>
                                
                                
                            </Card.Body>
                            
                        </Card>
                    </Col>
                </Row>
            </Container>
            
              
            
        </Container>         
    )
}

export default Faculdade3;