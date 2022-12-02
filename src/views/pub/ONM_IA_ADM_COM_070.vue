<template>
  <section class="onmContent">
    <head-title title="회원정보 엑셀다운로드 모니터링" />
    <div class="statusArea-wrap">
      <search-btnOption />
    </div>
    <!-- 검색영역 -->
    <div v-if="searchIsActive" class="searchArea mt-3 mb-5">
      <div class="row-form mb-3">
        <div class="col-lg-1 col-md-2">
          <div class="checkbox-inline">
            <v-checkbox
              v-model="searchCheck"
              value="고객사명"
              color="orange"
              v-if="checkboxShow"
            />
            <label for="" class="required">고객사명</label>
          </div>
        </div>
        <div class="col-lg-2 col-md-4">
          <v-select :items="items" class="selectBox" label="전체" dense solo />
        </div>
        <div class="col-lg-1 col-md-2">
          <div class="checkbox-inline">
            <v-checkbox
              v-model="searchCheck"
              value="검색일"
              color="orange"
              v-if="checkboxShow"
            />
            <label for="" class="required">검색일</label>
          </div>
        </div>
        <div class="col-lg-2 col-md-4">
          <date-picker :range="range" />
        </div>
        <div class="col-lg-1 col-md-2">
          <div class="checkbox-inline">
            <v-checkbox
              v-model="searchCheck"
              value="사용자ID"
              color="orange"
              v-if="checkboxShow"
            />
            <label for="">사용자ID</label>
          </div>
        </div>
        <div class="col-lg-2 col-md-4">
          <input type="text" class="form-control" placeholder="사용자ID" />
        </div>
        <div class="col-lg-1 col-md-2">
          <div class="checkbox-inline">
            <v-checkbox
              v-model="searchCheck"
              value="사용자명"
              color="orange"
              v-if="checkboxShow"
            />
            <label for="">사용자명</label>
          </div>
        </div>
        <div class="col-lg-2 col-md-4">
          <input type="text" class="form-control" placeholder="사용자명" />
        </div>
      </div>
      <btn-reset-search v-if="searchOption" />
      <btn-download-search
        v-else
        :maskingDownload="true" />
    </div>
    <!--// 검색영역 -->
    <!-- 필터 -->
    <div class="pagekeyWord-wrap">
      <page-count />
      <search-filter :searchFilter="searchFilters" />
    </div>
    <!-- GRID -->
    <sample-ag-grid />
    <!--// GRID -->
    <div class="btn-area clearFix">
      <div class="pull-right">
        <button
          type="button"
          class="btn btn-default btn-gray"
          @click="modalOpen"
        >
          개인정보 마스킹 제거
        </button>
      </div>
    </div>
    <!-- 이용가이드 -->
    <sub-title title="이용가이드" />
    <use-guide :useGuideLists="useGuideLists" />
    <onm-ia-adm-sup030-p />
  </section>
</template>

<script>
import HeadTitle from "@/views/pub/components/HeadTitle"
import SubTitle from "@/views/pub/components/SubTitle"
import SearchBtnOption from "@/views/pub/components/SearchBtnOption"
import BtnResetSearch from "@/views/pub/components/BtnResetSearch"
import PageCount from "@/views/pub/components/PageCount"
import SearchFilter from "@/views/pub/components/SearchFilter"
import UseGuide from "@/views/pub/components/UseGuide"
import SampleAgGrid from "@/views/pub/components/SampleAgGrid"
import OnmIaAdmSup030P from "@/views/pub/ONM_IA_ADM_SUP_030_P" //개인정보 마스킹제거Modal
import DatePicker from "@/views/pub/components/DatePicker"
import BtnDownloadSearch from "@/views/pub/components/BtnDownloadSearch.vue"
import { mapState, mapMutations } from "vuex"

export default {
  components: {
    HeadTitle,
    SubTitle,
    SearchBtnOption,
    BtnResetSearch,
    PageCount,
    SearchFilter,
    UseGuide,
    SampleAgGrid,
    OnmIaAdmSup030P,
    DatePicker,
    BtnDownloadSearch,
  },
  data() {
    return {
      searchCheck: ["고객사명", "검색일", "사용자ID", "사용자명"],
      items: ["아이템-1", "아이템-2", "아이템-3"],
      searchFilters: [
        { filterTitle: "권경", filterText: "서울특별시" },
        { filterTitle: "충전소ID", filterText: "SIG000003" },
        { filterTitle: "충전기구분", filterText: "완속" },
        { filterTitle: "운영시작일", filterText: "2022-10-22" },
      ],
      useGuideLists: [
        "- 이 페이지는 고객사 플랫폼 대표관리자가 사용자의 회원정보 엑셀다운로드 이력을 모니터링하는 페이지 입니다."
      ],
      range: true,
    };
  },
  computed: {
    ...mapState({
      searchIsActive: (state) => state.settings.searchIsActive,
      searchOption: (state) => state.settings.searchOption,
      checkboxShow: (state) => state.settings.checkboxShow,
      isActiveModal: (state) => state.settings.isActiveModal,
    }),
  },
  mounted() {},
  methods: {
    ...mapMutations({
      modalOpen: "settings/MODAL_OPEN",
    }),
  },
};
</script>

<style></style>
