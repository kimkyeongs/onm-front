<template>
  <section class="onmContent">
    <head-title title="앱다운로드경로관리 상세보기" />
    <div class="gridMultiSearch mb-10">
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
    <div class="flex-row">  
      <!-- 안드로이드 -->
      <div class="col-lg-6 col-md-12">
        <sub-title title="안드로이드" />
        <div class="table">
          <table>
            <caption class="sr-only">안드로이드</caption>
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
                  <v-radio-group class="radio-group" v-model="template01Type" row>
                    <v-radio
                      v-for="key in template01"
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
      items: ['아이템-1', '아이템-2', '아이템-3'],
      useGuideLists: [
        "- 이 페이지는 메시지 처리시 앱 다운로드와 관련한 안내에 사용될 정보들을 세팅하는 화면 입니다.",
      ],
      template01: ['사용', '미사용'],
      template01Type: '사용',
      template02: ['사용', '미사용'],
      template02Type: '미사용',
    }
  },
  computed: {
  },
}
</script>

<style>

</style>