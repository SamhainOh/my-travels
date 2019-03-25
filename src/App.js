import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Travel from "./Travel";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">My travels</h1>
        </header>
      <Travel
      destination = 'Hong-Kong'
      country = 'China'
      photo = 'http://scd.rfi.fr/sites/filesrfi/dynimagecache/113/0/599/337/1024/578/sites/images.rfi.fr/files/aef_image/hong-kong-864884_960_720_0.jpg'
      distance = '9713 km'
      />

      <Travel
      destination = 'Bali'
      country = 'Indonesia'
      photo = 'https://www.kuoni.fr/wp-content/uploads/2018/02/U2FTZwtoVW9TeQEhBmtXZg9sUzYBe1Nh-906x577.jpg'
      distance = '12.242 km'
      />
      </div>
    );
  }
}

export default App;
