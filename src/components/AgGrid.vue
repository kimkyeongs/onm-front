<template>
  <div class="grid-wrap mt-3">
    <ag-grid-vue
      style="height: 398px"
      class="ag-theme-alpine"
      :defaultColDef="defaultColDef"
      :columnDefs="columnDefs"
      :rowData="rowData"
      :headerHeight="34"
      :rowHeight="36"
      :rowSelection="rowSelection"
      :groupDisplayType="groupDisplayType"
      :groupDefaultExpanded="groupDefaultExpanded"
      :pagination="false"
      @cellClicked="fnClick"
    />
    <div class="ag-paging">
      {{ this.nowPage }}페이지/{{ this.totalPage }}페이지
    </div>
  </div>
</template>

<script>
//================== Ag grid lib =========================//
import { AgGridVue } from "ag-grid-vue";
import { ClientSideRowModelModule } from "@ag-grid-community/client-side-row-model";
import { ModuleRegistry } from "@ag-grid-community/core";

//============== ag grid Row 내부 components ============//
import MemberLicensesStatus from "@/components/MemberLicensesStatus";
import GridPlusBtn from "@/components/GridPlusBtn";
import GridModBtn from "@/components/GridModBtn.vue";

import { getFileds } from "@/components/js/gridFileds";

// import "ag-grid-enterprise";
// import { RowGroupingModule } from "@ag-grid-enterprise/row-grouping";

ModuleRegistry.registerModules([ClientSideRowModelModule]);

export default {
  props: ["dataList", "filedId", "pageCnt", "page"],
  components: {
    AgGridVue,
    GridPlusBtn,
    MemberLicensesStatus,
    GridModBtn,
  },
  data() {
    return {
      columnDefs: null,
      rowData: null,
      rowSelection: null,
      defaultColDef: {
        flex: 1,
        // editable: true,
        resizable: true,
        // sortable: true,
        // filter: true,
      },
      rowSelection: null,
      columValues: null,
      groupDisplayType: null,
      groupRowRenderer: null,
      groupDefaultExpanded: null,
      totalPage: this.$props.pageCnt,
      nowPage: this.$props.page,
    };
  },
  created() {
    this.groupDisplayType = "custom";
    this.groupDefaultExpanded = 1;
  },
  methods: {
    //grid클릭이벤트
    fnClick(e) {
      this.$emit("clickData", e);
    },
    fnClickBtn(e) {
      this.$emit("clickBtnData", e.rowData.data);
    },
  }, //beforeMount
  mounted() {
    // gridFileds.js에 선언된 컬럼들을 id로 가져옴
    // 만약에 updateBtn 이라는 이름의 field 가 있다면 버튼 이벤트를 심어준다. -> fnClickBtn
    // * 수정버튼 이름은 무조건 updateBtn으로 field 를 지정 할 것
    this.columValues = getFileds(this.filedId, {
      onClick: this.fnClickBtn.bind(this),
    });
    //api 통신으로 가져온 row 값
    (this.columnDefs = this.columValues),
      (this.rowData = this.dataList),
      (this.rowSelection = "single");
  },
};
</script>

<style scoped></style>
