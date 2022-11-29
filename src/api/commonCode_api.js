import request from "@/utils/request";
import endpoints from "./setting/serverEndPoint";
const url = endpoints.getUrl("gw");

//공통코드관리(대분류)
export function getCommonMainCode(data) {
    return request({
        url: url + "/inteplatform/code/selectCommonMainCode",
        method: "post",
        data,
    });
}

//공통코드관리(중분류)
export function getCommonChildCode(data) {
    return request({
        url: url + "/inteplatform/code/selectCommonChildCode",
        method: "post",
        data,
    });
}