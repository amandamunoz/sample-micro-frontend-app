import React from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';
// The top level React Component
import App from '../react/App.js';

const navBar = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: App,
  domElementGetter: () => document.getElementById('react-2')
});


export const bootstrap = [
  navBar.bootstrap,
];

export const mount = [
  navBar.mount,
];

export const unmount = [
  navBar.unmount,
];
