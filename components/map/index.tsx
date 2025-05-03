import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import React from "react";
import { IPatient } from "@/interfaces/Patient.interface";

const containerStyle = {
  width: "100%",
  height: "950px",
};

const center = {
  lat: 6.2442,
  lng: -75.5812,
};

interface Props {
  patients: IPatient[];
}

const GoogleMapComponent: React.FC<Props> = ({ patients }) => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!,
  });

  if (!isLoaded) return <p>Cargando mapa...</p>;

  return (
    <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={13}>
      {patients.map((p) =>
        p.latitude && p.longitude ? (
          <Marker
            key={p._id}
            position={{ lat: p.latitude, lng: p.longitude }}
            title={`${p.firstname} ${p.lastname}`}
          />
        ) : null
      )}
    </GoogleMap>
  );
};

export default GoogleMapComponent;
