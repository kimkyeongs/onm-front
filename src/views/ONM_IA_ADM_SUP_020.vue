<template>
  <main
    :class="[{'sidebarClose': sideBarisActive}, {'deviceSideMenu-open': deviceSideisActive}]" >
    <!-- HEADER -->
    <header>
      <header-top />
    </header>
    <!-- SIDE MENU -->  
    <side-bar />
    <!-- CONTENT -->   
    <div class="content-wrap">
      <head-title title="플랫폼 고객사(CPO) 등록"/>
      <div class="flex-row">
        <!-- 고객사 기본정보 -->
        <div class="col-lg-6 col-md-12">
          <sub-title title="고객사 기본정보" />
          <div class="table">
            <table>
              <caption class="sr-only">고객사 기본정보</caption>
              <colgroup>
                <col width="30%">
                <col width="*">
              </colgroup>
              <tbody>
                <tr>
                  <th scope="row" class="required"><span>고객사 명</span></th>
                  <td>
                    <input type="text" class="form-control" placeholder="새고객">
                  </td>
                </tr>
                <tr>
                  <th scope="row" class="required"><span>고객사ID</span></th>
                  <td>
                    <input type="text" class="form-control" placeholder="영문자 3자리">
                  </td>
                </tr>
                <tr>
                  <th scope="row" class="required"><span>사업자등록번호</span></th>
                  <td>
                    <div class="form-inline">
                      <input type="text" class="form-control" placeholder="">
                      <span class="bridge">-</span>
                      <input type="text" class="form-control" placeholder="">
                      <span class="bridge">-</span>
                      <input type="text" class="form-control" placeholder="">
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope="row"><span>업태</span></th>
                  <td>
                    <input type="text" class="form-control" placeholder="서비스업">
                  </td>
                </tr>
                <tr>
                  <th scope="row"><span>종목</span></th>
                  <td>
                    <input type="text" class="form-control" placeholder="전기처 충전사업">
                  </td>
                </tr>
                <tr>
                  <th scope="row" class="required"><span>본사주소</span></th>
                  <td>
                    <div class="form-inline">
                      <input type="text" class="form-control" placeholder="우편번호" style="width: 100px;">
                      <button type="button" class="btn btn-sm btn-gray ml-2">주소검색</button>
                    </div>
                    <input type="text" class="form-control mt-1" placeholder="큰주소">
                    <input type="text" class="form-control mt-1" placeholder="상세주소">
                  </td>
                </tr>
                <tr>
                  <th scope="row" class="required"><span>고객사상태</span></th>
                  <td>
                    <v-radio-group class="radio-group" v-model="radioGroup" row>
                      <v-radio
                        v-for="key in customerLists"
                        :key="key"
                        :label="key"
                        :value="key"
                        color="orange"
                      />
                    </v-radio-group>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <!-- 고객사 담당자 정보 -->
        <div class="col-lg-6 col-md-12">
          <sub-title title="고객사 담당자 정보" />
          <div class="table">
            <table>
              <caption class="sr-only">고객사 담당자 정보</caption>
              <colgroup>
                <col width="30%">
                <col width="*">
              </colgroup>
              <tbody>
                <tr>
                  <th scope="row" class="required"><span>담장자 명</span></th>
                  <td>
                    <input type="text" class="form-control" placeholder="새고객">
                  </td>
                </tr>
                <tr>
                  <th scope="row" class="required"><span>부서</span></th>
                  <td>
                    <input type="text" class="form-control" placeholder="영업부">
                  </td>
                </tr>
                <tr>
                  <th scope="row" class="required"><span>직급</span></th>
                  <td>
                    <input type="text" class="form-control" placeholder="매니저">
                  </td>
                </tr>
                <tr>
                  <th scope="row"><span>전화번호</span></th>
                  <td>
                    <div class="form-inline">
                      <input type="text" class="form-control" placeholder="">
                      <span class="bridge">-</span>
                      <input type="text" class="form-control" placeholder="">
                      <span class="bridge">-</span>
                      <input type="text" class="form-control" placeholder="">
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope="row" class="required"><span>핸드폰번호</span></th>
                  <td>
                    <div class="form-inline">
                      <input type="text" class="form-control" placeholder="">
                      <span class="bridge">-</span>
                      <input type="text" class="form-control" placeholder="">
                      <span class="bridge">-</span>
                      <input type="text" class="form-control" placeholder="">
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope="row" class="required"><span>이메일</span></th>
                  <td>
                    <input type="text" class="form-control" placeholder="">
                  </td>
                </tr>
                <tr>
                  <th scope="row"><span>담당자<br/> 근무지 주소</span></th>
                  <td>
                    <div class="form-inline">
                      <div class="form-group">
                        <input type="text" class="form-control" placeholder="우편번호" style="width: 100px;">
                        <button type="button" class="btn btn-sm btn-gray ml-2">주소검색</button>
                      </div>  
                      <div class="form-group">
                        <v-checkbox 
                          v-model="addressCheckbox"
                          label="고객사 본사주소와 동일"
                          value=""
                          color="orange"
                        />
                      </div>
                    </div>
                    <input type="text" class="form-control mt-1" placeholder="큰주소">
                    <input type="text" class="form-control mt-1" placeholder="상세주소">
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>  
      <div class="flex-row">
        <!-- SK시그넷 담당자 정보 -->
        <div class="col-lg-6 col-md-12">
          <sub-title title="SK시그넷 담당자 정보"/>
          <div class="table">
            <table>
              <colgroup>
                <col width="30%">
                <col width="*">
              </colgroup>
              <caption class="sr-only">SK시그넷 담당자 정보</caption>
              <tbody>
                <tr>
                  <th scope="row" class="required"><span>담당자 명</span></th>
                  <td>
                    <input type="text" class="form-control" placeholder="담당자명">
                  </td>
                </tr>
                <tr>
                  <th scope="row" class="required"><span>부서</span></th>
                  <td>
                    <input type="text" class="form-control" placeholder="고객1팀">
                  </td>
                </tr>
                <tr>
                  <th scope="row" class="required"><span>직급</span></th>
                  <td>
                    <input type="text" class="form-control" placeholder="과장">
                  </td>
                </tr>
                <tr>
                  <th scope="row" class="required"><span>전화번호</span></th>
                  <td>
                    <div class="form-inline">
                      <input type="text" class="form-control" placeholder="">
                      <span class="bridge">-</span>
                      <input type="text" class="form-control" placeholder="">
                      <span class="bridge">-</span>
                      <input type="text" class="form-control" placeholder="">
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope="row" class="required"><span>휴대폰번호</span></th>
                  <td>
                    <div class="form-inline">
                      <input type="text" class="form-control" placeholder="">
                      <span class="bridge">-</span>
                      <input type="text" class="form-control" placeholder="">
                      <span class="bridge">-</span>
                      <input type="text" class="form-control" placeholder="">
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope="row" class="required"><span>이메일</span></th>
                  <td>
                    <input type="text" class="form-control" placeholder="">
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <!-- 고객사 대시보드 템플릿 정보 -->
        <div class="col-lg-6 col-md-12">
          <sub-title title="고객사 대시보드 템플릿 정보" />
          <div class="table">
            <table>
              <colgroup>
                <col width="30%">
                <col width="*">
              </colgroup>
              <caption class="sr-only">고객사 대시보드 템플릿 정보</caption>
              <tbody>
                <tr>
                  <th scope="row"><span>대시보드 디자인</span></th>
                  <td>
                    <v-radio-group class="radio-group" v-model="radioGroup" row>
                      <v-radio
                        v-for="key in dashBoardLists"
                        :key="key"
                        :label="key"
                        :value="key"
                        color="orange"
                      />
                    </v-radio-group>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <!-- 비고 -->
          <sub-title class="mt-20" title="비고" />
          <div class="table">
            <table>
              <colgroup>
                <col width="30%">
                <col width="*">
              </colgroup>
              <caption class="sr-only">비고</caption>
              <tbody>
                <tr>
                  <th scope="row"><span>비고</span></th>
                  <td>
                    <textarea name="" id=""  style="height: 180px;" class="form-control" placeholder="비고"></textarea>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    
    <!--// CONTENT -->  
    <footer-bottom/>
  </main>
</template>

<script>
import HeaderTop from '@/components/HeaderTop'
import SideBar from '@/components/SideBar'
import FooterBottom from '@/components/FooterBottom'
import HeadTitle from '@/components/HeadTitle'
import SubTitle from '@/components/SubTitle'
import { mapState, mapMutations } from 'vuex'


export default {
  components: {
    HeaderTop,
    SideBar,
    FooterBottom,
    HeadTitle,
    SubTitle
  },
  data() {
    return {
      customerLists: ['정상', '일시중지', '계약해지'],
      dashBoardLists: ['대시보드_A', '대시보드_B', '대시보드_C'],
      addressCheckbox: true
    }
  },
  computed: {
    ...mapState([
      'windowSize',
      'deviceSideisActive',
      'sideBarisActive',

    ]),
  },
  created() {
  }, 
  mounted() {
    window.addEventListener('resize', () => {
      this.resize()
    })
    this.resize()
  },
  watch: {
  },
  methods: {
    ...mapMutations({
      resize : 'RESIZE'
    }),
  }
}
</script>

<style scoped>
</style>