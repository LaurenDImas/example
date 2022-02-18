
//plugin
import VueRouter from 'vue-router';

//Vuex
import store from "./store.js";

//Auth
import Login from './views/Login';

//Dashboard
import Dashboard from './views/admin/dashboard/Index';

//Users
import Users from './views/admin/users/Index';
import UserCreate from './views/admin/users/Create';
import UserEdit from './views/admin/users/Edit';
import UserShow from './views/admin/users/Show';

//Roles
import Roles from './views/admin/roles/Index';
import RoleCreate from './views/admin/roles/Create';
import RoleEdit from './views/admin/roles/Edit';
import RoleShow from './views/admin/roles/Show';

const routes = [
    // Auth
    {
        path        : '/login',
        component   : Login,
        name        : 'login'
    },

    //Dashboard
    {
        path        : '/',
        component   : Dashboard,
        name        : 'dashboard',
        meta        : {
            requestAuth: true,
            breadcrumb: [],
        }
    },

    //Users
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
    },

    //Roles
    {
        path        : '/roles',
        component   : Roles,
        name        : 'roles',
        meta        : {
            requestAuth: true,
            buttonCreate: "roleCreate",
            title: "Roles",
            cardHeader: "List Role",
            breadcrumb: [
                { name: 'Roles', to: "roles"},
            ],
        }
    },
    {
        path        : '/roles/create',
        component   : RoleCreate,
        name        : 'roleCreate',
        meta        : {
            requestAuth: true,
            buttonCreate: "roles",
            title: "Roles",
            cardHeader: "Create Role",
            breadcrumb: [
                { name: 'Roles', to: "roles"},
                { name: 'Create', to: "roleCreate"},
            ],
        }
    },
    {
        path        : '/roles/edit/:id',
        component   : RoleEdit,
        name        : 'roleEdit',
        meta        : {
            requestAuth: true,
            buttonCreate: "roles",
            title: "Roles",
            cardHeader: "Edit Role",
            breadcrumb: [
                { name: 'Roles', to: "roles"},
                { name: 'Edit', to: "roleEdit"},
            ],
        }
    },
    {
        path        : '/roles/:id',
        component   : RoleShow,
        name        : 'roleShow',
        meta        : {
            requestAuth: true,
            buttonCreate: true,
            title: "Roles",
            cardHeader: "Detail Role",
            breadcrumb: [
                { name: 'Roles', to: "roles"},
                { name: 'Detail', to: "roleShow"}
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