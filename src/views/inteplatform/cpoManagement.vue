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
            v-model="searchValue.mgrNm"
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
      <search-filter :searchFilter="searchFilters" @resetBtn="fnGridResetBtn" />
    </div>
    <!-- GRID -->
    <ag-grid
      v-bind:dataList="this.dataList"
      v-bind:filedId="this.filedId"
      v-bind:pageCnt="this.pageCnt"
      v-bind:page="this.pageArg.page"
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
          @click="excelTest"
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
//엑셀테스트
import { excelDownload } from "@/api/stat_api";
import { getFileds } from "@/components/js/gridFileds";

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
      { itemKey: "아이템-1", itemValue: 1 },
      { itemKey: "아이템-2", itemValue: 2 },
      { itemKey: "아이템-3", itemValue: 3 },
    ],
    searchFilters: [
      { filterTitle: "고객사상태", filterText: "" },
      { filterTitle: "고객사명", filterText: "" },
      { filterTitle: "고객사ID", filterText: "" },
      { filterTitle: "고객사 담당자명", filterText: "" },
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
    custComStat: [],
    searchValue: {
      custComStatNm: [],
      custComStat: [],
      custComNm: "",
      custComId: "",
      mgrNm: "",
    },
    //엑셀테스트
    columValues: [],
  }),
  mounted() {
    this.fnGetCpoLists(this.pageArg);
    this.fnGetFileds();
  },
  methods: {
    //그리드 데이터
    async fnGetCpoLists(obj) {
      await getCpoLists(obj).then((response) => {
        this.rows = response.data.rowPerPage; //페이지당 보여줄 row 갯수
        this.pageArg.page = response.data.page; // 현재 페이지
        this.pageCnt = response.data.total; //총페이지 갯수
        this.dataList = response.data.rows; // 그리드에 뿌려질 데이터
        this.fnForceLender();
      });
    },
    async nextGetList(pageParam) {
      this.pageArg = pageParam;
      await getCpoLists(this.pageArg).then((response) => {
        this.rows = response.data.rowPerPage;
        this.pageArg.page = response.data.page;
        this.pageCnt = response.data.total;
      });
    },
    // 그리드에 row 몇 개씩 뿌릴지 선택
    async getSelectedValue(param) {
      this.pageArg.rows = param;
      console.log(this.pageArg);
      await getCpoLists(this.pageArg).then((response) => {
        this.rows = response.data.rowPerPage;
        this.pageArg.page = response.data.page;
        this.pageCnt = response.data.total;
        this.fnForceLender();
      });
    },
    // 고객사 상태 멀티셀렉트
    fnCustComStat() {
      this.searchValue.custComStat = [];
      this.searchValue.custComStatNm = [];
      this.custComStat.forEach((item) => {
        this.searchValue.custComStat.push(item.itemValue);
        this.searchValue.custComStatNm.push(item.itemKey);
      });
    },
    // 검색버튼
    fnSearchBtn() {
      this.searchValue.rows = this.pageArg.rows;
      this.searchValue.page = this.pageArg.page;
      console.log(this.searchValue);
      this.fnSetSearchFilterList();
      this.fnGetCpoLists(this.searchValue);
    },
    // 검색결과 필터표시
    fnSetSearchFilterList() {
      var stat = this.searchValue.custComStatNm;
      var nm = this.searchValue.custComStatNm;
      var id = this.searchValue.custComId;
      var mrgNm = this.searchValue.mgrNm;

      this.searchFilters = [];
      if (this.searchValue.custComStatNm == "") {
        this.searchValue.custComStatNm = "";
      }
      this.searchFilters.push({
        filterTitle: "고객사상태",
        filterText: this.searchValue.custComStatNm,
      });
      this.searchValue.custComNm != "";
      this.searchFilters.push({
        filterTitle: "고객사명",
        filterText: this.searchValue.custComNm,
      });

      this.searchFilters.push({
        filterTitle: "고객사ID",
        filterText: this.searchValue.custComId,
      });
      this.searchFilters.push({
        filterTitle: "고객사 담당자명",
        filterText: this.searchValue.mgrNm,
      });
    },
    //검색조건 초기화
    fnResetBtn() {
      this.custComStat = [];
      this.searchValue = {
        custComStatNm: [],
        custComStat: [],
        custComNm: "",
        custComId: "",
        mgrNm: "",
      };
    },
    //검색필터 초기화후 그리드 초기화
    fnGridResetBtn() {
      this.pageArg.page = 1;
      this.pageArg.rows = 10;
      this.fnGetCpoLists(this.pageArg);
    },
    //등록페이지로 이동
    fnCpoInsert() {
      this.$router
        .replace({
          name: "insertCpo",
        })
        .catch(() => {});
    },
    //그리드 row 클릭시 상세페이지로 이동
    fnClickRowData(val) {
      this.$store.dispatch("setRouterParams/setParams", {});
      this.$router
        .push({
          name: "cpoManagementDetail",
          params: val.data,
        })
        .catch(() => {});
    },
    fnForceLender() {
      this.gridKey += 1;
      this.pageKey += 1;
    },
    fnGetFileds() {
      this.columValues = getFileds(this.filedId, null);

      console.log(this.columValues);
    },

    async excelTest() {
      var tmp = {
        excelHeader: [],
        excelKey: [],
        excelWidth: [
          "4000",
          "4000",
          "4000",
          "4000",
          "4000",
          "4000",
          "4000",
          "4000",
        ],
        excelDataType: [
          "string",
          "string",
          "string",
          "string",
          "string",
          "string",
          "string",
          "string",
        ],
        pageId: "test",
        excelNm: "테스트",
      };
      this.columValues.forEach((items) => {
        tmp.excelHeader.push(items.headerName);
        tmp.excelKey.push(items.field);
      });
      await excelDownload(tmp).then((response) => {
        console.log(response.headers);
        const url = window.URL.createObjectURL(
          new Blob([response.data], { type: response.headers["content-type"] })
        );
        const link = document.createElement("a");
        link.href = url;
        link.download = "test.xlsx";
        link.click();
        console.log(response);
      });
    },
    /**
     * {
     * "excelHeader": [
     * "No",
     * "고객사명",
     * "고객사 ID",
     * "사업자등록번호",
     * "고객사 담당자",
     * "SK시그넷 담당자",
     * "고객사 상태",
     * "등록일"
     * ],
     * "excelKey": [
     * "rownumber",
     * "custComNm",
     * "custComId",
     * "bizNum",
     * "mgrNm",
     * "signetMgrNm",
     * "custComStat",
     * "regDt"
     * ]
     * }
     */
  },
};
</script>

<style></style>
