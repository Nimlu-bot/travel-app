import React, { useEffect, useState, useLayoutEffect, useRef } from 'react';
import { MapContainer, TileLayer, Marker /*, Popup*/, Polygon, Tooltip } from 'react-leaflet';
import { useHttp } from './../hooks/httpHook';
import PropTypes from 'prop-types';
import { FullScreen, useFullScreenHandle } from 'react-full-screen';

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
const layers = {
    en:
        'https://api.mapbox.com/styles/v1/tone4ka/ckm4wl17kditc17ptbx8aq0rx/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoidG9uZTRrYSIsImEiOiJja2l1NGxnZXMydjQ5MnlsYnJjMGtmdnA3In0.5ldaiECa7ofK34QR7SjPIQ',
    ru:
        'https://api.mapbox.com/styles/v1/tone4ka/ckmbvsjkj95yv17pg1vgri8ig/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoidG9uZTRrYSIsImEiOiJja2l1NGxnZXMydjQ5MnlsYnJjMGtmdnA3In0.5ldaiECa7ofK34QR7SjPIQ',
    ua:
        'https://api.mapbox.com/styles/v1/tone4ka/ckmbvsjkj95yv17pg1vgri8ig/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoidG9uZTRrYSIsImEiOiJja2l1NGxnZXMydjQ5MnlsYnJjMGtmdnA3In0.5ldaiECa7ofK34QR7SjPIQ',
};

export default function Map(props) {
    const countryName = props.countryShort;
    const { request } = useHttp();
    const position = capitals[countryName];
    const url = `https://nominatim.openstreetmap.org/search.php?q=${countryName}&polygon_geojson=1&format=geojson`;
    const [coordinates, setCoordinates] = useState([]);
    const purpleOptions = { color: '#573b7a' };

    //динамическое изменение размера
    const targetRef = useRef();
    const [dimensions, setDimensions] = useState({});

    let movement_timer = null;
    const RESET_TIMEOUT = 100;
    const test_dimensions = () => {
        if (targetRef.current) {
            setDimensions({
                width: targetRef.current.offsetWidth,
                height: targetRef.current.offsetHeight,
            });
        }
    };
    useLayoutEffect(() => {
        test_dimensions();
    }, []);

    window.addEventListener('resize', () => {
        clearInterval(movement_timer);
        movement_timer = setTimeout(test_dimensions, RESET_TIMEOUT);
    });
    //динамическое изменение размера

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
    }, props.lang);

    const handle = useFullScreenHandle();

    return (
        <div className='map-wrapper' ref={targetRef}>
            <button className='map-fullscr-button' onClick={handle.enter}>
                {fullscr[props.lang]}
            </button>
            <FullScreen className='map-wrapper1' handle={handle}>
                <MapContainer
                    className='map-container'
                    center={position}
                    zoom={5}
                    scrollWheelZoom={false}
                    ref={targetRef}
                    width={dimensions.width}
                    height={((dimensions.width / 16) * 9).toString()}
                >
                    {(props.lang === 'ru' || props.lang === 'ua') && (
                        <TileLayer
                            attribution='Map data &copy; <a href="https://www.openstreetmap.org/copyright%22%3EOpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/%22%3EMapbox</a>'
                            url={layers[props.lang]}
                        />
                    )}
                    {props.lang === 'en' && (
                        <TileLayer
                            attribution='Map data &copy; <a href="https://www.openstreetmap.org/copyright%22%3EOpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/%22%3EMapbox</a>'
                            url={layers[props.lang]}
                        />
                    )}
                    <Marker className='capitalMarker' position={position}>
                        <Tooltip>{props.capital}</Tooltip>
                    </Marker>
                    <Polygon pathOptions={purpleOptions} positions={coordinates} />
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
