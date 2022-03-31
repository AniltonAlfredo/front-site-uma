import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../logo.png'
import './NavBar.css'

function NavMenu() {
    return (

        <header className='header'>

            <nav className='nav_bar'>
                <Link to='/'> <img src={logo} style={{
                    width: '150px',
                    height: '150px'
                }} end /> </Link>
                <ul>
                    <li>
                        <Link to='/sobre'>Sobre Nós</Link>
                    </li>

                    <li>
                        <Link to='/Cursos'>Cursos</Link>
                    </li>
                    <li>
                        <Link to='/Noticia'>Notícias</Link>
                    </li>
                    <li>
                        <Link to='/Pastoral'>Pastoral</Link>
                    </li>
                    <li>
                        <Link to='/Estudante'>Etudante</Link>
                    </li>

                </ul>
            </nav>

        </header>
    );
}

export default NavMenu;
