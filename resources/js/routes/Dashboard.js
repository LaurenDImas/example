import Dashboard from './../views/admin/dashboard/Index';
export default [
    {
        path        : '/admin/dashboard',
        component   : Dashboard,
        name        : 'dashboard',
        meta        : {
            requestAuth: true,
            breadcrumb: [],
        }
    },
]

