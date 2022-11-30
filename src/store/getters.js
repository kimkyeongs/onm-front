const getters = {
    token: (state) => state.authUser.token,
    routeParams: (state) => state.setRouterParams.routeParams,
};
export default getters;