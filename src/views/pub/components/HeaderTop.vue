<template>
  <div class="header-wrap">
    <div class="header-menu">
      <button
        type="button"
        class="menuMobile"
        @click="deviceMenuToggle">
        <span class="blind">mobileMenu</span>
      </button>
      <h1 class="skSignet-logo">
        <img src="@/assets/images/skSignet-logo.png" alt="skSignet">
      </h1> 
      <button 
        type="button"
        class="btn-allMenu"
        @click="allMenuToggle">
        <span>
          메뉴
          <i class="icon icon-default" />
        </span>
      </button>  
    </div>
    <div class="joinInfo-wrap">
      <div class="date">
        {{ year }}년 {{ month }}월 {{ today }}일 ({{day}}) {{ hours }} : {{minutes}}
      </div>
      <div class="alarmWrap">
        <button
          type="button"
          class="superUser"
          @click="superUserToggle">
          <span>2</span>
        </button>
        <button
          type="button"
          class="notice"
          @click="noticeToggle">
          <span>2</span>
        </button>
        <button
          type="button"
          class="alarm"
          @click="errorToggle">
          <span>2</span>
        </button>
      </div>
      <div class="memberInfo">
        <span class="memberPhoto">
          <img src="@/assets/images/default-photo@2x.png" alt="사진">
        </span>
        <span class="myName">{{ myName }} [<strong>홈앤서비스</strong>]님</span>
        <i class="icon icon-default icon-arrowDown-white" />
      </div>
    </div>
    <!-- Super User -->
    <super-user-list 
      :superUserIsActive="superUserIsActive" />
    <!-- 공지사항 리스트 -->
    <notice-list
      :noticeIsActive="noticeActive" />
    <!-- 알림 리스트 -->
    <error-list 
      :errorIsActive="errorActive" />
    <!-- 전체메뉴 -->
    <transition name="slide">
      <div
        v-if="allMenuActive"
        class="header-allMenu">
        <all-menu />
      </div>
    </transition>  
  </div>
</template>

<script>
import SuperUserList from '@/components/SuperUserList'
import NoticeList from '@/components/NoticeList'
import ErrorList from '@/components/ErrorList'
import AllMenu from '@/components/AllMenu'
import { mapState } from 'vuex'

export default {
  components: {
    SuperUserList,
    NoticeList,
    ErrorList,
    AllMenu
  },
  props: {
    alarmList: {
      type: Array,
      default: () => []
    },
  },
  data() {
    return {
      myName: '홍길동',
      year: 0, //년
      month: 0, //월
      today: 0, // 일
      day: null, //요일
      hours: 0,
      minutes: 0,
      superUserIsActive: false, //SuperUser List
      noticeActive: false, //공지사항 List
      errorActive: false, //알림 List
      allMenuActive: false,
      timeSetInterval: 100,
    }
  },
  created() {
    this.timerId()
  }, 
  mounted() {
  },
  computed: {
    ...mapState([
      'deviceSideisActive',
    ])
  },
  methods: {
    // sidebarToggle() {
    //   document.querySelector('body').classList.toggle('sidebarClose')
    //   this.$emit('toggleBtn')
    // },
    timerId() {
      setInterval(() => {
        let date = new Date()
        const weekday = ['일', '월', '화', '수', '목', '금', '토']

        this.year = date.getFullYear() 
        this.month = date.getMonth() + 1 
        this.today = date.getDate()
        this.day = weekday[date.getDay()]
        this.hours = date.getHours()
        this.minutes = date.getMinutes()
        if(date.getMonth()+1 < 10) {
          this.month = '0' + this.month
        }
        if(date.getHours() < 10) {
          this.hours ='0' + this.hours
        }
        if(date.getMinutes() < 10) {
          this.minutes = '0' + this.minutes
        }
      }, this.timeSetInterval)
    },
    superUserToggle() {
      this.superUserIsActive = !this.superUserIsActive
      this.noticeActive = false
      this.errorActive = false
    },
    noticeToggle() {
      this.noticeActive = !this.noticeActive
      this.superUserIsActive = false
      this.errorActive = false
    },
    errorToggle() {
      this.errorActive = !this.errorActive
      this.superUserIsActive = false
      this.noticeActive = false
    },
    allMenuToggle() {
      let target = document.querySelector('.btn-allMenu')
      this.allMenuActive = !this.allMenuActive
      target.classList.toggle('on')
    },
    // 디바이스 해상도 1200 이하일때 Menu이벤트
    // ...mapMutations({
    //   deviceMenuToggle : 'DEVICEMENU_TOGGLE'
    // })
    deviceMenuToggle(){
      this.$store.commit('DEVICEMENU_TOGGLE')
    },
  } 
}
</script>

<style scoped>
  .header-wrap{
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: nowrap;
    height: 70px;
    padding-right: 40px;
    background-color: var(--color-white);
    border-bottom: 1px solid #d4dde0;
  }
  .header-wrap .header-menu{
    display: flex;
    align-items: center;
  }
  .header-wrap .header-menu .skSignet-logo{
    width: 260px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .header-wrap .header-menu .skSignet-logo img{
    width: 95px;
    height: 45px;
  }
  .header-wrap .header-menu .btn-allMenu{
    position: relative;
  }
  .header-wrap .header-menu .btn-allMenu::before{
    content: '';
    display: block;
    width: 1px;
    height: 100%;
    position: absolute;
    background-color: #d4dde0;
  }
  .header-wrap .header-menu .btn-allMenu > span{
    display: flex;
    align-items: center;
    padding-left: 20px;
  }
  .header-wrap .header-menu .btn-allMenu .icon-default{
    background: url('@/assets/images/icon-next@2x.png') no-repeat;
    background-size: 24px 24px;
    transform: rotate( 90deg );
    transition: .3s;
  }
  .header-wrap .header-menu .btn-allMenu.on .icon-default{
    transform: rotate( -90deg );
  }
  .header-wrap .joinInfo-wrap .date{
    position: relative;
    padding-right: 30px;
  }
  .header-wrap .joinInfo-wrap .date::after{
    content: '';
    display: block;
    position: absolute;
    top: 3px;
    right: 0;
    width: 1px;
    height: 20px;
    background-color: #d4dde0;
  }
  .header-wrap .joinInfo-wrap,
  .header-wrap .joinInfo-wrap .alarmWrap{
    display: flex;
    align-items: center;
    margin-left: 20px;
  }

  .header-wrap .joinInfo-wrap .alarmWrap .superUser,
  .header-wrap .joinInfo-wrap .alarmWrap .notice,
  .header-wrap .joinInfo-wrap .alarmWrap .alarm{
    position: relative;
    width: 24px;
    height: 24px;
    background: url('@/assets/images/user-edit@2x.png') no-repeat;
    background-size: 24px 24px;
  }
  .header-wrap .joinInfo-wrap .alarmWrap .superUser > span,
  .header-wrap .joinInfo-wrap .alarmWrap .notice > span,
  .header-wrap .joinInfo-wrap .alarmWrap .alarm > span{
    position: absolute;
    top: -2px;
    right: -4px;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background-color: var(--color-green);
    font-size: 10px;
    color: var(--color-white);
    font-weight: 600;
  }
  /* Super User */
  .header-wrap .joinInfo-wrap .alarmWrap .notice{
    background: url('@/assets/images/document-text@2x.png') no-repeat;
    background-size: 24px 24px;
  }
  .header-wrap .joinInfo-wrap .alarmWrap .notice > span{
    background-color: var(--color-blue);
  }
  /* Alarm */
  .header-wrap .joinInfo-wrap .alarmWrap{
    margin-right: 16px;
  }
  .header-wrap .joinInfo-wrap .alarmWrap .alarm{
    background: url('@/assets/images/notification@2x.png') no-repeat;
    background-size: 24px 24px;
  }
  .header-wrap .joinInfo-wrap .alarmWrap .alarm > span{
    background-color: var(--color-red)
  }
  .header-wrap .joinInfo-wrap .alarmWrap button + button{
    margin-left: 10px;
  }
  /* My Info */
  .header-wrap .joinInfo-wrap .memberInfo{
    display: flex;
    align-items: center;
  }
  .header-wrap .joinInfo-wrap .memberInfo .memberPhoto{
    display: inline-block;
    width: 24px;
    height: 24px;
    margin-right: 10px;
    border-radius: 50%;
    overflow: hidden;
    flex: 0 0 auto;
  }
  .header-wrap .joinInfo-wrap .memberInfo .memberPhoto img{
    width: 24px;
    height: 24px;
  }
  /* All Menu */
  .header-wrap .header-allMenu{
    position: absolute;
    top: 69px;
    left: -1px;
    width: 1500px;
    z-index: 999;
  }

  .header-wrap .header-menu .menuMobile{
    display: none;
  }
  .header-wrap .header-menu .menuMobile{
    width: 24px;
    height: 24px;
    background: url('@/assets/images/menu@2x.png') no-repeat;
    background-size: 24px 24px;
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

/*********************************************************
 - Media Query
*********************************************************/
  @media screen and (max-width: 768px) { 
    header{
      margin-left: 0;
    }
    .header-wrap{
      padding: 0 20px;
    }
    .header-wrap .header-menu{
      width: 100%;

    }
    .header-wrap .header-menu .skSignet-logo{
      width: auto;
      margin: 0 auto;
    }
    .header-wrap .header-menu .skSignet-logo img{
      margin-left: 142px;
    }
    .header-wrap .joinInfo-wrap,
    .header-wrap .joinInfo-wrap .alarmWrap{
      margin-left: 0;
    }
    .header-wrap .btn-allMenu,
    .header-wrap .header-allMenu,
    .header-wrap .joinInfo-wrap .date,
    .header-wrap .joinInfo-wrap .memberInfo .myName,
    .header-wrap .joinInfo-wrap .memberInfo .icon{
      display: none;
    }
    /* .header-wrap .joinInfo-wrap .alarmWrap button + button{
      margin-left: 6px;
    }
    .header-wrap .joinInfo-wrap .memberInfo .memberPhoto{
      margin-right: 6px;
    } */

    .header-wrap .header-menu .menuMobile{
      display: block;
    }
  }

</style>