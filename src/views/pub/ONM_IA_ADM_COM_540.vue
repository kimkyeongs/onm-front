<template>
  <section class="onmContent">
    <head-title title="간편로그인관리 수정" />
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
      <!-- 카카오톡 간편로그인 -->
      <div class="col-lg-6 col-md-12">
        <sub-title title="카카오톡 간편로그인" />
        <div class="table">
          <table>
            <caption class="sr-only">카카오톡 간편로그인</caption>
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
                  <v-radio-group class="radio-group" v-model="kakaoLoginType" row>
                    <v-radio
                      v-for="key in kakaoLogin"
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
      <!-- 네이버 간편로그인 -->
      <div class="col-lg-6 col-md-12 subject">
        <sub-title title="네이버 간편로그인" />
        <div class="table">
          <table>
            <caption class="sr-only">네이버 간편로그인</caption>
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
                  <v-radio-group class="radio-group" v-model="naverLoginType" row>
                    <v-radio
                      v-for="key in naverLogin"
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
      <!-- 구글 간편로그인 -->
      <div class="col-lg-6 col-md-12">
        <sub-title title="구글 간편로그인" />
        <div class="table">
          <table>
            <caption class="sr-only">구글 간편로그인</caption>
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
                  <v-radio-group class="radio-group" v-model="googleLoginType" row>
                    <v-radio
                      v-for="key in googleLogin"
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
      <!-- 애플 간편로그인 -->
      <div class="col-lg-6 col-md-12 subject">
        <sub-title title="애플 간편로그인" />
        <div class="table">
          <table>
            <caption class="sr-only">애플 간편로그인</caption>
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
                  <v-radio-group class="radio-group" v-model="appleLoginType" row>
                    <v-radio
                      v-for="key in appleLogin"
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
    <sub-title title="최종수정자 정보" />
    <div class="table">
      <table>
        <caption class="sr-only">최종수정자 정보</caption>
        <colgroup>
          <col width="20%">
          <col width="30%">
          <col width="20%">
          <col width="*">
        </colgroup>
        <tbody>
          <tr>
            <th scope="row"><span>최종수정자</span></th>
            <td></td>
            <th scope="row"><span>최종수정일시</span></th>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- 이용가이드 -->
    <sub-title class="mt-20" title="이용가이드" />
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
      tabLists:['알림톡 계정관리', '알림톡 템플릿 관리'],
      useGuideLists: [
        "- 이 페이지는 고객사별 간편로그인 연동을 위한 계정을 세팅하는 페이지입니다.",
      ],
      kakaoLogin: ['사용', '미사용'],
      kakaoLoginType: '사용',
      naverLogin: ['사용', '미사용'],
      naverLoginType: '사용',
      googleLogin: ['사용', '미사용'],
      googleLoginType: '사용',
      appleLogin: ['사용', '미사용'],
      appleLoginType: '사용',
    }
  },
  computed: {
  },
}
</script>

<style>

</style>