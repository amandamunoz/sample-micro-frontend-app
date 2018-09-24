import React from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';
// The top level React Component
import Nav from './Nav.js';

const reactLifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Nav,
  domElementGetter: () => document.getElementById("nav")
});


export const bootstrap = [
  reactLifecycles.bootstrap,
];

export const mount = [
  reactLifecycles.mount,
];

export const unmount = [
  reactLifecycles.unmount,
];
