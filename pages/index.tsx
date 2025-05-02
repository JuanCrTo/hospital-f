import React from 'react';
import GoogleMapComponent from '@/components/map';

const MapPage = () => {
  return (
    <div>
      <h1>Ubicación del Paciente</h1>
      <GoogleMapComponent />
    </div>
  );
};

export default MapPage;
