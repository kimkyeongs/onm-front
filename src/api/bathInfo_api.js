import request from "@/utils/request";
import endpoints from "./setting/serverEndPoint";
const url = endpoints.getUrl("gw");

//배치작업정보 관리 리스트
export function getBatchInfoList(data) {
    return request({
        url: url + "/inteplatform/batchInfo/selectBacthInfoList",
        method: "post",
        data,
    });
}

//배치작업정보 관리 등록
export function setBatchInfo(data) {
    return request({
        url: url + "/inteplatform/batchInfo/insertBatchInfo",
        method: "post",
        data,
    });
}

//배치작업정보 관리 수정
export function updateBatchInfo(data) {
    return request({
        url: url + "/inteplatform/batchInfo/updateBatchInfo",
        method: "post",
        data,
    });
}