import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';

const defaultPosition = [31.9679, 34.8325];

export default () => (
  <MapContainer center={defaultPosition} zoom={13} style={{ height: '100%', width: '100%' }}>
    <TileLayer
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
    />
  </MapContainer>
);
