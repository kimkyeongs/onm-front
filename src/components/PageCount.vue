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
    <select
      v-model="pageCountNumber"
      class="form-control sm"
      style="width: 92px"
      @change="setSelectedValue"
    >
      <option value="10" selected="">10개씩</option>
      <option value="30">30개씩</option>
      <option value="50">50개씩</option>
      <option value="100">100개씩</option>
    </select>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //default
      pageCountNumber: 10,
    };
  },
  methods: {
    setSelectedValue(e) {
      this.$emit("selected", e.target.value);
    },
  },
};
</script>

<style scoped>
.content-wrap .pageCount-wrap {
  flex: 0 0 auto;
  /* margin-right: 20px; */
}
</style>
