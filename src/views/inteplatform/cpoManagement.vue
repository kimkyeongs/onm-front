<template>
  <section class="onmContent">
    <head-title title="플랫폼 고객사(CPO) 관리" />
    <div class="statusArea-wrap">
      <search-btnOption :searchDownloadOption="false" />
    </div>
    <!-- 검색영역 -->
    <div v-if="searchIsActive" class="searchArea mt-3 mb-5">
      <div class="row-form mb-3">
        <div class="col-lg-1 col-md-2">
          <label for="">고객사상태</label>
        </div>
        <div class="col-lg-2 col-md-4">
          <v-combobox
            v-model="custComStat"
            :items="items"
            class="multiCombox text-crop"
            label="멀티선택"
            hide-selected
            multiple
            small-chips
            solo
            return-object
            item-text="itemKey"
            item-value="itemValue"
            @change="fnCustComStat"
          >
            <template v-slot:selection="{ item, parent }">
              <v-chip label>
                <span>
                  {{ item.itemKey }}
                </span>
                <v-icon small @click="parent.selectItem(item.itemKey)">
                  $delete
                </v-icon>
              </v-chip>
            </template>
          </v-combobox>
        </div>
        <div class="col-lg-1 col-md-2">
          <label for="">고객사명</label>
        </div>
        <div class="col-lg-2 col-md-4">
          <input
            v-model="searchValue.custComNm"
            type="text"
            class="form-control"
            placeholder="고객사명"
          />
        </div>
        <div class="col-lg-1 col-md-2">
          <label for="">고객사ID</label>
        </div>
        <div class="col-lg-2 col-md-4">
          <input
            v-model="searchValue.custComId"
            type="text"
            class="form-control"
            placeholder="고객사ID"
          />
        </div>
        <div class="col-lg-1 col-md-2">
          <label for="">고객사 담당자명</label>
        </div>
        <div class="col-lg-2 col-md-4">
          <input
            v-model="searchValue.mrgNm"
            type="text"
            class="form-control"
            placeholder="고객사 담당자명"
          />
        </div>
      </div>
      <btn-reset-search @searchBtn="fnSearchBtn" @resetBtn="fnResetBtn" />
    </div>
    <!--// 검색영역 -->
    <!-- 필터 -->
    <div class="pagekeyWord-wrap">
      <page-count @selected="getSelectedValue" />
      <search-filter :searchFilter="searchFilters" />
    </div>
    <!-- GRID -->
    <ag-grid
      v-bind:dataList="this.dataList"
      v-bind:filedId="this.filedId"
      v-bind:pageCnt="this.pageCnt"
      v-bind:page="this.page"
      @clickData="fnClickRowData"
      :key="gridKey"
    />
    <pagination
      v-bind:listCount="this.pageCnt"
      v-bind:customLimit="this.pageArg.rows"
      @paging="nextGetList"
      :key="pageKey"
    />
    <!--// GRID -->
    <div class="btn-area clearFix">
      <div class="pull-right">
        <button
          type="button"
          class="btn btn-default btn-orange btn-fixed"
          @click="fnCpoInsert"
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
import { mapState } from "vuex";
import { getCpoLists } from "@/api/cpo_api";

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
  computed: {
    // searchIsActive
    ...mapState({ searchIsActive: (state) => state.settings.searchIsActive }),
  },
  data: () => ({
    items: [
      { itemKey: "아이템-1", itemvalue: 1 },
      { itemKey: "아이템-2", itemvalue: 2 },
      { itemKey: "아이템-3", itemvalue: 3 },
    ],
    searchFilters: [
      { filterTitle: "권경", filterText: "서울특별시" },
      { filterTitle: "충전소ID", filterText: "SIG000003" },
      { filterTitle: "충전기구분", filterText: "완속" },
      { filterTitle: "운영시작일", filterText: "2022-10-22" },
    ],
    useGuideLists: [
      "- 이 페이지는 플랫폼통합관리자가 고객사의 목록을 관리하는 페이지로 플랫폼통합관리자만 사용이 가능합니다.",
      "- 추가적인 플랫폼 통합관리자 계정이 필요한 경우 시스템관리자에게 수동으로 계정 생성을 요청하셔야 합니다.",
      "- 고객사를 생성허산 후, 고객사 대표관리자는 사용자/권한관리 > 사용자관리에서 생성하시면 됩니다.",
    ],
    filedId: "cpoList",
    dataList: [],
    pageCnt: 1,
    gridKey: 0,
    pageKey: 100,
    pageArg: {
      rows: 10,
      page: 1,
    },
    page: 1,
    custComStat: [],
    searchValue: {
      custComStat: [],
      custComNm: "",
      custComId: "",
      mgrNm: "",
    },
  }),
  mounted() {
    this.fnGetCpoLists(this.pageArg);
  },
  methods: {
    async fnGetCpoLists(obj) {
      await getCpoLists(obj).then((response) => {
        this.rows = response.data.rowPerPage; //페이지당 보여줄 row 갯수
        this.page = response.data.page; // 현재 페이지
        this.pageCnt = response.data.total; //총페이지 갯수
        this.dataList = response.data.rows; // 그리드에 뿌려질 데이터
        console.log(response);
        this.fnForceLender();
      });
    },
    async nextGetList(pageParam) {
      this.pageArg = pageParam;
      await getCpoLists(this.pageArg).then((response) => {
        this.rows = response.data.rowPerPage;
        this.page = response.data.page;
        this.pageCnt = response.data.total;
      });
    },
    async getSelectedValue(param) {
      this.pageArg.rows = param;
      console.log(this.pageArg);
      await getCpoLists(this.pageArg).then((response) => {
        this.rows = response.data.rowPerPage;
        this.page = response.data.page;
        this.pageCnt = response.data.total;
        this.fnForceLender();
      });
    },
    fnCustComStat() {
      this.searchValue.custComStat = [];
      this.custComStat.forEach((item) => {
        this.searchValue.custComStat.push(item.itemvalue);
      });
      console.log(this.searchValue);
    },
    fnClickRowData(val) {
      this.$router
        .replace({
          name: "cpoManagementDetail",
        })
        .catch(() => {});
      console.log(val);
    },
    fnForceLender() {
      this.gridKey += 1;
      this.pageKey += 1;
    },
    fnCpoInsert() {
      this.$router
        .replace({
          name: "insertCpo",
        })
        .catch(() => {});
    },
    fnSearchBtn() {
      console.log("search");
    },
    fnResetBtn() {
      console.log("reset");
    },
  },
};
</script>

<style></style>
