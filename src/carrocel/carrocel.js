import React from 'react'
import { Carousel, Image } from "react-bootstrap";
import "./carrocel.css"
import img1 from '../assets/Banner-Agro.jpg'
import img2 from '../assets/banner-pós laboral1.jpg'
import img3 from '../assets/Banner-covid.jpg'
import img4 from '../assets/Profas.jpg'
import img5 from '../assets/banner-preparatório2023.jpg'
import img6 from '../assets/banner-semana-das-profissões.jpg'


function Carrocel() {
    return (    
      <Carousel>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img2}
            alt="Five slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img1}
            alt="Five slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img5}
            alt="Five slide"
          />
        </Carousel.Item>
        
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
          <img
            className="d-block w-100"
            src={img2}
            alt="Second slide"
          />
        </Carousel.Item> */}

        {/* <Carousel.Item>
                  <a target="_blank" href="https://forms.gle/k65AYDEFXCpHEQzr6">
                    <img
                      className="d-block w-100"
                      src={img6}
                      alt="sixth slide"
                    />
                  </a>
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