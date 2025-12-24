import * as React from 'react';
import Map from 'react-map-gl/mapbox';
// If using with mapbox-gl v1:
// import Map from 'react-map-gl/mapbox-legacy';
import 'mapbox-gl/dist/mapbox-gl.css';
import { MAPBOX_KEY } from '@/config';

/**
 * @author xu.pengfei
 * @date 2025-12-24 10:52:29
 */
export default function MapBoxDemo01() {
  return (
    <Map
      mapboxAccessToken={MAPBOX_KEY}
      initialViewState={{
        longitude: -122.4,
        latitude: 37.8,
        zoom: 14,
      }}
      style={{ width: 600, height: 400 }}
      mapStyle="mapbox://styles/mapbox/streets-v9"
    />
  );
}
