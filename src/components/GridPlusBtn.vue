<template>
  <button class="show-cell" @click="update(active)" />
</template>

<script>
export default {
  data: () => ({
    active: null,
  }),
  beforeMount() {
    this.thisRowData(this.params);
    //현재 선택된 row의 값
    //this.param : 현시점에 보고있는 뿌려진 Row의 값 -> scroll 시 계속 갱신
    this.active = this.getActiveValue(this.params);
  },
  methods: {
    getActiveValue(params) {
      return params.value ? params.value : false;
    },
    update(item) {
      alert("해당 컬럼의 data 값 ==== " + item);
    },
    //선택한 로우의 전체 값 추출
    thisRowData(items) {
      console.log(items.data);
    },
  },
};
</script>

<style scoped>
.show-cell {
  width: 18px;
  height: 18px;
  border-radius: 4px;
  background: #a29f9f url("@/assets/images/plus@2x.png") no-repeat;
  background-size: 18px;
}
</style>
