<template>
  <div class="side-wrap">
    <div 
      class="sideMenu">
      <!-- LOGO -->
      <h1 class="skSignet-logo">
        <img src="@/assets/images/skSignet-logo.png" alt="skSignet">
      </h1>
      <!-- SIDE MENU -->
      <div class="menu">
        <ul>
          <li
            v-for="(menu, idx) in allMenuLists"
            :class="{'selected' : isActive === idx}"
            :key="menu.idx">
            <dl>
              <dt>
                <a href="#"
                  title="depth1"
                  @click="sideMenuEvent">
                  <span :class="['menuIcon-' + idx]" />
                    {{ menu.menuTitle }}
                  <i class="icon icon-default icon-arrowDown-white" />
                </a>
              </dt>
              <dd>
                <template
                  v-if="menu.children">
                  <div 
                    class="depth2"
                    v-if="idx !== 0">
                    <ul>
                      <li
                        v-for="menu in menu.children"
                        :key="menu.idx">
                        <a href="#"
                          title="depth2"
                          @click="sideMenuEvent">{{ menu.menuTitle }}</a>
                        <template
                          v-if="menu.child">  
                          <div class="depth3">
                            <ul>
                              <li
                                v-for="menu in menu.child"
                                :key="menu.idx">
                                <a href="#"
                                  title="depth3"
                                  @click="sideMenuEvent">{{ menu }}</a>
                              </li>
                            </ul>
                          </div>
                        </template>
                      </li>
                    </ul>
                  </div>
                </template>
              </dd>
            </dl>
          </li>
        </ul>
      </div>
    </div>
    <button
      type="button" 
      class="btn-sideToggle blind"
      @click="sidebarToggle">sideToggle</button>
  </div>
</template>

<script>
import AllMenu from '@/assets/js/allMenu.js'

export default {
  data() {
    return {
      isActive: 0,
      allMenuLists: AllMenu,
    }
  },
  mounted() {
  },
  methods: {
    sidebarToggle() {
      this.$store.commit('SIDEMENU_TOGGLE')
    },
    sideMenuEvent(e) {
      let depth1 = document.querySelectorAll('.menu > ul > li > dl > dt > a ')
      let depth2 = document.querySelectorAll('.depth2 > ul > li > a ')
      let depth3 = document.querySelectorAll('.depth3 > ul > li > a ')
      
      if(e.target.title === 'depth1') {
        for(let i = 0; i < depth1.length; i++) {
          depth1[i].parentNode.closest('li').classList.remove('selected')
          e.target.parentNode.closest('li').classList.add('selected')
          }
        } else if(e.target.title === 'depth2') {
            for(let i = 0; i < depth2.length; i++) {
            depth2[i].parentNode.classList.remove('selected')
            e.target.parentNode.classList.add('selected')
          }
        } else {
          for(let i = 0; i < depth3.length; i++) {
            depth3[i].parentNode.classList.remove('selected')
            e.target.parentNode.classList.add('selected')
          }
        }
    },
    // menuPosition() {
    //   let ss = document.querySelectorAll('.sideLnb > ul > li')
    //   for( let i = 0; i <= ss.length; i++ ) {
    //     this.sideMenuLists[i]['top'] = ss[i].offsetTop
    //   }
    // }
  },
}
</script>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: max-height .1s ease;
  max-height: 100px;
}
.slide-enter-to, 
.slide-leave {
  max-height:100px;
  overflow: hidden;
}
.slide-enter, 
.slide-leave-to {
  overflow: hidden;
  max-height: 0;
}
</style>
