import Design from './../views/user/design/Index';
import DesignDetail from './../views/user/design/Detail';
export default [
    {
        path        : '/design',
        component   : Design,
        name        : 'design',
        meta        : {
            breadcrumb: [],
        }
    },{
        path        : '/design/:slug',
        component   : DesignDetail,
        name        : 'designDetail',
        meta        : {
            breadcrumb: [],
        }
    },
]