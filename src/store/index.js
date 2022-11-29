import Vue from "vue";
import Vuex from "vuex";
import authUser from "./modules/authUser";
import settings from "./modules/setting";
import getters from "./getters";
import createPersistedState from "vuex-persistedstate";
Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        authUser: authUser,
        settings: settings,
    },
    plugins: [
        //주목! : 여기에 쓴 모듈만 저장됩니다.
        createPersistedState({
            //storage: window.sessionStorage,
            paths: ["settings", "authUser"],
        }),
    ],
    getters,
});