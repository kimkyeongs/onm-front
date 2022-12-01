const getters = {
    token: (state) => state.authUser.token,
    userId: (state) => state.authUser.userId,
    routeParams: (state) => state.setRouterParams.routeParams,
    searchParams: (state) => state.setSearchParams.searchParams,
    pageParams: (state) => state.setPageParams.pageParams,
};
export default getters;