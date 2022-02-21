import $axios from "../api.js";


const state = () => ({
    data  : null
});


const mutations = {
 
};

const actions = {
    async submit({commit}, payload){
        localStorage.setItem("token", null);
        commit("SET_TOKEN",null,{root:true});
        try {
            const datas =  await axios.post("api/login",payload);
            if (datas.data.status == "success") {
                localStorage.setItem("token", datas.data.token);    
                commit("SET_TOKEN", datas.data.token, {
                    root: true
                });
            } else {
                commit(
                    "SET_ERRORS",
                    { invalid: "These credentials do not match our records" },
                    { root: true }
                );
            }
        } catch (error) {
            if (error.response.status == 422) {            
                commit("SET_ERRORS", error.response.data.errors, {
                    root: true
                });
            }else{
                commit("SET_ERROR_AUTH", "The credentials not match",{
                    root: true
                })
            }
        }
    },
    
    async users({commit}){
        try {
            const datas = await $axios.get('/profile'); 
            commit("SET_AUTH", datas.data, {
                root: true
            });
        } catch (error) {
            localStorage.removeItem("token");
        }
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}
