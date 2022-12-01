import request from "@/utils/request";
import endpoints from "./setting/serverEndPoint";
const url = endpoints.getUrl("gw");

//CPO 리스트조회(그리드)
export function getCpoLists(data) {
    return request({
        url: url + "/inteplatform/cpo/selectCpoList",
        method: "post",
        data,
    });
}

//CPO 등록
export function insertCpo(data) {
    return request({
        url: url + "/inteplatform/cpo/insertCpo",
        method: "post",
        data,
    });
}

//CPO 상세조회
export function selectCpo(data) {
    return request({
        url: url + "/inteplatform/cpo/selectCpo",
        method: "post",
        data,
    });
}

//CPO 수정
export function updateCpo(data) {
    return request({
        url: url + "/inteplatform/cpo/updateCpo",
        method: "post",
        data,
    });
}