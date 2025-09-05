import React from "react";
import { MapContainer, TileLayer, Marker, Popup, Circle, Polygon } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix default icon issue in React-Leaflet
import iconUrl from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

const DefaultIcon = L.icon({
  iconUrl,
  shadowUrl: iconShadow,
});

L.Marker.prototype.options.icon = DefaultIcon;

export function Map() {
  return (
    <div className="page-container">
      <MapContainer center={[22.5490755, 88.3319375]} zoom={16} className="map-view">
        {/* Base map tiles */}
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* Marker */}
        <Marker position={[51.505, -0.09]}>
          <Popup>
            <b>Hello!</b> <br /> I am a React Leaflet marker.
          </Popup>
        </Marker>

        {/* Circle */}
        <Circle
          center={[22.5490755, 88.3319375]}
          radius={150}
          pathOptions={{ color: "red", fillColor: "#f03", fillOpacity: 1 }}
        >
          <Popup>I am a circle.</Popup>
        </Circle>

        {/* Polygon */}
        <Polygon
          positions={[
            [51.509, -0.08],
            [51.503, -0.06],
            [51.51, -0.047],
          ]}
        >
          <Popup>I am a polygon.</Popup>
        </Polygon>
      </MapContainer>
    </div>
  );
}
