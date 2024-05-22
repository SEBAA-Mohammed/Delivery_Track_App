import { useRef } from "react";
import { MapContainer } from "react-leaflet";

import { MapDisplay } from "./MapDisplay";

import "leaflet/dist/leaflet.css";
import "leaflet-routing-machine";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";

export function AdminMap() {
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
    </MapContainer>
  );
}
