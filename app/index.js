import Vue from 'vue';
import App from './App';
import Loading from './components/Loading';
import Lazy from './components/lazy';

Vue.use(Loading,{
    size : 20,
    color : 'red'
});
Vue.use(Lazy,{
    error : '33'
})

new Vue ({
    el : '#app',
    components : { App },
    template : `<App/>`
})