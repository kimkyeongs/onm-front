<template>
  <section class="onmContent">
    <head-title title="배치작업정보 관리" />
    <div class="statusArea-wrap">
      <search-btnOption :searchDownloadOption="false" />
    </div>
    <!-- 검색영역 -->
    <div v-if="searchIsActive" class="searchArea mt-3 mb-5">
      <div class="row-form mb-3">
        <div class="col-lg-1 col-md-2">
          <label for="">배치그룹선택</label>
        </div>
        <div class="col-lg-2 col-md-4">
          <v-select
            v-model="searchValues.batchGroup"
            :items="batchCodeList"
            class="selectBox"
            label="선택"
            dense
            solo
            object
            item-text="mdlClassNm"
            item-value="mdlClassCd"
          />
        </div>
        <div class="col-lg-1 col-md-2">
          <label for="">배치결과</label>
        </div>
        <div class="col-lg-2 col-md-4">
          <v-select
            v-model="searchValues.batchResult"
            :items="batchResultCodeList"
            item-text="mdlClassNm"
            item-value="mdlClassCd"
            class="selectBox"
            label="선택"
            dense
            solo
          />
        </div>
        <div class="col-lg-1 col-md-2">
          <label for="">배치ID</label>
        </div>
        <div class="col-lg-2 col-md-4">
          <input
            type="text"
            v-model="searchValues.bthId"
            class="form-control"
            placeholder="배치명"
          />
        </div>
        <div class="col-lg-1 col-md-2">
          <label for="">배치명</label>
        </div>
        <div class="col-lg-2 col-md-4">
          <input
            type="text"
            v-model="searchValues.bthNm"
            class="form-control"
            placeholder="배치파일명"
          />
        </div>
      </div>
      <btn-reset-search @searchBtn="fnSearchFilters" @resetBtn="fnResetBtn" />
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
          class="btn btn-default btn-orange btn-fixed"
          @click="fnInsertBatch"
        >
          등록
        </button>
      </div>
    </div>
    <!-- 이용가이드 -->
    <sub-title title="이용가이드" />
    <use-guide :useGuideLists="useGuideLists" />
  </section>
</template>

<script>
import HeadTitle from "@/components/HeadTitle";
import SubTitle from "@/components/SubTitle";
import SearchBtnOption from "@/components/SearchBtnOption";
import BtnResetSearch from "@/components/BtnResetSearch";
import PageCount from "@/components/PageCount";
import SearchFilter from "@/components/SearchFilter";
import UseGuide from "@/components/UseGuide";
import SampleAgGrid from "@/components/SampleAgGrid";

import {
  getBatchInfoList,
  setBatchInfo,
  updateBatchInfo,
} from "@/api/bathInfo_api";

import { getCommonCode } from "@/api/commonCode_api";

import { mapState } from "vuex";

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
  },
  data() {
    return {
      useGuideLists: [
        "- 이 페이지는 플랫폼통합관리자가 배치이력을 관리하는 페이지로 플랫폼통합관리자만 사용이 가능합니다.",
        "- 이 페이지는 실행된 배치결과를 모니터링 할 수 있으며, 배치처리 및 실행과 관련하여서는 개발파트와 별도 협의하시면 됩니다. ",
      ],
      searchFilters: [],
      batchCodeList: null,
      batchResultCodeList: null,
      searchValues: {
        batchGroup: null,
        batchResult: null,
        bthId: null,
        bthNm: null,
      },
    };
  },
  computed: {
    ...mapState({
      searchIsActive: (state) => state.settings.searchIsActive,
    }),
  },
  beforeMount() {
    this.getCodes({ mainClassCd: "B0000" }, "1");
    this.getCodes({ mainClassCd: "B0001" }, "2");
  },
  mounted() {},
  methods: {
    fnResetBtn() {
      this.searchFilters = [];
      this.searchValues = {
        batchGroup: null,
        batchResult: null,
        bthId: null,
        bthNm: null,
      };
    },
    fnSearchFilters() {
      this.searchFilters = [];

      var batchGropNm = this.batchCodeList.filter((items) => {
        return items.mdlClassCd == this.searchValues.batchGroup;
      });

      var batchResultNm = this.batchResultCodeList.filter((items) => {
        return items.mdlClassCd == this.searchValues.batchResult;
      });
      this.searchFilters.push({
        filterTitle: "배치그룹",
        filterText: batchGropNm[0].mdlClassNm,
      });
      this.searchFilters.push({
        filterTitle: "배치결과",
        filterText: batchResultNm[0].mdlClassNm,
      });
      this.searchFilters.push({
        filterTitle: "배치ID",
        filterText: this.searchValues.bthId,
      });
      this.searchFilters.push({
        filterTitle: "배치명",
        filterText: this.searchValues.bthNm,
      });
    },
    async fnGetBatchInfoList({}) {
      await getBatchInfoList({}).then((response) => {});
    },
    async getCodes(param, gubun) {
      await getCommonCode(param).then((response) => {
        if (gubun === "1") {
          this.batchCodeList = response.data;
        } else {
          this.batchResultCodeList = response.data;
        }
      });
    },
    fnInsertBatch() {
      this.$router
        .push({
          name: "batchJobInfoManageInsert",
        })
        .catch(() => {});
    },
  },
};
</script>

<style></style>
