import React, { Component } from 'react';
import './App.css';
import FloatingHeader from './components/FloatingHeader.js'
import ListDivided from './components/ListDivided.js'

class App extends Component {
  render() {
    return (
      <div>
        < FloatingHeader />
        <article>
          <aside className="keyspot-list">
            < ListDivided />
          </aside>
        </article>
      </div>
    );
  }
}

export default App;
