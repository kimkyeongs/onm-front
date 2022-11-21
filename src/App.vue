<template>
  <v-app class="container">
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
      <router-view />
      <!--// CONTENT -->
      <footer>
        <footer-bottom />
      </footer>
    </main>
  </v-app>
</template>

<script>
import { mapState } from "vuex";
import HeaderTop from "@/components/HeaderTop";
import SideBar from "@/components/SideBar";
import FooterBottom from "@/components/FooterBottom";
export default {
  name: "App",
  computed: {
    ...mapState([
      "windowSize",
      "deviceSideisActive",
      "sideBarisActive",
      "searchIsActive",
      "searchOption",
      "checkboxShow",
    ]),
  },
  components: {
    HeaderTop,
    SideBar,
    FooterBottom,
  },
  data: () => ({
    //
  }),
  mounted() {},
};
</script>

<style></style>
