<template>
  <section class="onmContent">
    <head-title title="배치작업정보 등록" />
    <div class="flex-row">
      <!-- 배치 기본정보 -->
      <div class="col-lg-6 col-md-12">
        <sub-title title="배치 기본정보" />
        <div class="table">
          <table>
            <caption class="sr-only">
              배치 기본정보
            </caption>
            <colgroup>
              <col width="30%" />
              <col width="*" />
            </colgroup>
            <tbody>
              <tr>
                <th scope="row" class="required"><span>배치명</span></th>
                <td>
                  <input
                    v-model="requestParam.bthNm"
                    type="text"
                    class="form-control"
                    placeholder="배치명"
                  />
                </td>
              </tr>
              <tr>
                <th scope="row" class="required"><span>배치그룹명</span></th>
                <td>
                  <v-select
                    v-model="requestParam.gpNm"
                    :items="batchCodeList"
                    class="selectBox"
                    label="선택"
                    dense
                    solo
                    item-text="mdlClassNm"
                    item-value="mdlClassCd"
                  />
                </td>
              </tr>
              <tr>
                <th scope="row" class="required"><span>배치파일명</span></th>
                <td>
                  <input
                    v-model="requestParam.fileNm"
                    type="text"
                    class="form-control"
                    placeholder="배치파일명"
                  />
                </td>
              </tr>
              <tr>
                <th scope="row"><span>배치파일경로</span></th>
                <td>
                  <input
                    v-model="requestParam.filePath"
                    type="text"
                    class="form-control"
                    placeholder="배치파일경로"
                  />
                </td>
              </tr>
              <tr>
                <th scope="row"><span>배치시간</span></th>
                <td>
                  <input
                    v-model="requestParam.bthDtText"
                    type="text"
                    class="form-control"
                    placeholder="배치시간"
                  />
                </td>
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
            <caption class="sr-only">
              배치파일 최종 업데이트일
            </caption>
            <colgroup>
              <col width="30%" />
              <col width="*" />
            </colgroup>
            <tbody>
              <tr>
                <th scope="row" class="required">
                  <span>배치파일 최종업데트일</span>
                </th>
                <td>
                  <div class="col-lg-5">
                    <date-picker
                      @getDate="fnGetDate"
                      :key="this.datePickerKey"
                    />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p class="infoText">
          ※ 배치파일을 수정한 경우 업데이트일을 위에서 선택해 주세요.
        </p>
        <sub-title class="mt-20" title="비고" />
        <!-- <div class="defaultBox" style="height: 128px"> -->
        <textarea
          class="defaultBox"
          style="height: 128px; width: 100%"
          v-model="requestParam.desrc"
        >
        </textarea>
        <!-- </div> -->
      </div>
    </div>
    <div class="btn-area clearFix">
      <div class="pull-left">
        <button
          type="button"
          class="btn btn-default btn-yellow btn-fixed"
          @click="fnBackList"
        >
          목록
        </button>
      </div>
      <div class="pull-right">
        <button
          type="button"
          class="btn btn-default btn-gray btn-fixed"
          @click="fnReset"
        >
          초기화
        </button>
        <button
          type="button"
          class="btn btn-default btn-orange btn-fixed"
          @click="fnInsertBath"
        >
          저장
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
import UseGuide from "@/components/UseGuide";
import DatePicker from "@/components/DatePicker";

import { setBatchInfo } from "@/api/bathInfo_api";
import { getCommonCode } from "@/api/commonCode_api";

export default {
  components: {
    HeadTitle,
    SubTitle,
    UseGuide,
    DatePicker,
  },
  data() {
    return {
      useGuideLists: [
        "- 이 페이지는 플랫폼통합관리자가 배치이력을 관리하는 페이지로 플랫폼통합관리자만 사용이 가능합니다.",
        "- 이 페이지는 실행된 배치결과를 모니터링 할 수 있으며, 배치처리 및 실행과 관련하여서는 개발파트와 별도 협의하시면 됩니다.",
      ],
      batchCodeList: [],
      resetProp: false,
      requestParam: {
        bthNm: "",
        gpNm: "",
        fileNm: "",
        filePath: "",
        filePath: "",
        desrc: "",
        regNm: "",
        bthDtText: "",
        lastUpDt: "",
        regId: this.$store.getters.userId,
      },
      datePickerKey: 0,
    };
  },
  computed: {},
  watch: {},
  created() {},
  beforeMount() {
    this.getCodes({ mainClassCd: "B0000" });
  },
  methods: {
    async getCodes(param) {
      await getCommonCode(param).then((response) => {
        this.batchCodeList = response.data;
      });
    },
    fnReset() {
      this.requestParam = {
        bthNm: "",
        gpNm: "",
        fileNm: "",
        filePath: "",
        filePath: "",
        desrc: "",
        regNm: "",
        bthDtText: "",
        lastUpDt: "",
        regId: this.$store.getters.userId,
      };
      this.datePickerKey += 1;
    },
    async fnInsertBath() {
      console.log(this.requestParam);
      await setBatchInfo(this.requestParam).then((response) => {
        if (response.data === "SUCCESS") {
          alert("배치작업이 등록되었습니다.");
          this.fnBackList();
        }
      });
    },
    fnGetDate(date) {
      this.requestParam.lastUpDt = date;
    },
    fnBackList() {
      this.$router
        .push({
          name: "batchJobInfoManage",
        })
        .catch(() => {});
    },
  },
};
</script>

<style scoped></style>
