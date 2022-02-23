import Dashboard from './../views/admin/dashboard/Index';
export default [
    {
        path        : '/',
        component   : Dashboard,
        name        : 'dashboard',
        meta        : {
            requestAuth: true,
            breadcrumb: [],
        }
    },
]

