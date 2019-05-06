import Vue from 'vue';
import Router from 'vue-router';
import test from '../page/test.vue';
import { resolve } from 'path';

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
        }
    ]
})

export default router;