<template>
  <section class="onmContent">
    <head-title title="법인회원사 약관 관리" />
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
          법인회원사 이용약관 Editer
        </textarea>
      </div>
      <div v-else-if="isActiveTab == 1">
        <textarea name="" id="" cols="30" rows="10" class="textAreaResizeNone">
          법인회원사 대표관리자용 O&M플랫폼 이용약관 Editer
        </textarea>
      </div>
      <div v-else>
        <textarea name="" id="" cols="30" rows="10" class="textAreaResizeNone">
          법인회원사 대표관리자용 개인정보처리방침 Editer
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
      tabLists:['법인회원사 이용약관', '법인회원사 대표관리자용 O&M플랫폼 이용약관', '법인회원사 대표관리자용 개인정보처리방침'],
      useGuideLists: [
        "- 이 페이지는 고객사 회원앱에 노출되는 법인회원사 및 법인회원사 대표관리자용 이용약관 들을 관리하는 페이지 입니다.",
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