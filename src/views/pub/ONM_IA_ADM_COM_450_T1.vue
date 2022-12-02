<template>
  <section class="onmContent">
    <head-title title="알림톡관리" />
    <div class="gridMultiSearch mb-2">
      <div class="searchGroup">
        <label for="">고객사선택</label>
        <v-select
          :items="items"
          class="selectBox"
          style="width: 200px;"
          label="선택"
          dense
          solo />
      </div>
    </div>

    <nav-tabs
      :tabLists="tabLists" />
    <div class="mt-10" v-if="isActiveTab == 0">
      <sub-title title="알림톡 계정관리" />
      <div class="table">
        <table>
          <caption class="sr-only">알림톡 계정관리</caption>
          <colgroup>
            <col width="20%">
            <col width="30%">
            <col width="20%">
            <col width="*">
          </colgroup>
          <tbody>
            <tr>
              <th scope="row"><span>알림톡서비스 제공자</span></th>
              <td></td>
              <th scope="row"><span>serviceNo</span></th>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="btn-area clearFix text-right">
        <button type="button" class="btn btn-default btn-orange btn-fixed">저장</button>
      </div>
      <sub-title title="최종수정자 정보" />
      <div class="table">
        <table>
          <caption class="sr-only">최종수정자 정보</caption>
          <colgroup>
            <col width="20%">
            <col width="30%">
            <col width="20%">
            <col width="*">
          </colgroup>
          <tbody>
            <tr>
              <th scope="row"><span>최종수정자</span></th>
              <td></td>
              <th scope="row"><span>최종수정일시</span></th>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- 이용가이드 -->
      <sub-title class="mt-20" title="이용가이드" />
      <!-- 알림톡 이용가이드
        useGuideLists: [
          "- 이 페이지는 고객사별 알림톡 계정을 관리하는 페이지 입니다.",
        ],
      -->
      <use-guide :useGuideLists="useGuideLists" />
    </div>
    <!-- 알림톡 템플릿 관리 -->
    <div v-else>
      <div class="statusArea-wrap mt-10">
        <search-btnOption :searchDownloadOption="false"/>  
      </div>
      <!-- 검색영역 -->
      <div
        v-if="searchIsActive"
        class="searchArea mt-3 mb-5">
        <div class="row-form mb-3">
          <div class="col-lg-1 col-md-2">
            <label for="">템플릿구분</label>
          </div>  
          <div class="col-lg-2 col-md-4">
            <v-select
              :items="items"
              class="selectBox"
              label="전체/기본/사용자"
              dense
              solo />
          </div>
          <div class="col-lg-1 col-md-2">
            <label for="">사용구분</label>
          </div>
          <div class="col-lg-2 col-md-4">
            <v-select
              :items="items"
              class="selectBox"
              label="선택"
              dense
              solo />
          </div>
          <div class="col-lg-1 col-md-2">
            <label for="">템플릿 제목</label>
          </div>
          <div class="col-lg-2 col-md-4">
            <input type="text" class="form-control" placeholder="템플릿 제목">
          </div>
          <div class="col-lg-1 col-md-2">
            <label for="">템플릿 ID</label>
          </div>
          <div class="col-lg-2 col-md-4">
            <input type="text" class="form-control" placeholder="템플릿 ID">
          </div>
          <div class="col-lg-1 col-md-2">
            <label for="">템플릿맵핑</label>
          </div>
          <div class="col-lg-2 col-md-4">
            <v-select
              :items="items"
              class="selectBox"
              label="전체/맵핑전/맵핑완료"
              dense
              solo />
          </div>
          <div class="col-lg-1 col-md-2">
            <label for="">사용여부</label>
          </div>
          <div class="col-lg-2 col-md-4">
            <v-select
              :items="items"
              class="selectBox"
              label="전체/사용/미사용"
              dense
              solo />
          </div>
        </div>
        <btn-reset-search />
      </div>
      <!--// 검색영역 -->
      <!-- 필터 -->
      <div class="pagekeyWord-wrap">
        <page-count />
        <search-filter
          :searchFilter="searchFilters" />
      </div>
      <!-- GRID -->
      <sample-ag-grid />
      <!--// GRID -->
      <div class="btn-area clearFix text-right">
        <button type="button" class="btn btn-default btn-gray btn-fixed">템플릿다운로드</button>
      </div>
      <!-- 이용가이드 -->
      <sub-title title="이용가이드" />
      <!-- 알림톡 템플릿 관리 이용가이드
        useGuideLists: [
          "- 이 페이지는 고객사별 알림톡 템플릿을 관리하는 페이지 입니다.",
          "- 고객사 대표관리자께서는 하단의 템플릿 다운로드를 통해 템플릿을 다운로드 받으신 후, 계약되신 알림톡 관리자에 로그인 하셔서, 필요한 템플릿을 등록하신 후, 생성된 해당 템플릿ID를 확보하세요.",
          "-위의 목록에서 등록하신 템플릿 제목을 클릭하셔서 수정화면에서 해당 템플릿ID를 등록하시고, 사용을 체크해 두시면 알림톡 사용이 가능합니다.",
        ],
      -->
      <use-guide
        :useGuideLists="useGuideLists" />
    </div> 
  </section>
</template>

<script>
import HeadTitle from "@/views/pub/components/HeadTitle"
import SubTitle from "@/views/pub/components/SubTitle"
import UseGuide from "@/views/pub/components/UseGuide"
import NavTabs from "@/views/pub/components/NavTabs"
import SearchBtnOption from '@/views/pub/components/SearchBtnOption'
import BtnResetSearch from '@/views/pub/components/BtnResetSearch'
import PageCount from '@/views/pub/components/PageCount'
import SearchFilter from '@/views/pub/components/SearchFilter'
import SampleAgGrid from '@/views/pub/components/SampleAgGrid'
import { mapState } from "vuex"

export default {
  components: {
    HeadTitle,
    SubTitle,
    UseGuide,
    NavTabs,
    SearchBtnOption,
    BtnResetSearch,
    PageCount,
    SearchFilter,
    SampleAgGrid
  },
  data() {
    return {
      items: ['아이템-1', '아이템-2', '아이템-3'],
      searchFilters: [
        { filterTitle: '권경', filterText: '서울특별시'},
        { filterTitle: '충전소ID', filterText: 'SIG000003'},
        { filterTitle: '충전기구분', filterText: '완속'},
        { filterTitle: '운영시작일', filterText: '2022-10-22'}
      ],
      tabLists:['알림톡 계정관리', '알림톡 템플릿 관리'],
      useGuideLists: [
        "- 이 페이지는 고객사별 알림톡 계정을 관리하는 페이지 입니다.",
      ],
      
    }
  },
  computed: {
    ...mapState({
      isActiveTab: (state) => state.settings.isActiveTab,
      searchIsActive: (state) => state.settings.searchIsActive,
    }),
  },
}
</script>

<style>

</style>