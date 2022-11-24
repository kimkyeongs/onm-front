<template>
  <div class="header-wrap">
    <div class="header-menu">
      <button
        type="button"
        class="menuMobile"
        style="width: 30px; height: 30px; border: 1px solid #fff;"
        @click="deviceMenuToggle">
        =
      </button>
      <div class="header-skLogo">
        <span class="blind">SK</span>
      </div>
      <button 
        type="button"
        class="btn-allMenu"
        @click="allMenuToggle">
        <span>
          메뉴
          <i class="icon icon-default icon-arrowDown-white" />
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
          class="superUser">
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
import NoticeList from '@/components/NoticeList'
import ErrorList from '@/components/ErrorList'
import AllMenu from '@/components/AllMenu'
import { mapState, mapMutations } from 'vuex'

export default {
  components: {
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
      noticeActive: false, //공지사항 SHOW
      errorActive: false, //알림 SHOW
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
      // 'deviceSideisActive',
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
    noticeToggle() {
      this.noticeActive = !this.noticeActive
      this.errorActive = false
    },
    errorToggle() {
      this.errorActive = !this.errorActive
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
    }

  } 
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