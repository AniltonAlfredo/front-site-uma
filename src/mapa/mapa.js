import React, { Component } from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import './mapa.css'


const containerStyle = {
    width: '400px',
    height: '400px'
  };
  
  const center = {
    lat: -3.745,
    lng: -38.523
  };

const Mapa = () => {
    
    return (
        <LoadScript
          googleMapsApiKey="AIzaSyDNc9UnlLDFJB9fdRIdXMkhrmeGhUwbW-c"
        >
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={10}
          >
            { /* Child components, such as markers, info windows, etc. */ }
            <></>
          </GoogleMap>
        </LoadScript>
      )
      
}

export default React.memo(Mapa);
