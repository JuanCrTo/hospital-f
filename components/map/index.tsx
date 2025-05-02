// components/GoogleMap.tsx
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import React from 'react';

const containerStyle = {
  width: '100%',
  height: '400px',
};

const center = {
  lat: 6.2442,  // Medellín (ejemplo)
  lng: -75.5812,
};

const GoogleMapComponent: React.FC = () => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!,
  });

  if (!isLoaded) return <p>Cargando mapa...</p>;

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={13}
    />
  );
};

export default GoogleMapComponent;
