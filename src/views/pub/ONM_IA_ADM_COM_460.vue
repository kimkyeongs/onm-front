<template>
  <section class="onmContent">
    <head-title title="REST API 키 관리"/>
    <div class="statusArea-wrap">
      <search-btnOption :searchDownloadOption="false"/>  
    </div>
    <!-- 검색영역 -->
    <div
      v-if="searchIsActive"
      class="searchArea mt-3 mb-5">
      <div class="row-form mb-3">
        <div class="col-lg-1 col-md-2">
          <label for="">고객사명</label>
        </div>  
        <div class="col-lg-2 col-md-4">
          <v-select
            :items="items"
            class="selectBox"
            label="전체"
            dense
            solo />
        </div>
        <div class="col-lg-1 col-md-2">
          <label for="">검색일</label>
        </div>
        <div class="col-lg-2 col-md-4">
          <date-picker :range="range"/>
        </div>
        <div class="col-lg-1 col-md-2">
          <label for="">사용자ID</label>
        </div>
        <div class="col-lg-2 col-md-4">
          <input type="text" class="form-control" placeholder="사용자ID">
        </div>
        <div class="col-lg-1 col-md-2">
          <label for="">사용자명</label>
        </div>
        <div class="col-lg-2 col-md-4">
          <input type="text" class="form-control" placeholder="사용자명">
        </div>
        
      </div>
      <btn-reset-search />
    </div>
    <!--// 검색영역 -->
    <!-- 필터 -->
    <div class="pagekeyWord-wrap">
      <page-count />
      <search-filter
        :searchFilter="searchFilters" />
    </div>
    <!-- GRID -->
    <sample-ag-grid />
    <!--// GRID -->
    <div class="btn-area text-right">
      <button
        type="button"
        class="btn btn-default btn-gray"
        @click="modalOpen">개인정보 마스킹제거</button>
      <button type="button" class="btn btn-default btn-orange btn-fixed">등록</button>
    </div>
    <!-- 이용가이드 -->
    <sub-title title="이용가이드" />
    <use-guide
      :useGuideLists="useGuideLists" />
    <onm-ia-adm-sup030-p />  
  </section>

</template>

<script>

import HeadTitle from '@/components/HeadTitle'
import SubTitle from '@/components/SubTitle'
import SearchBtnOption from '@/components/SearchBtnOption'
import BtnResetSearch from '@/components/BtnResetSearch'
import PageCount from '@/components/PageCount'
import SearchFilter from '@/components/SearchFilter'
import UseGuide from '@/components/UseGuide'
import SampleAgGrid from '@/components/SampleAgGrid'
import DatePicker from '@/components/DatePicker.vue'
import OnmIaAdmSup030P from "@/views/pub/ONM_IA_ADM_SUP_030_P"; //개인정보 마스킹제거Modal
import { mapState, mapMutations } from 'vuex'


export default {
  components: {
    HeadTitle,
    SubTitle,
    SearchBtnOption,
    BtnResetSearch,
    PageCount,
    SearchFilter,
    UseGuide,
    SampleAgGrid,
    OnmIaAdmSup030P,
    DatePicker
  },
  data() {
    return {
      range: true,
      items: ['아이템-1', '아이템-2', '아이템-3'],
      searchFilters: [
        { filterTitle: '권경', filterText: '서울특별시'},
        { filterTitle: '충전소ID', filterText: 'SIG000003'},
        { filterTitle: '충전기구분', filterText: '완속'},
        { filterTitle: '운영시작일', filterText: '2022-10-22'}
      ],
      useGuideLists: [
        '- Rest API 키 관리는 외부에 연동할 사업자에 발행할 API Key를 관리하는 메뉴 입니다.',
      ]
    }
  },
  computed: {
    ...mapState({
      searchIsActive: (state) => state.settings.searchIsActive,
      isActiveModal: (state) => state.settings.isActiveModal,
    }),
  },
  mounted() {

  },
  methods: {
    ...mapMutations({
      modalOpen: "settings/MODAL_OPEN",
    }),
  }
}
</script>

<style>

</style>