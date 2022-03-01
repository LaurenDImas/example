import Users from './../views/admin/users/Index';
import UserCreate from './../views/admin/users/Create';
import UserEdit from './../views/admin/users/Edit';
import UserShow from './../views/admin/users/Show';

export default [
    {
        path        : '/admin/users',
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
        path        : '/admin/users/create',
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
        path        : '/admin/users/edit/:id',
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
        path        : '/admin/users/:id',
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
]