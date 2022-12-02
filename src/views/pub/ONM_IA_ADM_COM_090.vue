<template>
  <section class="onmContent">
    <head-title title="회원정보 엑셀다운로드 모니터링" />
    <sub-title title="회원정보 엑셀다운로드 모니터링 상세보기" />
    <div class="table">
      <table>
        <caption class="sr-only">회원정보 엑셀다운로드 모니터링 상세보기</caption>
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
            <th scope="row"><span>엑셀다운로드 일시</span></th>
            <td></td>
          </tr>
          <tr>
            <th scope="row"><span>엑셀다운로드 사용 위치</span></th>
            <td></td>
            <th scope="row"><span>IP주소</span></th>
            <td></td>
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
import HeadTitle from "@/views/pub/components/HeadTitle"
import SubTitle from "@/views/pub/components/SubTitle"
import UseGuide from "@/views/pub/components/UseGuide"
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
        "- 이 페이지는 고객사 플랫폼 대표관리자가 사용자의 회원정보 엑셀다운로드 이력을 모니터링하는 페이지 입니다."
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