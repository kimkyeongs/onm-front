<template>
  <section class="onmContent">
    <head-title title="공통코드 관리" />
    <div class="flex-row">
      <!-- 대분류코드 -->
      <div class="col-lg-6 col-md-12">
        <div class="title-inline">
          <sub-title title="대분류코드" />
          <GridMainSearchBtn
            v-bind:holderMsg="holderMsg1"
            v-bind:textValue="searchText1"
            @serchText="serchText($event, '1')"
          />
        </div>
        <!-- <sample-ag-grid /> -->
        <!-- GRID -->
        <AgGridMain
          v-bind:dataList="this.dataListMain"
          v-bind:filedId="this.gridFiledKey.key1"
          v-bind:pageCnt="this.pageCnts.pageCnt1"
          v-bind:page="this.pageArgs.pageArg1.page"
          :key="gridKeys.gridKey1"
          @clickData="setChildData"
          @clickBtnData="setMainCodeUpdate"
        />
        <PaginationMain
          v-bind:listCount="this.pageCnts.pageCnt1"
          v-bind:customLimit="this.pageArgs.pageArg1.rows"
          :key="pageKeys.pageKey1"
        />
        <!--// GRID -->
        <div class="btn-area text-right clearFix">
          <div class="pull-left">
            <button
              type="button"
              class="btn btn-default btn-darkGreen btn-fixed"
              @click="fnExcelDownload"
            >
              엑셀다운로드
            </button>
          </div>
          <div class="pull-right">
            <button
              type="button"
              @click="fnShowTab('codeInsertPlace1')"
              class="btn btn-default btn-orange btn-fixed"
            >
              등록
            </button>
          </div>
        </div>
        <!-- 대분류코드 등록 -->
        <div class="" v-show="this.codeInsertPlace1">
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
                      v-model="mainDataParam.mainClassCd"
                      type="text"
                      class="form-control"
                      placeholder="대분류 코드"
                    />
                  </td>
                  <th scope="row"><span>대분류명</span></th>
                  <td>
                    <input
                      v-model="mainDataParam.mainClassNm"
                      type="text"
                      class="form-control"
                      placeholder="대분류명"
                    />
                  </td>
                </tr>
                <tr>
                  <th scope="row"><span>사용여부</span></th>
                  <td>
                    <v-radio-group
                      class="radio-group"
                      v-model="mainDataParam.useYn"
                      row
                    >
                      <v-radio
                        v-for="key in radioLists"
                        :key="key.itemValue"
                        :label="key.itemNm"
                        :value="key.itemValue"
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
                      v-model="mainDataParam.descr"
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
            <button
              type="button"
              class="btn btn-default btn-orange btn-fixed"
              @click="fnInsertMainCode"
            >
              저장
            </button>
          </div>
        </div>
        <!-- 대분류코드 등록 END -->
        <!-- 대분류코드 상세 -->
        <div class="" v-show="this.codeDtlPlace1">
          <sub-title title="대분류 코드 상세정보" />
          <div class="table">
            <table>
              <colgroup>
                <col width="20%" />
                <col width="30%" />
                <col width="20%" />
                <col width="*" />
              </colgroup>
              <caption class="sr-only">
                대분류 코드 상세정보
              </caption>
              <tbody>
                <tr>
                  <th scope="row"><span>대분류코드</span></th>
                  <td>
                    {{ this.mainDtlData.mainClassCd }}
                  </td>
                  <th scope="row"><span>대분류명</span></th>
                  <td>
                    {{ this.mainDtlData.mainClassNm }}
                  </td>
                </tr>
                <tr>
                  <th scope="row"><span>사용여부</span></th>
                  <td>
                    <v-radio-group
                      disabled
                      class="radio-group"
                      v-model="this.mainDtlData.useYn"
                      row
                    >
                      <v-radio
                        v-for="key in radioLists"
                        :key="key.itemValue"
                        :label="key.itemNm"
                        :value="key.itemValue"
                        color="orange"
                      />
                    </v-radio-group>
                  </td>
                  <th scope="row"><span>최종수정일</span></th>
                  <td>{{ this.mainDtlData.modDt }}</td>
                </tr>
                <tr>
                  <th scope="row"><span>비고</span></th>
                  <td colspan="3">
                    {{ this.mainDtlData.descr }}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="btn-area text-right">
            <button
              type="button"
              class="btn btn-default btn-orange btn-fixed"
              @click="replaceUpdateView('1')"
            >
              수정
            </button>
          </div>
        </div>
        <!-- 대분류코드 상세 END -->
        <!-- 대분류코드 수정 -->
        <div class="" v-show="this.codeUpdatePlace1">
          <sub-title title="대분류 코드 수정" />
          <div class="table">
            <table>
              <colgroup>
                <col width="20%" />
                <col width="30%" />
                <col width="20%" />
                <col width="*" />
              </colgroup>
              <caption class="sr-only">
                대분류 코드 수정
              </caption>
              <tbody>
                <tr>
                  <th scope="row"><span>대분류코드</span></th>
                  <td>
                    {{ mainUpdateData.mainClassCd }}
                    <!-- <input
                      v-model="mainUpdateData.mainClassCd"
                      type="text"
                      class="form-control"
                      placeholder="대분류 코드"
                    /> -->
                  </td>
                  <th scope="row"><span>대분류명</span></th>
                  <td>
                    <input
                      v-model="mainUpdateData.mainClassNm"
                      type="text"
                      class="form-control"
                      placeholder="대분류명"
                    />
                  </td>
                </tr>
                <tr>
                  <th scope="row"><span>사용여부</span></th>
                  <td>
                    <v-radio-group
                      class="radio-group"
                      v-model="mainUpdateData.useYn"
                      row
                    >
                      <v-radio
                        v-for="key in radioLists"
                        :key="key.itemValue"
                        :label="key.itemNm"
                        :value="key.itemValue"
                        color="orange"
                      />
                    </v-radio-group>
                  </td>
                  <th scope="row"><span>최종수정일</span></th>
                  <td>{{ mainUpdateData.modDt }}</td>
                </tr>
                <tr>
                  <th scope="row"><span>비고</span></th>
                  <td colspan="3">
                    <input
                      v-model="mainUpdateData.descr"
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
            <button
              type="button"
              class="btn btn-default btn-orange btn-fixed"
              @click="modalOpen('1')"
            >
              저장
            </button>
          </div>
        </div>
        <!-- 대분류코드 등록 END -->
      </div>
      <!-- 소분류코드 -->
      <div class="col-lg-6 col-md-12 subject" v-show="this.codeChildPlace">
        <div class="title-inline">
          <div class="title-inline">
            <sub-title title="소분류코드" />
            <div class="code-class ml-2">
              <strong>[선택대분류]</strong>
              <span class="ml-1"
                >{{ this.dtlNav.mainClassCd }}({{
                  this.dtlNav.mainClassNm
                }})</span
              >
            </div>
          </div>
          <GridChildSearchBtn
            v-bind:holderMsg="holderMsg2"
            v-bind:textValue="searchText2"
            :key="serchKey"
            @serchText="serchText($event, '2')"
          />
        </div>
        <!-- <sample-ag-grid /> -->
        <!-- GRID -->
        <AgGridChild
          v-bind:dataList="this.dataListChild"
          v-bind:filedId="this.gridFiledKey.key2"
          v-bind:pageCnt="this.pageCnts.pageCnt1"
          v-bind:page="this.pageArgs.pageArg2.page"
          :key="gridKeys.gridKey2"
          @clickData="setChildDtlData"
          @clickBtnData="setChildCodeUpdate"
        />
        <PaginationChild
          v-bind:listCount="this.pageCnts.pageCnt2"
          v-bind:customLimit="this.pageArgs.pageArg2.rows"
          :key="pageKeys.pageKey2"
        />
        <!--// GRID -->
        <div class="btn-area text-right">
          <button
            type="button"
            class="btn btn-default btn-orange btn-fixed"
            @click="fnShowTab('codeInsertPlace2')"
          >
            등록
          </button>
        </div>
        <!-- 소분류코드 등록 -->
        <div class="" v-show="this.codeInsertPlace2">
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
                      v-model="childDataParam.mdlClassCd"
                      type="text"
                      class="form-control"
                      placeholder="소분류 코드"
                    />
                  </td>
                  <th scope="row"><span>소분류명</span></th>
                  <td>
                    <input
                      v-model="childDataParam.mdlClassNm"
                      type="text"
                      class="form-control"
                      placeholder="소분류명"
                    />
                  </td>
                </tr>
                <tr>
                  <th scope="row"><span>사용여부</span></th>
                  <td>
                    <v-radio-group
                      class="radio-group"
                      v-model="childDataParam.useYn"
                      row
                    >
                      <v-radio
                        v-for="key in radioLists"
                        :key="key.itemValue"
                        :label="key.itemNm"
                        :value="key.itemValue"
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
                          v-model="childDataParam.relatCd1"
                          type="text"
                          class="form-control"
                          placeholder="참조1"
                          style="width: 100px"
                        />
                      </div>
                      <div class="form-group">
                        <span class="mr-1">참조2</span>
                        <input
                          v-model="childDataParam.relatCd2"
                          type="text"
                          class="form-control"
                          placeholder="참조2"
                          style="width: 100px"
                        />
                      </div>
                      <div class="form-group">
                        <span class="mr-1">참조3</span>
                        <input
                          v-model="childDataParam.relatCd3"
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
                      v-model="childDataParam.desrc"
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
            <button
              type="button"
              class="btn btn-default btn-orange btn-fixed"
              @click="fnInsertChildCode"
            >
              저장
            </button>
          </div>
        </div>
        <!-- 소분류코드 등록 END -->
        <!-- 소분류코드 상세 -->
        <div class="" v-show="this.codeDtlPlace2">
          <sub-title title="소분류 코드 상세정보" />
          <div class="table">
            <table>
              <colgroup>
                <col width="20%" />
                <col width="30%" />
                <col width="20%" />
                <col width="*" />
              </colgroup>
              <caption class="sr-only">
                소분류 코드 상세정보
              </caption>
              <tbody>
                <tr>
                  <th scope="row"><span>소분류코드</span></th>
                  <td>
                    {{ this.childDtlData.mdlClassCd }}
                  </td>
                  <th scope="row"><span>소분류명</span></th>
                  <td>
                    {{ this.childDtlData.mdlClassNm }}
                  </td>
                </tr>
                <tr>
                  <th scope="row"><span>사용여부</span></th>
                  <td>
                    <v-radio-group
                      class="radio-group"
                      disabled
                      v-model="this.childDtlData.useYn"
                      row
                    >
                      <v-radio
                        v-for="key in radioLists"
                        :key="key.itemValue"
                        :label="key.itemNm"
                        :value="key.itemValue"
                        color="orange"
                      />
                    </v-radio-group>
                  </td>
                  <th scope="row"><span>최종수정일</span></th>
                  <td>{{ this.childDtlData.modDt }}</td>
                </tr>
                <tr>
                  <th scope="row"><span>참조</span></th>
                  <td colspan="3">
                    <div class="form-inline column">
                      <div class="form-group">
                        <span class="mr-1">참조1</span>
                        {{ this.childDtlData.relatCd1 }}
                      </div>
                      <div class="form-group">
                        <span class="mr-1">참조2</span>
                        {{ this.childDtlData.relatCd2 }}
                      </div>
                      <div class="form-group">
                        <span class="mr-1">참조3</span>
                        {{ this.childDtlData.relatCd3 }}
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope="row"><span>비고</span></th>
                  <td colspan="3">
                    {{ this.childDtlData.desrc }}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="btn-area text-right">
            <button
              type="button"
              class="btn btn-default btn-orange btn-fixed"
              @click="replaceUpdateView('2')"
            >
              수정
            </button>
          </div>
        </div>
        <!-- 소분류코드 상세 END -->
        <!-- 소분류코드 수정 -->
        <div class="" v-show="this.codeUpdatePlace2">
          <sub-title title="소분류 코드 수정" />
          <div class="table">
            <table>
              <colgroup>
                <col width="20%" />
                <col width="30%" />
                <col width="20%" />
                <col width="*" />
              </colgroup>
              <caption class="sr-only">
                소분류 코드 수정
              </caption>
              <tbody>
                <tr>
                  <th scope="row"><span>소분류코드</span></th>
                  <td>
                    <input
                      v-model="childUpdateData.mdlClassCd"
                      type="text"
                      class="form-control"
                      placeholder="소분류 코드"
                    />
                  </td>
                  <th scope="row"><span>소분류명</span></th>
                  <td>
                    <input
                      v-model="childUpdateData.mdlClassNm"
                      type="text"
                      class="form-control"
                      placeholder="소분류명"
                    />
                  </td>
                </tr>
                <tr>
                  <th scope="row"><span>사용여부</span></th>
                  <td>
                    <v-radio-group
                      class="radio-group"
                      v-model="childUpdateData.useYn"
                      row
                    >
                      <v-radio
                        v-for="key in radioLists"
                        :key="key.itemValue"
                        :label="key.itemNm"
                        :value="key.itemValue"
                        color="orange"
                      />
                    </v-radio-group>
                  </td>
                  <th scope="row"><span>최종수정일</span></th>
                  <td>{{ this.childUpdateData.modDt }}</td>
                </tr>
                <tr>
                  <th scope="row"><span>참조</span></th>
                  <td colspan="3">
                    <div class="form-inline column">
                      <div class="form-group">
                        <span class="mr-1">참조1</span>
                        <input
                          v-model="childUpdateData.relatCd1"
                          type="text"
                          class="form-control"
                          placeholder="참조1"
                          style="width: 100px"
                        />
                      </div>
                      <div class="form-group">
                        <span class="mr-1">참조2</span>
                        <input
                          v-model="childUpdateData.relatCd2"
                          type="text"
                          class="form-control"
                          placeholder="참조2"
                          style="width: 100px"
                        />
                      </div>
                      <div class="form-group">
                        <span class="mr-1">참조3</span>
                        <input
                          v-model="childUpdateData.relatCd3"
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
                      v-model="childUpdateData.desrc"
                      type="text"
                      class="form-control"
                      placeholder="비고"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <!--//@click="fnUpdateChildCode"-->
          <div class="btn-area text-right">
            <button
              type="button"
              class="btn btn-default btn-orange btn-fixed"
              @click="modalOpen('2')"
            >
              저장
            </button>
          </div>
        </div>
        <!-- 소분류코드 수정 END -->
      </div>
    </div>
    <!-- 이용가이드 -->
    <sub-title title="이용가이드" />
    <use-guide :useGuideLists="useGuideLists" />
    <commonCodePop
      v-bind:popupGubun="this.popupGubun"
      @checkBool="pwCheckVal"
      :key="this.popupKey"
    />
  </section>
</template>

<script>
import HeadTitle from "@/components/HeadTitle";
import SubTitle from "@/components/SubTitle";
import UseGuide from "@/components/UseGuide";
import AgGrid from "@/components/AgGrid";
import Pagination from "@/components/Pagination";
import GridSearchSingle from "@/components/GridSearchSingle";
import commonCodePop from "@/views/popup/commonCodePop";
import {
  getCommonMainCode,
  getCommonChildCode,
  setCommonMainCode,
  setCommonChildCode,
  updateCommonMainCode,
  updateCommonChildCode,
} from "@/api/commonCode_api";
//엑셀 다운로드
import { excelDownload } from "@/api/stat_api";
import { getFileds } from "@/components/js/gridFileds";
import { getExcelFileds } from "@/components/js/excelFileds";

import { getNowDate, getNowTime } from "@/utils/dataFormatUtils";
import { mapState, mapMutations } from "vuex";

export default {
  components: {
    HeadTitle,
    SubTitle,
    UseGuide,
    AgGridMain: AgGrid,
    AgGridChild: AgGrid,
    PaginationMain: Pagination,
    PaginationChild: Pagination,
    GridMainSearchBtn: GridSearchSingle,
    GridChildSearchBtn: GridSearchSingle,
    commonCodePop,
  },
  computed: {
    ...mapState({
      isActiveModal: (state) => state.settings.isActiveModal,
    }),
  },
  data() {
    return {
      holderMsg1: "대분류코드 또는 대분류명 입력",
      holderMsg2: "소분류코드 또는 소분류명 입력",
      useGuideLists: [
        "- 이 페이지는 플랫폼통합관리자가 전체 고객사(CPO)에 공통적용되는 공통코드를 관리하는 페이지로 플랫폼통합관리자만 사용이 가능합니다.",
        "- 공통코드를 사용/미사용은 전체 고객사(CPO)에 영향을 미치는 중요한 옵션입니다. 대분류를 미사용시 연결된 소분류도 미사용으로 처리 되며, 관련 보기/등록/상세/수정에서 각 값이 표시하는 부분이 비활성화 됩니다.",
        "- 엑셀다운로드는 대분류코드와 소분류코드가 모두 표시되어 다운로드 됩니다.",
      ],
      radioLists: [
        { itemNm: "사용", itemValue: "1" },
        { itemNm: "미사용", itemValue: "0" },
      ],

      codeInsertPlace1: "",
      codeInsertPlace2: "",
      codeChildPlace: "",
      codeDtlPlace1: "",
      codeDtlPlace2: "",
      codeUpdatePlace1: "",
      codeUpdatePlace2: "",
      serchKey: 0,
      dataListMain: null,
      dataListChild: null,
      searchText1: "",
      searchText2: "",
      popupGubun: 1,
      popupKey: 1000000,
      gridFiledKey: {
        key1: "commonCodeList",
        key2: "commonChildCodeList",
      },
      excelFiledKey: "commonCodeManage",
      pageCnts: {
        pageCnt1: 0,
        pageCnt2: 0,
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
      dtlNav: {
        mainClassCd: "",
        mainClassNm: "",
        mdlClassCd: "",
      },
      mainDataParam: {
        mainClassCd: "",
        mainClassNm: "",
        desrc: "",
        useYn: "",
        regId: this.$store.getters.userId, //임시
      },
      childDataParam: {
        mainClassCd: "",
        mdlClassCd: "",
        mdlClassNm: "",
        desrc: "",
        relatCd1: "",
        relatCd2: "",
        relatCd3: "",
        useYn: "",
        regId: this.$store.getters.userId, //임시
      },
      mainDtlData: {},
      childDtlData: {},
      mainUpdateData: {
        mainClassCd: "",
        mainClassNm: "",
        desrc: "",
        useYn: "",
        modId: this.$store.getters.userId, //임시
        modDt: "",
      },
      childUpdateData: {
        mainClassCd: "",
        mdlClassCd: "",
        mdlClassNm: "",
        desrc: "",
        relatCd1: "",
        relatCd2: "",
        relatCd3: "",
        useYn: "",
        modId: this.$store.getters.userId, //임시
        modDt: "",
      },
    };
  },
  beforeMount() {
    try {
      if (this.$store.getters.searchParams.searchText1 != undefined) {
        this.searchText1 = this.$store.getters.searchParams.searchText1;
      }
      if (this.$store.getters.searchParams.searchText2 != undefined) {
        this.searchText2 = this.$store.getters.searchParams.searchText2;
      }
      if (this.$store.getters.searchParams.dtlNav.mainClassCd != undefined) {
        this.dtlNav.mainClassCd =
          this.$store.getters.searchParams.dtlNav.mainClassCd;
      }
      if (this.$store.getters.searchParams.dtlNav.mainClassNm != undefined) {
        this.dtlNav.mainClassNm =
          this.$store.getters.searchParams.dtlNav.mainClassNm;
      }
    } catch (e) {
      this.searchText1 = "";
      this.searchText2 = "";
      this.dtlNav.mainClassCd = "";
      this.dtlNav.mainClassNm = "";
    }
  },
  mounted() {
    this.fnCommonMainCode(this.pageArgs.pageArg1);
    if (this.searchText1 != "") {
      this.serchText(this.searchText1, "1");
    }
    if (this.searchText2 != "") {
      this.serchText(this.searchText2, "2");
      this.fnShowTab("codeChildPlace");
    }
  },
  methods: {
    // ...mapMutations({
    //   modalOpen: "settings/MODAL_OPEN",
    // }),
    //code 등록/상세정보 form ON
    fnShowTab(gubun) {
      if (gubun === "codeInsertPlace1") {
        if (this.codeInsertPlace1 === "ok") {
          this.codeInsertPlace1 = "";
        } else {
          this.codeUpdatePlace1 = "";
          this.codeDtlPlace1 = "";
          this.codeInsertPlace1 = "ok";
        }
      } else if (gubun == "codeInsertPlace2") {
        if (this.codeInsertPlace2 === "ok") {
          this.codeInsertPlace2 = "";
        } else {
          this.codeUpdatePlace2 = "";
          this.codeDtlPlace2 = "";
          this.codeInsertPlace2 = "ok";
        }
      } else if (gubun === "codeUpdatePlace1") {
        if (this.codeUpdatePlace1 === "ok") {
          this.codeUpdatePlace1 = "";
        } else {
          this.codeDtlPlace1 = "";
          this.codeInsertPlace1 = "";
          this.codeUpdatePlace1 = "ok";
        }
      } else if (gubun == "codeUpdatePlace2") {
        if (this.codeUpdatePlace2 === "ok") {
          this.codeUpdatePlace2 = "";
        } else {
          this.codeDtlPlace2 = "";
          this.codeInsertPlace2 = "";
          this.codeUpdatePlace2 = "ok";
        }
      } else if (gubun == "codeDtlPlace1") {
        this.codeUpdatePlace1 = "";
        this.codeInsertPlace1 = "";
        this.codeDtlPlace1 = "ok";
      } else if (gubun == "codeDtlPlace2") {
        this.codeUpdatePlace2 = "";
        this.codeInsertPlace2 = "";
        this.codeDtlPlace2 = "ok";
      } else if (gubun == "codeChildPlace") {
        this.codeChildPlace = "ok";
      } else if (gubun == "ALL") {
        this.codeInsertPlace1 = "";
        this.codeInsertPlace2 = "";
        this.codeChildPlace = "";
        this.codeDtlPlace1 = "";
        this.codeDtlPlace2 = "";
        this.codeUpdatePlace1 = "";
        this.codeUpdatePlace2 = "";
      }
    },
    // select
    async fnCommonMainCode(obj) {
      await getCommonMainCode(obj)
        .then((response) => {
          this.dataListMain = response.data.rows;
          this.pageCnts.pageCnt1 = response.data.total;
          this.pageArgs.pageArg1.rows = response.data.rowPerPage;
          this.pageArgs.pageArg1.page = response.data.page;
          this.gridKeys.gridKey1 += 1;
          this.pageKeys.pageKey1 += 1;
        })
        .catch((e) => {
          alert(e);
        });
    },
    async fnCommonChildCode(obj) {
      await getCommonChildCode(obj)
        .then((response) => {
          this.dataListChild = response.data.rows;
          this.pageCnts.pageCnt2 = response.data.total;
          this.pageArgs.pageArg2.rows = response.data.rowPerPage;
          this.pageArgs.pageArg2.page = response.data.page;
          this.gridKeys.gridKey2 += 1;
          this.pageKeys.pageKey2 += 1;
        })
        .catch((e) => {
          alert(e);
        });
    },
    //insert
    async fnInsertMainCode() {
      var result = this.validationChk(this.mainDataParam, "0");
      if (result) {
        await setCommonMainCode(this.mainDataParam).then((response) => {
          if (response.data === "SUCCESS") {
            //this.$router.go();
            this.mainDtlData = this.mainDataParam;
            this.mainDataParam = {
              mainClassCd: "",
              mainClassNm: "",
              descr: "",
              useYn: "",
              regId: this.$store.getters.userId, //임시
            };
            this.fnRefreshMain();
          } else {
            alert("중복된 대분류 코드 입니다.");
          }
        });
      }
    },
    async fnInsertChildCode() {
      var result = this.validationChk(this.childDataParam, "1");
      this.childDataParam.mainClassCd = this.dtlNav.mainClassCd;
      if (result) {
        await setCommonChildCode(this.childDataParam)
          .then((response) => {
            if (response.data === "SUCCESS") {
              this.fnRefreshChild();
              this.childDtlData = this.childDataParam;
              this.childDataParam = {
                mainClassCd: "",
                mdlClassCd: "",
                mdlClassNm: "",
                descr: "",
                relatCd1: "",
                relatCd2: "",
                relatCd3: "",
                useYn: "",
                regId: this.$store.getters.userId,
              };
              this.childDtlData.modDt = getNowDate() + " " + getNowTime();
            } else {
              alert("중복된 소분류 코드 입니다.");
            }
          })
          .catch((e) => {
            alert(e);
          });
      }
    },
    //update
    async fnUpdateMainCode() {
      var result = this.validationChk(this.mainUpdateData, "0");
      if (result) {
        this.mainUpdateData.beforeMainClassCd = this.dtlNav.mainClassCd;
        await updateCommonMainCode(this.mainUpdateData)
          .then((response) => {
            console.log(response);
            if (response.data === "SUCCESS") {
              this.fnRefreshMain();
            }
          })
          .catch((e) => {
            alert(e);
          });
      }
    },
    async fnUpdateChildCode() {
      var result = this.validationChk(this.childUpdateData, "1");
      if (result) {
        this.childUpdateData.mainClassCd = this.dtlNav.mainClassCd;
        this.childUpdateData.beforeMdlClassCd = this.dtlNav.mdlClassCd;
        this.childUpdateData.modId = this.$store.getters.userId;
        await updateCommonChildCode(this.childUpdateData)
          .then((response) => {
            console.log(response);
            if (response.data === "SUCCESS") {
              this.fnRefreshChild();
            } else {
              alert("중복된 소분류 코드 입니다.");
            }
          })
          .catch((e) => {
            alert(e);
          });
      }
    },
    //저장/수정시 유효성 체크 gubun -> 0:대분류 , 1 : 소분류
    validationChk(obj, gubun) {
      if (gubun === "0") {
        if (!obj.mainClassCd) {
          alert("대분류 코드를 입력 해주세요.");
          return false;
        } else if (!obj.mainClassNm) {
          alert("대분류 코드명을 입력 해주세요.");
          return false;
        } else if (!obj.useYn) {
          alert("사용여부를 체크해주세요.");
          return false;
        }
      } else {
        if (!obj.mdlClassCd) {
          alert("소분류 코드명을 입력 해주세요.");
          return false;
        } else if (!obj.mdlClassNm) {
          alert("소분류 코드명을 입력 해주세요.");
          return false;
        } else if (!obj.useYn) {
          alert("사용여부를 체크해주세요.");
          return false;
        }
      }
      return true;
    },
    //대분류 코드 상세 및 우측 소분류코드 리스트 노출
    setChildData(obj) {
      //수정버튼 예외처리
      if (obj.column.colId != "updateBtn") {
        //소분류 검색어 초기화
        this.searchText2 = "";
        var searchParams = this.$store.getters.searchParams;
        searchParams.searchText2 = "";
        this.$store.dispatch("setSearchParams/setParams", searchParams);
        this.serchKey += 1;
        //기존 영역 show 초기화
        this.fnShowTab("ALL");
        var requestParam = {
          page: this.pageArgs.pageArg2.page,
          rows: this.pageArgs.pageArg2.rows,
          mainClassCd: obj.data.mainClassCd,
        };
        //소분류코드 불러오기
        this.fnCommonChildCode(requestParam);
        this.dtlNav.mainClassCd = obj.data.mainClassCd;
        this.dtlNav.mainClassNm = obj.data.mainClassNm;
        //소분류코드쪽 show
        this.fnShowTab("codeChildPlace");
        //대분류코드상세 show
        this.mainDtlData = obj.data;
        this.fnShowTab("codeDtlPlace1");
      }
    },
    //소분류코드 상세 노출
    setChildDtlData(obj) {
      //수정버튼 예외처리
      if (obj.column.colId != "updateBtn") {
        //소분류코드상세 show
        this.childDtlData = obj.data;
        this.fnShowTab("codeDtlPlace2");
      }
    },
    //검색 기능 1 : 대분류 , 2 : 소분류
    serchText(sText, gubun) {
      var requestParam = {
        page: 1,
        rows: 10,
        searchText: sText,
        mainClassCd: this.dtlNav.mainClassCd,
      };
      if (gubun === "1") {
        this.searchText1 = sText;
        this.fnCommonMainCode(requestParam);
        this.fnShowTab("ALL");
      } else {
        this.searchText2 = sText;
        this.fnCommonChildCode(requestParam);
      }
      this.$store.dispatch("setSearchParams/setParams", {
        searchText1: this.searchText1,
        searchText2: this.searchText2,
        dtlNav: {
          mainClassCd: this.dtlNav.mainClassCd,
          mainClassNm: this.dtlNav.mainClassNm,
        },
      });
    },
    //수정버튼 이벤트 (대분류)
    setMainCodeUpdate(e) {
      this.mainUpdateData = e;
      this.fnShowTab("codeUpdatePlace1");
    },
    //수정버튼 이벤트 (소분류)
    setChildCodeUpdate(e) {
      console.log(e);
      this.childUpdateData = e;
      this.dtlNav.mdlClassCd = this.childUpdateData.mdlClassCd;
      this.fnShowTab("codeUpdatePlace2");
    },
    //상세 -> 수정 화면으로 전환 ->  1 : 대분류 , 2 : 소분류
    replaceUpdateView(gubun) {
      if (gubun === "1") {
        this.setMainCodeUpdate(this.mainDtlData);
      } else {
        this.dtlNav.mdlClassCd = this.childDtlData.mdlClassCd;
        this.setChildCodeUpdate(this.childDtlData);
      }
    },
    //비밀번호 체크 팝업 오픈
    modalOpen(gubun) {
      this.popupGubun = gubun;
      this.popupKey += 1;
      this.$store.commit("settings/MODAL_OPEN");
    },
    //비밀번호 체크 팝업
    pwCheckVal(e) {
      if (e.result) {
        // e.gubun === "1" ? this.fnUpdateMainCode() : this.fnUpdateChildCode();
        if (e.gubun === "1") {
          this.fnUpdateMainCode();
        } else {
          this.fnUpdateChildCode();
        }
      }
    },
    fnRefreshMain() {
      this.fnCommonMainCode(this.pageArgs.pageArg1);
      this.fnShowTab("codeDtlPlace1");
    },
    fnRefreshChild() {
      var requestParam = {
        page: this.pageArgs.pageArg2.page,
        searchText: this.searchText2,
        rows: this.pageArgs.pageArg2.rows,
        mainClassCd: this.dtlNav.mainClassCd,
      };
      this.fnCommonChildCode(requestParam);
      this.fnShowTab("codeDtlPlace2");
    },

    async fnExcelDownload() {
      var tmp = {};
      tmp = getExcelFileds(this.excelFiledKey);
      var nowdate = getNowDate();
      tmp.searchText1 = this.searchText1;
      tmp.searchText2 = this.searchText2;
      await excelDownload(tmp).then((response) => {
        console.log(response.headers);
        const url = window.URL.createObjectURL(
          new Blob([response.data], { type: response.headers["content-type"] })
        );
        const link = document.createElement("a");
        link.href = url;
        link.download = tmp.excelNm + "_" + nowdate + ".xlsx";
        link.click();
      });
    },
  },
};
</script>

<style scoped></style>
