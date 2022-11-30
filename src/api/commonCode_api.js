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

//공통코드관리등록(대분류)
export function setCommonMainCode(data) {
    return request({
        url: url + "/inteplatform/code/insertCommonMainCode",
        method: "post",
        data,
    });
}

//공통코드관리(소분류)
export function getCommonChildCode(data) {
    return request({
        url: url + "/inteplatform/code/selectCommonChildCode",
        method: "post",
        data,
    });
}

//공통코드관리등록(소분류)
export function setCommonChildCode(data) {
    return request({
        url: url + "/inteplatform/code/insertCommonChildCode",
        method: "post",
        data,
    });
}