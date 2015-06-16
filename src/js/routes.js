'use strict';

import React from 'react';
import Router from 'react-router';
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';

import App from './components/App/App';
import TestPage from './components/TestPage/TestPage';
import HomePage from './components/HomePage/HomePage';

export default (
  <Route handler={App} name="app" path="/">
    <Route handler={TestPage} name="test" path="/test"/>
    <DefaultRoute handler={HomePage} name="home"/>
  </Route>
);