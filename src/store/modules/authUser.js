import { getJwtToken } from "@/api/auth_api";
const getDefaultState = () => {
    return {
        token: "", //token
        userId: "",
        userNm: "",
    };
};

const state = getDefaultState();
const mutations = {
    //state 생성
    RESET_STATE: (state) => {
        Object.assign(state, getDefaultState());
    },
    SET_TOKEN: (state, token) => {
        state.token = token;
    },

    SET_USERID: (state, userId) => {
        state.userId = userId;
    },
    SET_USERNM: (state, userNm) => {
        state.userNm = userNm;
    },
};

const actions = {
    // user login
    userLogin({ commit }, userInfo) {
        const { userId, userPassword } = userInfo;

        return new Promise((resolve, reject) => {
            getJwtToken({
                    userId: userId.trim(),
                    userPassword: userPassword,
                })
                .then((response) => {
                    const result = response;
                    const key = "Authorization";
                    const token = result.headers.get(key);
                    commit("SET_TOKEN", token);
                    resolve(response);
                })
                .catch((error) => {
                    console.log(error);
                    reject(error.message);
                });
        });
    },

    // user logout
    logout({ commit, state }) {
        new Promise((resolve, reject) => {
            removeToken(); // must remove  token  first
            commit("SET_TOKEN", "");
            resetRouter();
            commit("SET_EMPLOYEENAME", "");
            commit("SET_EMPLOYEENO", "");
            commit("SET_DEPARTMENTNO", "");
            commit("SET_TEAMNO", "");
            commit("SET_AUTHID", "");
            commit("SET_USERINFO", "");
            commit("SET_MENU", "");
            resolve();
            return {
                code: 200,
                data: "success",
            };
        }).catch((error) => {
            reject(error);
        });
    },

    //메뉴 권한 체크
    menuBtnAuthCheck({ commit }, authParam) {
        const { menuId, authId, authToken } = authParam;
        return new Promise((resolve, reject) => {
            menuBtnAuthCheck({ menuId: menuId, authId: authId, authToken: authToken })
                .then((response) => {
                    if (response.code == "500") {
                        reject(response.message);
                        return;
                    }
                    resolve(response.data);
                })
                .catch((error) => {
                    console.log(error);
                    reject(error.message);
                });
        });
    },

    //비밀번호 분실 -> 아이디 확인
    emailIdCheck({ commit }, params) {
        const { emailId } = params;
        return new Promise((resolve, reject) => {
            emailIdCheck({ emailId: emailId })
                .then((response) => {
                    if (response.code == "500") {
                        reject(response);
                        return;
                    }
                    resolve(response);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    },

    //비밀번호 분실 -> 이메일 전송
    emailSendPassword({ commit }, params) {
        const { emailId } = params;
        return new Promise((resolve, reject) => {
            emailSendPassword({ emailId: emailId })
                .then((response) => {
                    if (response.code == "500") {
                        reject(response);
                        return;
                    }
                    resolve(response);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    },

    // remove token
    resetToken({ commit }) {
        return new Promise((resolve) => {
            removeToken(); // must remove  token  first
            commit("SET_ROLES", []);
            commit("RESET_STATE");
            resolve();
        });
    },
};

export default {
    namespaced: true, // ? 네임스페이스를 사용할지 여부를 정한다.
    state,
    mutations,
    actions,
};