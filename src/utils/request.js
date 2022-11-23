import axios from "axios";
import router from "@/router";
import store from "@/store";

// create an axios instance
const service = axios.create({
    baseURL: process.env.VUE_APP_BASE_API,
    withCredentials: true,
    timeout: 1000 * 100, // request timeout
});

// request interceptor
service.interceptors.request.use(
    (config) => {
        if (store.getters.token) {
            config.headers["Authorization"] = store.getters.token;
        }

        return config;
    },
    (error) => {
        console.log(error); // for debug
        return Promise.reject(error);
    }
);

// response interceptor
service.interceptors.response.use(
    (response) => {
        const res = response;

        if (!res) {
            return Promise.reject(new Error("Network Error"));
        }
        /*
                                                                                                            if (res.code != "200") {
                                                                                                                switch (res.code) {
                                                                                                                    case 401:
                                                                                                                        router.push({
                                                                                                                            name: "error",
                                                                                                                            params: {
                                                                                                                                errorMessage: "연결하려는 페이지에 장애로 인하여 일시적으로 페이지를 불러올 수 없습니다. 잠시후 이용해주시기 바랍니다.",
                                                                                                                            },
                                                                                                                        });
                                                                                                                        return Promise.reject(new Error("error"));
                                                                                                                    case 403:
                                                                                                                        router.push({
                                                                                                                            name: "error",
                                                                                                                            params: {
                                                                                                                                errorMessage: "접근 경로가 맞지 않습니다. 잠시 후 이용해주시기 바랍니다.",
                                                                                                                            },
                                                                                                                        });
                                                                                                                        //return Promise.reject(new Error("error"));
                                                                                                                    case 500:
                                                                                                                        router.push({
                                                                                                                            name: "error",
                                                                                                                            params: {
                                                                                                                                errorMessage: "현재 상태가 원활하지 않습니다. 새로고침을 누르거나 잠시 후 다시 이용해 주시기 바랍니다.",
                                                                                                                            },
                                                                                                                        });
                                                                                                                        return Promise.reject(new Error("error"));
                                                                                                                    default:
                                                                                                                        return Promise.reject(res);
                                                                                                                }
                                                                                                            }*/
        return res;
    },
    (error) => {
        router.push({ name: "error", params: {} });
        return Promise.reject(error);
    }
);

export default service;