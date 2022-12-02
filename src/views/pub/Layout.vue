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
import HeaderTop from '@/views/pub/components/HeaderTop'
import SideBar from '@/views/pub/components/SideBar'
import FooterBottom from '@/views/pub/components/FooterBottom'

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