import { MapContainer, TileLayer, Marker, Popup, Tooltip } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

import L from 'leaflet';

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

export const MapArea = ({ area }) => {
  const htmlMarkup = area.map((a) => (
    <Marker position={[a.coordinates[1], a.coordinates[0]]} key={a.areaId}>
      <Tooltip>
        <p>Area: {a.name} </p>
        <p>Number of users: {a.userCount} </p>
        <p>Male users: {a.male} </p>
        <p>Female users: {a.female} </p>
        <p>Number of Premium users: {a.premiumUsers} </p>
      </Tooltip>
    </Marker>
  ));

  return (
    <section className="maparea">
      <MapContainer
        center={[12.9727, 77.5921]}
        zoom={12}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {htmlMarkup}
      </MapContainer>
    </section>
  );
};
