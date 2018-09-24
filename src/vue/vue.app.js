import Vue from 'vue/dist/vue.js';
import singleSpaVue from 'single-spa-vue';

const vueLifecycles = singleSpaVue({
    Vue,
    appOptions: {
        el: '#vue',
        template: '<div id="vue">This is a vue app!</div>'
    }
});

export const bootstrap = [
    vueLifecycles.bootstrap,
];

export const mount = [
    vueLifecycles.mount,
];

export const unmount = [
    vueLifecycles.unmount,
];
