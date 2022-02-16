import axios from "axios";

const $axios = axios.create({
    baseURL: "/api",
    headers: {
        'Content-Type': 'application/json'
    }
});

// $axios.interceptors.request.use(
//     function (config) {
//         const token = store.state.token
//         if (token) config.headers.Authorization = `Bearer ${token}`;
//         return config;
//     },
//     function (error) {
//         return Promise.reject(error);
//     }
// );

export default $axios;
