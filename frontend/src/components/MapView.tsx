import { MapContainer, TileLayer, CircleMarker, Tooltip } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import data from "../data/cities.json";

export default function MapView() {
  return (
    <MapContainer
      center={[20, 0]}
      zoom={2}
      className="h-[500px] w-full rounded-lg shadow"
    >
      <TileLayer
        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="© OpenStreetMap"
      />
      {data.map((d) => (
        <CircleMarker
          key={d.city}
          center={[d.lat, d.lon]}
          radius={6}
          pathOptions={{ fillColor: "#ef4444", color: "#b91c1c", fillOpacity: 0.8 }}
        >
          <Tooltip>
            {d.city}: {d.pm25} µg/m³
          </Tooltip>
        </CircleMarker>
      ))}
    </MapContainer>
  );
}
