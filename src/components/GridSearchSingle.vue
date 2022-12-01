<template>
  <div class="grid-serach-single">
    <input
      v-model="serchText"
      type="text"
      class="form-control"
      :placeholder="this.holderMsg"
      style="width: 200px"
      @input="fnGetText"
    />
    <button type="button" class="btn btn-yellow btn-md" @click="fnEmit">
      검색
    </button>
  </div>
</template>

<script>
export default {
  props: ["holderMsg", "textValue"],
  data: () => ({
    serchText: "",
  }),
  // watch: {
  //   serchText: "fnGetText",
  // },
  mounted() {
    this.serchText = this.textValue;
  },
  methods: {
    fnGetText(e) {
      this.serchText = e.target.value;
    },
    fnEmit() {
      this.$emit("serchText", this.serchText);
    },
  },
};
</script>

<style scoped>
.grid-serach-single {
  display: flex;
  align-items: center;
}
.grid-serach-single input + button {
  margin-left: 6px;
}
</style>
