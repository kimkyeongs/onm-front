<template>
  <main
    :class="[
      { sidebarClose: sideBarisActive },
      { 'deviceSideMenu-open': deviceSideisActive },
    ]"
  >
    <!-- HEADER -->
    <header>
      <header-top />
    </header>
    <!-- SIDE MENU -->
    <side-bar />
    <!-- CONTENT -->
    <div class="content-wrap">
      <router-view />
    </div>
    <!--// CONTENT -->
    <footer>
      <footer-bottom />
    </footer>
  </main>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import HeaderTop from "@/components/HeaderTop";
import SideBar from "@/components/SideBar";
import FooterBottom from "@/components/FooterBottom";

export default {
  name: "App",
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
  components: {
    HeaderTop,
    SideBar,
    FooterBottom,
  },
  data: () => ({
    //
  }),
  mounted() {
    window.addEventListener("resize", () => {
      this.resize();
    });
    this.resize();
  },
  methods: {
    ...mapMutations({
      resize: "settings/RESIZE",
    }),
  },
};
</script>

<style></style>
