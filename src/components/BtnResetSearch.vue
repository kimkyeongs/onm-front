<template>
  <div class="text-center">
    <button
      type="button"
      class="btn btn-default btn-gray btn-fixed"
      @click="fnResetBtn"
    >
      초기화
    </button>
    <button
      type="submit"
      class="btn btn-default btn-orange btn-fixed"
      @click="fnSearchBtn"
    >
      검색
      <i class="icon icon-sm icon-search" />
    </button>
  </div>
</template>

<script>
export default {
  methods: {
    fnResetBtn() {
      this.$emit("resetBtn", "reset");
    },
    fnSearchBtn() {
      this.$emit("searchBtn", "search");
    },
  },
};
</script>

<style></style>
