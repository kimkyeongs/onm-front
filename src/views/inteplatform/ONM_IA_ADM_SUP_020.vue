<template>
  <section class="onmContent">
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
                    <button type="button" class="btn btn-md btn-gray ml-2">주소검색</button>
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
      <div class="col-lg-6 col-md-12 subject">
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
                      <button type="button" class="btn btn-md btn-gray ml-2">주소검색</button>
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
      <div class="col-lg-6 col-md-12 subject">
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
                      v-for="key in radioLists"
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
        <textarea name="" id=""  style="height: 200px;" class="form-control" placeholder="비고"></textarea>
      </div>
    </div>

    <div class="btn-area clearFix">
      <div class="pull-left">
        <button type="button" class="btn btn-default btn-yellow btn-fixed">목록</button>
      </div>
      <div class="pull-right">
        <button type="button" class="btn btn-default btn-gray btn-fixed">초기화</button>
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
import HeadTitle from '@/components/HeadTitle'
import SubTitle from '@/components/SubTitle'
import UseGuide from '@/components/UseGuide'

export default {
  components: {
    HeadTitle,
    SubTitle,
    UseGuide
  },
  data() {
    return {
      customerLists: ['정상', '일시중지', '계약해지'],
      radioLists: ['대시보드_A', '대시보드_B', '대시보드_C'],
      addressCheckbox: true,
      useGuideLists: [
        '- 이 페이지는 플랫폼통합관리자가 고객사(CPO)를 등록하는 페이지로 플랫폼통합관리자만 사용이 가능합니다.',
        '- 고객사(CPO)의 로밍관련 인증정보, 알림톡관련 계정정보, PG관련 계정정보는 플랫폼 고객사 등록 후, 해당 고객사의 플랫폼관리 메뉴에서 관리할 수 있습니다.',
        '- 고객사 상태를 일시중지 또는 계약해지로 변경하는 경우 고객사(CPO)와 관련된 제반 기능을 사용할 수 없게 됩니다.',
        '- 고객사 담당자는 제휴 또는 계약 담당자를 의미하며 고객사의 대표관리자를 의미하는 것은 아니며, 플랫폼에 로그인이 필요한 경우, 사용자/권한관리 > 사용자관리에서 생성하시면 됩니다.'
      ]
    }
  },
  mounted() {
  },
  methods: {

  }
}
</script>

<style scoped>
</style>