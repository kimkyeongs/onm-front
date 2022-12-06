<template>
  <!-- CONTENT -->
  <section class="onmContent">
    <head-title title="플랫폼 고객사(CPO) 등록" />
    <div class="flex-row">
      <!-- 고객사 기본정보 -->
      <div class="col-lg-6 col-md-12">
        <sub-title title="고객사 기본정보" />
        <div class="table">
          <table>
            <caption class="sr-only">
              고객사 기본정보
            </caption>
            <colgroup>
              <col width="30%" />
              <col width="*" />
            </colgroup>
            <tbody>
              <tr>
                <th scope="row" class="required"><span>고객사 명</span></th>
                <td>
                  <input
                    v-model="model.custComNm"
                    type="text"
                    class="form-control"
                    placeholder="새고객"
                    maxlength="100"
                  />
                </td>
              </tr>
              <tr>
                <th scope="row" class="required"><span>고객사ID</span></th>
                <td>
                  <input
                    v-model="model.custComId"
                    type="text"
                    class="form-control"
                    placeholder="영문자 3자리"
                    maxlength="3"
                  />
                </td>
              </tr>
              <tr>
                <th scope="row" class="required">
                  <span>사업자등록번호</span>
                </th>
                <td>
                  <div class="form-inline">
                    <input
                      v-model="model.bizNum1"
                      type="text"
                      class="form-control"
                      placeholder=""
                      maxlength="3"
                    />
                    <span class="bridge">-</span>
                    <input
                      v-model="model.bizNum2"
                      type="text"
                      class="form-control"
                      placeholder=""
                      maxlength="2"
                    />
                    <span class="bridge">-</span>
                    <input
                      v-model="model.bizNum3"
                      type="text"
                      class="form-control"
                      placeholder=""
                      maxlength="5"
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <th scope="row"><span>업태</span></th>
                <td>
                  <input
                    v-model="model.sectCd"
                    type="text"
                    class="form-control"
                    placeholder="서비스업"
                  />
                </td>
              </tr>
              <tr>
                <th scope="row"><span>종목</span></th>
                <td>
                  <input
                    v-model="model.entCd"
                    type="text"
                    class="form-control"
                    placeholder="전기처 충전사업"
                  />
                </td>
              </tr>
              <tr>
                <th scope="row" class="required"><span>본사주소</span></th>
                <td>
                  <div class="form-inline">
                    <input
                      v-model="headOffice.postcode"
                      type="text"
                      class="form-control"
                      placeholder="우편번호"
                      style="width: 100px"
                      readonly
                    />
                    <!-- <button type="button" class="btn btn-sm btn-gray ml-2">
                      주소검색
                    </button> -->
                    <addressApiBtnHead @close="fnResultAddrHead" />
                  </div>
                  <input
                    v-model="headOffice.address"
                    type="text"
                    class="form-control mt-1"
                    placeholder="큰주소"
                    readonly
                  />
                  <input
                    v-model="headOffice.addressDtl"
                    type="text"
                    class="form-control mt-1"
                    placeholder="상세주소"
                  />
                </td>
              </tr>
              <tr>
                <th scope="row" class="required"><span>고객사상태</span></th>
                <td>
                  <v-radio-group
                    class="radio-group"
                    v-model="model.custComStat"
                    row
                  >
                    <v-radio
                      v-for="key in customerLists"
                      :key="key"
                      :label="key"
                      :value="key"
                      color="orange"
                    />
                  </v-radio-group>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <!-- 고객사 담당자 정보 -->
      <div class="col-lg-6 col-md-12">
        <sub-title title="고객사 담당자 정보" />
        <div class="table">
          <table>
            <caption class="sr-only">
              고객사 담당자 정보
            </caption>
            <colgroup>
              <col width="30%" />
              <col width="*" />
            </colgroup>
            <tbody>
              <tr>
                <th scope="row" class="required"><span>담장자 명</span></th>
                <td>
                  <input
                    v-model="model.mgrNm"
                    type="text"
                    class="form-control"
                    placeholder="새고객"
                  />
                </td>
              </tr>
              <tr>
                <th scope="row" class="required"><span>부서</span></th>
                <td>
                  <input
                    v-model="model.deptNm"
                    type="text"
                    class="form-control"
                    placeholder="영업부"
                  />
                </td>
              </tr>
              <tr>
                <th scope="row" class="required"><span>직급</span></th>
                <td>
                  <input
                    v-model="model.deptRank"
                    type="text"
                    class="form-control"
                    placeholder="매니저"
                  />
                </td>
              </tr>
              <tr>
                <th scope="row"><span>전화번호</span></th>
                <td>
                  <div class="form-inline">
                    <input
                      v-model="model.telNum1"
                      type="text"
                      class="form-control"
                      placeholder=""
                    />
                    <span class="bridge">-</span>
                    <input
                      v-model="model.telNum2"
                      type="text"
                      class="form-control"
                      placeholder=""
                    />
                    <span class="bridge">-</span>
                    <input
                      v-model="model.telNum3"
                      type="text"
                      class="form-control"
                      placeholder=""
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <th scope="row" class="required"><span>핸드폰번호</span></th>
                <td>
                  <div class="form-inline">
                    <input
                      v-model="model.hpNum1"
                      type="text"
                      class="form-control"
                      placeholder=""
                    />
                    <span class="bridge">-</span>
                    <input
                      v-model="model.hpNum2"
                      type="text"
                      class="form-control"
                      placeholder=""
                    />
                    <span class="bridge">-</span>
                    <input
                      v-model="model.hpNum3"
                      type="text"
                      class="form-control"
                      placeholder=""
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <th scope="row" class="required"><span>이메일</span></th>
                <td>
                  <input
                    v-model="model.email"
                    type="text"
                    class="form-control"
                    placeholder=""
                  />
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <span
                    >담당자<br />
                    근무지 주소</span
                  >
                </th>
                <td>
                  <div class="form-inline">
                    <div class="form-group">
                      <input
                        v-model="personOffice.postcode"
                        type="text"
                        class="form-control"
                        placeholder="우편번호"
                        style="width: 100px"
                        readonly
                      />
                      <!-- <button
                        type="button"
                        class="btn btn-sm btn-gray ml-2"
                      >
                        주소검색
                      </button> -->
                      <addressApiBtnPerson @close="fnResultAddrPerson" />
                    </div>
                    <div class="form-group">
                      <v-checkbox
                        v-model="addressCheckbox"
                        label="고객사 본사주소와 동일"
                        value=""
                        color="orange"
                      />
                    </div>
                  </div>
                  <input
                    v-model="personOffice.address"
                    type="text"
                    class="form-control mt-1"
                    placeholder="큰주소"
                    readonly
                  />
                  <input
                    v-model="personOffice.addressDtl"
                    ref="address"
                    type="text"
                    class="form-control mt-1"
                    placeholder="상세주소"
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div class="flex-row">
      <!-- SK시그넷 담당자 정보 -->
      <div class="col-lg-6 col-md-12">
        <sub-title title="SK시그넷 담당자 정보" />
        <div class="table">
          <table>
            <colgroup>
              <col width="30%" />
              <col width="*" />
            </colgroup>
            <caption class="sr-only">
              SK시그넷 담당자 정보
            </caption>
            <tbody>
              <tr>
                <th scope="row" class="required"><span>담당자 명</span></th>
                <td>
                  <input
                    v-model="model.signetMgrNm"
                    type="text"
                    class="form-control"
                    placeholder="담당자명"
                  />
                </td>
              </tr>
              <tr>
                <th scope="row" class="required"><span>부서</span></th>
                <td>
                  <input
                    v-model="model.signetDeptNm"
                    type="text"
                    class="form-control"
                    placeholder="고객1팀"
                  />
                </td>
              </tr>
              <tr>
                <th scope="row" class="required"><span>직급</span></th>
                <td>
                  <input
                    v-model="model.signetDeptRank"
                    type="text"
                    class="form-control"
                    placeholder="과장"
                  />
                </td>
              </tr>
              <tr>
                <th scope="row"><span>전화번호</span></th>
                <td>
                  <div class="form-inline">
                    <input
                      v-model="model.signetTelNum1"
                      type="text"
                      class="form-control"
                      placeholder=""
                    />
                    <span class="bridge">-</span>
                    <input
                      v-model="model.signetTelNum2"
                      type="text"
                      class="form-control"
                      placeholder=""
                    />
                    <span class="bridge">-</span>
                    <input
                      v-model="model.signetTelNum3"
                      type="text"
                      class="form-control"
                      placeholder=""
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <th scope="row" class="required"><span>휴대폰번호</span></th>
                <td>
                  <div class="form-inline">
                    <input
                      v-model="model.signetHpNum1"
                      type="text"
                      class="form-control"
                      placeholder=""
                    />
                    <span class="bridge">-</span>
                    <input
                      v-model="model.signetHpNum2"
                      type="text"
                      class="form-control"
                      placeholder=""
                    />
                    <span class="bridge">-</span>
                    <input
                      v-model="model.signetHpNum3"
                      type="text"
                      class="form-control"
                      placeholder=""
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <th scope="row" class="required"><span>이메일</span></th>
                <td>
                  <input
                    v-model="model.signetEmail"
                    type="text"
                    class="form-control"
                    placeholder=""
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <!-- 고객사 대시보드 템플릿 정보 -->
      <div class="col-lg-6 col-md-12">
        <sub-title title="고객사 대시보드 템플릿 정보" />
        <div class="table">
          <table>
            <colgroup>
              <col width="30%" />
              <col width="*" />
            </colgroup>
            <caption class="sr-only">
              고객사 대시보드 템플릿 정보
            </caption>
            <tbody>
              <tr>
                <th scope="row"><span>대시보드 디자인</span></th>
                <td>
                  <v-radio-group
                    class="radio-group"
                    v-model="model.dboardTpeTp"
                    row
                  >
                    <v-radio
                      v-for="key in dashBoardLists"
                      :key="key"
                      :label="key"
                      :value="key"
                      color="orange"
                    />
                  </v-radio-group>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <!-- 비고 -->
        <sub-title class="mt-20" title="비고" />
        <div class="table">
          <table>
            <colgroup>
              <col width="30%" />
              <col width="*" />
            </colgroup>
            <caption class="sr-only">
              비고
            </caption>
            <tbody>
              <tr>
                <th scope="row"><span>비고</span></th>
                <td>
                  <textarea
                    v-model="model.cont"
                    name=""
                    id=""
                    style="height: 180px"
                    class="form-control"
                    placeholder="비고"
                  ></textarea>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div class="btn-area clearFix">
      <div class="pull-left">
        <button
          type="button"
          class="btn btn-default btn-yellow btn-fixed"
          @click="fnMoveList"
        >
          목록
        </button>
      </div>
      <div class="pull-right">
        <button
          type="button"
          class="btn btn-default btn-gray btn-fixed"
          @click="resetBtn"
        >
          초기화
        </button>
        <button
          type="button"
          class="btn btn-default btn-orange btn-fixed"
          @click="saveBtn"
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
import HeaderTop from "@/components/HeaderTop";
import SideBar from "@/components/SideBar";
import FooterBottom from "@/components/FooterBottom";
import HeadTitle from "@/components/HeadTitle";
import SubTitle from "@/components/SubTitle";
import addressApiBtn from "@/components/addressApiBtn";
import UseGuide from "@/components/UseGuide";
import { combineNumToStr } from "@/utils/commonUtil.js";
import { mapState, mapMutations } from "vuex";
import { insertCpo } from "@/api/cpo_api";

export default {
  components: {
    UseGuide,
    HeaderTop,
    SideBar,
    FooterBottom,
    HeadTitle,
    SubTitle,
    addressApiBtnHead: addressApiBtn,
    addressApiBtnPerson: addressApiBtn,
  },
  data() {
    return {
      customerLists: ["정상", "일시중지", "계약해지"],
      dashBoardLists: ["대시보드_A", "대시보드_B", "대시보드_C"],
      useGuideLists: ["리에서 생성하시면 됩니다."],
      addressCheckbox: false,
      model: {
        custComNm: "",
        custComId: "",
        bizNum: "",
        bizNum1: "",
        bizNum2: "",
        bizNum3: "",
        sectCd: "",
        entCd: "",
        custComStat: "0",
        mgrNm: "",
        deptNm: "",
        deptRank: "",
        telNum: "",
        telNum1: "",
        telNum2: "",
        telNum3: "",
        hpNum: "",
        hpNum1: "",
        hpNum1: "",
        hpNum2: "",
        hpNum3: "",
        email: "",
        signetMgrNm: "",
        signetDeptNm: "",
        signetDeptRank: "",
        signetTelNum: "",
        signetTelNum1: "",
        signetTelNum2: "",
        signetTelNum3: "",
        signetHpNum: "",
        signetHpNum1: "",
        signetHpNum2: "",
        signetHpNum3: "",
        signetEmail: "",
        dboardTpeTp: "0",
        cont: "",
        hdZipcd: "",
        hdAddr: "",
        hdAddrDtl: "",
        zipcd: "",
        addr: "",
        addrDtl: "",
        regId: "",
        regDt: "",
        modeId: "",
        modeDt: "",
      },
      headOffice: {
        extraAddress: "",
        address: "",
        postcode: "",
        addressDtl: "",
        checkBoxCtrl: false,
      },
      personOffice: {
        extraAddress: "",
        address: "",
        postcode: "",
        addressDtl: "",
        checkBoxCtrl: false,
      },
      status: 0,
    };
  },
  computed: {
    ...mapState({
      windowSize: (state) => state.settings.windowSize,
      deviceSideisActive: (state) => state.settings.deviceSideisActive,
      sideBarisActive: (state) => state.settings.sideBarisActive,
    }),
  },
  created() {},
  mounted() {
    window.addEventListener("resize", () => {
      this.resize();
    });
    this.resize();
  },
  watch: {
    addressCheckbox: "fnCheckBoxCtl",
  },
  methods: {
    ...mapMutations({
      resize: "settings/RESIZE",
    }),
    //저장 rest
    async fnInsertCpo(obj) {
      await insertCpo(obj)
        .then((response) => {
          if (response.data === "success") {
            this.$store.dispatch("setRouterParams/setParams", {
              viewData: obj,
            });
            this.fnCpoUpdate();
          }
        })
        .catch((e) => {
          alert(e);
        });
    },
    //
    fnCheckBoxCtl(val) {
      if (val) {
        this.personOffice = this.headOffice;
        this.personOffice.checkBoxCtrl = true;
        this.status = 0;
      } else {
        if (this.status != 1) {
          this.personOffice = {
            extraAddress: "",
            address: "",
            postcode: "",
            addressDtl: "",
            checkBoxCtrl: false,
          };
        }
      }
      return val;
    },
    resetBtn() {
      this.model = {
        custComNm: "",
        custComId: "",
        cpoId: "",
        bizNum1: "",
        bizNum2: "",
        bizNum3: "",
        sectCd: "",
        entCd: "",
        custComStat: "",
        mgrNm: "",
        deptNm: "",
        deptRank: "",
        telNum1: "",
        telNum2: "",
        telNum3: "",
        hpNum1: "",
        hpNum2: "",
        hpNum3: "",
        email: "",
        signetMgrNm: "",
        signetDeptNm: "",
        signetDeptRank: "",
        signetTelNum1: "",
        signetTelNum2: "",
        signetTelNum3: "",
        signetHpNum1: "",
        signetHpNum2: "",
        signetHpNum3: "",
        signetEmail: "",
        dboardTpeTp: "",
        cont: "",
        regNm: "",
        regDt: "",
        modeNm: "",
        modeDt: "",
      };
      this.headOffice = {
        extraAddress: "",
        address: "",
        postcode: "",
        addressDtl: "",
        checkBoxCtrl: false,
      };
      this.personOffice = {
        extraAddress: "",
        address: "",
        postcode: "",
        addressDtl: "",
        checkBoxCtrl: false,
      };
    },
    saveBtn() {
      this.summaryNum();
      if (this.validation(this.model)) {
        this.fnInsertCpo(this.model);
      }
    },
    fnMoveList() {
      this.$router
        .replace({
          name: "cpoManagement",
        })
        .catch(() => {});
    },
    fnResultAddrHead(json) {
      this.headOffice = json;
    },
    fnResultAddrPerson(json) {
      this.status = 1;
      this.personOffice = json;
      this.addressCheckbox = this.personOffice.checkBoxCtrl;
    },
    validation(values) {
      if (values.custComNm === "") {
        alert("고객사명을 입력해주세요.");
        //this.$refs.custComNm.focus();
        return false;
      } else if (values.custComId === "") {
        alert("고객사ID를 선택해주세요.");
        //this.$refs.custComId.focus();
        return false;
      } else if (values.bizNum === "") {
        alert("사업자 등록번호를 입력해주세요.");
        //this.$refs.bizNum.focus();
        return false;
      } else if (values.hdZipcd === "") {
        alert("본사 주소를 입력해주세요.");
        //this.$refs.bizNum.focus();
        return false;
      } else if (values.mgrNm === "") {
        alert("담담자 명을 입력해주세요.");
        //this.$refs.postType.focus();
        return false;
      } else if (values.deptNm === "") {
        alert("담담자 부서를 입력해주세요.");
        //this.$refs.postType.focus();
        return false;
      } else if (values.deptRank === "") {
        alert("담담자 직급을 입력해주세요.");
        //this.$refs.postType.focus();
        return false;
      } else if (values.hpNum === "") {
        alert("담담자 핸드폰번호를 입력해주세요.");
        //this.$refs.postType.focus();
        return false;
      } else if (values.email === "") {
        alert("담담자 이메일을 입력해주세요.");
        //this.$refs.postType.focus();
        return false;
      } else if (values.signetMgrNm === "") {
        alert("SK시그넷 담당자명을 입력해주세요.");
        //this.$refs.postType.focus();
        return false;
      } else if (values.signetDeptNm === "") {
        alert("SK시그넷 담담자 부서를 입력해주세요.");
        //this.$refs.postType.focus();
        return false;
      } else if (values.signetDeptRank === "") {
        alert("SK시그넷 담담자 직급을 입력해주세요.");
        //this.$refs.postType.focus();
        return false;
      } else if (values.signetHpNum === "") {
        alert("SK시그넷 담담자 핸드폰번호를 입력해주세요.");
        //this.$refs.postType.focus();
        return false;
      } else if (values.signetEmail === "") {
        alert("SK시그넷 담담자 이메일을 입력해주세요.");
        //this.$refs.postType.focus();
        return false;
      }
      return true;
    },
    summaryNum() {
      this.model.bizNum = combineNumToStr(
        this.model.bizNum1,
        this.model.bizNum2,
        this.model.bizNum3
      );
      this.model.telNum = combineNumToStr(
        this.model.telNum1,
        this.model.telNum2,
        this.model.telNum3
      );
      this.model.hpNum = combineNumToStr(
        this.model.hpNum1,
        this.model.hpNum2,
        this.model.hpNum3
      );
      this.model.signetTelNum = combineNumToStr(
        this.model.signetTelNum1,
        this.model.signetTelNum2,
        this.model.signetTelNum3
      );
      this.model.signetHpNum = combineNumToStr(
        this.model.signetHpNum1,
        this.model.signetHpNum2,
        this.model.signetHpNum3
      );
      this.model.hdZipcd = this.headOffice.postcode;
      this.model.hdAddr = this.headOffice.address;
      this.model.hdAddrDtl = this.headOffice.addressDtl;

      this.model.zipcd = this.personOffice.postcode;
      this.model.addr = this.personOffice.address;
      this.model.addrDtl = this.personOffice.addressDtl;
    },
    fnCpoUpdate() {
      this.$router
        .push({
          name: "cpoManagementDetail",
        })
        .catch(() => {});
    },
  },
};
</script>

<style scoped></style>
