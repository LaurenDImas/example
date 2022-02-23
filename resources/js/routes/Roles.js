import Roles from './../views/admin/roles/Index';
import RoleCreate from './../views/admin/roles/Create';
import RoleEdit from './../views/admin/roles/Edit';
import RoleShow from './../views/admin/roles/Show';

export default [
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
]