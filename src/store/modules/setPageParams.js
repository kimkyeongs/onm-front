const getDefaultState = () => {
    return {
        pageParams: {},
    };
};
const state = getDefaultState();
const mutations = {
    //state 생성
    RESET_STATE: (state) => {
        Object.assign(state, getDefaultState());
    },
    SET_PAGE_PARAMS(state, pageParams) {
        state.pageParams = pageParams;
    },
};

const actions = {
    setParams({ commit }, params) {
        commit("SET_PAGE_PARAMS", params);
    },
};

export default {
    namespaced: true, // ? 네임스페이스를 사용할지 여부를 정한다.
    state,
    mutations,
    actions,
};