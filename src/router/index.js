import Vue from "vue";
import VueRouter from "vue-router";
import PbList from "@/views/PbList.vue";

Vue.use(VueRouter);
const routes = [{
        path: "/",
        name: "Layout",
        component: () =>
            import ("@/views/Layout.vue"),
    },
    {
        path: "/headerTop",
        name: "HeaderTop",
        component: () =>
            import ("@/components/HeaderTop.vue"),
    },
    {
        path: "/footerBottom",
        name: "FooterBottom",
        component: () =>
            import ("@/components/FooterBottom.vue"),
    },
    {
        path: "/sideBar",
        name: "SideBar",
        component: () =>
            import ("@/components/SideBar.vue"),
    },
    {
        path: "/allMenu",
        name: "AllMenu",
        component: () =>
            import ("@/components/AllMenu.vue"),
    },
    {
        path: "/agGrid",
        name: "AgGrid",
        component: () =>
            import ("@/components/AgGrid.vue"),
    },
    {
        path: "/pbList",
        name: "PbList",
        component: PbList,
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;