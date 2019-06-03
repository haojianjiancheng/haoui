import Vue from 'vue';
import App from './App';
import router from './route';
import Loading from './components/Loading';
import Lazy from './components/LazyImg';
import grid from './components/Grid';

Vue.use(Loading,{
    size : 20,
    color : 'red'
});
Vue.use(grid)
Vue.use(Lazy);

new Vue ({
    el : '#app',
    components : { App },
    template : `<App/>`,
    router,
})