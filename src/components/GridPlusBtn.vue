<template>
  <!-- <button class="show-cell" @click="update(active, rowIndex)" /> -->
  <button class="show-cell" @click="addItems(rowIndex)" />
</template>

<script>
export default {
  data: () => ({
    active: null,
    rowIndex: null,
    totalCnt: 0,
  }),
  beforeMount() {
    //현재 선택된 row의 값
    //this.param : 현시점에 보고있는 뿌려진 Row의 값 -> scroll 시 계속 갱신\
    this.rowIndex = this.params.rowIndex;
    this.active = this.getActiveValue(this.params);
  },
  methods: {
    getActiveValue(params) {
      return params.value ? params.value : false;
    },
    addItems(addIndex) {
      var newArray = [];
      const newItems = [
        {
          colspan: 9,
        },
      ];
      const res =
        this.params.api.gridOptionsWrapper.gridOptions.api.applyTransaction({
          add: newItems,
          addIndex: addIndex + 1,
        });
      this.totalCnt =
        this.params.api.gridOptionsWrapper.gridOptions.api.getDisplayedRowCount();

      this.params.api.gridOptionsWrapper.gridOptions.api.forEachNode(
        (rowNode, index) => {
          rowNode.rowIndex = index;
          newArray.push(rowNode);
        }
      );
    },
    printResult(res) {
      console.log("---------------------------------------");
      if (res.add) {
        res.add.forEach(function (rowNode) {
          console.log("Added Row Node", rowNode);
        });
      }
      if (res.remove) {
        res.remove.forEach(function (rowNode) {
          console.log("Removed Row Node", rowNode);
        });
      }
      if (res.update) {
        res.update.forEach(function (rowNode) {
          console.log("Updated Row Node", rowNode);
        });
      }
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
