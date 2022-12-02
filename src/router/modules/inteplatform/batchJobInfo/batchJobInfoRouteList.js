export const batchJobInfoRouteList = [
    //공통코드 관리
    {
        path: "/batchJobInfo/batchJobInfoManage",
        name: "batchJobInfoManage",
        props: true,
        component: () =>
            import ("@/views/inteplatform/batchJobInfo/batchJobInfoManage.vue"),
    },
];