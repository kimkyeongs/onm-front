// 엑셀 용 컬럼 filed 정의 (JSON)
/**
 *  filedId : 
 *   {
 *     excelHeader: ["회사ID","회사이름"] 
       excelKey: ["INS","아이엔소프트"]
 *    }
 *  
 */
const fileds = {
  commonCodeManage: {
    excelHeader: [
      "No",
      "대분류코드",
      "대분류명",
      "설명",
      "사용여부",
      "최종수정일",
      "소분류코드",
      "소분류코드명",
      "참조1",
      "참조2",
      "참조3",
      "사용여부",
      "설명",
      "최종수정일",
    ],
    excelKey: [
      "rownumber",
      "mainClassCd",
      "mainClassNm",
      "descr",
      "mainUseYn",
      "mainModDt",
      "mdlClassCd",
      "mdlClassNm",
      "relatCd1",
      "relatCd2",
      "relatCd3",
      "mdlUseYn",
      "desrc",
      "mdlModDt",
    ],
    excelWidth: [
      "50",
      "100",
      "100",
      "300",
      "100",
      "100",
      "100",
      "300",
      "100",
      "100",
      "100",
      "100",
      "100",
      "150",
    ],
    excelDataType: [
      "string",
      "string",
      "string",
      "string",
      "string",
      "string",
      "string",
      "string",
      "string",
      "string",
      "string",
      "string",
      "string",
      "string",
    ],
    pageId: "commonCodeManage",
    excelNm: "공통코드",
  },
};
// id에 해당하는 컬럼 List 를 리턴 -> 사용할 페이지에 import후 메서드 실행
export function getExcelFileds(id) {
  var setFileds = fileds[id];

  return setFileds;
}
