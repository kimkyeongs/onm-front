<template>
  <section class="onmContent">
    <head-title title="REST API 키 등록" />

    <div class="flex-row">  
      <!-- Rest API 키 정보 -->
      <div class="col-lg-6 col-md-12">
        <sub-title title="Rest API 키 정보" />
        <div class="table">
          <table>
            <caption class="sr-only">Rest API 키 정보</caption>
            <colgroup>
              <col width="30%">
              <col width="*">
            </colgroup>
            <tbody>
              <tr>
                <th scope="row" class="required"><span>연동사업자명</span></th>
                <td></td>
              </tr>
              <tr>
                <th scope="row" class="required"><span>연동서비스명</span></th>
                <td></td>
              </tr>
              <tr>
                <th scope="row" rowspan="2" class="required"><span>API ID</span></th>
                <td>3ef1a88f670b4e75067f95ae0081f0eb</td>
              </tr>
              <tr>
                <td>재발급 2회 (최종재발급일 2022-12-12 12:12</td>
              </tr>
              <tr>
                <th scope="row" class="required"><span>API Key</span></th>
                <td></td>
              </tr>
              <tr>
                <th scope="row" class="required"><span>API 상태</span></th>
                <td>
                  <v-radio-group class="radio-group" v-model="radio01Type" row>
                    <v-radio
                      v-for="key in radio01"
                      :key="key"
                      :label="key"
                      :value="key"
                      color="orange"
                      :readonly="true"
                    />
                  </v-radio-group>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <!-- 사이트 도메인 정보 -->
      <div class="col-lg-6 col-md-12 subject">
        <sub-title title="사이트 도메인 정보" />
        <div class="font14 mb-10">
          <ul>
            <li>O&M플랫폼을 통해 통신되는 Web링크 기본 값으로 사용합니다.</li>
            <li>여러 개의 도메인은 줄바꿈으로 추가해 주세요. 최대 10개까지 가능합니다.</li>
            <li>예시: (O) https://example.com   (X) https://www.example.com</li>
          </ul>
        </div>
        <textarea name="" id="" cols="30" rows="10" class="form-control" style="height:180px"></textarea>
      </div>
    </div>

    <div class="flex-row">
      <!-- 연동사업자 담당자 정보 -->
      <div class="col-lg-6 col-md-12">
        <sub-title title="연동사업자 담당자 정보" />
        <div class="table">
          <table>
            <caption class="sr-only">연동사업자 담당자 정보</caption>
            <colgroup>
              <col width="30%">
              <col width="*">
            </colgroup>
            <tbody>
              <tr>
                <th scope="row"><span>담당자명</span></th>
                <td></td>
              </tr>
              <tr>
                <th scope="row"><span>부서</span></th>
                <td></td>
              </tr>
              <tr>
                <th scope="row"><span>직급</span></th>
                <td></td>
              </tr>
              <tr>
                <th scope="row"><span>전화번호</span></th>
                <td></td>
              </tr>
              <tr>
                <th scope="row"><span>휴대번호</span></th>
                <td></td>
              </tr>
              <tr>
                <th scope="row"><span>이메일</span></th>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <!-- SK시그넷 담당자 정보 -->
      <div class="col-lg-6 col-md-12 subject">
        <sub-title title="SK시그넷 담당자 정보" />
        <div class="table">
          <table>
            <caption class="sr-only">SK시그넷 담당자 정보</caption>
            <colgroup>
              <col width="30%">
              <col width="*">
            </colgroup>
            <tbody>
              <tr>
                <th scope="row"><span>담당자명</span></th>
                <td></td>
              </tr>
              <tr>
                <th scope="row"><span>부서</span></th>
                <td></td>
              </tr>
              <tr>
                <th scope="row"><span>직급</span></th>
                <td></td>
              </tr>
              <tr>
                <th scope="row"><span>전화번호</span></th>
                <td></td>
              </tr>
              <tr>
                <th scope="row"><span>휴대번호</span></th>
                <td></td>
              </tr>
              <tr>
                <th scope="row"><span>이메일</span></th>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div class="btn-area clearFix">
      <div class="pull-left">
        <button type="button" class="btn btn-default btn-yellow btn-fixed">목록</button>
      </div>
      <div class="pull-right">
        <button
          type="button"
          class="btn btn-default btn-gray"
          @click="modalOpen">개인정보 마스킹 제거</button>
        <button type="button" class="btn btn-default btn-orange btn-fixed">수정</button>
      </div>
    </div>
    <!-- 최종수정자 정보 -->
    <sub-title title="최종수정자 정보" />
    <div class="table">
      <table>
        <captiion class="sr-only">최종수정자 정보</captiion>
        <colgroup>
          <col width="20%">
          <col width="30%">
          <col width="20%">
          <col width="*">
        </colgroup>
        <tbody>
          <tr>
            <th scope="row"><span>최종수정자</span></th>
            <td colspan="3"></td>
          </tr>
          <tr>
            <th scope="row"><span>최종수정일시</span></th>
            <td></td>
            <th scope="row"><span>최종등록일시</span></th>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- 이용가이드 -->
    <sub-title class="mt-20" title="이용가이드" />
    <use-guide
      :useGuideLists="useGuideLists" />
    <onm-ia-adm-sup030-p />
  </section>
</template>

<script>
import HeadTitle from "@/components/HeadTitle"
import SubTitle from "@/components/SubTitle"
import UseGuide from "@/components/UseGuide"
import OnmIaAdmSup030P from "@/views/pub/ONM_IA_ADM_SUP_030_P" //개인정보 마스킹제거Modal
import { mapState, mapMutations } from "vuex"

export default {
  components: {
    HeadTitle,
    SubTitle,
    UseGuide,
    OnmIaAdmSup030P
  },
  data() {
    return {
      useGuideLists: [
        "- Rest API 키 관리는 외부에 연동할 사업자에 발행할 API Key를 관리하는 메뉴 입니다.",
        "- API ID는 자동 발급되며, 수정되지 않습니다. 새로운 ID가 필요하신 경우 신규로 등록하시면 됩니다.",
        "- API Key는 자동발급되며, 추후 재발급 할 수 있습니다. 재발급 된 경우 이전 키는 사용하실 수 없습니다.",
        "- API 상태가 정상인 경우에만 API가 정상적으로 작동 됩니다."
      ],
      radio01: ['정상', '중지'],
      radio01Type: '정상',
    }
  },
  computed: {
    ...mapState({
      isActiveModal: (state) => state.settings.isActiveModal,
    }),
  },
  methods: {
    ...mapMutations({
      modalOpen: "settings/MODAL_OPEN",
    }),
  },
}
</script>

<style>

</style>