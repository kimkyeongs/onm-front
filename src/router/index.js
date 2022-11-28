import Vue from "vue";
import VueRouter from "vue-router";
import PbList from "@/views/pub/PbList.vue";
import Layout from "@/layout/appLayout.vue";
import platformRoutes from "@/router/modules/platformRoutes";
import chargerRoutes from "@/router/modules/chargerRoutes";
import inteplatformRoutes from "@/router/modules/inteplatformRoutes";

Vue.use(VueRouter);
const routes = [
    //=============================== 개발 routing ==========================
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

    chargerRoutes,
    platformRoutes,
    inteplatformRoutes,
    //=============================== 개발 routing END ==========================
    //=============================== 퍼블리싱 url ==========================
    {
        path: "/pbList",
        name: "PbList",
        component: PbList,
    },
    {
        path: "/design",
        name: "Design",
        component: () =>
            import ("@/views/pub/Design.vue"),
    },
    {
        path: "/headerTop",
        name: "HeaderTop",
        component: () =>
            import ("@/views/pub/components/HeaderTop.vue"),
    },
    {
        path: "/footerBottom",
        name: "FooterBottom",
        component: () =>
            import ("@/views/pub/components/FooterBottom.vue"),
    },
    {
        path: "/sideBar",
        name: "SideBar",
        component: () =>
            import ("@/views/pub/components/SideBar.vue"),
    },
    // {
    //   path: '/noticeList',
    //   name: 'NoticeList',
    //   component: () => import('@/components/NoticeList.vue')
    // },
    // {
    //   path: '/errorList',
    //   name: 'ErrorList',
    //   component: () => import('@/components/ErrorList.vue')
    // },
    {
        path: "/allMenu",
        name: "AllMenu",
        component: () =>
            import ("@/views/pub/components/AllMenu.vue"),
    },
    {
        path: "/agGrid",
        name: "AgGrid",
        component: () =>
            import ("@/views/pub/components/AgGrid.vue"),
    },
    {
        path: "/SampleAgGrid",
        name: "SampleAgGrid",
        component: () =>
            import ("@/views/pub/components/SampleAgGrid.vue"),
    },
    // {
    //   path: 'moSearch/ModalMobileSearch',
    //   name: '/ModalMobileSearch',
    //   component: () => import('@/components/moSearch/ModalMobileSearch.vue')
    // },
    {
        path: "/Modal",
        name: "Modal",
        component: () =>
            import ("@/views/pub/components/Modal.vue"),
    },
    {
        path: "/Layout",
        name: "Layout",
        component: () =>
            import ("@/views/pub/Layout.vue"),
    },
    {
        path: "/ONM_IA_ADM_SUP_010",
        name: "ONM_IA_ADM_SUP_010",
        component: () =>
            import ("@/views/pub/ONM_IA_ADM_SUP_010.vue"),
    },
    {
        path: "/ONM_IA_ADM_SUP_020",
        name: "ONM_IA_ADM_SUP_020",
        component: () =>
            import ("@/views/pub/ONM_IA_ADM_SUP_020.vue"),
    },
    {
        path: "/ONM_IA_ADM_SUP_030",
        name: "ONM_IA_ADM_SUP_030",
        component: () =>
            import ("@/views/pub/ONM_IA_ADM_SUP_030.vue"),
    },
    {
        path: "/OnmIaAdmSup030P",
        name: "OnmIaAdmSup030P",
        component: () =>
            import ("@/views/pub/ONM_IA_ADM_SUP_030_P.vue"),
    },
    {
        path: "/ONM_IA_ADM_SUP_040",
        name: "ONM_IA_ADM_SUP_040",
        component: () =>
            import ("@/views/pub/ONM_IA_ADM_SUP_040.vue"),
    },
    {
        path: "/ONM_IA_ADM_SUP_060",
        name: "ONM_IA_ADM_SUP_060",
        component: () =>
            import ("@/views/pub/ONM_IA_ADM_SUP_060.vue"),
    },
    {
        path: "/ONM_IA_ADM_SUP_070",
        name: "ONM_IA_ADM_SUP_070",
        component: () =>
            import ("@/views/pub/ONM_IA_ADM_SUP_070.vue"),
    },
    {
        path: "/OnmIaAdmSup070P",
        name: "OnmIaAdmSup070P",
        component: () =>
            import ("@/views/pub/ONM_IA_ADM_SUP_070_P.vue"),
    },
    {
        path: "/ONM_IA_ADM_SUP_080",
        name: "ONM_IA_ADM_SUP_080",
        component: () =>
            import ("@/views/pub/ONM_IA_ADM_SUP_080.vue"),
    },
    {
        path: "/ONM_IA_ADM_SUP_090",
        name: "ONM_IA_ADM_SUP_090",
        component: () =>
            import ("@/views/pub/ONM_IA_ADM_SUP_090.vue"),
    },
    {
        path: "/ONM_IA_ADM_SUP_100",
        name: "ONM_IA_ADM_SUP_100",
        component: () =>
            import ("@/views/pub/ONM_IA_ADM_SUP_100.vue"),
    },
    {
        path: "/ONM_IA_ADM_SUP_110",
        name: "ONM_IA_ADM_SUP_110",
        component: () =>
            import ("@/views/pub/ONM_IA_ADM_SUP_110.vue"),
    },
    {
        path: "/ONM_IA_ADM_SUP_120",
        name: "ONM_IA_ADM_SUP_120",
        component: () =>
            import ("@/views/pub/ONM_IA_ADM_SUP_120.vue"),
    },
    // 플랫폼 관리
    {
        path: "/ONM_IA_ADM_COM_010",
        name: "ONM_IA_ADM_COM_010",
        component: () =>
            import ("@/views/pub/ONM_IA_ADM_COM_010.vue"),
    },
    {
        path: "/ONM_IA_ADM_COM_030",
        name: "ONM_IA_ADM_COM_030",
        component: () =>
            import ("@/views/pub/ONM_IA_ADM_COM_030.vue"),
    },
    {
        path: "/ONM_IA_ADM_COM_040",
        name: "ONM_IA_ADM_COM_040",
        component: () =>
            import ("@/views/pub/ONM_IA_ADM_COM_040.vue"),
    },
    {
        path: "/ONM_IA_ADM_COM_060",
        name: "ONM_IA_ADM_COM_060",
        component: () =>
            import ("@/views/pub/ONM_IA_ADM_COM_060.vue"),
    },
    {
        path: "/ONM_IA_ADM_COM_070",
        name: "ONM_IA_ADM_COM_070",
        component: () =>
            import ("@/views/pub/ONM_IA_ADM_COM_070.vue"),
    },
    {
        path: "/ONM_IA_ADM_COM_090",
        name: "ONM_IA_ADM_COM_090",
        component: () =>
            import ("@/views/pub/ONM_IA_ADM_COM_090.vue"),
    },
    {
        path: "/ONM_IA_ADM_COM_120",
        name: "ONM_IA_ADM_COM_120",
        component: () =>
            import ("@/views/pub/ONM_IA_ADM_COM_120.vue"),
    },
    {
        path: "/ONM_IA_ADM_COM_110",
        name: "ONM_IA_ADM_COM_110",
        component: () =>
            import ("@/views/pub/ONM_IA_ADM_COM_110.vue"),
    },
    //=============================== 퍼블리싱 url END ==========================
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;