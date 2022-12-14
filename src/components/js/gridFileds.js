// ag grid 용 컬럼 filed 정의 (JSON)
/**
 *  filedId : [
 *   {
 *     field: "companyId", -> bind Key
       headerName: "회사ID",  -> 컬럼명
 *    }
 *  ]
 */
const fileds = {
    //충전기상태
    cpList: [
        { field: "No", width: 60, maxWidth: 60, cellClass: "rag-amber" },
        { field: "+", width: 55, maxWidth: 55, cellRenderer: "GridPlusBtn" },
        { field: "충전기ID", cellClass: "countryCell" },
        { field: "충전기명" },
        { field: "충전소ID" },
        { field: "충전소명", width: 170, minWidth: 170 },
        { field: "충전기상태", cellStyle: { textAlign: "right" } },
        { field: "충전기제조사" },
        { field: "충전기모델명" },
        { field: "상태변경일시" },
        { field: "최종상태", width: 40, minWidth: 40 },
        { field: "최근회원인증", width: 70, minWidth: 70 },
        {
            field: "회원인증상태",
            width: 150,
            minWidth: 150,
            cellRenderer: "MemberLicensesStatus",
        },
        { field: "최근오류" },
        { field: "최근민원" },
    ],
    //사용자리스트
    userList: [{
            field: "authId",
            headerName: "권한ID",
            width: 60,
            maxWidth: 60,
            cellClass: "rag-amber",
            // 그룹의 제목명을 포함해서 보여줄것인가
            showRowGroup: true,
            // 렌더할때 필요한 함수 이름인듯
            cellRenderer: "agGroupCellRenderer",
            // 이 항목으로 그룹을 지을것인가?
            rowGroup: true,
        },
        {
            field: "companyId",
            width: 55,
            maxWidth: 55,
            headerName: "회사ID",
        },
        {
            width: 55,
            maxWidth: 55,
            headerName: "회사ID",
            cellRenderer: "GridPlusBtn",
        },
        { field: "email", headerName: "이메일", cellClass: "countryCell" },
        { field: "empNo", headerName: "사번" },
        { field: "mobileNo", headerName: "휴대폰번호" },
        { field: "telNo", headerName: "전화번호" },
        { field: "useYn", headerName: "사용여부" },
        { field: "userId", headerName: "ID" },
        { field: "userNm", headerName: "이름" },
    ],
    //플랫폼 고객사(CPO) 관리
    cpoList: [
        { field: "rownumber", headerName: "No", width: 60, maxWidth: 60 },
        { field: "custComNm", headerName: "고객사명" },
        { field: "custComId", headerName: "고객사 ID" },
        { field: "bizNum", headerName: "사업자등록번호" },
        { field: "mgrNm", headerName: "고객사 담당자" },
        { field: "signetMgrNm", headerName: "SK시그넷 담당자" },
        { field: "custComStat", headerName: "고객사 상태" },
        { field: "regDt", headerName: "등록일" },
    ],
    //공통코드 관리(대분류)
    commonCodeList: [
        { field: "rownumber", headerName: "No", width: 60, maxWidth: 60 },
        { field: "mainClassCd", headerName: "대분류코드" },
        { field: "mainClassNm", headerName: "대분류명" },
        { field: "useYn", headerName: "사용여부" },
        { field: "descr", headerName: "설명" },
        { field: "updateBtn", headerName: "수정", cellRenderer: "GridModBtn" },
    ],
    //공통코드 관리 (소분류)
    commonChildCodeList: [
        { field: "rownumber", headerName: "No", width: 60, maxWidth: 60 },
        { field: "mdlClassCd", headerName: "소분류코드" },
        { field: "mdlClassNm", headerName: "소분류명" },
        { field: "useYn", headerName: "사용여부" },
        { field: "relatCd1", headerName: "참조1" },
        { field: "relatCd2", headerName: "참조2" },
        { field: "relatCd3", headerName: "참조3" },
        { field: "desrc", headerName: "설명" },
        { field: "updateBtn", headerName: "수정", cellRenderer: "GridModBtn" },
    ],
    //배치작업 관리
    batchInfoList: [
        { field: "rownumber", headerName: "No", width: 60, maxWidth: 60 },
        { field: "bthId", headerName: "배치ID" },
        { field: "bthNm", headerName: "배치명" },
        { field: "gpNm", headerName: "배치그룹명" },
        { field: "fileNm", headerName: "배치파일명" },
        { field: "bthDtText", headerName: "배치시간" },
        { headerName: "최종배치일시" },
        { headerName: "최종배치결과" },
        { field: "lastUpDt", headerName: "배치파일 최종 업데이트일" },
    ],
    //ag-grid  group 기능 테스트용
    groupList: [
        // {
        //     headerName: "Group",
        //     showRowGroup: true,
        //     cellRenderer: "agGroupCellRenderer",
        // },
        {
            field: "authId",
            headerName: "권한ID",
            width: 60,
            maxWidth: 60,
            cellClass: "rag-amber",
        },
        {
            field: "companyId",
            headerName: "회사ID",
            cellRenderer: "GridPlusBtn",
        },
        {
            field: "email",
            headerName: "이메일",
            cellClass: "countryCell",
        },
        { field: "empNo", headerName: "사번" },
        {
            field: "mobileNo",
            headerName: "휴대폰번호",
        },
        {
            field: "telNo",
            headerName: "전화번호",
        },
        {
            field: "useYn",
            headerName: "사용여부",
        },
        { field: "userId", headerName: "ID" },
        { field: "userNm", headerName: "이름" },
    ],
};
// id에 해당하는 컬럼 List 를 리턴 -> 사용할 페이지에 import후 메서드 실행
export function getFileds(id, setting) {
    var setFileds = fileds[id];
    if (setting != null) {
        setFileds.forEach((obj) => {
            if (obj.field === "updateBtn") {
                obj.cellRendererParams = setting;
                return;
            }
        });
    }
    return setFileds;
}

export function setBindRenderer(id) {
    var setFileds = fileds[id];
    setFileds.forEach((obj) => {
        if (obj.field === "updateBtn") {
            obj.cellRendererParams = setting;
        }
    });

    return setFileds;
}