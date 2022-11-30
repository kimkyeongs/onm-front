<template>
  <section class="onmContent">
    <head-title title="REST API 키 등록" />

    <div class="flex-row">  
      <!-- Rest API 키 정보 -->
      <div class="col-lg-6 col-md-12">
        <sub-title title="Rest API 키 정보" />
        <div class="table">
          <table>
            <caption class="sr-only">Rest API 키 정보</caption>
            <colgroup>
              <col width="30%">
              <col width="*">
            </colgroup>
            <tbody>
              <tr>
                <th scope="row" class="required"><span>연동사업자명</span></th>
                <td>
                  <input type="text" class="form-control" placeholder="연동사업자명">
                  <p class="checkError">한글15자 이내로 입력해 주세요 </p>
                </td>
              </tr>
              <tr>
                <th scope="row" class="required"><span>연동서비스명</span></th>
                <td></td>
              </tr>
              <tr>
                <th scope="row" class="required"><span>API ID</span></th>
                <td></td>
              </tr>
              <tr>
                <th scope="row" class="required"><span>API Key</span></th>
                <td></td>
              </tr>
              <tr>
                <th scope="row" class="required"><span>API 상태</span></th>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <!-- 앱스토어 -->
      <div class="col-lg-6 col-md-12 subject">
        <sub-title title="앱스토어" />
        <div class="table">
          <table>
            <caption class="sr-only">앱스토어</caption>
            <colgroup>
              <col width="20%">
              <col width="30%">
              <col width="20%">
              <col width="*">
            </colgroup>
            <tbody>
              <tr>
                <th scope="row"><span>사용여부</span></th>
                <td colspan="3">
                  <v-radio-group class="radio-group" v-model="template02Type" row>
                    <v-radio
                      v-for="key in template02"
                      :key="key"
                      :label="key"
                      :value="key"
                      color="orange"
                      :readonly="true"
                    />
                  </v-radio-group>
                </td>
              </tr>
              <tr>
                <th scope="row"><span>앱이름</span></th>
                <td></td>
                <th scope="row"><span>다운로드 URL</span></th>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <div class="btn-area text-right">
      <button type="button" class="btn btn-default btn-orange btn-fixed">수정</button>
    </div>
    <!-- 이용가이드 -->
    <sub-title title="이용가이드" />
    <use-guide
      :useGuideLists="useGuideLists" />
  </section>
</template>

<script>
import HeadTitle from "@/components/HeadTitle"
import SubTitle from "@/components/SubTitle"
import UseGuide from "@/components/UseGuide"

export default {
  components: {
    HeadTitle,
    SubTitle,
    UseGuide,
  },
  data() {
    return {
      useGuideLists: [
        "- 이 페이지는 메시지 처리시 앱 다운로드와 관련한 안내에 사용될 정보들을 세팅하는 화면 입니다.",
      ],
    }
  },
  computed: {
  },
}
</script>

<style>

</style>