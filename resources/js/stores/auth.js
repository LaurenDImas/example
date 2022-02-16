import $axios from "../api.js";

const state = () => ({
    data : JSON.parse(localStorage.getItem("auth")),
});

const mutations = {
};

const actions = {
    async submit({commit}, payload){
        localStorage.setItem("token", null);
        localStorage.setItem("auth", null);
        commit("SET_TOKEN",null,{root:true});
        try {
            const datas =  await $axios.post("/login",payload);
            if (datas.data.status == "success") {

                localStorage.setItem("token", datas.data.token);
                commit("SET_TOKEN", datas.data.token, {
                    root: true
                });
                localStorage.setItem(
                    "auth",
                    JSON.stringify(datas.data.data)
                );
                commit("SET_AUTH", datas.data.data, {
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
            }
        }
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}
