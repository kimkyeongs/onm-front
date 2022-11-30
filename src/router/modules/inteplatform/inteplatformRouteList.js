export const inteplatformRoutesList = [
    //플랫폼 고객사(CPO) 관리
    {
        path: "/inteplatform/cpoManagement",
        name: "cpoManagement",
        props: true,
        component: () =>
            import ("@/views/inteplatform/cpoManagement.vue"),
    },
    //플랫폼 고객사(CPO) 등록
    {
        path: "/inteplatform/insertCpo",
        name: "insertCpo",
        props: true,
        component: () =>
            import ("@/views/inteplatform/insertCpo.vue"),
    },
    //플랫폼 고객사(CPO) 수정
    {
        path: "/inteplatform/updateCpo",
        name: "updateCpo",
        props: true,
        component: () =>
            import ("@/views/inteplatform/updateCpo.vue"),
    },
    //플랫폼 고객사(CPO) 상세보기
    {
        path: "/inteplatform/cpoManagementDetail",
        name: "cpoManagementDetail",
        props: true,
        component: () =>
            import ("@/views/inteplatform/cpoManagementDetail.vue"),
    },
    {
        path: "/inteplatform/updateCpo",
        name: "updateCpo",
        props: true,
        component: () =>
            import ("@/views/inteplatform/updateCpo.vue"),
    },
];