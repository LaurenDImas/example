import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

import auth from "./stores/auth.js";
import dashboard from "./stores/admin/dashboard.js";
import users from "./stores/admin/users.js";


const store = new Vuex.Store({
    modules: {
        auth,
        dashboard,
        users
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