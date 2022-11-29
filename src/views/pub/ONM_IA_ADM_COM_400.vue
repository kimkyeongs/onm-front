<template>
  <section class="onmContent">
    <head-title title="사용자 약관 관리" />
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
          사용자 O&M플랫폼 이용약관 Editer
        </textarea>
      </div>
      <div v-else>
        <textarea name="" id="" cols="30" rows="10" class="textAreaResizeNone">
          사용자 개인정보처리방침 Editer
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
import HeadTitle from "@/components/HeadTitle"
import SubTitle from "@/components/SubTitle"
import UseGuide from "@/components/UseGuide"
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
      tabLists:['사용자 O&M플랫폼 이용약관', '사용자 개인정보처리방침'],
      useGuideLists: [
        "- 이 페이지는 O&M 사용자가 로그인 페이지를 통해 직접 사용자신청시 사용하는 이용약관 들을 관리하는 페이지입니다.",
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