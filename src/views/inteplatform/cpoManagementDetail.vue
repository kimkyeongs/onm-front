<template>
  <section class="onmContent">
    <head-title title="플랫폼 고객사(CPO) 상세보기" />
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
                <td>{{ viewData.custComNm }}</td>
              </tr>
              <tr>
                <th scope="row" class="required"><span>고객사ID</span></th>
                <td>{{ viewData.custComId }}</td>
              </tr>
              <tr>
                <th scope="row" class="required">
                  <span>사업자등록번호</span>
                </th>
                <td>{{ viewData.bizNum }}</td>
              </tr>
              <tr>
                <th scope="row"><span>업태</span></th>
                <td>{{ viewData.sectCd }}</td>
              </tr>
              <tr>
                <th scope="row"><span>종목</span></th>
                <td>{{ viewData.entCd }}</td>
              </tr>
              <tr>
                <th scope="row" class="required">
                  <span>본사주소</span>
                </th>
                <td>
                  {{ viewData.hdZipcd }},{{ viewData.hdAddr }},{{
                    viewData.hdAddrDtl
                  }}
                </td>
              </tr>
              <tr>
                <th scope="row" class="required"><span>고객사상태</span></th>
                <td>{{ viewData.custComStat }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <!-- 고객사 담당자 정보 -->
      <div class="col-lg-6 col-md-12 subject">
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
                <td>{{ viewData.mgrNm }}</td>
              </tr>
              <tr>
                <th scope="row" class="required"><span>부서</span></th>
                <td>{{ viewData.deptNm }}</td>
              </tr>
              <tr>
                <th scope="row" class="required"><span>직급</span></th>
                <td>{{ viewData.deptRank }}</td>
              </tr>
              <tr>
                <th scope="row"><span>전화번호</span></th>
                <td>{{ viewData.telNum }}</td>
              </tr>
              <tr>
                <th scope="row" class="required"><span>핸드폰번호</span></th>
                <td>{{ viewData.hpNum }}</td>
              </tr>
              <tr>
                <th scope="row" class="required"><span>이메일</span></th>
                <td>{{ viewData.email }}</td>
              </tr>
              <tr>
                <th scope="row">
                  <span
                    >담당자<br />
                    근무지 주소</span
                  >
                </th>
                <td>
                  {{ viewData.zipcd }},{{ viewData.addr }},{{
                    viewData.addrDtl
                  }}
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
                <th scope="row" class="required"><span>담당자명</span></th>
                <td>{{ viewData.signetMgrNm }}</td>
              </tr>
              <tr>
                <th scope="row" class="required"><span>부서</span></th>
                <td>{{ viewData.signetDeptNm }}</td>
              </tr>
              <tr>
                <th scope="row" class="required"><span>직급</span></th>
                <td>{{ viewData.signetDeptRank }}</td>
              </tr>
              <tr>
                <th scope="row" class="required"><span>전화번호</span></th>
                <td>{{ viewData.signetTelNum }}</td>
              </tr>
              <tr>
                <th scope="row" class="required"><span>휴대폰번호</span></th>
                <td>{{ viewData.signetHpNum }}</td>
              </tr>
              <tr>
                <th scope="row" class="required"><span>이메일</span></th>
                <td>{{ viewData.signetEmail }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <!-- 고객사 대시보드 템플릿 정보 -->
      <div class="col-lg-6 col-md-12 subject">
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
                <td>{{ viewData.dboardTpeTp }}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <!-- 비고 -->
        <sub-title class="mt-20" title="비고" />
        <textarea
          v-model="viewData.cont"
          name=""
          id=""
          style="height: 147px"
          class="form-control"
          readonly
        ></textarea>
      </div>
    </div>

    <div class="btn-area clearFix">
      <div class="pull-left">
        <button
          type="button"
          class="btn btn-default btn-yellow btn-fixed"
          @click="fnBackList()"
        >
          목록
        </button>
      </div>
      <div class="pull-right">
        <button
          type="button"
          class="btn btn-default btn-gray"
          v-show="this.btnShow"
          @click="modalOpen"
        >
          개인정보 마스킹제거
        </button>
        <button
          type="button"
          class="btn btn-default btn-orange btn-fixed"
          @click="fnCpoUpdate"
        >
          수정
        </button>
      </div>
    </div>
    <!-- 이용가이드 -->
    <sub-title title="이용가이드" />
    <use-guide :useGuideLists="useGuideLists" />
    <!-- 개인정보마스킹제거 팝업 -->
    <removeMaskingPop @pwdCheck="fnPwdCheck" />
  </section>
</template>

<script>
import HeadTitle from "@/components/HeadTitle";
import SubTitle from "@/components/SubTitle";
import UseGuide from "@/components/UseGuide";
import removeMaskingPop from "@/views/popup/removeMaskingPop"; //개인정보 마스킹제거Modal
import { mapState, mapMutations } from "vuex";
import { maskingEmail } from "@/utils/commonUtil.js";

export default {
  components: {
    HeadTitle,
    SubTitle,
    UseGuide,
    removeMaskingPop,
  },
  data: () => ({
    customerLists: ["정상", "일시중지", "계약해지"],
    dashBoardLists: ["대시보드_A", "대시보드_B", "대시보드_C"],
    addressCheckbox: true,
    useGuideLists: [
      "- 이 페이지는 플랫폼통합관리자가 고객사(CPO)의 상세정보를 보는 페이지로 플랫폼통합관리자만 사용이 가능합니다.",
      "- 고객사 담당자는 제휴 또는 계약담당자를 의미하며 고객사의 대표관리자를 의미하는 것은 아니며, 플랫폼에 로그인이 필요한 경우, 사용자/권한관리 > 사용자관리에서 생성하시면 됩니다.",
      "- 고객사(CPO)의 로밍관련 인증정보, 알림톡관련 계정정보, PG관련 계정정보는 플랫폼 고객사 등록 후, 해당 고객사의 플랫폼 관리메뉴에서 관리할 수 있습니다.",
      "- 등록된 고객사의 삭제는 위험한 작업으로 기능을 제공하지 않습니다. 필요시 일시중지 또는 계약해지를 통 해고객사의 기능을 제어하시고, 필요시 시스템관리자를 통해 수동으로 삭제를 진행하셔야 합니다.",
    ],
    viewData: {},
    orgData: {
      email: "",
      hpNum: "",
    },
    btnShow: "ok",
  }),
  computed: {
    ...mapState({
      isActiveModal: (state) => state.settings.isActiveModal,
    }),
  },
  created() {
    if (this.$store.getters.routeParams.viewData != undefined) {
    }
  },
  beforeMount() {},
  mounted() {
    if (this.$store.getters.routeParams.viewData == undefined) {
      this.viewData = this.$route.params;
      this.viewData.orgEmail = this.$route.params.email;
      this.viewData.orgHpNum = this.$route.params.hpNum;
      this.orgData.email = this.$route.params.email;
      this.orgData.hpNum = this.$route.params.hpNum;
      this.fnMasking(this.viewData);
      this.$store.dispatch("setRouterParams/setParams", {
        viewData: this.viewData,
      });
    } else {
      this.viewData = this.$store.getters.routeParams.viewData;
      this.orgData.email = this.$store.getters.routeParams.viewData.orgEmail;
      this.orgData.hpNum = this.$store.getters.routeParams.viewData.orgHpNum;
    }

    //this.fnGetCpo("20221129CPO000000001");
  },
  watch: {},
  methods: {
    ...mapMutations({
      modalOpen: "settings/MODAL_OPEN",
    }),
    fnMasking(obj) {
      if (obj.hpNum != undefined && obj.email != undefined) {
        obj.hpNum = obj.hpNum.substring(0, 9) + "*".repeat(4);
        obj.email = maskingEmail(obj.email);
      }
    },
    fnUnMasking() {
      this.viewData.email = this.orgData.email;
      this.viewData.hpNum = this.orgData.hpNum;
    },
    fnBackList() {
      this.$store.dispatch("setRouterParams/setParams", {});
      this.$router
        .push({
          name: "cpoManagement",
        })
        .catch(() => {});
    },
    fnCpoUpdate() {
      this.$router
        .push({
          name: "updateCpo",
        })
        .catch(() => {});
    },
    fnPwdCheck(val) {
      if (val.result) {
        this.fnUnMasking();
        this.btnShow = "";
      }
    },
  },
};
</script>

<style scoped></style>
