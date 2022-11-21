import request from "@/utils/request";
import endpoints from "./endpoints";
const boardUrl = endpoints.getUrl("board");

//공지사항 목록
export function getNoticeBoardList(data) {
    return request({
        url: boardUrl + "/board/list",
        method: "post",
        data,
    });
}

//공지사항 글 등록
export function putNotice(data) {
    return request({
        url: boardUrl + "/board/put-board",
        method: "post",
        data,
    });
}

//공지사항 글 상세
export function detailNotice(data) {
    return request({
        url: boardUrl + "/board/detail",
        method: "post",
        data,
    });
}

//공지사항 글 수정
export function updateNotice(data) {
    return request({
        url: boardUrl + "/board/update-board",
        method: "post",
        data,
    });
}

//공지사항 글 삭제
export function deleteNotice(data) {
    return request({
        url: boardUrl + "/board/delete-board",
        method: "post",
        data,
    });
}

//프로젝트 게시판 관리 리스트
export function getBoardMasterList(data) {
    return request({
        url: boardUrl + "/board/manage/list",
        method: "post",
        data,
    });
}

//공유 Project List
export function getShareProject(data) {
    return request({
        url: boardUrl + "/board/shareProject-list",
        method: "post",
        data,
    });
}

//프로젝트 게시판 관리 상세
export function getBoardMasterDetail(data) {
    return request({
        url: boardUrl + "/board/manage/detail",
        method: "post",
        data,
    });
}

//프로젝트 게시판 생성
export function putBoardMaster(data) {
    return request({
        url: boardUrl + "/board/manage/put-board-master",
        method: "post",
        data,
    });
}

//프로젝트 게시판 수정
export function updateBoardMaster(data) {
    return request({
        url: boardUrl + "/board/manage/update-board-master",
        method: "post",
        data,
    });
}

//프로젝트 NO -> BOARD_MASTER_INDEX  SELECT
export function selectBoardMasterIndex(data) {
    return request({
        url: boardUrl + "/board/manage/select-board-master",
        method: "post",
        data,
    });
}

//프로젝트 게시판 목록
export function selectProjectBoardList(data) {
    return request({
        url: boardUrl + "/board/project-list",
        method: "post",
        data,
    });
}

//프로젝트 게시판 댓글 목록
export function selectProjectBoardReplyList(data) {
    return request({
        url: boardUrl + "/board/reply/list",
        method: "post",
        data,
    });
}

//프로젝트 게시판 댓글 입력
export function setProjectBoardReply(data) {
    return request({
        url: boardUrl + "/board/reply/put-reply",
        method: "post",
        data,
    });
}

//프로젝트 게시판 댓글 수정
export function updateProjectBoardReply(data) {
    return request({
        url: boardUrl + "/board/reply/update-reply",
        method: "post",
        data,
    });
}

//프로젝트 게시판 댓글 삭제
export function deleteProjectBoardReply(data) {
    return request({
        url: boardUrl + "/board/reply/delete-reply",
        method: "post",
        data,
    });
}