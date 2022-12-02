<template>
  <section class="onmContent">
    <head-title title="알림톡관리" />
    <div class="gridMultiSearch mb-2">
      <div class="searchGroup">
        <label for="">고객사선택</label>
        <v-select
          :items="items"
          class="selectBox"
          style="width: 200px;"
          label="선택"
          dense
          solo />
      </div>
    </div>

    <nav-tabs
      :tabLists="tabLists" />
    
    <div class="flex-row">
      <!-- 알림톡 템플릿 상세보기 -->
      <div class="col-lg-6 col-md-12">
        <sub-title class="mt-10" title="알림톡 템플릿 상세보기" />
        <div class="table">
          <table>
            <caption class="sr-only">알림톡 템플릿 상세보기</caption>
            <colgroup>
              <col width="20%">
              <col width="30%">
              <col width="20%">
              <col width="*">
            </colgroup>
            <tbody>
              <tr>
                <th scope="row"><span>템플릿 구분</span></th>
                <td colspan="3">
                  <v-radio-group class="radio-group" v-model="templateTypeGroup" row>
                    <v-radio
                      v-for="key in templateType"
                      :key="key"
                      :label="key"
                      :value="key"
                      color="orange"
                    />
                  </v-radio-group>
                </td>
              </tr>
              <tr>
                <th scope="row"><span>사용구분</span></th>
                <td></td>
                <th scope="row"><span>템플릿 제목</span></th>
                <td></td>
              </tr>
              <tr>
                <th scope="row"><span>템플릿 ID</span></th>
                <td>
                  <input type="text" class="form-control" placeholder="템플릿 ID">
                </td>
                <th scope="row"><span>사용여부</span></th>
                <td>
                  <v-radio-group class="radio-group" v-model="templateUseGroup" row>
                    <v-radio
                      v-for="key in templateUse"
                      :key="key"
                      :label="key"
                      :value="key"
                      color="orange"
                    />
                  </v-radio-group>
                </td>
              </tr>
              <tr>
                <th scope="row"><span>최종수정자</span></th>
                <td></td>
                <th scope="row"><span>최종수정일시</span></th>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <!-- 알림톡 템플릿 상세보기 -->
      <div class="col-lg-6 col-md-12">
        <sub-title class="mt-10" title="비고" />
        <div class="defaultBox" style="height: 202px;">
          <p>안녕하세요, OOO 입니다.#{성명} 님!! 지금 포인트가 적립되었습니다.</p>
          <p>포인트 : #{10,000} 포인트  ※ 이 메시지는 구매하신 상품의 사은 품으로 지급된 포인트 안내 메시지입니다.</p>
        </div>
      </div>  
    </div>
    <div class="btn-area clearFix">
      <div class="pull-left">
        <button type="button" class="btn btn-default btn-yellow btn-fixed">목록</button>
      </div>
      <div class="pull-right">
        <button type="button" class="btn btn-default btn-orange btn-fixed">저장</button>
      </div>
    </div>
    <!-- 이용가이드 -->
    <sub-title title="이용가이드" />
    <use-guide
      :useGuideLists="useGuideLists" />
  </section>
</template>

<script>
import HeadTitle from "@/views/pub/components/HeadTitle"
import SubTitle from "@/views/pub/components/SubTitle"
import UseGuide from "@/views/pub/components/UseGuide"
import NavTabs from "@/views/pub/components/NavTabs"
import { mapState } from "vuex"

export default {
  components: {
    HeadTitle,
    SubTitle,
    UseGuide,
    NavTabs,
  },
  data() {
    return {
      items: ['아이템-1', '아이템-2', '아이템-3'],
      tabLists:['알림톡 계정관리', '알림톡 템플릿 관리'],
      useGuideLists: [
        "- 이 페이지는 고객사별 알림톡 템플릿을 관리하는 페이지 입니다.",
        "- 고객사 대표관리자께서는 하단의 템플릿 다운로드를 통해 템플릿을 다운로드 받으신 후, 계약되신 알림톡 관리자에 로그인 하셔서, 필요한 템플릿을 등록하신 후, 생성된 해당 템플릿ID를 확보하세요.",
        "- 위의 목록에서 등록하신 템플릿 제목을 클릭하셔서 수정화면에서 해당 템플릿ID를 등록하시고, 사용을 체크해 두시면 알림톡 사용이 가능합니다."
      ],
      templateType: ['기본 템플릿', '사용자 템플릿'],
      templateTypeGroup: '기본 템플릿',
      templateUse: ['사용', '미사용'],
      templateUseGroup: '사용'
    }
  },
  computed: {
    ...mapState({
      isActiveTab: (state) => state.settings.isActiveTab,
    }),
  },
}
</script>

<style>

</style>