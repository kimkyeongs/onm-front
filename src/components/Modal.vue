<template>
  <div
    v-if="true"
    class="dialog-wrap">
    <div class="overlay-scrim"></div>

    <div class="dialog-container">
      <div class="dialog-content">
        <div class="dialog-header">
          <h1>검색</h1>
          <button
            type="button"
            class="header-btnClose"
            @click="modalClose">
            <span class="blind">닫기</span>
          </button>
        </div>

        <div class="dialog-body">
          <div class="mo-search">
            <ul>
              <li>
                <label for=""><input type="checkbox" class="checkbox" checked="checked" v-if="checkboxShow">운영사</label>
                <v-select
                :items="items"
                class="selectBox"
                label="전체"
                dense
                solo />
              </li>
              <li>
                <label for=""><input type="checkbox" class="checkbox" checked="checked"  v-if="checkboxShow">충전기구분</label>
                <v-select
                  :items="items"
                  class="selectBox"
                  label="전체"
                  dense
                  solo />
              </li>
              <li>
                <label for=""><input type="checkbox" class="checkbox" checked="checked" v-if="checkboxShow">권역</label>
                <v-select
                  :items="items"
                  class="selectBox"
                  label="전체"
                  dense
                  solo />
              </li>
              <li>
                <label for=""><input type="checkbox" class="checkbox" checked="checked" v-if="checkboxShow">시군구</label>
                <v-select
                  :items="items"
                  class="selectBox"
                  label="전체"
                  dense
                  solo />
              </li>
              <li>
                <label for=""><input type="checkbox" class="checkbox" checked="checked" v-if="checkboxShow">운영시작일</label>
                <date-picker />
              </li>
              <li>
                <label for=""><input type="checkbox" class="checkbox" checked="checked" v-if="checkboxShow">설치일</label>
                <date-picker />
              </li>
              <li>
                <label for=""><input type="checkbox" class="checkbox" checked="checked" v-if="checkboxShow">충전소ID</label>
                <input type="text" class="form-control" placeholder="충전소ID를 입력해 주세요.">
              </li>
              <li>
                <label for=""><input type="checkbox" checked="checked" v-if="checkboxShow">충전기ID</label>
                <input type="text" class="form-control" placeholder="충전기ID를 입력해 주세요.">
              </li>
              <li>
                <label for=""><input type="checkbox" checked="checked" v-if="checkboxShow">Combobox</label>
                <v-combobox
                  v-model="model"
                  :items="items"
                  class="multiCombox"
                  label="선택해 주세요."
                  hide-selected
                  multiple
                  small-chips
                  solo >
                  <template v-slot:selection="{ item, parent}">
                    <v-chip
                      label >
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
              </li>
            </ul>
          </div>
          <div class="diglog-btnArea mt-5">
            <btn-reset-search 
              v-if="searchOption" />
            <btn-download-search 
              v-else />
          </div>  
        </div>

        <div class="dialog-footer">
          <button
            type="button"
            class="btn-modalClose"
            @click="modalClose">
            닫기
          </button>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import BtnResetSearch from '@/components/BtnResetSearch'
import BtnDownloadSearch from '@/components/BtnDownloadSearch.vue'
import DatePicker from '@/components/DatePicker'

import { mapState } from 'vuex'

export default {
  components: {
    BtnResetSearch,
    BtnDownloadSearch,
    DatePicker
  },
  props: {
    items: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    ...mapState([
      'isActiveModal',
      'searchOption',
      'checkboxShow'
    ])
  },
  methods: {
    modalClose() {
      this.$store.commit('MODAL_CLOSE')
    }
  }
}
</script>

<style scope>

</style>