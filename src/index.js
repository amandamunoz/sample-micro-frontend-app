import './index.css';
import registerServiceWorker from './registerServiceWorker';
import {registerApplication, start} from 'single-spa';

registerApplication(
    // Name of our single-spa application
    'root',
    // Our loading function
    () => import('./root.app.js'),
    // Our activity function
    () => true
  );

  start();
  registerServiceWorker();
