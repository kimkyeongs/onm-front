<template>
  <main
    :class="[{'sidebarClose': sideBarisActive}, {'deviceSideMenu-open': deviceSideisActive}]" >
    <!-- HEADER -->
    <header>
      <header-top />
    </header>
    <!-- SIDE MENU -->  
    <side-bar />
    <!-- CONTENT -->   
    <div class="content-wrap">
      <section  class="onmContent">
        <head-title title="충전기 상태"/>
        <!-- 상태영역 -->
        <div class="statusArea-wrap">
          <status-data />
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
                  value="운영사"
                  color="orange"
                  v-if="checkboxShow" />
                <label for="">운영사</label>
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
                    label
                  >
                    <span>
                      {{ item }}
                    </span>
                    <v-icon
                      small
                      @click="parent.selectItem(item)"
                    >
                      $delete
                    </v-icon>
                  </v-chip>
                </template>
              </v-combobox>
              <!-- <v-select
                :items="items"
                class="selectBox"
                label="전체"
                dense
                solo /> -->
            </div>
            <div class="col-lg-1 col-md-2">
              <div class="checkbox-inline">
                <v-checkbox
                  v-model="searchCheck"
                  value="충전기구분"
                  color="orange"
                  v-if="checkboxShow" />
                  <label for="">충전기구분</label>
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
                  value="권역"
                  color="orange"
                  v-if="checkboxShow" />
                  <label for="">권역</label>
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
                  value="시군구"
                  color="orange"
                  v-if="checkboxShow" />
                  <label for="">시군구</label>
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
                  value="운영시작일"
                  color="orange"
                  v-if="checkboxShow" />
                <label for="">운영시작일</label>
              </div>
            </div>
            <div class="col-lg-2 col-md-4">
              <date-picker />
            </div>
            <div class="col-lg-1 col-md-2">
              <div class="checkbox-inline">
                <v-checkbox
                  v-model="searchCheck"
                  color="orange"
                  value="설치일"
                  v-if="checkboxShow" />
                <label for="">설치일</label>
              </div>
            </div>
            <div class="col-lg-2 col-md-4">
              <date-picker />
            </div>
            <div class="col-lg-1 col-md-2">
              <div class="checkbox-inline">
                <v-checkbox
                  v-model="searchCheck"
                  value="충전소명"
                  color="orange"
                  v-if="checkboxShow" />
                <label for="">충전소명</label>
              </div>
            </div>
            <div class="col-lg-2 col-md-4">
              <input type="text" class="form-control" placeholder="충전소명를 입력해 주세요.">
            </div>
            <div class="col-lg-1 col-md-2">
              <div class="checkbox-inline">
                <v-checkbox
                  v-model="searchCheck"
                  value="충전소ID"
                  color="orange"
                  v-if="checkboxShow" />
                <label for="">충전소ID</label>
              </div>
            </div>
            <div class="col-lg-2 col-md-4">
              <input type="text" class="form-control" placeholder="충전소ID를 입력해 주세요.">
            </div>
          </div>  

          <btn-reset-search 
            v-if="searchOption" />
          <btn-download-search 
            v-else />
        </div>
        <!-- 검색필터 -->
        <div class="pagekeyWord-wrap">
          <page-count />
          <search-filter
            :searchFilter="searchFilters" />
        </div>
        <!-- GRID -->
        <ag-grid />
        <!--// GRID -->
      </section>
    </div>
    <!--// CONTENT -->  
    <footer-bottom/>
    <!-- <modal-mobile-search
      :items="items" /> -->
  </main>
</template>

<script>
import HeaderTop from '@/components/HeaderTop'
import SideBar from '@/components/SideBar'
import FooterBottom from '@/components/FooterBottom'
import HeadTitle from '@/components/HeadTitle'
import StatusData from '@/components/StatusData'
import SearchBtnOption from '@/components/SearchBtnOption'
import CheckBox from '@/components/CheckBox'
import DatePicker from '@/components/DatePicker'
import PageCount from '@/components/PageCount'
import SearchFilter from '@/components/SearchFilter'
import BtnResetSearch from '@/components/BtnResetSearch'
import BtnDownloadSearch from '@/components/BtnDownloadSearch.vue'
// import ModalMobileSearch from '@/components/moSearch/ModalMobileSearch'
import AgGrid from '@/components/AgGrid'
import { mapState, mapMutations } from 'vuex'

export default {
  components: {
    HeaderTop,
    SideBar,
    FooterBottom,
    HeadTitle,
    StatusData,
    SearchBtnOption,
    CheckBox,
    DatePicker,
    PageCount,
    SearchFilter,
    BtnResetSearch,
    BtnDownloadSearch,
    // ModalMobileSearch,
    AgGrid
  },
  data() {
    return {
      searchCheck: ['운영사', '충전기구분', '권역', '시군구', '운영여부', '충전소명', '운영시작일', '설치일', '충전소ID', '충전기ID'],
      searchFilters: [
        { filterTitle: '권경', filterText: '서울특별시'},
        { filterTitle: '충전소ID', filterText: 'SIG000003'},
        { filterTitle: '충전기구분', filterText: '완속'},
        { filterTitle: '운영시작일', filterText: '2022-10-22'}
      ],
      items: ['아이템-1', '아이템-2', '아이템-3'],
    }
  },
  computed: {
    ...mapState([
      'windowSize',
      'deviceSideisActive',
      'sideBarisActive',
      'searchIsActive',
      'searchOption',
      'checkboxShow',
    ]),
  },
  created() {
  }, 
  mounted() {
    window.addEventListener('resize', () => {
      this.resize()
    })
    this.resize()
  },
  watch: {
  },
  methods: {
    ...mapMutations({
      resize : 'RESIZE'
    }),
  }
}


</script>

<style scoped>

</style>