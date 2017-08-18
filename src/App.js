import React, { Component } from 'react';
import './App.css';
import FloatingHeader from './components/FloatingHeader.js'
import ListDivided from './components/ListDivided.js'
import MapContainer from './components/MapContainer.js'

class App extends Component {

  render() {
    return (
      <div>
        < FloatingHeader />
        <article>
          <aside className="keyspot-list">
            < ListDivided />
          </aside>
          <MapContainer />
        </article>
      </div>
    );
  }
}

export default App;
