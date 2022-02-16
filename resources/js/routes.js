
import VueRouter from 'vue-router';
import store from "./store.js";
import Login from './views/Login';
import Dashboard from './views/admin/dashboard/Index';
import Users from './views/admin/users/Index';
import UserCreate from './views/admin/users/Create';
import UserEdit from './views/admin/users/Edit';
import UserShow from './views/admin/users/Show';

const routes = [
    {
        path        : '/login',
        component   : Login,
        name        : 'login'
    },
    {
        path        : '/',
        component   : Dashboard,
        name        : 'dashboard',
        meta        : {
            requestAuth: true,
            breadcrumb: [],
        }
    },
    {
        path        : '/users',
        component   : Users,
        name        : 'users',
        meta        : {
            requestAuth: true,
            buttonCreate: "userCreate",
            title: "Users",
            cardHeader: "List User",
            breadcrumb: [
                { name: 'Users', to: "users"},
            ],
        }
    },
    {
        path        : '/users/create',
        component   : UserCreate,
        name        : 'userCreate',
        meta        : {
            requestAuth: true,
            buttonCreate: "users",
            title: "Users",
            cardHeader: "Create User",
            breadcrumb: [
                { name: 'Users', to: "users"},
                { name: 'Create', to: "userCreate"},
            ],
        }
    },
    {
        path        : '/users/edit/:id',
        component   : UserEdit,
        name        : 'userEdit',
        meta        : {
            requestAuth: true,
            buttonCreate: "users",
            title: "Users",
            cardHeader: "Edit User",
            breadcrumb: [
                { name: 'Users', to: "users"},
                { name: 'Edit', to: "userEdit"},
            ],
        }
    },
    {
        path        : '/users/:id',
        component   : UserShow,
        name        : 'userShow',
        meta        : {
            requestAuth: true,
            buttonCreate: true,
            title: "Users",
            cardHeader: "Detail User",
            breadcrumb: [
                { name: 'Users', to: "users"},
                { name: 'Detail', to: "userShow"}
            ],
        }
    }
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
            next();
        }
    } else {
        next();
    }
});

export default router;