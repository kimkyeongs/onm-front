<template>
  <section class="onmContent">
    <head-title title="사용자로그인 모니터링 상세보기" />
    <sub-title title="로그인 상세정보" />
    <div class="table">
      <table>
        <caption class="sr-only">로그인 상세정보</caption>
        <colgroup>
          <col width="20%">
          <col width="30%">
          <col width="20%">
          <col width="*">
        </colgroup>
        <tbody>
          <tr>
            <th scope="row"><span>고객사명</span></th>
            <td></td>
            <th scope="row"><span>사용자ID</span></th>
            <td></td>
          </tr>
          <tr>
            <th scope="row"><span>사용자명</span></th>
            <td></td>
            <th scope="row"><span>로그인 일시</span></th>
            <td></td>
          </tr>
          <tr>
            <th scope="row"><span>IP주소</span></th>
            <td></td>
            <th scope="row"><span>Agent</span></th>
            <td></td>
          </tr>
          <tr>
            <th scope="row"><span>상태</span></th>
            <td colspan="3"></td>
          </tr>
        </tbody>
      </table>
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
      </div>
    </div>
    <!-- 이용가이드 -->
    <sub-title title="이용가이드" />
    <use-guide :useGuideLists="useGuideLists" />
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
    OnmIaAdmSup030P,
  },
  data() {
    return {
      useGuideLists: [
        "- 이 페이지는 고객사 플랫폼 대표관리자가 사용자의 로그인 이력을 모니터링하는 페이지 입니다.",
        "- 상태는 접속중과 로그아웃으로 표시되며, 사용자가 웹브라우저를 닫아서 종료한 경우에는 로그아웃 추적이 불가하여 접속중으로 표시됩니다.",
        "- 로그아웃일시는 사용자가 로그아웃버튼을 클릭하고 로그아웃 한 경우에만 표시 됩니다.",
      ],
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