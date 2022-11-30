<template>
  <section class="onmContent">
    <head-title title="로밍연동관리 수정" />
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
      <!-- 한전 -->
      <div class="col-lg-6 col-md-12">
        <sub-title title="한전" />
        <div class="table">
          <table>
            <caption class="sr-only">한전</caption>
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
                  <v-radio-group class="radio-group" v-model="template01Type" row>
                    <v-radio
                      v-for="key in template01"
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
      <!-- 환경부 -->
      <div class="col-lg-6 col-md-12 subject">
        <sub-title title="환경부" />
        <div class="table">
          <table>
            <caption class="sr-only">환경부</caption>
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
                  <v-radio-group class="radio-group" v-model="template02Type" row>
                    <v-radio
                      v-for="key in template02"
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
        "- 이 페이지는 고객사별 로밍연동을 위한 계정을 세팅하는 페이지 입니다.",
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