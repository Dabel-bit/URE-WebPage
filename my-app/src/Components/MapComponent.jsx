import React, { useEffect, useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { MAPS_API_KEY } from './Secrets/MapsApi'

export const MapComponent = () => {
  // Aquí es donde defines las coordenadas de la ubicación
  const [location, setLocation] = useState({
    lat: -33.41786562863911,  // Latitud de ejemplo (Nueva York)
    lng: -70.60313994907325, // Longitud de ejemplo
  });

  const containerStyle = {
    width: '100%',
    height: '400px',
  };

  const center = {
    lat: location.lat,
    lng: location.lng,
  };

  return (
    <LoadScript googleMapsApiKey={ MAPS_API_KEY }>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={12}
      >
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
};
