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
      <page-count @selected="fnCustomLimit" />
      <search-filter :searchFilter="searchFilters" @resetBtn="fnResetBtn" />
    </div>
    <!-- GRID -->
    <ag-grid
      v-bind:dataList="this.dataList"
      v-bind:pageCnt="this.pageArg.pageCnt"
      v-bind:page="this.pageArg.page"
      v-bind:filedId="this.filedId"
      @clickData="fnBatchInfoDetail"
      :key="gridKey"
    />
    <Pagination
      v-bind:listCount="this.pageArg.pageCnt"
      v-bind:customLimit="this.pageArg.rows"
      :key="pageKey"
    />
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
import AgGrid from "@/components/AgGrid";
import Pagination from "@/components/Pagination";

import { getBatchInfoList } from "@/api/bathInfo_api";
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
    AgGrid,
    Pagination,
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
      dataList: null,
      pageArg: {
        page: 1,
        rows: 10,
        pageCnt: 0,
      },
      pageKey: 100,
      gridKey: 0,
      filedId: "batchInfoList",
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
  mounted() {
    this.fnGetBatchInfoList(this.searchValues);
  },
  methods: {
    fnResetBtn() {
      this.searchFilters = [];
      this.searchValues = {
        batchGroup: null,
        batchResult: null,
        bthId: null,
        bthNm: null,
      };
      this.searchValues.page = this.pageArg.page;
      this.searchValues.rows = this.pageArg.rows;
      this.fnGetBatchInfoList(this.searchValues);
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
      this.searchValues.page = this.pageArg.page;
      this.searchValues.rows = this.pageArg.rows;
      this.fnGetBatchInfoList(this.searchValues);
    },
    async fnGetBatchInfoList(obj) {
      await getBatchInfoList(obj).then((response) => {
        this.dataList = response.data.rows;
        this.pageArg.rows = response.data.rowPerPage;
        this.pageArg.page = response.data.page;
        this.pageArg.pageCnt = response.data.total;
        this.gridKey += 1;
        this.pageKey += 1;
      });
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
    fnCustomLimit(limit) {
      this.pageArg.rows = limit;
      this.searchValues.rows = limit;
      this.searchValues.page = this.pageArg.page;
      this.fnGetBatchInfoList(this.searchValues);
    },
    fnInsertBatch() {
      this.$router
        .push({
          name: "batchJobInfoManageInsert",
        })
        .catch(() => {});
    },
    fnBatchInfoDetail(obj) {
      this.$router
        .push({
          name: "batchJobInfoManageDetail",
          params: { bthId: obj.data.bthId },
        })
        .catch(() => {});
    },
  },
};
</script>

<style></style>
