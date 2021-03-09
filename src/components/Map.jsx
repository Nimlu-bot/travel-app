import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

export default function Map() {
    const position = [51.505, -0.09];

    // return <div className='map-wrapper'>Map ghvhfhfuhg</div>;
    return (
    <MapContainer className='map-wrapper' center={position} zoom={13} scrollWheelZoom={false}>
    <TileLayer
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={position}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
  </MapContainer>
    )
}



// const position = [51.505, -0.09]
        
// render(
//   <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
//     <TileLayer
//       attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
//       url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//     />
//     <Marker position={position}>
//       <Popup>
//         A pretty CSS3 popup. <br /> Easily customizable.
//       </Popup>
//     </Marker>
//   </MapContainer>
// )



// export default class Map extends Abstract {
//     constructor(parentElem, dataModel) {
//       super();
//       this.className = 'map';
//       this.dataModel = dataModel;
//       this.elements = {};
//       this.elements.parent = parentElem;
//       this.generateLayout();
//       this.perSize = {};// сюда кладу данные для легенды
//       this.perSize100K = {};
//       this.legend = new Legend(this.elements.popupTable); //! ! !
//     }
  
//     markerClickHandler(event) {
//       const { target } = event;
//       if (!target.parentElement.classList.contains('icon-marker')) return;
//       const contrName = target.parentElement.childNodes[1].innerText.split('\n')[0];
//       this.createCunstomEvent('countrySelect', { countryName: contrName });
//     }
  
//     drowMapSheet() {
//       this.mapBox = create('div', 'mapBox', null, this.elements.mapInner);
//       this.mapSheet = create('div', 'mapSheet', null, this.mapBox);
//       this.mapOptions = {
//         center: [30, 10],
//         zoom: 2,
//       };
//       this.map = new L.map(this.mapSheet, this.mapOptions);
//       this.layer = L.tileLayer('https://api.mapbox.com/styles/v1/tone4ka/ckixk38nj5udw1at4rc6qt6pz/tiles/{z}/{x}/{y}?access_token={accessToken}', {
//         attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
//         maxZoom: 18,
//         id: 'mapbox/streets-v11',
//         tileSize: 512,
//         zoomOffset: -1,
//         accessToken: 'pk.eyJ1IjoidG9uZTRrYSIsImEiOiJja2l1NGxnZXMydjQ5MnlsYnJjMGtmdnA3In0.5ldaiECa7ofK34QR7SjPIQ',
//       });
  
//       this.map.addLayer(this.layer);
//       this.mapSheet.addEventListener('click', (event) => this.markerClickHandler(event));
//     }
  