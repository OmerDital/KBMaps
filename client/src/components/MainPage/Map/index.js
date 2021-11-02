import React, { useEffect, useState, useRef } from 'react';
import L from 'leaflet';
// eslint-disable-next-line object-curly-newline
import { TileLayer, MapContainer, LayersControl, Tooltip, Marker } from 'react-leaflet';
// eslint-disable-next-line import/no-unresolved
import { Button } from '@material-ui/core';

// eslint-disable-next-line import/no-extraneous-dependencies
import 'leaflet-routing-machine';
// eslint-disable-next-line import/no-extraneous-dependencies
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';
import { places } from './places';

// Base map tile:
const maps = {
  base: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
};

const Map = () => {
  // Save map instance to state here:
  const [map, setMap] = useState(null);
  // Save routing machine instance to state here:
  const [routingMachine, setRoutingMachine] = useState(null);

  // Start-End point for the routing machine
  const [start, setStart] = useState([]);
  const [end, setEnd] = useState([]);

  // Routing machine ref
  const RoutingMachineRef = useRef(null);

  // Create the routing-machine instance:
  useEffect(() => {
    if (!map) return;
    if (map) {
      RoutingMachineRef.current = L.Routing.control({
        position: 'topleft',
        lineOptions: {
          styles: [
            {
              color: '#757de8'
            }
          ]
        },
        waypoints: [start, end]
      });
      setRoutingMachine(RoutingMachineRef.current);
    }
  }, [map]);

  // Set waypoints when start and end points are updated:
  useEffect(() => {
    if (routingMachine) {
      routingMachine.addTo(map);
      routingMachine.setWaypoints([start, end]);
    }
  }, [routingMachine, start, end]);

  // Update start and end points on button click:
  const handleClick = () => {
    if (start[0] === places[0].latitude || start.length === 0) {
      setStart([places[1].latitude, places[1].longitude]);
      setEnd([places[2].latitude, places[2].longitude]);
    } else if (start[0] === places[1].latitude) {
      setStart([places[0].latitude, places[0].longitude]);
      setEnd([places[1].latitude, places[1].longitude]);
    }
  };

  const defaultPosition = [31.9679, 34.8325];

  return (
    <>
      <Button variant='contained' color='default' onClick={handleClick}>
        Click To Change Waypoints
      </Button>
      <MapContainer
        center={defaultPosition}
        zoom={13}
        style={{ height: '100%', width: '100%' }}
        // Set the map instance to state when ready:
        whenCreated={mapmap => setMap(mapmap)}>
        {places.map(place => (
          <Marker key={place.id} position={[place.latitude, place.longitude]}>
            <Tooltip>{place.name}</Tooltip>
          </Marker>
        ))}
        <LayersControl position='topright'>
          <LayersControl.BaseLayer checked name='Map'>
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url={maps.base}
            />
          </LayersControl.BaseLayer>
        </LayersControl>
      </MapContainer>
    </>
  );
};

export default Map;
