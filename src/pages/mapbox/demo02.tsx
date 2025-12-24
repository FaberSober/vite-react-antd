import * as React from 'react';
import Map, { Source, Layer } from 'react-map-gl/mapbox';
// If using with mapbox-gl v1:
// import Map from 'react-map-gl/mapbox-legacy';
import 'mapbox-gl/dist/mapbox-gl.css';
import { MAPBOX_KEY } from '@/config';
import { RDBSource } from 'district-data';
import { useEffect, useState } from 'react';

/**
 * @author xu.pengfei
 * @date 2025-12-24 10:52:29
 */
export default function MapBoxDemo02() {
  const [countryData, setCountryData] = useState<any>(null);
  const [provinceData, setProvinceData] = useState<any>(null);

  useEffect(() => {
    const source = new RDBSource({});
    source.getData({ level: 'country' }).then((data) => {
      console.log('country data', data);
      setCountryData(data);
    });
    source.getData({ level: 'province' }).then((data) => {
      console.log('province data', data);
      setProvinceData(data);
    });
  }, []);

  return (
    <Map
      mapboxAccessToken={MAPBOX_KEY}
      initialViewState={{
        longitude: 104,
        latitude: 35,
        zoom: 3,
      }}
      style={{ width: 1000, height: 600 }}
      mapStyle="mapbox://styles/mapbox/dark-v11"
    >
      {countryData && (
        <>
          <Source id="country-source" type="geojson" data={countryData}>
            <Layer
              id="country-fill"
              type="fill"
              paint={{
                'fill-color': '#088',
                'fill-opacity': 0.6,
              }}
            />
            <Layer
              id="country-outline"
              type="line"
              paint={{
                'line-color': '#fff',
                'line-width': 1,
              }}
            />
          </Source>
        </>
      )}
      {provinceData && (
        <>
          <Source id="province-source" type="geojson" data={provinceData}>
            <Layer
              id="province-fill"
              type="fill"
              paint={{
                'fill-color': '#088',
                'fill-opacity': 0.4,
              }}
            />
            <Layer
              id="province-outline"
              type="line"
              paint={{
                'line-color': '#fff',
                'line-width': 0.5,
              }}
            />
            <Layer
              id="province-label"
              type="symbol"
              layout={{
                'text-field': ['get', 'name'],
                'text-size': 10,
                'text-offset': [0, 0],
                'text-allow-overlap': false,
              }}
              paint={{
                'text-color': '#fff',
                'text-halo-color': '#000',
                'text-halo-width': 0.8,
              }}
            />
          </Source>
        </>
      )}
    </Map>
  );
}
