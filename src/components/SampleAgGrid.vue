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
import GridModBtn from '@/components/GridModBtn'
import { AgGridVue } from 'ag-grid-vue'

export default {
  components: {
    AgGridVue,
    Pagination,
    GridModBtn
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
      { field: 'No', width: 60, maxWidth: 60, },
      { field: '고객사명', },
      { field: '고객사 ID', },
      { field: '사업자등록번호', },
      { field: '고객사 담당자' },
      { field: 'SK시그넷 담당자', },
      { field: '고객사 상태', },
      { field: '등록일',},
      { field: '수정', cellRenderer:'GridModBtn'},
    ],
    this.rowData = [
      { No: 1, 고객사명: '홈앤서비스', '고객사 ID':'SIG00000302', 사업자등록번호: '123-456-789', '고객사 담당자': '홍길동과장(마케팅팀)', 'SK시그넷 담당자': '홍길동매니저(영업1팀)', '고객사 상태': '일시중지', 등록일: '2022-09-25', 수정: '수정' },
      { No: 2, 고객사명: '홈앤서비스', '고객사 ID':'SIG00000302', 사업자등록번호: '123-456-789', '고객사 담당자': '홍길동과장(마케팅팀)', 'SK시그넷 담당자': '홍길동매니저(영업1팀)', '고객사 상태': '일시중지', 등록일: '2022-09-25', 수정: '수정'},
      { No: 3, 고객사명: '홈앤서비스', '고객사 ID':'SIG00000302', 사업자등록번호: '123-456-789', '고객사 담당자': '홍길동과장(마케팅팀)', 'SK시그넷 담당자': '홍길동매니저(영업1팀)', '고객사 상태': '일시중지', 등록일: '2022-09-25', 수정: '수정'},
      { No: 4, 고객사명: '홈앤서비스', '고객사 ID':'SIG00000302', 사업자등록번호: '123-456-789', '고객사 담당자': '홍길동과장(마케팅팀)', 'SK시그넷 담당자': '홍길동매니저(영업1팀)', '고객사 상태': '일시중지', 등록일: '2022-09-25', 수정: '수정'},
      { No: 5, 고객사명: '홈앤서비스', '고객사 ID':'SIG00000302', 사업자등록번호: '123-456-789', '고객사 담당자': '홍길동과장(마케팅팀)', 'SK시그넷 담당자': '홍길동매니저(영업1팀)', '고객사 상태': '일시중지', 등록일: '2022-09-25', 수정: '수정'},
      { No: 6, 고객사명: '홈앤서비스', '고객사 ID':'SIG00000302', 사업자등록번호: '123-456-789', '고객사 담당자': '홍길동과장(마케팅팀)', 'SK시그넷 담당자': '홍길동매니저(영업1팀)', '고객사 상태': '일시중지', 등록일: '2022-09-25', 수정: '수정'},
      { No: 7, 고객사명: '홈앤서비스', '고객사 ID':'SIG00000302', 사업자등록번호: '123-456-789', '고객사 담당자': '홍길동과장(마케팅팀)', 'SK시그넷 담당자': '홍길동매니저(영업1팀)', '고객사 상태': '일시중지', 등록일: '2022-09-25', 수정: '수정'},
      { No: 8, 고객사명: '홈앤서비스', '고객사 ID':'SIG00000302', 사업자등록번호: '123-456-789', '고객사 담당자': '홍길동과장(마케팅팀)', 'SK시그넷 담당자': '홍길동매니저(영업1팀)', '고객사 상태': '일시중지', 등록일: '2022-09-25', 수정: '수정'},
      { No: 9, 고객사명: '홈앤서비스', '고객사 ID':'SIG00000302', 사업자등록번호: '123-456-789', '고객사 담당자': '홍길동과장(마케팅팀)', 'SK시그넷 담당자': '홍길동매니저(영업1팀)', '고객사 상태': '일시중지', 등록일: '2022-09-25', 수정: '수정'},
      { No: 10, 고객사명: '홈앤서비스', '고객사 ID':'SIG00000302', 사업자등록번호: '123-456-789', '고객사 담당자': '홍길동과장(마케팅팀)', 'SK시그넷 담당자': '홍길동매니저(영업1팀)', '고객사 상태': '일시중지', 등록일: '2022-09-25', 수정: '수정'},
    ],
    this.rowSelection = 'single';
  }
}
</script>

<style scoped>
  
</style>
