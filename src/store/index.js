import Vue from "vue";
import Vuex from "vuex";
import authUser from "./modules/authUser";
import settings from "./modules/setting";
import getters from "./getters";
Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        authUser: authUser,
        settings: settings,
    },
    getters,
});