import React from 'react';
// eslint-disable-next-line object-curly-newline
import { MapContainer, Marker, TileLayer, Tooltip } from 'react-leaflet';
import { places } from './places';

const defaultPosition = [31.9679, 34.8325];

export default () => (
  <MapContainer center={defaultPosition} zoom={13} style={{ height: '100%', width: '100%' }}>
    {places.map(place => (
      <Marker key={place.id} position={[place.longitude, place.latitude]}>
        <Tooltip>{place.name}</Tooltip>
      </Marker>
    ))}
    <TileLayer
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
    />
  </MapContainer>
);
