<template>
  <section class="onmContent">
    <head-title title="로밍연동관리 상세보기" />
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
      <!-- 나이스정보통신(크레딧) -->
      <div class="col-lg-6 col-md-12">
        <sub-title title="나이스정보통신(크레딧)" />
        <div class="table">
          <table>
            <caption class="sr-only">나이스정보통신(크레딧)</caption>
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
                  <v-radio-group class="radio-group" v-model="niceType" row>
                    <v-radio
                      v-for="key in niceList"
                      :key="key"
                      :label="key"
                      :value="key"
                      color="orange"
                    />
                  </v-radio-group>
                </td>
              </tr>
              <tr>
                <th scope="row"><span>client_id</span></th>
                <td>
                  <input type="text" class="form-control" placeholder="client_id">
                </td>
                <th scope="row"><span>id_token</span></th>
                <td>
                  <input type="text" class="form-control" placeholder="id_token">
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <!-- 나이스페이먼트 -->
      <div class="col-lg-6 col-md-12 subject">
        <sub-title title="나이스페이먼트" />
        <div class="table">
          <table>
            <caption class="sr-only">나이스페이먼트</caption>
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
                  <v-radio-group class="radio-group" v-model="paymentType" row>
                    <v-radio
                      v-for="key in paymentList"
                      :key="key"
                      :label="key"
                      :value="key"
                      color="orange"
                    />
                  </v-radio-group>
                </td>
              </tr>
              <tr>
                <th scope="row"><span>client_id</span></th>
                <td>
                  <input type="text" class="form-control" placeholder="client_id">
                </td>
                <th scope="row"><span>id_token</span></th>
                <td>
                  <input type="text" class="form-control" placeholder="id_token">
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div class="flex-row">
      <!-- 스마트로 -->
      <div class="col-lg-6 col-md-12">
        <sub-title title="스마트로" />
        <div class="table">
          <table>
            <caption class="sr-only">스마트로</caption>
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
                  <v-radio-group class="radio-group" v-model="smartType" row>
                    <v-radio
                      v-for="key in smartList"
                      :key="key"
                      :label="key"
                      :value="key"
                      color="orange"
                    />
                  </v-radio-group>
                </td>
              </tr>
              <tr>
                <th scope="row"><span>client_id</span></th>
                <td>
                  <input type="text" class="form-control" placeholder="client_id">
                </td>
                <th scope="row"><span>id_token</span></th>
                <td>
                  <input type="text" class="form-control" placeholder="id_token">
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div class="btn-area text-right">
      <button type="button" class="btn btn-default btn-orange btn-fixed">저장</button>
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
        "- 이 페이지는 고객사별 크레딧 및 PG 연동을 위한 계정을 세팅하는 페이지입니다.",
      ],
      niceList: ['사용', '미사용'],
      niceType: '사용',
      paymentList: ['사용', '미사용'],
      paymentType: '사용',
      smartList: ['사용', '미사용'],
      smartType: '사용',
    }
  },
  computed: {
  },
}
</script>

<style>

</style>