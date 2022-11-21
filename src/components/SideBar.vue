<template>
  <div class="side-wrap">
    <div 
      class="sideMenu">
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
                  <!-- <i class="icon icon-default icon-arrowDown-white" /> -->
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
                          @click="sideMenuEvent">
                          {{ menu.menuTitle }}
                          <i class="icon icon-default icon-arrowDown-white" />
                        </a>
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
  .btn-sideToggle{
    width: 40px;
    height: 40px;
    position: absolute;
    border-radius: 50%;
    top: 30px;
    right: 0;
    background:var(--color-orange) url('@/assets/images/icon-sideMenu@2x.png') center right 2px no-repeat;
    background-size: 20px 20px;
    z-index: 9;
  }
  .side-wrap{
    position: absolute;
    top: 70px;
    width: 280px;
    height: calc(100% - 70px);
    /* transition: .1s; */
  }
  .side-wrap .sideMenu{
    position: absolute;
    top: 0;
    width: 260px;
    height: 100%;
    padding: 0 15px;
    background-color: #f47725;
    transition: .3s;
    z-index: 99;
  }
  .sideMenu > .menu{
    margin-top: 45px;
  }
  .sideMenu > .menu li a{
    color: #fff;
    font-weight: 100;
  }
  .sideMenu > .menu > ul > li > dl > dt{
    display: flex;
    align-items: center;
    height: 50px;
    padding-left: 12px;
  }
  .sideMenu > .menu > ul > li > dl > dt > a{
    display: flex;
    width: 100%;
    position: relative;
  }
  
  .sideMenu > .menu > ul > li.selected dt{
    background-color: #dc5d1c;
    border-radius: 10px;
  }
  .sideMenu > .menu > ul > li.selected dt a{
    color: #fff;
    font-weight: 500;
  }
  .sideMenu > .menu > ul > li.selected .depth2 > ul > li.selected > a,
  .sideMenu > .menu > ul > li.selected .depth3 > ul > li.selected > a{
    color: #f6fe00;
    font-weight: 600;
  }
  .sideMenu > .menu > ul > li.selected .depth2 > ul > li.selected > a >.icon-arrowDown-white{
    transform: rotate(270deg);
  }
      
  /*****************  Depth-2 *****************/
  .sideMenu > .menu > ul > li > dl > dd > .depth2{
    display: none;
    margin-top: 10px;
    border-bottom: 1px solid rgba(0, 0, 0, .16);
  }
  .sideMenu > .menu > ul > li > dl .depth2 > ul > li {
    padding: 0 0 10px 40px ;
  }
  .sideMenu > .menu > ul > li > dl .depth2 > ul > li > a{
    position: relative;
  }
  .sideMenu > .menu > ul > li > dl .depth2 > ul > li > a > .icon-arrowDown-white{
    position: absolute;
    left: -24px;
  }
  .sideMenu > .menu > ul > li.selected > dl > dd > .depth2{
    display: block;
  }
  /*****************  Depth-3 *****************/
  .sideMenu > .menu > ul > li > dl .depth3{
    display: none;
    padding-left: 5px;
  }
  .sideMenu > .menu > ul > li > dl .depth3 > ul > li{
    margin-top: 10px;
  }
  .sideMenu > .menu > ul > li.selected > dl > dd > .depth2 > ul > li.selected .depth3{
    display: block;
  }
  .sideMenu > .menu > ul > li.selected .depth3 li.selected a{
    font-weight: 600;
  }
  /***************** Side Menu Close *****************/
  .sidebarClose .side-wrap{
    width: 0;
    left: 0;
  }
  .sidebarClose .side-wrap .sideMenu{
    left: -260px;
    /* width: 0; */
    transition: .2s;
  }
  .sidebarClose .side-wrap .btn-sideToggle{
    transition: .18s;
    right: -20px;
  }
  /*********************************************************
    - SideMenu ICON
  *********************************************************/
  [class^="menuIcon-"]{
    display: inline-block;
    width: 24px;
    height: 24px;
    margin-right: 8px;
  }
  .side-wrap > .sideMenu > .menu > ul > li .menuIcon-0{
    background: url('@/assets/images/chart@2x-on.png') no-repeat;
    background-size: 24px;
  }
  .side-wrap > .sideMenu > .menu > ul > li .menuIcon-1{
    background: url('@/assets/images/people@2x-on.png') no-repeat;
    background-size: 24px;
  }
  .side-wrap > .sideMenu > .menu > ul > li .menuIcon-2{
    background: url('@/assets/images/charge@2x-on.png') no-repeat;
    background-size: 24px;
  }
  .side-wrap > .sideMenu > .menu > ul > li .menuIcon-3{
    background: url('@/assets/images/gift@2x-on.png') no-repeat;
    background-size: 24px;
  }
  .side-wrap > .sideMenu > .menu > ul > li .menuIcon-4{
    background: url('@/assets/images/cards@2x-on.png') no-repeat;
    background-size: 24px;
  }
  .side-wrap > .sideMenu > .menu > ul > li .menuIcon-5{
    background: url('@/assets/images/airdrop@2x-on.png') no-repeat;
    background-size: 24px;
  }
  .side-wrap > .sideMenu > .menu > ul > li .menuIcon-6{
    background: url('@/assets/images/graph@2x-on.png') no-repeat;
    background-size: 24px;
  }
  .side-wrap > .sideMenu > .menu > ul > li .menuIcon-7{
    background: url('@/assets/images/setting-2@2x-on.png') no-repeat;
    background-size: 24px
  }
  /* .side-wrap > .sideMenu > .menu > ul > li.selected .menuIcon-0{
    background: url('@/assets/images/chart@2x-on.png') no-repeat;
    background-size: 24px;
  }
  .side-wrap > .sideMenu > .menu > ul > li.selected .menuIcon-1{
    background: url('@/assets/images/people@2x-on.png') no-repeat;
    background-size: 24px;
  }
  .side-wrap > .sideMenu > .menu > ul > li.selected .menuIcon-2{
    background: url('@/assets/images/charge@2x-on.png') no-repeat;
    background-size: 24px;
  }
  .side-wrap > .sideMenu > .menu > ul > li.selected .menuIcon-3{
    background: url('@/assets/images/gift@2x-on.png') no-repeat;
    background-size: 24px;
  }
  .side-wrap > .sideMenu > .menu > ul > li.selected .menuIcon-4{
    background: url('@/assets/images/cards@2x-on.png') no-repeat;
    background-size: 24px;
  }
  .side-wrap > .sideMenu > .menu > ul > li.selected .menuIcon-5{
    background: url('@/assets/images/airdrop@2x-on.png') no-repeat;
    background-size: 24px;
  }
  .side-wrap > .sideMenu > .menu > ul > li.selected .menuIcon-6{
    background: url('@/assets/images/graph@2x-on.png') no-repeat;
    background-size: 24px;
  }
  .side-wrap > .sideMenu > .menu > ul > li.selected .menuIcon-7{
    background: url('@/assets/images/setting-2@2x-on.png') no-repeat;
    background-size: 24px
  } */
  /*********************************************************
  - Media Query
  *********************************************************/
  @media screen and (max-width: 768px) {
    .side-wrap{
      width: 0;
      z-index: 9;
      /* height: calc(100% - 127px); */
    }
    .side-wrap .sideMenu{
      left: -260px;
      width: 100%;
    }
    .side-wrap .sideMenu > .menu{
      margin-top: 60px;
    }
    .side-wrap .btn-sideToggle{
      display: none;
    }
    .deviceSideMenu-open .side-wrap{
      width: 260px;
    }
    .deviceSideMenu-open .side-wrap .sideMenu{
      left: 0;
    }
  }

  /* Animation */
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
