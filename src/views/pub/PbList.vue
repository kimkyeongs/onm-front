<template>

  <!-- eslint-disable -->
  <div class="pub_list">
    <h1>SK시그넷 Vue Publish</h1>
    <ul class="sub_navi tabs">
      <li class=""><router-link to="pblist"> O &amp; M</router-link></li>
    </ul>
    <p style="margin-top: 20px"><strong style="font-weight: 800;">&lt;PC&gt;</strong></p>
    <table class="table_style_01">
      <colgroup>
        <col style="width: 190px">
        <col style="width: 180px">
        <col style="width: 200px">
        <col style="width: 130px">
        <col style="width: *">
        <col style="width: 100px">
        <col style="width: 100px">
        <col style="width: 300px">
      </colgroup>
      <thead>
        <tr>
          <td>Depth 1</td>
          <td>Depth 2</td>
          <td>Depth 3</td>
          <td>화면 ID</td>
          <td>File Path</td>
          <td>생성일</td>
          <td>수정일</td>
          <td>비고</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="tal">Design</td>
          <td class="tal"></td>
          <td class="tal"></td>
          <td></td>
          <td class="tal">
            <router-link :to="{name: 'Design'}" target="_blank">@/views/Design.vue</router-link>
          </td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
        </tr>
        <tr>
          <td class="tal">Header</td>
          <td class="tal"></td>
          <td class="tal"></td>
          <td></td>
          <td class="tal">
            <router-link :to="{name: 'HeaderTop'}" target="_blank">@/components/Header.vue</router-link>
          </td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
        </tr>
        <tr>
          <td class="tal">Footer</td>
          <td class="tal"></td>
          <td class="tal"></td>
          <td></td>
          <td class="tal">
            <router-link :to="{name: 'FooterBottom'}" target="_blank">@/components/Footer.vue</router-link>
          </td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
        </tr>
        <tr>
          <td class="tal">SideBar</td>
          <td class="tal"></td>
          <td class="tal"></td>
          <td></td>
          <td class="tal">
            <router-link :to="{name: 'SideBar'}" target="_blank">@/components/SideBar.vue</router-link>
          </td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
        </tr>
        <!-- <tr>
          <td class="tal">공지사항</td>
          <td class="tal"></td>
          <td class="tal"></td>
          <td></td>
          <td class="tal">
            <router-link :to="{name: 'NoticeList'}" target="_blank">@/components/NoticeList.vue</router-link>
          </td>
          <td>-</td>
          <td>-</td>
          <td>False</td>
        </tr>
        <tr>
          <td class="tal">에러메세지</td>
          <td class="tal"></td>
          <td class="tal"></td>
          <td></td>
          <td class="tal">
            <router-link :to="{name: 'ErrorList'}" target="_blank">@/components/ErrorList.vue</router-link>
          </td>
          <td>-</td>
          <td>-</td>
          <td>False</td>
        </tr> -->
        <tr>
          <td class="tal">전체메뉴</td>
          <td class="tal"></td>
          <td class="tal"></td>
          <td></td>
          <td class="tal">
            <router-link :to="{name: 'AllMenu'}" target="_blank">@/components/AllMenu.vue</router-link>
          </td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
        </tr>
        <tr>
          <td class="tal">AG GRID</td>
          <td class="tal"></td>
          <td class="tal"></td>
          <td></td>
          <td class="tal">
            <router-link :to="{name: 'AgGrid'}" target="_blank">@/components/AgGrid.vue</router-link>
          </td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
        </tr>
        <tr>
          <td class="tal">Sample AG GRID</td>
          <td class="tal"></td>
          <td class="tal"></td>
          <td></td>
          <td class="tal">
            <router-link :to="{name: 'SampleAgGrid'}" target="_blank">@/components/SampleAgGrid.vue</router-link>
          </td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
        </tr>
        <!-- <tr>
          <td class="tal">Modal Search</td>
          <td class="tal"></td>
          <td class="tal"></td>
          <td></td>
          <td class="tal">
            <router-link :to="{name: 'Modal'}" target="_blank">@/components/Modal.vue</router-link>
          </td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
        </tr> -->
        <tr>
          <td class="tal">공통레이아웃</td>
          <td class="tal"></td>
          <td class="tal"></td>
          <td></td>
          <td class="tal">
            <router-link :to="{name:'Layout'}" target="_blank">@/views/Layout.vue</router-link>
          </td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
        </tr>
        <tr>
          <td class="tal">플랫폼 통합관리</td>
          <td class="tal">플랫폼 고객사관리</td>
          <td class="tal">플랫폼 고객사(CPO) 관리</td>
          <td></td>
          <td class="tal">
            <router-link :to="{name:'ONM_IA_ADM_SUP_010'}" target="_blank">@/views/ONM_IA_ADM_SUP_010.vue</router-link>
          </td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
        </tr>
        <tr>
          <td class="tal">플랫폼 통합관리</td>
          <td class="tal">플랫폼 고객사관리</td>
          <td class="tal">플랫폼 고객사(CPO) 등록</td>
          <td></td>
          <td class="tal">
            <router-link :to="{name:'ONM_IA_ADM_SUP_020'}" target="_blank">@/views/ONM_IA_ADM_SUP_020.vue</router-link>
          </td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
        </tr>
        <tr>
          <td class="tal">플랫폼 통합관리</td>
          <td class="tal">플랫폼 고객사관리</td>
          <td class="tal">플랫폼 고객사(CPO) 상세보기</td>
          <td></td>
          <td class="tal">
            <router-link :to="{name:'ONM_IA_ADM_SUP_030'}" target="_blank">@/views/ONM_IA_ADM_SUP_030.vue</router-link>
          </td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
        </tr>
        <tr>
          <td class="tal">플랫폼 통합관리</td>
          <td class="tal">플랫폼 고객사관리</td>
          <td class="tal">개인정보 마스킹 제거 - 팝업</td>
          <td></td>
          <td class="tal">
            <router-link :to="{name:'OnmIaAdmSup030P'}" target="_blank">@/views/ONM_IA_ADM_SUP_030_P.vue</router-link>
          </td>
          <td>-</td>
          <td>-</td>
          <td>Default-false</td>
        </tr>
        <tr>
          <td class="tal">플랫폼 통합관리</td>
          <td class="tal">공통코드 관리</td>
          <td class="tal">공통코드 관리</td>
          <td></td>
          <td class="tal">
            <router-link :to="{name:'ONM_IA_ADM_SUP_040'}" target="_blank">@/views/ONM_IA_ADM_SUP_040.vue</router-link>
          </td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
        </tr>
        <tr>
          <td class="tal">플랫폼 통합관리</td>
          <td class="tal">공통코드 관리</td>
          <td class="tal">공통코드 등록</td>
          <td></td>
          <td class="tal">
            <router-link :to="{name:'ONM_IA_ADM_SUP_060'}" target="_blank">@/views/ONM_IA_ADM_SUP_060.vue</router-link>
          </td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
        </tr>
        <tr>
          <td class="tal">플랫폼 통합관리</td>
          <td class="tal">공통코드 관리</td>
          <td class="tal">공통코드 상세보기</td>
          <td></td>
          <td class="tal">
            <router-link :to="{name:'ONM_IA_ADM_SUP_070'}" target="_blank">@/views/ONM_IA_ADM_SUP_070.vue</router-link>
          </td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
        </tr>
        <tr>
          <td class="tal">플랫폼 통합관리</td>
          <td class="tal">공통코드 관리</td>
          <td class="tal">공통코드 상세보기 - 팝업</td>
          <td></td>
          <td class="tal">
            <router-link :to="{name:'OnmIaAdmSup070P'}" target="_blank">@/views/ONM_IA_ADM_SUP_070_P.vue</router-link>
          </td>
          <td>-</td>
          <td>-</td>
          <td>Default-false</td>
        </tr>

        <tr>
          <td class="tal">플랫폼 통합관리</td>
          <td class="tal">배치작업정보 관리</td>
          <td class="tal">배치작업정보 관리</td>
          <td></td>
          <td class="tal">
            <router-link :to="{name:'ONM_IA_ADM_SUP_080'}" target="_blank">@/views/ONM_IA_ADM_SUP_080.vue</router-link>
          </td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
        </tr>
        <tr>
          <td class="tal">플랫폼 통합관리</td>
          <td class="tal">배치작업정보 관리</td>
          <td class="tal">배치작업정보 상세보기</td>
          <td></td>
          <td class="tal">
            <router-link :to="{name:'ONM_IA_ADM_SUP_090'}" target="_blank">@/views/ONM_IA_ADM_SUP_090.vue</router-link>
          </td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
        </tr>
        <tr>
          <td class="tal">플랫폼 통합관리</td>
          <td class="tal">배치작업정보 관리</td>
          <td class="tal">배치작업정보 수정</td>
          <td></td>
          <td class="tal">
            <router-link :to="{name:'ONM_IA_ADM_SUP_100'}" target="_blank">@/views/ONM_IA_ADM_SUP_100.vue</router-link>
          </td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
        </tr>
        <tr>
          <td class="tal">플랫폼 통합관리</td>
          <td class="tal">배치작업정보 관리</td>
          <td class="tal">배치작업정보 등록</td>
          <td></td>
          <td class="tal">
            <router-link :to="{name:'ONM_IA_ADM_SUP_110'}" target="_blank">@/views/ONM_IA_ADM_SUP_110.vue</router-link>
          </td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
        </tr>
        <tr>
          <td class="tal">플랫폼 통합관리</td>
          <td class="tal">통계관리</td>
          <td class="tal">충전기 연결포트 통계</td>
          <td></td>
          <td class="tal">
            <router-link :to="{name:'ONM_IA_ADM_SUP_120'}" target="_blank">@/views/ONM_IA_ADM_SUP_120.vue</router-link>
          </td>
          <td>-</td>
          <td>-</td>
          <td>High Chart</td>
        </tr>
        <!-- <tr>
          <td class="tal">vuetify test</td>
          <td class="tal"></td>
          <td class="tal"></td>
          <td></td>
          <td class="tal">
            <router-link :to="{name: 'Test'}" target="_blank">@/views/Test.vue</router-link>
          </td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
        </tr> -->
      </tbody>
    </table>
  </div>
</template>

<script>

export default {
  methods:{
      onClickRedirect () {   
      }
    }
}
</script>


<style scoped>
  .pub_list {padding: 20px; color: #333; letter-spacing: 0;}
  h1 { font-size:20px; margin-bottom: 20px}
  ul li a { font-size:14px; color:#444; }
  .table_style_01 {width: 100%;border-collapse: collapse;margin: 0 0 20px 0; background: #fff; table-layout: fixed; min-width: 1500px; }
  .table_style_01 td { padding: 7px 15px; border: 1px solid #dfdede; padding-left: 10px;  font-size: 12px; line-height: 1.6; text-align: center;}
  .table_style_01 td.case { text-align: center; padding: 0; }
  .table_style_01 td.complete { background: #f3f3ef; }
  .table_style_01 td.delete { background: #f3f3ef; color:#a2a2a2; text-decoration: line-through; }
  .table_style_01 td.modify { color: #ff0000; }
  .table_style_01 td.tal {text-align:left}
  .table_style_01 td:last-child {text-align:left;}
  .table_style_01 thead td {background-color: #5F7AD1; color:#fff}
  table tr:hover { background-color: #f6f6f6}
  .tac { text-align: center }
  .line { text-decoration: line-through; }
  .tab_content { display: none; }
  .sub_navi {margin-bottom: 20px; overflow: hidden;}
  .sub_navi li {list-style:none; float:left; margin:0;border:1px solid #ccc; text-align:center; background:#f7f7f7; min-width: 100px}
  .sub_navi li a {display:block; padding:8px 10px; font-size:12px; color:#0958b9; letter-spacing:-1px; text-decoration: none;}
  .sub_navi li.selected {background:#999;}
  .sub_navi li.selected a {color:#fff; font-weight:bold; letter-spacing:-2px;}
  .tab_content {padding-top:130px;}

  /*  */
  .v-application ul{padding-left:0;}
  .tabs{border: none;}
</style>

​