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
        config.headers["Content-Type"] = "application/json; charset=utf-8";
        config.headers["Authorization"] = store.getters.token;

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
        const data = response.data.data;
        const headers = response.headers;

        if (!data) {
            return Promise.reject(new Error("Network Error"));
        }
        return { data: data, headers };
    },
    (error) => {
        router.push({ name: "error", params: {} });
        return Promise.reject(error);
    }
);

export default service;