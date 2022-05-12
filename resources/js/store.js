import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

import auth from "./stores/auth.js";
import dashboard from "./stores/admin/dashboard.js";
import asset from "./stores/admin/asset.js";
import users from "./stores/admin/users.js";
import roles from "./stores/admin/roles.js";
import category from "./stores/admin/category.js";


const store = new Vuex.Store({
    modules: {
        auth,
        dashboard,
        asset,
        users,
        category,
        roles
    },
    state: {
        token  : localStorage.getItem("token"),
        errors : [],
    },
    mutations:{
        SET_TOKEN(state, payload) {
            state.token = payload;
        },
        SET_AUTH(state, payload) {
            state.auth.data = payload;
        },
        SET_ERRORS(state, payload) {
            state.errors = payload;
        },
        CLEAR_ERRORS(state) {
            state.errors = [];
        }
    },
    getters: {
        isAuth: state => {
            return state.token != "null" && state.token != null;
        }
    },
})

export default store;