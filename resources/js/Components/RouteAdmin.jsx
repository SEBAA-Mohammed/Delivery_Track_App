import { useEffect } from "react";
import { useMap } from "react-leaflet";

import L from "leaflet";
import "leaflet-routing-machine";

L.Icon.Default.imagePath = "https://unpkg.com/leaflet@1.9.4/dist/images/";

export const RouteAdmin = ({ pharmacy, voyage }) => {
  const map = useMap();

  const repository = [34.00501829905671, -4.957129955291749];

  useEffect(() => {
    if (!pharmacy) return;

    const routingControl = L.Routing.control({
      waypoints: [repository, pharmacy],
      lineOptions: {
        styles: [{ color: voyage ? "red" : "blue", opacity: 0.6, weight: 3 }],
      },
      addWaypoints: false,
      draggableWaypoints: false,
    }).addTo(map);

    map.fitBounds([repository, pharmacy]);

    return () => {
      map.removeControl(routingControl);
    };
  }, [map, pharmacy, voyage]);

  return null;
};
