import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import HighchartsVue from "highcharts-vue";

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import "@/assets/css/vuetify-grid.css";
import "@/assets/css/style.css";

Vue.config.productionTip = false;
Vue.use(HighchartsVue);

new Vue({
    router,
    store,
    vuetify,
    render: (h) => h(App),
}).$mount("#app");