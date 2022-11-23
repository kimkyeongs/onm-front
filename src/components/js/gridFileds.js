const fileds = {
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

    userList: [{
            field: "authId",
            headerName: "권한ID",
            width: 60,
            maxWidth: 60,
            cellClass: "rag-amber",
        },
        {
            field: "companyId",
            width: 55,
            maxWidth: 55,
            headerName: "회사ID",
            //cellRenderer: "GridPlusBtn",
        },
        {
            field: "companyId",
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
};

export function getFileds(id) {
    if (id == null || id == "" || id == undefined)
        alert("컬럼이 존재하지 않습니다");
    return fileds[id];
}