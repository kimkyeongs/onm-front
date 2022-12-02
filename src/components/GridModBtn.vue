<template>
  <button
    type="button"
    class="btn btn-default btn-gray btn-xsm"
    @click="getData($event)"
  >
    수정
  </button>
</template>

<script>
export default {
  data: () => ({
    returnData: null,
  }),
  methods: {
    getData(e) {
      //this.returnData = this.params;
      //console.log(this.returnData);
      // this.$emit("clickBtnData", this.returnData);
      const params = {
        rowData: this.params,
        // ...something
      };
      this.params.onClick(params);
    },
  },
};
</script>

<style></style>
