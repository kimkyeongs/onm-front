import request from "@/utils/request";
import endpoints from "./endpoints";
const boardUrl = endpoints.getUrl("board");

//test
export function getNoticeBoardList(data) {
    return request({
        url: boardUrl + "/board/list",
        method: "post",
        data,
    });
}