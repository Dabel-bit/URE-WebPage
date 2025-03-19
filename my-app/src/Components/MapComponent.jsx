import React, { useEffect, useState } from 'react';
import { GoogleMap, Marker } from '@react-google-maps/api';

export const MapComponent = () => {
  
  return (
    <div style={{ width: '100%', height: '450px' }}>
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3330.201486653369!2d-70.6031775!3d-33.417991!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662cfd4e06ebfd3%3A0x4bc02c134ff7c206!2sCentro%20Psicol%C3%B3gico%20Un%20Rinc%C3%B3n%20Del%20Encuentro!5e0!3m2!1ses-419!2scl!4v1742389957727!5m2!1ses-419!2scl"
      width="100%"
      height="100%"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>

  );
};
