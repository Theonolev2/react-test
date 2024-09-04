import React from 'react';
import {APIProvider, Map} from '@vis.gl/react-google-maps';

const GMap = () => {
  const GMapToken = process.env.REACT_APP_GMAP_TOKEN;
  return(
    <APIProvider apiKey={GMapToken}>
      <Map
        style={{width: '100vw', height: '100vh'}}
        defaultCenter={{lat: 22.54992, lng: 0}}
        defaultZoom={3}
        gestureHandling={'greedy'}
        disableDefaultUI={true}
      />
    </APIProvider>
  )
};

  export default GMap;
