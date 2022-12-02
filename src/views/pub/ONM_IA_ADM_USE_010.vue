<template>
  <section class="onmContent">
    <head-title title="사용자관리" />
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
          <v-combobox
            v-model="model"
            :items="items"
            class="multiCombox text-crop"
            label="멀티선택"
            hide-selected
            multiple
            small-chips
            solo >
            <template v-slot:selection="{ item, parent}">
              <v-chip
                label>
                <span>
                  {{ item }}
                </span>
                <v-icon
                  small
                  @click="parent.selectItem(item)" >
                  $delete
                </v-icon>
              </v-chip>
            </template>
          </v-combobox>
        </div>
        <div class="col-lg-1 col-md-2">
          <div class="checkbox-inline">
            <v-checkbox
              v-model="searchCheck"
              value="사용자상태"
              color="orange"
              v-if="checkboxShow" />
            <label for="">사용자상태</label>
          </div>
        </div>
        <div class="col-lg-2 col-md-4">
          <v-combobox
            v-model="model"
            :items="items"
            class="multiCombox text-crop"
            label="멀티선택"
            hide-selected
            multiple
            small-chips
            solo >
            <template v-slot:selection="{ item, parent}">
              <v-chip
                label>
                <span>
                  {{ item }}
                </span>
                <v-icon
                  small
                  @click="parent.selectItem(item)" >
                  $delete
                </v-icon>
              </v-chip>
            </template>
          </v-combobox>
        </div>
        <div class="col-lg-1 col-md-2">
          <div class="checkbox-inline">
            <v-checkbox
              v-model="searchCheck"
              value="권한여부"
              color="orange"
              v-if="checkboxShow" />
            <label for="">권한여부</label>
          </div>
        </div>
        <div class="col-lg-2 col-md-4">
          <v-combobox
            v-model="model"
            :items="items"
            class="multiCombox text-crop"
            label="멀티선택"
            hide-selected
            multiple
            small-chips
            solo >
            <template v-slot:selection="{ item, parent}">
              <v-chip
                label>
                <span>
                  {{ item }}
                </span>
                <v-icon
                  small
                  @click="parent.selectItem(item)" >
                  $delete
                </v-icon>
              </v-chip>
            </template>
          </v-combobox>
        </div>
        <div class="col-lg-1 col-md-2">
          <div class="checkbox-inline">
            <v-checkbox
              v-model="searchCheck"
              value="법인회원사"
              color="orange"
              v-if="checkboxShow" />
            <label for="">법인회원사</label>
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
              value="지사"
              color="orange"
              v-if="checkboxShow" />
            <label for="">지사</label>
          </div>
        </div>
        <div class="col-lg-2 col-md-4">
          <v-combobox
            v-model="model"
            :items="items"
            class="multiCombox text-crop"
            label="멀티선택"
            hide-selected
            multiple
            small-chips
            solo >
            <template v-slot:selection="{ item, parent}">
              <v-chip
                label>
                <span>
                  {{ item }}
                </span>
                <v-icon
                  small
                  @click="parent.selectItem(item)" >
                  $delete
                </v-icon>
              </v-chip>
            </template>
          </v-combobox>
        </div>
        <div class="col-lg-1 col-md-2">
          <div class="checkbox-inline">
            <v-checkbox
              v-model="searchCheck"
              value="가입기간"
              color="orange"
              v-if="checkboxShow" />
            <label for="">가입기간</label>
          </div>
        </div>
        <div class="col-lg-2 col-md-4">
          <date-picker :range="range" />
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
      <btn-download-search :maskingDownload="true"
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
    <div class="btn-area text-right">
      <button
        type="button"
        class="btn btn-default btn-gray"
        @click="modalOpen">개인정보 마스킹제거</button>
      <button type="button" class="btn btn-default btn-yellow btn-fixed">다량등록</button>
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

import HeadTitle from '@/views/pub/components/HeadTitle'
import SubTitle from '@/views/pub/components/SubTitle'
import SearchBtnOption from '@/views/pub/components/SearchBtnOption'
import CheckBox from '@/views/pub/components/CheckBox'
import BtnResetSearch from '@/views/pub/components/BtnResetSearch'
import PageCount from '@/views/pub/components/PageCount'
import SearchFilter from '@/views/pub/components/SearchFilter'
import UseGuide from '@/views/pub/components/UseGuide'
import SampleAgGrid from '@/views/pub/components/SampleAgGrid'
import BtnDownloadSearch from '@/views/pub/components/BtnDownloadSearch'
import DatePicker from '@/views/pub/components/DatePicker'
import OnmIaAdmSup030P from '@/views/pub/ONM_IA_ADM_SUP_030_P' //개인정보 마스킹제거Modal
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
    CheckBox,
    DatePicker,
    BtnDownloadSearch,
    OnmIaAdmSup030P
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
        '- 이 페이지는 O&M 사용자들을 관리하는 페이지입니다.',
        '- 법인회원사 대표관리자는 회원앱에서 법인회원사를 신청하면서 동시에 신청한 법인회원사의 대표관리자를 의미하며, 법인회원사 신청 승인시 자동으로 법인회원사 대표관리자도 승인되어, 사용자 상태가 승인대기에서 정상 상태로 변경 됩니다. 단, 법인회원사가 승인거부 또는 중지의 상태로 상태변경시에 법인회원사 대표관리자도 동일하게 상태가 변경되어 O&M 관리자에 로그인 할 수 없습니다.'
      ],
      searchCheck: ['고객사명', '사용자상태', '권한여부', '법인회원사', '지사', '가입기간', '사용자ID', '사용자명'],
    }
  },
  computed: {
    ...mapState({
      searchIsActive: (state) => state.settings.searchIsActive,
      searchOption: (state) => state.settings.searchOption,
      checkboxShow: (state) => state.settings.checkboxShow,
      isActiveModal: (state) => state.settings.isActiveModal
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