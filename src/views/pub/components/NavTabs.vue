<template>
  <div class="nav-tabs">
    <ul>
      <li
        v-for="(list, idx) in tabLists"
        :key="idx"
        :class="{'selected': isActiveTab === idx }">
        <a
          href="#"
          @click="tabs(idx)">{{ list }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  props: {
    tabLists: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      // isActive: 0,
    }
  },
  computed: {
    ...mapState({
      isActiveTab: (state) => state.settings.isActiveTab,
    })
  },
  methods: {
    ...mapMutations({
      tabs: "settings/TABS",
    }),
  }

}
</script>

<style scoped>
.nav-tabs{
  border-bottom: 1px solid #555;
}
.nav-tabs ul{
  display: flex;
  align-items: center;
}
.nav-tabs ul li{
  width: 300px;
  height: 40px;
  margin-left: 2px;
  text-align: center;
  border-radius: 4px 4px 0 0;
  background-color: #ccc;
}
.nav-tabs ul li:first-child{
  margin-left: 0;
}
.nav-tabs ul li a{
  font-size: 14px;
  line-height: 40px;
  display: block;
  color: #fff;
}
.nav-tabs ul li.selected{
  background-color: #555;
}
</style>
