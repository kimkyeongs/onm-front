import Vue from "vue";
import VueRouter from "vue-router";
import PbList from "@/views/pub/PbList.vue";
import Layout from "@/layout/appLayout.vue";
import platformRoutes from "@/router/modules/platform/platformRoutes";
import chargerRoutes from "@/router/modules/charger/chargerRoutes";
import inteplatformRoutes from "@/router/modules/inteplatform/cpo/inteplatformRoutes";
import commonCodeRoutes from "@/router/modules/inteplatform/commonCode/commonCodeRoutes";
import batchJobInfoRoutes from "@/router/modules/inteplatform/batchJobInfo/batchJobInfoRoutes";

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
    // platformRoutes,
    inteplatformRoutes,
    commonCodeRoutes,
    batchJobInfoRoutes,
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
    // 플랫폼 통합관리
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
    {
        path: "/ONM_IA_ADM_COM_230",
        name: "ONM_IA_ADM_COM_230",
        component: () =>
            import ("@/views/pub/ONM_IA_ADM_COM_230.vue"),
    },
    {
        path: "/ONM_IA_ADM_COM_220",
        name: "ONM_IA_ADM_COM_220",
        component: () =>
            import ("@/views/pub/ONM_IA_ADM_COM_220.vue"),
    },
    {
        path: "/ONM_IA_ADM_COM_320",
        name: "ONM_IA_ADM_COM_320",
        component: () =>
            import ("@/views/pub/ONM_IA_ADM_COM_320.vue"),
    },
    {
        path: "/ONM_IA_ADM_COM_310",
        name: "ONM_IA_ADM_COM_310",
        component: () =>
            import ("@/views/pub/ONM_IA_ADM_COM_310.vue"),
    },
    {
        path: "/ONM_IA_ADM_COM_410",
        name: "ONM_IA_ADM_COM_410",
        component: () =>
            import ("@/views/pub/ONM_IA_ADM_COM_410.vue"),
    },
    {
        path: "/ONM_IA_ADM_COM_400",
        name: "ONM_IA_ADM_COM_400",
        component: () =>
            import ("@/views/pub/ONM_IA_ADM_COM_400.vue"),
    },
    {
        path: "/ONM_IA_ADM_COM_450_T1",
        name: "ONM_IA_ADM_COM_450_T1",
        component: () =>
            import ("@/views/pub/ONM_IA_ADM_COM_450_T1.vue"),
    },
    {
        path: "/ONM_IA_ADM_COM_450_T3",
        name: "ONM_IA_ADM_COM_450_T3",
        component: () =>
            import ("@/views/pub/ONM_IA_ADM_COM_450_T3.vue"),
    },
    {
        path: "/ONM_IA_ADM_COM_450_T4",
        name: "ONM_IA_ADM_COM_450_T4",
        component: () =>
            import ("@/views/pub/ONM_IA_ADM_COM_450_T4.vue"),
    },
    {
        path: "/ONM_IA_ADM_COM_530",
        name: "ONM_IA_ADM_COM_530",
        component: () =>
            import ("@/views/pub/ONM_IA_ADM_COM_530.vue"),
    },
    {
        path: "/ONM_IA_ADM_COM_540",
        name: "ONM_IA_ADM_COM_540",
        component: () =>
            import ("@/views/pub/ONM_IA_ADM_COM_540.vue"),
    },
    {
        path: "/ONM_IA_ADM_COM_490",
        name: "ONM_IA_ADM_COM_490",
        component: () =>
            import ("@/views/pub/ONM_IA_ADM_COM_490.vue"),
    },
    {
        path: "/ONM_IA_ADM_COM_500",
        name: "ONM_IA_ADM_COM_500",
        component: () =>
            import ("@/views/pub/ONM_IA_ADM_COM_500.vue"),
    },
    {
        path: "/ONM_IA_ADM_COM_510",
        name: "ONM_IA_ADM_COM_510",
        component: () =>
            import ("@/views/pub/ONM_IA_ADM_COM_510.vue"),
    },
    {
        path: "/ONM_IA_ADM_COM_520",
        name: "ONM_IA_ADM_COM_520",
        component: () =>
            import ("@/views/pub/ONM_IA_ADM_COM_520.vue"),
    },
    {
        path: "/ONM_IA_ADM_COM_550",
        name: "ONM_IA_ADM_COM_550",
        component: () =>
            import ("@/views/pub/ONM_IA_ADM_COM_550.vue"),
    },
    {
        path: "/ONM_IA_ADM_COM_551",
        name: "ONM_IA_ADM_COM_551",
        component: () =>
            import ("@/views/pub/ONM_IA_ADM_COM_551.vue"),
    },
    {
        path: "/ONM_IA_ADM_COM_460",
        name: "ONM_IA_ADM_COM_460",
        component: () =>
            import ("@/views/pub/ONM_IA_ADM_COM_460.vue"),
    },
    {
        path: "/ONM_IA_ADM_COM_470",
        name: "ONM_IA_ADM_COM_470",
        component: () =>
            import ("@/views/pub/ONM_IA_ADM_COM_470.vue"),
    },
    {
        path: "/ONM_IA_ADM_COM_480",
        name: "ONM_IA_ADM_COM_480",
        component: () =>
            import ("@/views/pub/ONM_IA_ADM_COM_480.vue"),
    },
    {
        path: "/ONM_IA_ADM_COM_481",
        name: "ONM_IA_ADM_COM_481",
        component: () =>
            import ("@/views/pub/ONM_IA_ADM_COM_481.vue"),
    },
    {
        path: "/ONM_IA_ADM_COM_560",
        name: "ONM_IA_ADM_COM_560",
        component: () =>
            import ("@/views/pub/ONM_IA_ADM_COM_560.vue"),
    },
    // 사용자 권한관리
    {
        path: "/ONM_IA_ADM_USE_010",
        name: "ONM_IA_ADM_USE_010",
        component: () =>
            import ("@/views/pub/ONM_IA_ADM_USE_010.vue"),
    },
    //=============================== 퍼블리싱 url END ==========================
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;