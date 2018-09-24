import './index.css';
import registerServiceWorker from './registerServiceWorker';
import {registerApplication, start} from 'single-spa';

registerApplication(
    'nav',
    () => import('./nav/nav.app.js'),
    // this will always mount
    () => true
  );

registerApplication(
    'vue',
    () => import('./vue/vue.app.js'),
    // this will only mount for the /vue path
    pathPrefix('/vue')
);

registerApplication(
    'react-2',
    () => import('./react/react.app.js'),
    // this will only mount for the /react path
    pathPrefix('/react')
);

start();
registerServiceWorker();

function pathPrefix(prefix) {
    return function(location) {
        return location.pathname.startsWith(`${prefix}`);
    }
}
