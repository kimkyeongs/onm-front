const getters = {
    token: (state) => state.authUser.token,
    userId: (state) => state.authUser.userId,
    routeParams: (state) => state.setRouterParams.routeParams,
};
export default getters;