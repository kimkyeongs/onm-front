import request from "@/utils/request";
import endpoints from "./setting/serverEndPoint";
const url = endpoints.getUrl("gw");

export function getCpoLists(data) {
    return request({
        url: url + "/inteplatform/cpo/selectCpoList",
        method: "post",
        data,
    });
}