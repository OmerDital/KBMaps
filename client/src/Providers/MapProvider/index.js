import React, { createContext, useContext, useState } from 'react';

const MapContext = createContext();

export const MapProvider = props => {
  const { children } = props;
  const [start, setStart] = useState([]);
  const [end, setEnd] = useState([]);

  const createNewWay = (sourcePoint, destintionPoint) => {
    setStart(sourcePoint);
    setEnd(destintionPoint);
  };

  return (
    <MapContext.Provider value={{ start, end, createNewWay }} {...props}>
      <MapProvider>{children}</MapProvider>
    </MapContext.Provider>
  );
};

export const useMap = () => useContext(MapContext);
