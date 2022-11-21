import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const header = {
  state: { //Data
  },
  getters: { //Computed
  },
  mutations: { //뮤테이션을 통해서 Data를 바꿀 수 있다.
  },
  actions: { //Methods
  },
  modules: {
  }
};

const sideMenu = {
  state: { //Data
    sideBarisActive: false,
  },
  getters: { //Computed
  },
  mutations: { //뮤테이션을 통해서 Data를 바꿀 수 있다.
    sideMenuToggle: state => {
      state.sideBarisActive = !state.sideBarisActive
    }
  },
  actions: { //Methods
  },
  modules: {
  }
};

const serachArea = {
  state: {
    searchIsActive: true,
    checkboxShow: false,
    searchOption: true,
    // isActiveModal: false,
  },
  getters: {
   
  },
  mutations: {
    searchToggle: (state, e) => {
      alert('a')
      if(e === 'downLoadOption') { 
        state.searchIsActive = true
        state.searchOption = false
        state.checkboxShow = true
      } else {
        state.searchIsActive = !state.searchIsActive
        state.searchOption = true
        state.checkboxShow = false
      }
    }
    // mobileSearchOpen: (state, e) => {
    //   state.isActiveModal = true
    //   this.$store.commit(searchToggle(e))
    // }
  },
  action: {

  }
};

const mobile = {
  state: { //Data
  },
  getters: { //Computed
  },
  mutations: { //뮤테이션을 통해서 Data를 바꿀 수 있다.
  },
  actions: { //Methods
  },
  modules: {
  }
}

const store = new Vuex.Store({
  modules: {
    header,
    sideMenu,
    serachArea,
    mobile
  }
})

export default store;
