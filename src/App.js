import React, { Component } from 'react';
import L from 'leaflet';
import './App.css';
import token from './env.js';
import FloatingHeader from './components/FloatingHeader.js';
import ListDivided from './components/ListDivided.js';
import MapContainer from './components/MapContainer.js';

class App extends Component {
  state = {
    features: []
  }

  getKeySpotData = () => {
    return fetch("https://www.opendataphilly.org/dataset/71cf84e5-c6df-44d6-91ef-63f9b880e98e/resource/40daf627-b8c4-43b0-8d73-3cb8f9ccae15/download/keyspotlocationdata.geojson")
    .then(resp => resp.json())
    .then(data => data)
    .catch(error => console.log("Error:", error))
  };

  buildMap = () => {
    var map = L.map('map').setView([39.982598, -75.15703], 12.35);
    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox.streets',
        accessToken: token
    }).addTo(map);
    L.marker([39.982598,-75.15703]).addTo(map);
    return map;
  };

  setMarkers = (map, features) => {
    features.forEach(feature => {
      L.marker(feature.geometry.coordinates.reverse(), { alt: feature.properties.Name }).addTo(map).bindPopup(`
        <div class='popup-header'>
          <h3 class='location-name'>${feature.properties.Name}</h3>
        </div><p class='location-street'>${feature.properties.Street}<br>${feature.properties.City}, PA</p><p class='location-phone'>${feature.properties["PHONE NUMBER"] || "no phone number provided"}</p>`);
    });
  }

  handleListItemClick = (e) => {
    const name = e.target.textContent;
    const marker = document.querySelector(`[alt='${name}']`)
    if (!!marker) { marker.click() }
  }

  componentDidMount() {
    this.getKeySpotData()
      .then(data => this.setState({ features: data.features }))
      .then(() => this.buildMap())
      .then(map => this.setMarkers(map, this.state.features))
      .catch()
  }

  render() {
    return (
      <div>
        <FloatingHeader />
        <article>
          <aside className="keyspot-list">
            { this.state.features.length > 0 ? <ListDivided handleClick={this.handleListItemClick} features={this.state.features} /> : "Loading..." }
          </aside>
          <MapContainer />
        </article>
      </div>
    );
  }
}

export default App;
