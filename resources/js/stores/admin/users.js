import $axios from "../../api";

const state = () => ({
    datas : [],
    data  : {
        name        : "",
        email       : "",
        password    : "",
        role_id     : "",
        photo       : "",
    },
    page        : 1,
    rows        : 10,
    last_page   : 1,
    search      : ''
});

const mutations = {
    ASSIGN_DATAS(state,payload){
        state.datas     = payload
        state.last_page =  payload.last_page
        state.page = payload.current_page
    },
    SET_PAGE(state,payload){
        state.page = payload
    },
    ASSIGN_DATA(state,payload){
        state.data = {
            name        : payload.name,
            email       : payload.email,
            role_id     : payload.role_id,
            role_name   : payload.role.name,
            photo       : payload.photo,
            file_src    : payload.file_src,
        }
    },
    CLEAR_DATA(state){
        state.data = {
            name        : "",
            email       : "",
            password    : "",
            role_id     : "",
            photo    : "",
        }
    },
    
    ASSIGN_DATA_SHOW(state,payload){
        state.datas =  payload
    },

    CLEAR_DATAS(state){
        state.datas  = []
    }
}

const actions = {
    async getDatas({ commit, state}, payload){
        let search = typeof payload.search != 'undefined' ? payload.search : ''
        let rows = payload.rows
        let page = typeof payload.rows != 'All' && payload.rowsUpdate != 1 ? state.page : '1'
        let sort = payload.sort
        let order = payload.order != false ? "DESC" : "ASC"
        try {
            const response =  await $axios.get(`/users?page=${page}&search=${search}&rows=${rows}&sort=${sort}&order=${order}`)
            // console.log(response.data.results)
            commit('ASSIGN_DATAS', response.data.results)
        } catch (error) {
            console.log(error)
        }
    },
    async submit({commit,state}){
        try {
            const response = await $axios.post(`/users`,state.data);
            commit('CLEAR_DATA')
            return response.data;
        } catch (error) {
            if (error.response.status == 422) {
                commit("SET_ERRORS", error.response.data.errors, {
                    root: true
                });
            }
        }
    },
    async edit({commit},payload){
        try {
            const response = await $axios.get(`/users/${payload}`);
            commit('ASSIGN_DATA', response.data.results)
        } catch (error) {
            console.log(error)
        }
    },
    async show({commit},payload){
        try {
            const response = await $axios.get(`/users/${payload}`);
            commit('ASSIGN_DATA_SHOW', response.data.results)
        } catch (error) {
            console.log(error)
        }
    },
    async update({commit,state}, payload){
        try {
            const response = await $axios.put(`/users/${payload}`,state.data);
            commit('CLEAR_DATA')
            return response.data;
        } catch (error) {
            if (error.response.status == 422) {
                commit("SET_ERRORS", error.response.data.errors, {
                    root: true
                });
            }
        }
    },
    async remove({ commit }, payload) {
        try {
            const response = await $axios.delete(`/users/${payload}`);
            return response.data;
        } catch (error) {
            if (error.response) {
                console.log(error);
            }
        }
    }
}


export default {
    namespaced: true,
    state,
    actions,
    mutations
}