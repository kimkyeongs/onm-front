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

    </div>
    <!--// CONTENT -->  
    <!-- FOOTER -->
    <footer-bottom/>
  </main>
  
</template>

<script>
import HeaderTop from '@/components/HeaderTop'
import SideBar from '@/components/SideBar'
import FooterBottom from '@/components/FooterBottom'

import { mapState, mapMutations } from 'vuex'

export default {
  components: {
    HeaderTop,
    SideBar,
    FooterBottom,
  },
  data() {
    return {
    }
  },
  computed: {
    ...mapState([
      'windowSize',
      'deviceSideisActive',
      'sideBarisActive',
    ]),
  },
  mounted() {
    window.addEventListener('resize', () => {
      this.resize()
    })
    this.resize()
  },
  methods: {
    ...mapMutations({
      resize : 'RESIZE'
    }),
  }
}
</script>

<style>

</style>