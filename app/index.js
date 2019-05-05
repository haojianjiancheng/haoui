import Vue from 'vue';
import App from './App';
import router from './route';
import Loading from './components/Loading';
import Lazy from './components/LazyImg';

Vue.use(Loading,{
    size : 20,
    color : 'red'
});
Vue.use(Lazy);

new Vue ({
    el : '#app',
    components : { App },
    template : `<App/>`,
    router,
})