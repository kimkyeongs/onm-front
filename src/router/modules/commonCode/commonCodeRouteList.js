export const commonCodeRouteList = [
    //공통코드 관리
    {
        path: "/commonCode/commonCodeManage",
        name: "commonCodeManage",
        props: true,
        component: () =>
            import ("@/views/inteplatform/commonCode/commonCodeManage.vue"),
    },
];