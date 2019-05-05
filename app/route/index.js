import Vue from 'vue';
import Router from 'vue-router';
import test from '../page/test.vue';

Vue.use(Router);

const router = new Router({
    mode : 'hash',
    routes : [
        {
            path : '/test',
            name : 'test',
            component : test
        }
    ]
})

export default router;