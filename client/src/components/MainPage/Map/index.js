import React from 'react';
import { styled } from '@mui/system';
import { Box } from '@mui/material';
import { MapContainer, TileLayer } from "react-leaflet";

// const StyledMap = styled(Box)({
// 	height: '100%',
// 	width: '100%',
// });

const defaultPosition = [31.9679, 34.8325]; 

export default () => {

	return (
		// <StyledMap>
		  <MapContainer
			center={defaultPosition}
			zoom={13}
			style={{ height: '100vh', width: '100wh' }}
		  >
			<TileLayer
			  attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
			  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
			/>
		  </MapContainer>
		// </StyledMap>
	  );
};
