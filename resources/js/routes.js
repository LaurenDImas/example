
//plugin
import VueRouter from 'vue-router';
//Vuex
import store from "./store.js";
//Module
import Authentication from './routes/Authentication';
//FE
import Home from './routes/Home';
import Design from './routes/Design';
//BE
import Dashboard from './routes/Dashboard';
import Users from './routes/Users';
import Roles from './routes/Roles';


const routes = [
    ...Home,
    ...Design,
    ...Authentication,
    ...Dashboard,
    ...Users,
    ...Roles,
];

const router = new VueRouter({
    routes,
    mode:"history"
})

router.beforeEach((to, from, next) => {
    store.commit('CLEAR_ERRORS')
    if (to.matched.some(record => record.meta.requestAuth)) {
        let auth = store.getters.isAuth;
        if (!auth) {
            next({ name: "login" });
        } else {
            if(!store.state.auth.data){
                store.dispatch("auth/users"); 
            }
            next();
        }
    } else {
        next();
    }
});

export default router;