import request from "@/utils/request";
import endpoints from "./setting/serverEndPoint";
import store from "@/store";
const url = endpoints.getUrl("gw");

//test -- userList
export function getUserList(data) {
    console.log(data.token);
    return request({
        url: url + "/ba/user/",
        method: "get",
        data,
        headers: {
            Authorization: data.token,
        },
    });
}

//test
export function getCpInfo(data) {
    return request({
        url: url + "/ba/test/",
        method: "get",
        data,
        headers: {
            Authorization: data.token,
        },
    });
}