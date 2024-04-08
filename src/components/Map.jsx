import { useState, useCallback, memo, Suspense, useEffect } from 'react';
import { GoogleMap, Polyline, useJsApiLoader } from '@react-google-maps/api';
import bus from '../api/bus';
import { useLoaderData } from 'react-router-dom';

const containerStyle = {
  width: '100%',
  height: '100%'
};

const center = {
  lat: -34.90879787382327,
  lng: -56.15940163848704
};

const Map = memo(function Map(){

  const { data } = useLoaderData()
  const [map, setMap] = useState(null);

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_API_KEY
  });
  
  const onLoad = useCallback(function callback(map) {
    setMap(map);
  }, []);

  const onUnmount = useCallback(function callback(map) {
    setMap(null);
  }, []);
  
  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={13}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        <Polyline
          path={data ? data.shape : []}
        />
      </GoogleMap>
    ) : <></>;
});

export default Map;

export const loader = async({ params }) => {
  let result = await bus.get(`/${params.route_id}/shape`)
  return result
} 