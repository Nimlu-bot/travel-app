import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// import MapboxLanguageControl from 'react-mapbox-gl-language';

import MapboxLanguage from '@mapbox/mapbox-gl-language';

class MapboxLanguageControl extends Component {
  componentWillMount(){
    this.mapboxLanguage = new MapboxLanguage(({  defaultLanguage: 'ru'}));
    this.context.map.addControl(this.mapboxLanguage);
  }

  componentWillUnmount(){
    this.context.map.removeControl(this.mapboxLanguage);
  }

  render(){
    return null;
  }
}
MapboxLanguageControl.contextTypes = {
  map: PropTypes.object.isRequired
};
 


MapboxLanguageControl.mapboxLanguage = 'ru';

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
    <MapboxLanguageControl/>
  </MapContainer>
    )
}
