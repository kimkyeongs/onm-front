import request from "@/utils/request";
import endpoints from "./setting/serverEndPoint";
const url = endpoints.getUrl("gw");

//jwt 발행
export function getJwtToken(data) {
    return request({
        url: url + "/auth/user/login",
        method: "post",
        data,
    });
}

//수정 혹은 마스킹 제거 팝업 비밀번호 인증
export function popupPwCheck(data) {
    return request({
        url: url + "/auth/user/popupPwCheck",
        method: "post",
        data,
    });
}