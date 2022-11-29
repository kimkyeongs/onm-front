<template>
  <section class="onmContent">
    <head-title title="공통코드 등록" />
    <div class="flex-row">
      <!-- 대분류코드 -->
      <div class="col-lg-6 col-md-12">
        <div class="title-inline">
          <sub-title title="대분류코드" />
          <grid-search-single />
        </div>
        <!-- <sample-ag-grid /> -->
        <!-- GRID -->
        <AgGridMain
          v-bind:dataList="this.dataListMain"
          v-bind:filedId="this.gridFiledKey.key1"
          :key="gridKeys.gridKey1"
        />
        <PaginationMain
          v-bind:listCount="this.dataCnts.dataCnt1"
          v-bind:customLimit="this.pageArgs.pageArg1.rows"
          :key="pageKeys.pageKey1"
        />
        <!--// GRID -->
        <div class="btn-area text-right clearFix">
          <div class="pull-left">
            <button
              type="button"
              class="btn btn-default btn-darkGreen btn-fixed"
            >
              엑셀다운로드
            </button>
          </div>
          <div class="pull-right">
            <button
              type="button"
              @click="fnShowTab('codeChildPlace1')"
              class="btn btn-default btn-orange btn-fixed"
            >
              등록
            </button>
          </div>
        </div>
        <!-- 대분류코드 등록 -->
        <div class="" v-show="this.codeChildPlace1">
          <sub-title title="대분류 코드등록" />
          <div class="table">
            <table>
              <colgroup>
                <col width="20%" />
                <col width="30%" />
                <col width="20%" />
                <col width="*" />
              </colgroup>
              <caption class="sr-only">
                대분류 코드 등록
              </caption>
              <tbody>
                <tr>
                  <th scope="row"><span>대분류코드</span></th>
                  <td>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="대분류 코드"
                    />
                  </td>
                  <th scope="row"><span>대분류명</span></th>
                  <td>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="대분류명"
                    />
                  </td>
                </tr>
                <tr>
                  <th scope="row"><span>사용여부</span></th>
                  <td>
                    <v-radio-group class="radio-group" v-model="radioGroup" row>
                      <v-radio
                        v-for="key in radioLists"
                        :key="key"
                        :label="key"
                        :value="key"
                        color="orange"
                      />
                    </v-radio-group>
                  </td>
                  <th scope="row"><span>최종수정일</span></th>
                  <td></td>
                </tr>
                <tr>
                  <th scope="row"><span>비고</span></th>
                  <td colspan="3">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="비고"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="btn-area text-right">
            <button type="button" class="btn btn-default btn-orange btn-fixed">
              저장
            </button>
          </div>
        </div>
      </div>
      <!-- 소분류코드 -->
      <div class="col-lg-6 col-md-12 subject" v-show="this.codeDtlPlace">
        <div class="title-inline">
          <div class="title-inline">
            <sub-title title="소분류코드" />
            <div class="code-class ml-2">
              <strong>[선택대분류]</strong>
              <span class="ml-1">CO00021 (충전기에러코드)</span>
            </div>
          </div>
          <grid-search-single />
        </div>
        <!-- <sample-ag-grid /> -->
        <!-- GRID -->
        <AgGridChild
          v-bind:dataList="this.dataListChild"
          v-bind:filedId="this.gridFiledKey.key2"
          :key="gridKeys.gridKey2"
        />
        <PaginationChild
          v-bind:listCount="this.dataCnts.dataCnt2"
          v-bind:customLimit="this.pageArgs.pageArg2.rows"
          :key="pageKeys.pageKey2"
        />
        <!--// GRID -->
        <div class="btn-area text-right">
          <button type="button" class="btn btn-default btn-orange btn-fixed">
            등록
          </button>
        </div>
        <!-- 소분류코드 등록 -->
        <div class="" v-show="this.codeChildPlace2">
          <sub-title title="소분류 코드등록" />
          <div class="table">
            <table>
              <colgroup>
                <col width="20%" />
                <col width="30%" />
                <col width="20%" />
                <col width="*" />
              </colgroup>
              <caption class="sr-only">
                소분류 코드 등록
              </caption>
              <tbody>
                <tr>
                  <th scope="row"><span>소분류코드</span></th>
                  <td>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="소분류 코드"
                    />
                  </td>
                  <th scope="row"><span>소분류명</span></th>
                  <td>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="소분류명"
                    />
                  </td>
                </tr>
                <tr>
                  <th scope="row"><span>사용여부</span></th>
                  <td>
                    <v-radio-group class="radio-group" v-model="radioGroup" row>
                      <v-radio
                        v-for="key in radioLists"
                        :key="key"
                        :label="key"
                        :value="key"
                        color="orange"
                      />
                    </v-radio-group>
                  </td>
                  <th scope="row"><span>최종수정일</span></th>
                  <td></td>
                </tr>
                <tr>
                  <th scope="row"><span>참조</span></th>
                  <td colspan="3">
                    <div class="form-inline column">
                      <div class="form-group">
                        <span class="mr-1">참조1</span>
                        <input
                          type="text"
                          class="form-control"
                          placeholder="참조1"
                          style="width: 100px"
                        />
                      </div>
                      <div class="form-group">
                        <span class="mr-1">참조2</span>
                        <input
                          type="text"
                          class="form-control"
                          placeholder="참조2"
                          style="width: 100px"
                        />
                      </div>
                      <div class="form-group">
                        <span class="mr-1">참조3</span>
                        <input
                          type="text"
                          class="form-control"
                          placeholder="참조3"
                          style="width: 100px"
                        />
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope="row"><span>비고</span></th>
                  <td colspan="3">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="비고"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="btn-area text-right">
            <button type="button" class="btn btn-default btn-orange btn-fixed">
              저장
            </button>
          </div>
        </div>
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
import UseGuide from "@/components/UseGuide";
import AgGrid from "@/components/AgGrid";
import Pagination from "@/components/Pagination";
import GridSearchSingle from "@/components/GridSearchSingle";
import { getCommonMainCode, getCommonChildCode } from "@/api/commonCode_api";

export default {
  components: {
    HeadTitle,
    SubTitle,
    UseGuide,
    AgGridMain: AgGrid,
    AgGridChild: AgGrid,
    PaginationMain: Pagination,
    PaginationChild: Pagination,
    GridSearchSingle,
  },
  data() {
    return {
      useGuideLists: [
        "- 이 페이지는 플랫폼통합관리자가 전체 고객사(CPO)에 공통적용되는 공통코드를 관리하는 페이지로 플랫폼통합관리자만 사용이 가능합니다.",
        "- 공통코드를 사용/미사용은 전체 고객사(CPO)에 영향을 미치는 중요한 옵션입니다. 대분류를 미사용시 연결된 소분류도 미사용으로 처리 되며, 관련 보기/등록/상세/수정에서 각 값이 표시하는 부분이 비활성화 됩니다.",
        "- 엑셀다운로드는 대분류코드와 소분류코드가 모두 표시되어 다운로드 됩니다.",
      ],
      radioLists: ["사용", "미사용"],
      codeChildPlace1: "",
      codeChildPlace2: "",
      codeDtlPlace: "",
      dataListMain: null,
      dataListChild: null,
      gridFiledKey: {
        key1: "commonCodeList",
        key2: "commonChildCodeList",
      },
      dataCnts: {
        dataCnt1: 0,
        dataCnt2: 0,
      },
      gridKeys: {
        gridKey1: 100,
        gridKey2: 1000,
      },
      pageKeys: {
        pageKey1: 10000,
        pageKey2: 100000,
      },
      pageArgs: {
        pageArg1: {
          rows: 10,
          page: 1,
        },
        pageArg2: {
          rows: 10,
          page: 1,
        },
      },
    };
  },
  mounted() {
    this.fnCommonMainCode(this.pageArgs.pageArg1);
  },
  methods: {
    //code 등록/상세정보 form ON
    fnShowTab(gubun) {
      if (gubun === "codeChildPlace1") {
        if (this.codeChildPlace1 === "ok") {
          this.codeChildPlace1 = "";
        } else {
          this.codeChildPlace1 = "ok";
        }
      } else if (gubun == "codeChildPlace2") {
        if (this.codeChildPlace2 === "ok") {
          this.codeChildPlace2 = "";
        } else {
          this.codeChildPlace2 = "ok";
        }
      } else if (gubun == "codeDtlPlace") {
        if (this.codeDtlPlace === "ok") {
          this.codeDtlPlace = "";
        } else {
          this.codeDtlPlace = "ok";
        }
      }
    },
    async fnCommonMainCode(obj) {
      await getCommonMainCode(obj).then((response) => {
        this.dataListMain = response.data.rows;
        this.dataCnts.dataCnt1 = response.data.total;
        this.pageArgs.pageArg1.rows = response.data.rowPerPage;
        this.pageArgs.pageArg1.page = response.data.page;
        this.gridKeys.gridKey1 += 1;
        this.pageKeys.pageKey1 += 1;
        console.log(this.dataListMain);
      });
    },
    async fnCommonChildCode() {
      await getCommonChildCode().then((response) => {
        this.dataListChild = response.data;
        this.dataCnts.dataCnt2 = response.data.total;
        this.pageArgs.pageArg2.rows = response.data.rowPerPage;
        this.pageArgs.pageArg2.page = response.data.page;
        this.gridKeys.gridKey2 += 1;
        this.pageKeys.pageKey2 += 1;
      });
    },
  },
};
</script>

<style scoped></style>
