import Vue from 'vue';
import Router from 'vue-router';
import test from '../page/test.vue';

Vue.use(Router);

const router = new Router({
    mode : 'hash',
    routes : [
        {
            path : '/home',
            name : 'home',
            component : resolve=> require(["../page/home.vue"],resolve)
        },
        {
            path : '/test',
            name : 'test',
            component : test
        },
        {
            path : '/req',
            name : 'req',
            component : resolve => require(["../page/require.vue"],resolve)
        }
    ]
})

export default router;