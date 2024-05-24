import { useRef } from "react";
import { MapContainer, Marker, Popup } from "react-leaflet";

import { MapDisplay } from "./MapDisplay";
import { Route } from "./Route";

import pharmacyIcon from "../../../public/pharmacyIcon.png";

import "leaflet/dist/leaflet.css";
import "leaflet-routing-machine";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";

export function CourierMap({ pharmacies }) {
  const mapRef = useRef(null);
  const CENTER = [34.00501829905671, -4.957129955291749];

  console.log(mapRef.current);
  return (
    <MapContainer
      center={CENTER}
      zoom={16}
      ref={mapRef}
      style={{ height: "600px", width: "100%" }}
    >
      <MapDisplay />
      <MapEvent />
      <Route />
      {pharmacies.map((pharmacy) => (
        <Marker
          key={pharmacy.id}
          position={[pharmacy.latitude, pharmacy.longitude]}
          icon={L.icon({ iconUrl: pharmacyIcon, iconSize: [50, 50] })}
        >
          <Popup>
            Name: {pharmacy.nom} <br />
            Location: {pharmacy.latitude}, {pharmacy.longitude}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}

function MapEvent() {
  // useMapEvent("click", (e) => {
  // console.log(e);
  // map.setView([50.5, 30.5], map.getZoom());
  // });
  return null;
}
