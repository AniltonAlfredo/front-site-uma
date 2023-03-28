import React, { Component } from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import './mapa.css'


// const containerStyle = {
//     width: '400px',
//     height: '400px'
//   };
  
//   const center = {
//     lat: -3.745,
//     lng: -38.523
//   };

const Mapa = () => {
    
    return (
        // <LoadScript
        //   googleMapsApiKey="AIzaSyDNc9UnlLDFJB9fdRIdXMkhrmeGhUwbW-c"
        // >
        //   <GoogleMap
        //     mapContainerStyle={containerStyle}
        //     center={center}
        //     zoom={10}
        //   >
        //     { /* Child components, such as markers, info windows, etc. */ }
        //     <></>
        //   </GoogleMap>
        // </LoadScript>
        <>
        <div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d364.60598431980213!2d13.235803434908233!3d-
            8.814542729166632!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a51f24e990d76b5%3A0x2664e4edecd2d8a4!2sU
            niversidade%20Metodista%20de%20Angola!5e1!3m2!1spt-PT!2sao!4v1678712622277!5m2!1spt-PT!2sao" width="600" height="450" 
            style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </>
      )
      
}
export default Mapa;
// export default React.memo(Mapa);
