export const inteplatformRoutesList = [
    //플랫폼 고객사(CPO) 관리
    {
        path: "/inteplatform/cpoManagement",
        name: "cpoManagement",
        props: true,
        component: () =>
            import ("@/views/inteplatform/cpo/cpoManagement.vue"),
    },
    //플랫폼 고객사(CPO) 등록
    {
        path: "/inteplatform/insertCpo",
        name: "insertCpo",
        props: true,
        component: () =>
            import ("@/views/inteplatform/cpo/insertCpo.vue"),
    },
    //플랫폼 고객사(CPO) 수정
    {
        path: "/inteplatform/updateCpo",
        name: "updateCpo",
        props: true,
        component: () =>
            import ("@/views/inteplatform/cpo/updateCpo.vue"),
    },
    //플랫폼 고객사(CPO) 상세보기
    {
        path: "/inteplatform/cpoManagementDetail",
        name: "cpoManagementDetail",
        props: true,
        component: () =>
            import ("@/views/inteplatform/cpo/cpoManagementDetail.vue"),
    },
    {
        path: "/inteplatform/updateCpo",
        name: "updateCpo",
        props: true,
        component: () =>
            import ("@/views/inteplatform/cpo/updateCpo.vue"),
    },
    //충전기 연결포트 통계
    {
        path: "/inteplatform/staticsManagement",
        name: "staticsManagement",
        props: true,
        component: () =>
            import ("@/views/inteplatform/cpo/staticsManagement.vue"),
    },
];