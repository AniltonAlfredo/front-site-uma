import React from "react";
import { Container, Navbar, Nav, NavDropdown, Image, Row } from "react-bootstrap";
import "./navbar.css"
import { Link } from "react-router-dom";

import LogoHorizontal from '../assets/lgH3c.png'

function NavBar() {
  return (   
    <>

     <Navbar bg="light" expand="lg" className="NBSTL" >
      <Container>
        <Link to="/"><Image src={LogoHorizontal} fluid height="140px" width="140px"/></Link>
        <Row className="Navbarstyle">
          <Navbar.Collapse >
             <Nav className="me-auto ">
              <NavDropdown title="Sobre nós" id="basic-nav-dropdown" >
                <NavDropdown.Item className="ItemStyle">
                  <Link className="LinkStyle" to="/historial">Historial</Link>
                </NavDropdown.Item>
                <NavDropdown.Item className="ItemStyle">
                  <Link className="LinkStyle" to="/reitoria">Reitoria</Link>
                </NavDropdown.Item>
                
                <NavDropdown.Item className="ItemStyle">
                  <Link className="LinkStyle" to="/">Biblioteca</Link>
                </NavDropdown.Item>

                {/* <NavDropdown.Item href="#action/3.2">English</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
              </NavDropdown>

              <NavDropdown title="Cursos" id="basic-nav-dropdown">
                  <NavDropdown.Item className="ItemStyle">
                    {/* <Link className="LinkStyle" to="/historial">Licenciatura</Link> */}
                    <li className="dropdown"><Link className="LinkStyle" to="/">Licenciatura</Link>
                            <ul>
                              <li><Link className="LinkStyle" to="/faculdade1">Faculdade de Engenharia e Arquitectura</Link></li>
                              <li><Link className="LinkStyle" to="/faculdade3">Faculdade de Saúde e Bem-Estar</Link></li>
                              <li><Link className="LinkStyle" to="/faculdade2">Faculdade de Ciências Jurídicas e Sociais</Link></li>
                              <li><Link className="LinkStyle" to="/faculdade4">Faculdade de Teologia</Link></li>
                            </ul>
                    </li>
                  </NavDropdown.Item>
                  <NavDropdown.Item className="ItemStyle">
                    <Link className="LinkStyle" to="/posgraduacao">Pós-Graduação</Link>
                  </NavDropdown.Item>
                
              </NavDropdown>
              
              <Nav.Link >Pastoral</Nav.Link>

              <NavDropdown title="Estudante" id="basic-nav-dropdown">
                <NavDropdown.Item target="_blank" href="https://mutue.ao/login"  className="LinkStyle">Mutue</NavDropdown.Item>
                <NavDropdown.Item target="_blank" href="https://mutue.ao/register"  className="LinkStyle">Inscrição</NavDropdown.Item>
                {/* <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
              </NavDropdown>
              
              <NavDropdown title="Administrativo" id="basic-nav-dropdown">
                <NavDropdown.Item target="_blank" href="http://mutue.co.ao/mutue/faces/login.xhtml"  className="LinkStyle">
                  Gestão Académica
                  </NavDropdown.Item>

                <NavDropdown.Item target="_blank" href="http://gestaodepessoas.mutue.ao/"  className="gf">Gestão de Pessoas</NavDropdown.Item>
                {/* <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
              </NavDropdown>
            </Nav>
          


              </Navbar.Collapse>
        </Row>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
      </Container>
    </Navbar>


    {/* <nav id="navbar" className="navbar">
      <Link to="/"><Image src={LogoHorizontal} fluid height="140px" width="140px"/></Link>
                <ul>
                  <li className="dropdown"><a href="#"><span>SOBRE NÓS</span> <i className="bi bi-chevron-down"></i></a>
                      <ul>
                        <li><Link to="/reitoria">Reitoria</Link></li>
                        <li><Link to="/historial">Historial</Link></li>
                        <li><Link to="/">Biblioteca</Link></li>                          
                      </ul>
                    </li>
                  <li className="dropdown"><a href="#"><span>CURSOS</span> <i className="bi bi-chevron-down"></i></a>
                    <ul>
                      <li className="dropdown"><a href="#"><span>Licenciatura</span> <i className="bi bi-chevron-right"></i></a>
                        <ul>
                          <li className="dropdown"><a href="#"><span>Faculdade de Engenharia e Arquitectura</span> <i className="bi bi-chevron-right"></i></a>
                            <ul>
                              <li><a href="#">Curso 1</a></li>
                              <li><a href="#">Curso 2</a></li>
                              <li><a href="#">Curso 3</a></li>
                              <li><a href="#">Curso 4</a></li>
                            </ul>
                          </li>
                          <li className="dropdown"><a href="#"><span>Faculdade de Ciências Jurídcas e Sociais</span> <i className="bi bi-chevron-right"></i></a>
                            <ul>
                              <li><a href="#">Curso 1</a></li>
                              <li><a href="#">Curso 2</a></li>
                              <li><a href="#">Curso 3</a></li>
                              <li><a href="#">Curso 4</a></li>
                            </ul>
                          </li>
                          <li className="dropdown"><a href="#"><span>Faculdade de Saúde e Bem-Estar</span> <i className="bi bi-chevron-right"></i></a>
                            <ul>
                              <li><a href="#">Curso 1</a></li>
                              <li><a href="#">Curso 2</a></li>
                              <li><a href="#">Curso 3</a></li>
                              <li><a href="#">Curso 4</a></li>
                            </ul>
                          </li>
                          <li className="dropdown"><a href="#"><span>Faculdade de Teologia</span> <i className="bi bi-chevron-right"></i></a>
                            <ul>
                              <li><a href="#">Curso 1</a></li>
                              <li><a href="#">Curso 2</a></li>
                              <li><a href="#">Curso 3</a></li>
                              <li><a href="#">Curso 4</a></li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li><a href="#">Pós-Graduação</a></li>
                    </ul>
                  </li>
                  <li><a className="nav-link scrollto" href="#about">PASTORAL</a></li>
                  <li className="dropdown"><a href="#"><span>ESTUDANTE</span> <i className="bi bi-chevron-down"></i></a>
                    <ul>
                      <li><a target="_blank" href="https://mutue.ao/login">Mutue</a></li>
                      <li><a target="_blank" href="https://mutue.ao/register">Inscrição</a></li>
                    </ul>
                  </li>
                </ul>
                {/* <i className="bi bi-list mobile-nav-toggle"></i> 
              </nav> */}

    </>
  );
}

export default NavBar;
