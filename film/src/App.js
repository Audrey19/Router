import React, { Component } from 'react';
import './App.css';

import FilmPref from './FilmPref.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Film Préféré</h1>
        </header>
        <FilmPref/>
      </div>
    );
  }
}

export default App;
