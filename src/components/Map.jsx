import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker /*, Popup*/, Polygon, Tooltip } from 'react-leaflet';
import { useHttp } from './../hooks/httpHook';
// import MapboxLanguageControl from 'react-mapbox-gl-language';
// import MapboxLanguage from '@mapbox/mapbox-gl-language';
import PropTypes from 'prop-types';
import { FullScreen, useFullScreenHandle } from 'react-full-screen';
// import ReactMapboxGl from 'react-mapbox-gl';
// import MapboxLanguageControl from 'react-mapbox-gl-language';
// import React, {Component, useEffect, useState} from 'react';

const capitals = {
    GB: [51.509865, -0.118092],
    FR: [48.85341, 2.3488],
    IT: [41.89193, 12.51133],
    UA: [50.45466, 30.5238],
    DE: [52.52437, 13.41053],
    CZ: [50.08804, 14.42076],
    AT: [48.20849, 16.37208],
    ES: [40.4165, -3.70256],
};
const fullscr = {
    en: 'Enter fullscreen',
    ru: 'Во весь экран',
    ua: 'На весь екран',
};

export default function Map(props) {
    const countryName = props.countryShort;
    const { request } = useHttp();
    const position = capitals[countryName];
    const url = `https://nominatim.openstreetmap.org/search.php?q=${countryName}&polygon_geojson=1&format=geojson`;
    const [coordinates, setCoordinates] = useState([]);
    const purpleOptions = { color: '#573b7a' };

    const getPoligon = async () => {
        try {
            const data = await request(url, 'GET');
            const y = data.features[0].geometry.coordinates;
            let x;
            if (Array.isArray(y[0][0][0])) {
                x = y.map((item) => item.map((it) => it.map((i) => i.reverse())));
            } else {
                x = y[0].map((i) => i.reverse());
            }
            setCoordinates(x);
        } catch (e) {
            console.log('ошибка запроса полигонов');
        }
    };

    useEffect(() => {
        getPoligon();
    }, []);

    const handle = useFullScreenHandle(); // fulscr

    return (
        <div>
            <button className='map-fullscr-button' onClick={handle.enter}>
                {fullscr[props.lang]}
            </button>
            <FullScreen className='map-wrapper' handle={handle}>
                <MapContainer className='map-container' center={position} zoom={5} scrollWheelZoom={false}>
                    <TileLayer
                        attribution='Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>'
                        url='https://api.mapbox.com/styles/v1/tone4ka/ckm4wl17kditc17ptbx8aq0rx/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoidG9uZTRrYSIsImEiOiJja2l1NGxnZXMydjQ5MnlsYnJjMGtmdnA3In0.5ldaiECa7ofK34QR7SjPIQ'
                    />
                    <Marker className='capitalMarker' position={position}>
                        <Tooltip>{props.capital}</Tooltip>
                    </Marker>
                    <Polygon pathOptions={purpleOptions} positions={coordinates} />
                    {/* <MapboxLanguageControl/> */}
                </MapContainer>
            </FullScreen>
        </div>
    );
}

Map.propTypes = {
    lang: PropTypes.string,
    countryShort: PropTypes.string,
    capital: PropTypes.string,
};

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
