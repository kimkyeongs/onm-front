<template>
  <section class="onmContent">
    <head-title title="사용자로그인 모니터링"/>
    <div class="statusArea-wrap">
      <search-btnOption />  
    </div>
    <!-- 검색영역 -->
    <div
      v-if="searchIsActive"
      class="searchArea mt-3 mb-5">
      <div class="row-form mb-3">
        <div class="col-lg-1 col-md-2">
          <div class="checkbox-inline">
            <v-checkbox
              v-model="searchCheck"
              value="고객사명"
              color="orange"
              v-if="checkboxShow" />
            <label for="">고객사명</label>
          </div>
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
          <div class="checkbox-inline">
            <v-checkbox
              v-model="searchCheck"
              value="검색일"
              color="orange"
              v-if="checkboxShow" />
            <label for="">검색일</label>
          </div>
        </div>
        <div class="col-lg-2 col-md-4">
          <date-picker :range= range />
        </div>
        <div class="col-lg-1 col-md-2">
          <div class="checkbox-inline">
            <v-checkbox
              v-model="searchCheck"
              value="사용자ID"
              color="orange"
              v-if="checkboxShow" />
            <label for="">사용자ID</label>
          </div>
        </div>
        <div class="col-lg-2 col-md-4">
          <input type="text" class="form-control" placeholder="사용자ID">
        </div>
        <div class="col-lg-1 col-md-2">
          <div class="checkbox-inline">
            <v-checkbox
              v-model="searchCheck"
              value="사용자명"
              color="orange"
              v-if="checkboxShow" />
            <label for="">사용자명</label>
          </div>
        </div>
        <div class="col-lg-2 col-md-4">
          <input type="text" class="form-control" placeholder="사용자명">
        </div>
      </div>
      <btn-reset-search 
        v-if="searchOption" />
      <btn-download-search 
        v-else />
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
    <div class="btn-area clearFix">
      <div class="pull-right">
        <button
          type="button"
          class="btn btn-default btn-gray"
          @click="modalOpen">개인정보 마스킹 제거</button>
      </div>
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
import OnmIaAdmSup030P from '@/views/ONM_IA_ADM_SUP_030_P' //개인정보 마스킹제거Modal
import DatePicker from '@/components/DatePicker'
import BtnDownloadSearch from '@/components/BtnDownloadSearch.vue'
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
    DatePicker,
    BtnDownloadSearch
  },
  data() {
    return {
      searchCheck: ['고객사명', '검색일', '사용자ID', '사용자명'],
      items: ['아이템-1', '아이템-2', '아이템-3'],
      searchFilters: [
        { filterTitle: '권경', filterText: '서울특별시'},
        { filterTitle: '충전소ID', filterText: 'SIG000003'},
        { filterTitle: '충전기구분', filterText: '완속'},
        { filterTitle: '운영시작일', filterText: '2022-10-22'}
      ],
      useGuideLists: [
        '- 이 페이지는 고객사 플랫폼 대표관리자가 사용자의 로그인 이력을 모니터링하는 페이지 입니다.',
        '- 상태는 접속중과 로그아웃으로 표시되며, 사용자가 웹브라우저를 닫아서 종료한 경우에는 로그아웃 추적이 불가하여 접속중으로 표시됩니다.',
        '- 로그아웃일시는 사용자가 로그아웃버튼을 클릭하고 로그아웃 한 경우에만 표시 됩니다.'
      ],
      range: true
    }
  },
  computed: {
    ...mapState([
      'searchIsActive',
      'searchOption',
      'checkboxShow',
      'isActiveModal'
    ]),
  },
  mounted() {

  },
  methods: {
    ...mapMutations({
      modalOpen: 'MODAL_OPEN'
    }),
  }
}
</script>

<style>

</style>