import React from 'react';
import L from 'leaflet';
import token from '../env.js'

class MapContainer extends React.Component {

  componentDidMount() {
    var mymap = L.map('map').setView([51.505, -0.09], 13);
    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox.streets',
        accessToken: token
    }).addTo(mymap);
  }

  render() {
    return (
      <div id="map"></div>
    )
  }
}

export default MapContainer;
