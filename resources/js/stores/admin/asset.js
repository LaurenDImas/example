import $axios from "../../api";

const state = () => ({
    datas : [],
    data  : {
        "category_id" : "",
        "kode" : "",
        "merek" : "",
        "barang" : "",
        "coa_id" : "",
        "item_type_id" : "",
        "tanggal_beli" : "",
        "garansi" : "",
        "garansi_file" : "",
        "harga" : "",
        "buy_type_id" : "",
        "life_time_id" : "",
        "metode_depresiasi" : "",
        "nilai_residu" : "",
        "nilai_depresiasi" : "",
        "condition_id" : "",
        "supplier_id" : "",
        "foto" : "",
        "installed_id" : "",
        "storage_id" : ""
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
            kode        : payload.kode,
            // email       : payload.email,
            // role_id     : payload.role_id,
            // role_name   : payload.role.name,
            // photo       : payload.photo,
            // file_src    : payload.file_src,
        }
    },
    CLEAR_DATA(state){
        state.data = {
            kode        : "",
            // email       : "",
            // password    : "",
            // role_id     : "",
            // photo    : "",
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
            const response =  await $axios.get(`/assets?page=${page}&search=${search}&rows=${rows}&sort=${sort}&order=${order}`)
            // console.log(response.data.results)
            commit('ASSIGN_DATAS', response.data.results)
        } catch (error) {
            console.log(error)
        }
    },
    async submit({commit,state}){
        try {
            const response = await $axios.post(`/assets`,state.data);
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
            const response = await $axios.get(`/assets/${payload}`);
            commit('ASSIGN_DATA', response.data.results)
        } catch (error) {
            console.log(error)
        }
    },
    async show({commit},payload){
        try {
            const response = await $axios.get(`/assets/${payload}`);
            commit('ASSIGN_DATA_SHOW', response.data.results)
        } catch (error) {
            console.log(error)
        }
    },
    async update({commit,state}, payload){
        try {
            const response = await $axios.put(`/assets/${payload}`,state.data);
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
            const response = await $axios.delete(`/assets/${payload}`);
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