import Vue from 'vue';
import App from './App';
import Loading from './components/Loading';

Vue.use(Loading,{
    size : 20,
    color : 'red'
});

new Vue ({
    el : '#app',
    components : { App },
    template : `<App/>`
})