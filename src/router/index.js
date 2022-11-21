import Vue from "vue";
import VueRouter from "vue-router";
import PbList from "@/views/PbList.vue";
import Layout from "@/layout/appLayout.vue";
import platformRoutes from "@/router/modules/platformRoutes";
import chargerRoutes from "@/router/modules/chargerRoutes";

Vue.use(VueRouter);
const routes = [
    //추후 대시보드로 배정해야함
    {
        path: "/",
        name: "Layout",
        component: Layout,
        children: [{
            path: "/",
            name: "main",
            props: true,
            component: () =>
                import ("@/views/charger/cpList.vue"),
        }, ],
    },
    {
        path: "/114",
        name: "Layout114",
        component: Layout,
        children: [{
            path: "/",
            name: "main114",
            props: true,
            component: () =>
                import ("@/views/charger/Layout-1114.vue"),
        }, ],
    },
    {
        path: "/pbList",
        name: "PbList",
        component: PbList,
    },
    chargerRoutes,
    platformRoutes,
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;