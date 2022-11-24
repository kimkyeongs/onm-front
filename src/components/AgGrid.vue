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
      :pagination="true"
    />
    <div class="ag-paging">1페이지/99페이지</div>
    <pagination />
  </div>
</template>

<script>
import Pagination from "@/components/Pagination";
import { AgGridVue } from "ag-grid-vue";
import GridPlusBtn from "@/components/GridPlusBtn";
import MemberLicensesStatus from "@/components/MemberLicensesStatus";
import { getFileds } from "@/components/js/gridFileds";

import { ClientSideRowModelModule } from "@ag-grid-community/client-side-row-model";
import { ModuleRegistry } from "@ag-grid-community/core";

// import "ag-grid-enterprise";
// import { RowGroupingModule } from "@ag-grid-enterprise/row-grouping";

ModuleRegistry.registerModules([ClientSideRowModelModule]);

export default {
  props: ["dataList", "filedId"],
  components: {
    AgGridVue,
    Pagination,
    GridPlusBtn,
    MemberLicensesStatus,
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
      testValue: null,
      groupDisplayType: null,
      groupRowRenderer: null,
      groupDefaultExpanded: null,
    };
  },
  created() {
    this.groupDisplayType = "custom";
    this.groupDefaultExpanded = 1;
  },
  methods: {}, //beforeMount
  mounted() {
    // gridFileds.js에 선언된 컬럼들을 id로 가져옴
    this.testValue = getFileds(this.filedId);
    //api 통신으로 가져온 row 값
    (this.columnDefs = this.testValue),
      (this.rowData = this.dataList),
      (this.rowSelection = "single");
  },
};
</script>

<style scoped></style>
