<template>
  <div class="grid-wrap mt-2">
    <ag-grid-vue
      style="height: 398px"
      class="ag-theme-alpine"
      :defaultColDef="defaultColDef"
      :columnDefs="columnDefs"
      :rowData="rowData"
      :headerHeight="34"
      :rowHeight="36"
      :rowSelection="rowSelection"
      :autoGroupColumnDef="autoGroupColumnDef"
      :rowGroupPanelShow="rowGroupPanelShow"
      :pagination="false"
    />
    <div class="ag-paging">1페이지/99페이지</div>
    <pagination />
  </div>
</template>

<script>
import Pagination from '@/components/Pagination'
import { AgGridVue } from 'ag-grid-vue'
import GridPlusBtn from '@/components/GridPlusBtn'
import MemberLicensesStatus from '@/components/MemberLicensesStatus'

export default {
  components: {
    AgGridVue,
    Pagination,
    GridPlusBtn,
    MemberLicensesStatus
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
      autoGroupColumnDef: null,
      rowGroupPanelShow: null,
    }
  },
  created() {
    this.autoGroupColumnDef = {
      minWidth: 0,
    },
    this.rowGroupPanelShow = 'always';
  },
  methods:{
  },
  beforeMount() {
    this.columnDefs = [
      { field: 'No', width: 60, maxWidth: 60, cellClass: 'rag-amber',},
      { field: '+', width: 55, maxWidth: 55, cellRenderer:'GridPlusBtn'},
      { field: '충전기ID', cellClass: 'countryCell',},
      { field: '충전기명', },
      { field: '충전소ID' },
      { field: '충전소명', width: 170, minWidth: 170,},
      { field: '충전기상태', cellStyle:{"textAlign":"right"}},
      { field: '충전기제조사',},
      { field: '충전기모델명' },
      { field: '상태변경일시' },
      { field: '최종상태', width: 40, minWidth: 40},
      { field: '최근회원인증', width: 70, minWidth: 70},
      { field: '회원인증상태', width: 150, minWidth: 150, cellRenderer:'MemberLicensesStatus' },
      { field: '최근오류', },
      { field: '최근민원',},
    ],
    this.rowData = [
      { No: 1, '+': '+', 충전기ID:'SIG00000302', 충전기명: 'SIG00000302', 충전소ID: 'SIG00000302', 충전소명: '마포유수지 공영주차장', 충전기상태: '양호', 충전기제조사: 'SK시그넷', 충전기모델명: '시그넷EV(14kw)', 상태변경일시: '2022-09-22 14:59:47',  최종상태: '연결', 최근회원인증: '성공', 회원인증상태: '성공, 실패', 최근오류: '2022-09-22 09:36:34 ', 최근민원: '2022-09-22 09:36:34'},
      { No: 2, '+': '+', 충전기ID: 'SIG00000302', 충전기명: 'SIG00000302', 충전소ID: 'SIG00000302', 충전소명: '마포유수지 공영주차장', 충전기상태: '양호 - 양호', 충전기제조사: 'SK시그넷', 충전기모델명: '시그넷EV(14kw)', 상태변경일시: '2022-09-22 14:59:47',  최종상태: '연결', 최근회원인증: '성공', 회원인증상태: '성공, 실패', 최근오류: '2022-09-22 09:36:34 ', 최근민원: '2022-09-22 09:36:34'},
      { No: 3, '+': '+', 충전기ID: 'SIG00000302', 충전기명: 'SIG00000302', 충전소ID: 'SIG00000302', 충전소명: '마포유수지 공영주차장', 충전기상태: '양호 - 양호', 충전기제조사: 'SK시그넷', 충전기모델명: '시그넷EV(14kw)', 상태변경일시: '2022-09-22 14:59:47',  최종상태: '연결', 최근회원인증: '성공', 회원인증상태: '성공, 실패', 최근오류: '2022-09-22 09:36:34 ', 최근민원: '2022-09-22 09:36:34'},
      { No: 4, '+': '+', 충전기ID: 'SIG00000302', 충전기명: 'SIG00000302', 충전소ID: 'SIG00000302', 충전소명: '마포유수지 공영주차장', 충전기상태: '양호 - 양호', 충전기제조사: 'SK시그넷', 충전기모델명: '시그넷EV(14kw)', 상태변경일시: '2022-09-22 14:59:47',  최종상태: '연결', 최근회원인증: '실패', 회원인증상태: '성공, 실패', 최근오류: '2022-09-22 09:36:34 ', 최근민원: '2022-09-22 09:36:34'},
      { No: 5, '+': '+', 충전기ID: 'SIG00000302', 충전기명: 'SIG00000302', 충전소ID: 'SIG00000302', 충전소명: '마포유수지 공영주차장', 충전기상태: '양호 - 양호', 충전기제조사: 'SK시그넷', 충전기모델명: '시그넷EV(14kw)', 상태변경일시: '2022-09-22 14:59:47',  최종상태: '연결', 최근회원인증: '실패', 회원인증상태: '성공, 실패', 최근오류: '2022-09-22 09:36:34 ', 최근민원: '2022-09-22 09:36:34'},
      { No: 6, '+': '+', 충전기ID: 'SIG00000302', 충전기명: 'SIG00000302', 충전소ID: 'SIG00000302', 충전소명: '마포유수지 공영주차장', 충전기상태: '양호 - 양호', 충전기제조사: 'SK시그넷', 충전기모델명: '시그넷EV(14kw)', 상태변경일시: '2022-09-22 14:59:47',  최종상태: '연결', 최근회원인증: '성공', 회원인증상태: '성공, 실패', 최근오류: '2022-09-22 09:36:34 ', 최근민원: '2022-09-22 09:36:34'},
      { No: 7, '+': '+', 충전기ID: 'SIG00000302', 충전기명: 'SIG00000302', 충전소ID: 'SIG00000302', 충전소명: '마포유수지 공영주차장', 충전기상태: '양호 - 양호', 충전기제조사: 'SK시그넷', 충전기모델명: '시그넷EV(14kw)', 상태변경일시: '2022-09-22 14:59:47',  최종상태: '연결', 최근회원인증: '성공', 회원인증상태: '성공, 실패', 최근오류: '2022-09-22 09:36:34 ', 최근민원: '2022-09-22 09:36:34'},
      { No: 8, '+': '+', 충전기ID: 'SIG00000302', 충전기명: 'SIG00000302', 충전소ID: 'SIG00000302', 충전소명: '마포유수지 공영주차장', 충전기상태: '양호 - 양호', 충전기제조사: 'SK시그넷', 충전기모델명: '시그넷EV(14kw)', 상태변경일시: '2022-09-22 14:59:47',  최종상태: '연결', 최근회원인증: '실패', 회원인증상태: '성공, 실패', 최근오류: '2022-09-22 09:36:34 ', 최근민원: '2022-09-22 09:36:34'},
      { No: 9, '+': '+', 충전기ID: 'SIG00000302', 충전기명: 'SIG00000302', 충전소ID: 'SIG00000302', 충전소명: '마포유수지 공영주차장', 충전기상태: '양호 - 양호', 충전기제조사: 'SK시그넷', 충전기모델명: '시그넷EV(14kw)', 상태변경일시: '2022-09-22 14:59:47',  최종상태: '연결', 최근회원인증: '성공', 회원인증상태: '성공, 실패', 최근오류: '2022-09-22 09:36:34 ', 최근민원: '2022-09-22 09:36:34'},
      { No: 10, '+': '+', 충전기ID: 'SIG00000302', 충전기명: 'SIG00000302', 충전소ID: 'SIG00000302', 충전소명: '마포유수지 공영주차장', 충전기상태: '양호 - 양호', 충전기제조사: 'SK시그넷', 충전기모델명: '시그넷EV(14kw)', 상태변경일시: '2022-09-22 14:59:47',  최종상태: '연결', 최근회원인증: '성공', 회원인증상태: '성공, 실패', 최근오류: '2022-09-22 09:36:34 ', 최근민원: '2022-09-22 09:36:34'},
    ],
    this.rowSelection = 'single';
  }
}
</script>

<style scoped>
  
</style>
