<template>
  <section class="onmContent">
    <head-title title="회원(개인/법인) 약관 관리" />
    <div class="gridMultiSearch mb-2">
      <div class="searchGroup">
        <label for="">고객사선택</label>
        <v-select
          :items="items"
          class="selectBox"
          style="width: 200px;"
          label="선택"
          dense
          solo />
      </div>
    </div>

    <nav-tabs
      :tabLists="tabLists"/>
    <div class="panel">  
      <div v-if="isActiveTab == 0">
        <textarea name="" id="" cols="30" rows="10" class="textAreaResizeNone">
          전기자동차 충전서비스 이용약관 Editer
        </textarea>
      </div>
      <div v-else-if="isActiveTab == 1">
        <textarea name="" id="" cols="30" rows="10" class="textAreaResizeNone">
          전자금융거래 이용약관 Editer
        </textarea>
      </div>
      <div v-else-if="isActiveTab == 2">
        <textarea name="" id="" cols="30" rows="10" class="textAreaResizeNone">
          사용자 위치기반서비스 이용약관 Editer
        </textarea>
      </div>
      <div v-else>
        <textarea name="" id="" cols="30" rows="10" class="textAreaResizeNone">
          개인정보처리방침 Editer
        </textarea>  
      </div>
    </div>
    <div class="btn-area clearFix text-right">
      <button type="button" class="btn btn-default btn-orange btn-fixed">저장</button>
    </div>
    <!-- 이용가이드 -->
    <sub-title title="이용가이드" />
    <use-guide :useGuideLists="useGuideLists" />
  </section>
</template>

<script>
import HeadTitle from "@/views/pub/components/HeadTitle"
import SubTitle from "@/views/pub/components/SubTitle"
import UseGuide from "@/views/pub/components/UseGuide"
import NavTabs from "@/views/pub/components/NavTabs"
import { mapState } from "vuex"

export default {
  components: {
    HeadTitle,
    SubTitle,
    UseGuide,
    NavTabs,
  },
  data() {
    return {
      items: ['아이템-1', '아이템-2', '아이템-3'],
      tabLists:['전기자동차 충전서비스 이용약관', '전자금융거래 이용약관', '사용자 위치기반서비스 이용약관', '개인정보처리방침'],
      useGuideLists: [
        "- 이 페이지는 고객사 회원앱에 노출되는 이용약관들과 개인정보처리방침을 관리하는 페이지 입니다.",
        "- 각 상단의 탭을 이용하여 필요한 약관 항목에서 수정하면 바로 반영 됩니다.",
      ],
    }
  },
  computed: {
    ...mapState({
      isActiveTab: (state) => state.settings.isActiveTab,
    }),
  },
}
</script>

<style>

</style>