<template>
  <section class="onmContent">
    <head-title title="크레딧 및 PG관리 상세보기" />
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
      <!-- 신용카드 결제 처리 PG선택 -->
      <div class="col-lg-6 col-md-12">
        <sub-title title="신용카드 결제 처리 PG선택" />
        <div class="font14">
          <ul>
            <li>- 회원 신용카드 결제를 처리함에 있어, 어떤 PG를 선택할지 여부입니다. 한 번 적용후 변경하지 않을 것을 적극 권장 드립니다.</li>
            <li>- 선택한 PG에서 빌링키를 받게 되니, 선택을 변경하실 경우, 모든 회원의 빌키를 다시 받는 과정이 필요하게 되니 신중하게 선택해 주세요.</li>
            <li>- 선택한 PG의 아이디와 토큰값을 반드시 입력해 주시기 바랍니다.</li>
          </ul>
        </div>
        <div class="table mt-10">
          <table>
            <caption class="sr-only">계약여부</caption>
            <colgroup>
              <col width="20%">
              <col width="*">
            </colgroup>
            <tbody>
              <tr>
                <th scope="row"><span>계약여부</span></th>
                <td colspan="3">
                  <v-radio-group class="radio-group" v-model="contractStatus" row>
                    <v-radio
                      v-for="key in contractList"
                      :key="key"
                      :label="key"
                      :value="key"
                      color="orange"
                      :readonly="true"
                    />
                  </v-radio-group>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div class="flex-row">  
      <!-- 나이스페이먼트 -->
      <div class="col-lg-6 col-md-12">
        <h4 class="mb-10">나이스페이먼트</h4>
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
                <th scope="row"><span>client_id</span></th>
                <td></td>
                <th scope="row"><span>id_token</span></th>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <!-- 스마트로 -->
      <div class="col-lg-6 col-md-12 subject">
        <h4 class="mb-10">스마트로</h4>
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
                <th scope="row"><span>client_id</span></th>
                <td></td>
                <th scope="row"><span>id_token</span></th>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div> 
    </div>

    <div class="flex-row">
      <!-- 페이코 사용 선택 -->
      <div class="col-lg-6 col-md-12">
        <sub-title title="페이코 사용 선택" />
        <div class="font14">
          <ul>
            <li>- 페이코를 사용선택 하시면, 회원이 앱에서 간편결제 이용시에 신용카드 외에 페이코 결제를 선택할 수 있습니다. (택일)</li>
            <li>- 아래 사용을 체크하시고, 아이디와 토큰값을 입력하시면 회원앱에 노출 됩니다. </li>
          </ul>
        </div>
        <h4 class="mt-10 mb-10">페이코</h4>
        <div class="table">
          <table>
            <caption class="sr-only">페이코</caption>
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
                  <v-radio-group class="radio-group" v-model="PaycoType" row>
                    <v-radio
                      v-for="key in PaycoList"
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
                <th scope="row"><span>client_id</span></th>
                <td></td>
                <th scope="row"><span>id_token</span></th>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <!-- 나이스정보통신 사용 선택 -->
      <div class="col-lg-6 col-md-12 subject">
        <sub-title title="나이스정보통신 사용 선택" />
        <div class="font14">
          <ul>
            <li>- 크레딧 운영을 위해서 아래 나이스정보통신을 사용으로 체크하시고, 계약시 부여받은 아이디와 토큰값을 입력하시면 나이스정보통신을 위한 크레딧 운영이 연동처리 됩니다.</li>
          </ul>
        </div>
        <h4 class="mt-10 mb-10">나이스정보통신</h4>
        <div class="table">
          <table>
            <caption class="sr-only">나이스정보통신</caption>
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
                  <v-radio-group class="radio-group" v-model="niceType" row>
                    <v-radio
                      v-for="key in niceList"
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
                <th scope="row"><span>client_id</span></th>
                <td></td>
                <th scope="row"><span>id_token</span></th>
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
      contractList: ['나이스페이먼트', '스마트로'],
      contractStatus: '나이스페이먼트',
      PaycoList: ['사용', '미사용'],
      PaycoType: '사용',
      niceList: ['사용', '미사용'],
      niceType: '사용',
    }
  },
  computed: {
  },
}
</script>

<style>

</style>