export const batchJobInfoRouteList = [
    //배치작업정보 관리
    {
        path: "/batchJobInfo/batchJobInfoManage",
        name: "batchJobInfoManage",
        props: true,
        component: () =>
            import ("@/views/inteplatform/batchJobInfo/batchJobInfoManage.vue"),
    },
    //배치작업정보 상세
    {
        path: "/batchJobInfo/batchJobInfoManageDetail",
        name: "batchJobInfoManageDetail",
        props: true,
        component: () =>
            import ("@/views/inteplatform/batchJobInfo/batchJobInfoManageDetail.vue"),
    },
    //배치작업정보 등록
    {
        path: "/batchJobInfo/batchJobInfoManageInsert",
        name: "batchJobInfoManageInsert",
        props: true,
        component: () =>
            import ("@/views/inteplatform/batchJobInfo/batchJobInfoManageInsert.vue"),
    },
    //배치작업정보 수정
    {
        path: "/batchJobInfo/batchJobInfoManageUpdate",
        name: "batchJobInfoManage",
        props: true,
        component: () =>
            import ("@/views/inteplatform/batchJobInfo/batchJobInfoManageUpdate.vue"),
    },
];