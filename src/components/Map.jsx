import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

export default function Map() {
    const position = [51.509865, -0.118092];

    // return <div className='map-wrapper'>Map ghvhfhfuhg</div>;
    return (
    <MapContainer className='map-wrapper' center={position} zoom={5} scrollWheelZoom={false}>
    <TileLayer
      attribution='Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>'
      url="https://api.mapbox.com/styles/v1/tone4ka/ckixk38nj5udw1at4rc6qt6pz/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoidG9uZTRrYSIsImEiOiJja2l1NGxnZXMydjQ5MnlsYnJjMGtmdnA3In0.5ldaiECa7ofK34QR7SjPIQ"
    />
    <Marker position={position}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
  </MapContainer>
    )
}
