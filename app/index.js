import Vue from 'vue';
import App from './App';
import Loading from './components/Loading';

Vue.use(Loading);

new Vue ({
    el : '#app',
    components : { App },
    template : `<App/>`
})