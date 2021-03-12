import React, {Component, useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import { MapContainer, TileLayer, Marker, Popup, Polygon, Tooltip } from 'react-leaflet';
// import MapboxLanguageControl from 'react-mapbox-gl-language';
import MapboxLanguage from '@mapbox/mapbox-gl-language';

import ReactMapboxGl from 'react-mapbox-gl';
import MapboxLanguageControl from 'react-mapbox-gl-language';

import { useHttp } from './../hooks/httpHook';




export default function Map() {
    const position = [51.509865, -0.118092];

    const { request } = useHttp();
    const countryName='es'
    const url = `https://nominatim.openstreetmap.org/search.php?q=${countryName}&polygon_geojson=1&format=geojson`;
    const [coordinates, setCoordinates] = useState([]);

    const purpleOptions = { color: 'purple' }
    const getPoligon = async () => {
            try {
                const data = await request(url, 'GET');
                const y=data.features[0].geometry.coordinates;
                let x;
                if(Array.isArray(y[0][0][0])){
                  x =y.map((item=>item.map(it=>it.map(i=>i.reverse()))));
                }else{
                  x=y[0].map(i=>i.reverse());
                }

                setCoordinates(x);
            } catch (e) {}
        };


        useEffect(() => {
          getPoligon()
      }, []);
    return (
    <MapContainer className='map-wrapper' center={position} zoom={5} scrollWheelZoom={false}>
    <TileLayer
      attribution='Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>'
      url="https://api.mapbox.com/styles/v1/tone4ka/ckm4wl17kditc17ptbx8aq0rx/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoidG9uZTRrYSIsImEiOiJja2l1NGxnZXMydjQ5MnlsYnJjMGtmdnA3In0.5ldaiECa7ofK34QR7SjPIQ"
    />
    <Marker position={position}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
    <Polygon pathOptions={purpleOptions} positions={coordinates}>
            <Tooltip sticky>sticky Tooltip for Polygon</Tooltip>
    </Polygon>
    {/* <MapboxLanguageControl/> */}
  </MapContainer>
    )
}






// class MapboxLanguageControl extends Component {
//   componentWillMount(){
//     this.mapboxLanguage = new MapboxLanguage(({  defaultLanguage: 'ru'}));
//     this.context.map.addControl(this.mapboxLanguage);
//   }

//   componentWillUnmount(){
//     this.context.map.removeControl(this.mapboxLanguage);
//   }

//   render(){
//     return null;
//   }
// }
// MapboxLanguageControl.contextTypes = {
//   map: PropTypes.object.isRequired
// };

// MapboxLanguageControl.mapboxLanguage = 'ru';



// const MapTok = ReactMapboxGl({
//   accessToken: 'pk.eyJ1IjoidG9uZTRrYSIsImEiOiJja2l1NGxnZXMydjQ5MnlsYnJjMGtmdnA3In0.5ldaiECa7ofK34QR7SjPIQ'
// });

// const styles = {
//   mapContainer: {
//     height: '100vh',
//     width: '100vw'
//   }
// };

// const App = () => (

  
//   <MapTok
//     style='mapbox://styles/mapbox/streets-v10'
//     containerStyle={styles.mapContainer}
//   >
//     <MapboxLanguageControl/>
//   </MapTok>
// );

// export default function Map() {
//  return <App/>
// }




// const url = `https://nominatim.openstreetmap.org/search.php?q=Warsaw+Poland&polygon_geojson=1&format=geojson`;
//  const currentRate = async () => {
//             try {
//                 const data = await request(url, 'GET');
//                 return parseFloat((data.Cur_OfficialRate / data.Cur_Scale).toFixed(4));
//             } catch (e) {}
//         };