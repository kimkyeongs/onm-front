<template>
  <section class="onmContent">
    <head-title title="배치작업정보 상세보기"/>
    <div class="flex-row">
      <!-- 배치 기본정보 -->
      <div class="col-lg-6 col-md-12">
        <sub-title title="배치 기본정보" />
        <div class="table">
          <table>
            <caption class="sr-only">배치 기본정보</caption>
            <colgroup>
              <col width="20%">
              <col width="30%">
              <col width="20%">
              <col width="*">
            </colgroup>
            <tbody>
              <tr>
                <th scope="row"><span>배치ID</span></th>
                <td></td>
                <th scope="row" class="required"><span>배치명</span></th>
                <td></td>
              </tr>
              <tr>
                <th scope="row" class="required"><span>배치그룹명</span></th>
                <td></td>
                <th scope="row" class="required"><span>배치파일명</span></th>
                <td></td>
              </tr>
              <tr>
                <th scope="row"><span>배치시간</span></th>
                <td></td>
                <th scope="row"><span>최종수정일시</span></th>
                <td></td>
              </tr>
              <tr>
                <th scope="row"><span>배치파일경로</span></th>
                <td colspan="3"></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      
      <!-- 배치파일 최종 업데이트일 -->
      <div class="col-lg-6 col-md-12 subject">
        <sub-title title="배치파일 최종 업데이트일" />
        <div class="table">
          <table>
            <caption class="sr-only">배치파일 최종 업데이트일</caption>
            <colgroup>
              <col width="30%">
              <col width="*">
            </colgroup>
            <tbody>
              <tr>
                <th scope="row"  class="required"><span>배치파일 최종업데트일</span></th>
                <td>
                  <div class="col-lg-5">
                    <date-picker />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p class="infoText">※ 배치파일을 수정한 경우 업데이트일을 위에서 선택해 주세요.</p>
        <sub-title class="mt-20" title="비고" />
        <div class="defaultBox" style="height: 75px;">
          비고내용
        </div>
      </div>
    </div>
    <div class="btn-area clearFix">
      <div class="pull-left">
        <button type="button" class="btn btn-default btn-yellow btn-fixed">목록</button>
      </div>
      <div class="pull-right">
        <button type="button" class="btn btn-default btn-orange btn-fixed">수정</button>
      </div>
    </div>
    <!-- 필터 -->
    <div class="pagekeyWord-wrap">
      <page-count />
      <div class="gridMultiSearch">
        <div class="searchGroup">
          <label for="">배치결과</label>
          <v-select
            :items="items"
            class="selectBox"
            style="width: 200px;"
            label="선택"
            dense
            solo />
        </div>
        <div class="searchGroup">
          <label for="">에러코드</label>
          <input type="text" class="form-control" style="width: 200px;">
        </div>
        <div class="gridMultiSearch-btnGroup">
          <button type="button" class="btn btn-gray btn-md">초기화</button>
          <button type="button" class="btn btn-orange btn-md">검색</button>
        </div>
      </div>
    </div>
    <!-- GRID -->
    <sample-ag-grid />
    <!-- 이용가이드 -->
    <sub-title title="이용가이드" />
    <use-guide
      :useGuideLists="useGuideLists" />
  </section>
</template>

<script>
import HeadTitle from '@/components/HeadTitle'
import SubTitle from '@/components/SubTitle'
import UseGuide from '@/components/UseGuide'
import DatePicker from '@/components/DatePicker'
import PageCount from '@/components/PageCount'
import SampleAgGrid from '@/components/SampleAgGrid'

export default {
  components: {
    HeadTitle,
    SubTitle,
    UseGuide,
    DatePicker,
    PageCount,
    SampleAgGrid
  },
  data() {
    return {
      useGuideLists: [
        '- 이 페이지는 플랫폼통합관리자가 배치이력을 관리하는 페이지로 플랫폼통합관리자만 사용이 가능합니다.',
        '- 이 페이지는 실행된 배치결과를 모니터링 할 수 있으며, 배치처리 및 실행과 관련하여서는 개발파트와 별도 협의하시면 됩니다.',
      ],
      items: ['아이템-1', '아이템-2', '아이템-3'],
    }
  },
  computed: {
  },
  created() {
  }, 
  watch: {
  },
  methods: {

  }
}
</script>

<style scoped>
</style>