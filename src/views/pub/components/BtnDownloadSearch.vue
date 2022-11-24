<template>
  <div
    class="text-center">
      <ul class="download-info">
        <li>- 엑셀파일 변환을 원하는 컬럼을 선택하고 컬럼 필터값들을 선택해 주세요.</li>
        <li>- (다중)선택 항목들은 AND(모두 만족하는) 조건으로, 직접 입력하는 항목들은 LIKE(포함하는) 조건으로 데이터를 추출합니다.</li>
        <li>- 파일 다운로드 진행 중 다른 메뉴로 이동하거나 웹브라우저를 닫는 경우 파일 다운로드는 종료 됩니다. </li>
      </ul>
    <button
      type="button"
      class="btn btn-default btn-gray">
      다운로드 옵션 초기화
    </button>
    <button type="submit"
      class="btn btn-default btn-orange btn-fixed">
      다운로드
      <i class="icon icon-sm icon-download" />
    </button>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  .content-wrap .searchArea .download-info{
    font-size: 14px;
    margin-bottom: 20px;
    padding: 10px 0;
    border-top: 1px solid #d4dde0;
    border-bottom: 1px solid #d4dde0;
  }
  .content-wrap .searchArea .download-info li{
    color: #555;
    padding-left: 10px;
    text-align: left;
  }
</style>