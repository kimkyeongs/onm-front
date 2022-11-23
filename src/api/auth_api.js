import request from "@/utils/request";
import endpoints from "./setting/serverEndPoint";
const url = endpoints.getUrl("gw");

//test -- jwt
export function getJwtToken(data) {
    return request({
        url: url + "/auth/user/login",
        method: "post",
        data,
    });
}