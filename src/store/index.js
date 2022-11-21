import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: { //DATA
    windowSize: 0,
    sideBarisActive: false,
    deviceSideisActive: false,
    locations: ['대시보드', '충전인프라 관리', '충전기 상태 및 제어', '충전기 상태'],
    statusLists: [
      { name: '끊김', number: 1},
      { name: '대기', number: 12},
      { name: '준비', number: 99},
      { name: '예약', number: 1},
      { name: '충전', number: 9},
      { name: '종료', number: 1},
      { name: '고장', number: 1},
    ],
    searchIsActive: true,
    searchOption: true,
    checkboxShow: false,
    // isActiveModal: false,
  },
  mutations: {
    SIDEMENU_TOGGLE(state) {
      state.sideBarisActive = !state.sideBarisActive
    },

    DEVICEMENU_TOGGLE(state) {
      state.deviceSideisActive = !state.deviceSideisActive
      // state.sideBarisActive = false
    },

    SEARCH_TOGGLE(state, value) {
      if(value === 'downLoadOption') { 
        state.searchIsActive = true
        state.searchOption = false
        state.checkboxShow = true
      } else {
        state.searchIsActive = !state.searchIsActive
        state.searchOption = true
        state.checkboxShow = false
      }
    },

    // MODAL_CLOSE(state) {
    //   state.isActiveModal = false
    // },

    // 디바이스 해상도 1200이하
    RESIZE(state) {
      let windowSize = window.outerWidth
      state.windowSize = windowSize
      if(state.windowSize <= 768){
        state.sideBarisActive = false
      } else{
        state.deviceSideisActive = false
      }
    },
  },
  actions: { 
  },
  getters: { //Computed

  },
  modules: {
  }
})