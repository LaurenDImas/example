require('./bootstrap');
require('select2');

import Vue from 'vue';
import VueRouter from "vue-router";
import Vuex from 'vuex';
import store from './store.js';
import Index from "./layouts/Index";
import router from "./routes";
import VueSwal from 'vue-swal';
import $axios from "./api";
import { VueSpinners } from '@saeris/vue-spinners';
import Paginate from 'vuejs-paginate';
import swall from './shared/mixins/swall';
import './shared/mixins/generalMixin.js';
import Breadcrumbs from "./shared/components/Breadcrumbs";
// import * as jqueryExports from "jquery";
// window.$ = jqueryExports.default;

Vue.use(VueSwal)
Vue.mixin(swall); 
Vue.use(VueSpinners)
Vue.use(VueRouter);
Vue.use(Vuex);
Vue.component('paginate', Paginate)
Vue.use(require('vue-moment'));
Vue.component('bread-crumbs', Breadcrumbs);


Vue.config.devtools = true;
new Vue({
    el: '#app',
    router,
    store,
    $axios,
    render: h => h(Index),
    async beforeCreate() {
        // panggil action loadUser di vuex
        this.$store.dispatch("auth/users");
    }
});
