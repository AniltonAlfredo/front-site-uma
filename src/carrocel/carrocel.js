import React from 'react'
import { Link } from "react-router-dom";
import { Carousel, Image } from "react-bootstrap";
import "./carrocel.css"
import img1 from '../assets/Natal-2022.jpg'
import img2 from '../assets/banner-pós laboral_.jpg'
import img3 from '../assets/banner--regresso-a-aulas1.jpg'
import img4 from '../assets/Profas.jpg'
import img5 from '../assets/banner-curso-exame-de-acesso.jpg'
import img6 from '../assets/banner-ouvidoria.jpg'


function Carrocel() {
    return (    
      <Carousel>

      <Carousel.Item>
            <img
              className="d-block w-100"
              src={img3}
              alt="Five slide"
            />
        </Carousel.Item>

        <Carousel.Item>
            <Link className="LinkStyle" to="/ouvidoria">
                    <img
                      className="d-block w-100"
                      src={img6}
                      alt="sixth slide"
                    />
            </Link>     
        </Carousel.Item>

        {/* <Carousel.Item>
          <a target="_blank" href="https://mutue.ao/register">
            <img
              className="d-block w-100"
              src={img5}
              alt="Five slide"
            />
          </a>
        </Carousel.Item> */}

        


        {/* <Carousel.Item>
          <Link className="LinkStyle" to="/poslaboral">
            <img
              className="d-block w-100"
              src={img2}
              alt="Five slide"
            />
          </Link>
        </Carousel.Item> */}

        {/* <Carousel.Item>
          <Link className="LinkStyle" to="/curso22">
            <img
              className="d-block w-100"
              src={img1}
              alt="Five slide"
            />
          </Link>
        </Carousel.Item> */}

        

        
        
        <Carousel.Item>
          <a target="_blank" href="https://mutue.ao/candidatura_docente/inicial">
              <img
                className="d-block w-100"
                src={img4}
                alt="First slide"
            />
          </a>
        </Carousel.Item>

        {/* <Carousel.Item>
          <a target="_blank" href="https://mutue.ao/candidatura_docente/inicial">
            <img
              className="d-block w-100"
              src={img1}
              alt="First slide"
            />
          </a>
        </Carousel.Item> */}

        {/* <Carousel.Item>
          <img
            className="d-block w-100"
            src={img2}
            alt="Second slide"
          />
        </Carousel.Item> */}

        

        
        

        {/* <Carousel.Item>
          <img
            className="d-block w-100"
            src={img5}
            alt="Five slide"
          />
        </Carousel.Item> */}

        {/* <Carousel.Item>
          <img
            className="d-block w-100"
            src={img1}
            alt="Fourth slide"
          />
          <Carousel.Caption>
            <h3>Primeiro Slide</h3>
            <p>Universidade Metodista de Angola</p>
          </Carousel.Caption>
        </Carousel.Item> */}

        

        {/* <Carousel.Item>
          <img
            className="d-block w-100"
            src={img3}
            alt="Third slide"
          />

        </Carousel.Item> */}

      </Carousel> 
    );
  }
  
  export default Carrocel;