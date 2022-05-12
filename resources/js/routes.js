
//plugin
import VueRouter from 'vue-router';

//Vuex
import store from "./store.js";

//Auth
import Login from './views/Login';

//Dashboard
import Dashboard from './views/admin/dashboard/Index';


//Users
import Asset from './views/admin/asset/Index';
import AssetCreate from './views/admin/asset/Create';
import AssetEdit from './views/admin/asset/Edit';
import AssetShow from './views/admin/asset/Show';

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
        path        : '/dashboard',
        component   : Dashboard,
        name        : 'dashboard',
        meta        : {
            requestAuth: true,
            breadcrumb: [],
        }
    },

     //assets
     {
        path        : '/asset',
        component   : Asset,
        name        : 'asset',
        meta        : {
            requestAuth: true,
            buttonCreate: "assetCreate",
            title: "Asset",
            cardHeader: "List Asset",
            breadcrumb: [
                { name: 'Asset', to: "asset"},
            ],
        }
    },
    {
        path        : '/asset/create',
        component   : AssetCreate,
        name        : 'assetCreate',
        meta        : {
            requestAuth: true,
            buttonCreate: "asset",
            title: "Asset",
            cardHeader: "Create Asset",
            breadcrumb: [
                { name: 'Asset', to: "asset"},
                { name: 'Create', to: "assetCreate"},
            ],
        }
    },
    {
        path        : '/asset/edit/:id',
        component   : AssetEdit,
        name        : 'assetEdit',
        meta        : {
            requestAuth: true,
            buttonCreate: "asset",
            title: "Asset",
            cardHeader: "Edit Asset",
            breadcrumb: [
                { name: 'Asset', to: "asset"},
                { name: 'Edit', to: "assetEdit"},
            ],
        }
    },
    {
        path        : '/asset/:id',
        component   : AssetShow,
        name        : 'assetShow',
        meta        : {
            requestAuth: true,
            buttonCreate: 'asset',
            title: "Asset",
            cardHeader: "Detail Asset",
            breadcrumb: [
                { name: 'Asset', to: "asset"},
                { name: 'Detail', to: "assetShow"}
            ],
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
            buttonCreate: 'users',
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