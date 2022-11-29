<template>
  <!-- CONTENT -->
  <section class="onmContent">
    <head-title title="충전기 상태" />
    <!-- 상태영역 -->
    <div class="statusArea-wrap">
      <status-data />
      <search-btnOption />
    </div>
    <!-- 검색영역 -->
    <div v-if="searchIsActive" class="searchArea mt-3 mb-5">
      <div class="row-form mb-3">
        <div class="col-lg-1 col-md-2">
          <div class="checkbox-inline">
            <v-checkbox
              v-model="searchCheck"
              value="운영사"
              color="orange"
              v-if="checkboxShow"
            />
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
            solo
          >
            <template v-slot:selection="{ item, parent }">
              <v-chip label>
                <span>
                  {{ item }}
                </span>
                <v-icon small @click="parent.selectItem(item)">
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
              v-if="checkboxShow"
            />
            <label for="">충전기구분</label>
          </div>
        </div>
        <div class="col-lg-2 col-md-4">
          <v-select :items="items" class="selectBox" label="전체" dense solo />
        </div>
        <div class="col-lg-1 col-md-2">
          <div class="checkbox-inline">
            <v-checkbox
              v-model="searchCheck"
              value="권역"
              color="orange"
              v-if="checkboxShow"
            />
            <label for="">권역</label>
          </div>
        </div>
        <div class="col-lg-2 col-md-4">
          <v-select :items="items" class="selectBox" label="전체" dense solo />
        </div>
        <div class="col-lg-1 col-md-2">
          <div class="checkbox-inline">
            <v-checkbox
              v-model="searchCheck"
              value="시군구"
              color="orange"
              v-if="checkboxShow"
            />
            <label for="">시군구</label>
          </div>
        </div>
        <div class="col-lg-2 col-md-4">
          <v-select :items="items" class="selectBox" label="전체" dense solo />
        </div>
        <div class="col-lg-1 col-md-2">
          <div class="checkbox-inline">
            <v-checkbox
              v-model="searchCheck"
              value="운영시작일"
              color="orange"
              v-if="checkboxShow"
            />
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
              v-if="checkboxShow"
            />
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
              v-if="checkboxShow"
            />
            <label for="">충전소명</label>
          </div>
        </div>
        <div class="col-lg-2 col-md-4">
          <input
            type="text"
            class="form-control"
            placeholder="충전소명를 입력해 주세요."
          />
        </div>
        <div class="col-lg-1 col-md-2">
          <div class="checkbox-inline">
            <v-checkbox
              v-model="searchCheck"
              value="충전소ID"
              color="orange"
              v-if="checkboxShow"
            />
            <label for="">충전소ID</label>
          </div>
        </div>
        <div class="col-lg-2 col-md-4">
          <input
            type="text"
            class="form-control"
            placeholder="충전소ID를 입력해 주세요."
          />
        </div>
      </div>

      <btn-reset-search v-if="searchOption" />
      <btn-download-search v-else />
    </div>
    <!-- 검색필터 -->
    <div class="pagekeyWord-wrap">
      <page-count />
      <search-filter :searchFilter="searchFilters" />
    </div>
    <!-- GRID -->
    <ag-grid
      v-bind:dataList="this.testdata"
      v-bind:filedId="this.filedId"
      v-bind:dataCnt="this.dataCnt"
      :key="gridKey"
    />
    <!--// GRID -->
  </section>
  <!--// CONTENT -->
</template>

<script>
import HeadTitle from "@/components/HeadTitle";
import StatusData from "@/components/StatusData";
import SearchBtnOption from "@/components/SearchBtnOption";
import CheckBox from "@/components/CheckBox";
import DatePicker from "@/components/DatePicker";
import PageCount from "@/components/PageCount";
import SearchFilter from "@/components/SearchFilter";
import BtnResetSearch from "@/components/BtnResetSearch";
import BtnDownloadSearch from "@/components/BtnDownloadSearch.vue";
// import ModalMobileSearch from '@/components/moSearch/ModalMobileSearch'
import AgGrid from "@/components/AgGrid";
import { getUserList, getCpInfo } from "@/api/cp_api";
import { mapState, mapMutations, mapGetters } from "vuex";

export default {
  components: {
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
    AgGrid,
  },
  data: () => ({
    searchCheck: [
      "운영사",
      "충전기구분",
      "권역",
      "시군구",
      "운영여부",
      "충전소명",
      "운영시작일",
      "설치일",
      "충전소ID",
      "충전기ID",
    ],
    searchFilters: [
      { filterTitle: "권경", filterText: "서울특별시" },
      { filterTitle: "충전소ID", filterText: "SIG000003" },
      { filterTitle: "충전기구분", filterText: "완속" },
      { filterTitle: "운영시작일", filterText: "2022-10-22" },
    ],
    items: ["아이템-1", "아이템-2", "아이템-3"],
    testdata: null,
    filedId: "groupList",
    dataCnt: 0,
    gridKey: 0,
  }),
  computed: {
    ...mapState({
      windowSize: (state) => state.settings.windowSize,
      deviceSideisActive: (state) => state.settings.deviceSideisActive,
      sideBarisActive: (state) => state.settings.sideBarisActive,
      searchIsActive: (state) => state.settings.searchIsActive,
      searchOption: (state) => state.settings.searchOption,
      checkboxShow: (state) => state.settings.checkboxShow,
    }),
  },
  beforeMount() {
    // this.getJwt();
  },
  mounted() {
    window.addEventListener("resize", () => {
      this.resize();
    });
    this.resize();
  },
  watch: {},
  methods: {
    ...mapMutations({
      resize: "settings/RESIZE",
    }),
    async getJwt() {
      var testUserData = {
        userId: "INSOFT1",
        userPassword: "InSOFT1!@#$",
      };
      await this.$store
        .dispatch("authUser/userLogin", testUserData)
        .then(async (response) => {})
        .catch(async (err) => {
          alert(err);
        });
      this.userLists();
      this.cpLists();
    },
    userLists() {
      //console.log(this.$store.getters.token);
      var emptyData = { token: this.$store.getters.token };
      getUserList(emptyData)
        .then((response) => {
          this.testdata = response.data;
          this.dataCnt = response.data.lenght;
          this.gridKey += 1;
        })
        .catch(async (err) => {
          alert(err);
        });
    },
    cpLists() {
      var emptyData = { token: this.$store.getters.token };
      getCpInfo(emptyData)
        .then((response) => {
          console.log(response.data);
          //this.testdata = response.data;
          //this.gridKey += 1;
        })
        .catch(async (err) => {
          alert(err);
        });
    },
  },
};
</script>

<style scoped></style>
