import React, { Component } from 'react';
import './App.css';
import FloatingHeader from './components/FloatingHeader.js'
import List from './components/List.js'

class App extends Component {
  render() {
    return (
      <div>
        < FloatingHeader />
        <article>
          <aside className="keyspot-list">
            < List />
          </aside>
        </article>
      </div>
    );
  }
}

export default App;
