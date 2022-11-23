import request from "@/utils/request";
import endpoints from "./setting/serverEndPoint";
const url = endpoints.getUrl("cp");

//test -- jwt
export function getJwtToken(data) {
    return request({
        url: url + "/auth/login",
        method: "post",
        data,
    });
}

//test -- userList
export function getUserList(data) {
    return request({
        url: url + "/user/",
        method: "get",
        data,
    });
}

//test
export function getCpInfo(data) {
    return request({
        url: url + "/user/",
        method: "get",
        data,
    });
}