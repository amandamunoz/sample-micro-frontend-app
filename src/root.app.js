import React from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';
// The top level React Component
import App from './App.js';

const reactLifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: App,
  domElementGetter,
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

// Establishes where single-spa will mount our application  
function domElementGetter() {
  return document.getElementById("root");
}