<template>
  <div class="pageCount-wrap btn-sm-page">
    <!-- <button
      type="button"
      v-for="(key, idx) in pageCountNumber"
      :key="idx"
      class="btn btn-default btn-md pl-1 pr-1"
      :class="{'btn-indigo' : isActive === idx}"
      @click="addClass(idx)">
      {{ key }}
    </button> -->
    <!-- AG GRID 참조 -->
    <select class="form-control sm" style="width: 92px;">
      <option value="10" selected="">10개씩</option>
      <option value="100">30개씩</option>
      <option value="500">50개씩</option>
      <option value="1000">1000개씩</option>
    </select>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // pageCountNumber: [10, 30, 50, 100],
      // isActive: 0
    }
  },
  methods: {
    // addClass(idx) {
    //   this.isActive = idx
    // }
  }
}
</script>

<style scoped>
  .content-wrap .pageCount-wrap{
    flex: 0 0 auto;
    /* margin-right: 20px; */
  }
</style>