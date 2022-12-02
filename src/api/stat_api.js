import request from "@/utils/request";
import endpoints from "./setting/serverEndPoint";
const url = endpoints.getUrl("gw");

//CPO 리스트조회(그리드)
export function excelDownload(data) {
  return request({
    url: url + "/inteplatform/excel/excelDownload",
    method: "post",
    data,
    responseType: "arraybuffer",
  });
}
