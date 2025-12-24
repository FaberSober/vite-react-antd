import * as React from 'react';
import Map, { Layer, Marker, Source } from 'react-map-gl/mapbox';
// If using with mapbox-gl v1:
// import Map from 'react-map-gl/mapbox-legacy';
import 'mapbox-gl/dist/mapbox-gl.css';
import { RDBSource } from 'district-data';
import { useEffect, useState } from 'react';
import { MAPBOX_KEY } from '@/config';

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
                'fill-color': '#2DF3ED',
                'fill-opacity': 0.1,
              }}
            />
            <Layer
              id="country-outline"
              type="line"
              paint={{
                'line-color': '#2DF3ED',
                'line-width': 2,
              }}
            />
          </Source>
        </>
      )}
      {provinceData && (
        <>
          <Source id="province-source" type="geojson" data={provinceData}>
            {/* <Layer
              id="province-fill"
              type="fill"
              paint={{
                'fill-color': '#088',
                'fill-opacity': 0.2,
              }}
            /> */}
            <Layer
              id="province-outline"
              type="line"
              paint={{
                'line-color': '#2AD6DD',
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
                'text-color': '#918e8e',
                'text-halo-color': '#000',
                'text-halo-width': 0.8,
              }}
            />
          </Source>
        </>
      )}

      <Marker longitude={104} latitude={35} anchor="bottom">
        <img src="/image/icon1.png" style={{ width: 20, height: 30 }} alt="icon1" />
      </Marker>
      <Marker longitude={110} latitude={35} anchor="bottom">
        <img src="/image/icon2.png" style={{ width: 20, height: 30 }} alt="icon2" />
      </Marker>
    </Map>
  );
}
