'use strict';

import React from 'react';
import { RouteHandler } from 'react-router';
import Navigation from '../Navigation';

class App extends React.Component {

  render() {
    return (
        <div className="app">
          <header className="header">
            <Navigation appName="React-Start Kit"/>
          </header>
          <div className="page">
            <RouteHandler/>
          </div>
        </div>
    );
  }
}
export default App;