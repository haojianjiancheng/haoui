import Vue from 'vue';
import App from './App';
import Loading from './components/Loading';

Vue.use(Loading,{
    b:2,
    size : 1
});

new Vue ({
    el : '#app',
    components : { App },
    template : `<App/>`
})