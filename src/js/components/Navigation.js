'use strict';

import React from 'react';
import { Link } from 'react-router';

class Navigation extends React.Component {

  render() {
    return (
        <nav className="navigation navigation--default">
          <div className="navigation__header">
            <a href="#" className="navigation__application">
              {this.props.appName}
            </a>
          </div>
          <ul className="navi">
            <li className="navi__item">
              <Link to="app" className="navi__anchor" activeClassName="navi__anchor--active">Home</Link>
            </li>
            <li className="navi__item">
              <Link to="test" className="navi__anchor" activeClassName="navi__anchor--active">Test</Link>
            </li>
          </ul>
        </nav>
    );
  }
}

export default Navigation;