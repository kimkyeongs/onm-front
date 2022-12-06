<template>
  <section class="onmContent">
    <head-title title="사용자등록" />

    <div class="flex-row">  
      <!-- 사용자 사진 -->
      <div class="col-lg-6 col-md-12">
        <sub-title title="사용자 사진" />
          <div class="userPhoto">
            <div class="photo">
              <img src="@/assets/images/use@2x.png" style="width: 304px; height: 304px;" alt="기본 사용자 사진">
            </div>
            <button type="button" class="btn btn-md btn-gray mt-20">사진업로드</button>
            <ul class="font14 mt-20">
              <li>※ 1Mbyte 이하의 정적 이미지 파일을 업로드하세요. (jpg, png, bmp)</li>
              <li>※ 가로 세로 300px 이상의 이미지는 300px로 변환되어 저장됩니다.</li>
            </ul>
          </div>
      </div>
      <!-- 사용자 기본정보-->
      <div class="col-lg-6 col-md-12 subject">
        <sub-title title="사용자 기본정보" />
        <div class="table">
          <table>
            <caption class="sr-only">사용자 기본정보</caption>
            <colgroup>
              <col width="30%">
              <col width="*">
            </colgroup>
            <tbody>
              <tr>
                <th scope="row" class="required"><span>사용자ID</span></th>
                <td>
                  <input type="text" class="form-control" placeholder="영어/숫자 6~15자 이내">
                  <p class="checkError text-blue" v-if="true">*사용할 수 있는 아이디입니다.</p>
                  <p class="checkError" v-if="true">*사용할 수 없는 아이디입니다. 다른 아이디를 입력해 주세요.</p>
                  <p class="checkError" v-if="true">*영어와 숫자를 이용하여 빈칸없이 6~15자 이내로 입력해 주세요.</p>
                </td>
              </tr>
              <tr>
                <th scope="row" class="required"><span>사용자명</span></th>
                <td>
                  <input type="text" class="form-control" placeholder="영어/한글 2~15자 이내">
                  <p class="checkError" v-if="true">*영어와 한글을 이용하여 빈칸없이 2~15자 이내로 입력해 주세요.</p>
                </td>
              </tr>
              <tr>
                <th scope="row" class="required"><span>비밀번호</span></th>
                <td>
                  <input type="password" class="form-control" placeholder="10~20자 영어대문자, 숫자, 특수문자 중 2종류 이상 조합">
                  <p class="checkError text-blue" v-if="true">*아래 변경할 비밀번호 재입력에 비밀번호를 다시 한 번 입력해 주세요.</p>
                  <p class="checkError" v-if="true">*이용가이드에 적합한 비밀번호를 입력해 주세요.</p>
                </td>
              </tr>
              <tr>
                <th scope="row" class="required"><span>비밀번호 재입력</span></th>
                <td>
                  <input type="password" class="form-control" placeholder="비밀번호 재입력">
                  <p class="checkError text-blue" v-if="true">*위에서 입력하신 비밀번호와 일치합니다.</p>
                  <p class="checkError" v-if="true">*위에 입력하신 비밀번호와 맞지 않습니다.</p>
                </td>
              </tr>
              <tr>
                <th scope="row" class="required"><span>직급</span></th>
                <td>
                  <v-select
                    :items="select01"
                    class="selectBox"
                    label="전체"
                    dense
                    solo />
                </td>
              </tr>
              <tr>
                <th scope="row" class="required"><span>이메일</span></th>
                <td>
                  <div class="form-inline">
                    <input type="text" class="form-control">
                    <span class="bridge">@</span>
                    <input type="text" class="form-control">
                  </div>
                </td>
              </tr>
              <tr>
                <th scope="row" class="required"><span>휴대폰번호</span></th>
                <td>
                  <div class="form-inline">
                    <input type="text" class="form-control">
                    <span class="bridge">-</span>
                    <input type="text" class="form-control">
                    <span class="bridge">-</span>
                    <input type="text" class="form-control">
                  </div>
                </td>
              </tr>
              <tr>
                <th scope="row"><span>전화번호</span></th>
                <td>
                  <div class="form-inline">
                    <input type="text" class="form-control">
                    <span class="bridge">-</span>
                    <input type="text" class="form-control">
                    <span class="bridge">-</span>
                    <input type="text" class="form-control">
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div class="flex-row">
      <!-- 사용자 권한정보 -->
      <div class="col-lg-6 col-md-12">
        <sub-title title="사용자 권한정보" />
        <div class="table">
          <table>
            <caption class="sr-only">사용자 권한정보</caption>
            <colgroup>
              <col width="30%">
              <col width="*">
            </colgroup>
            <tbody>
              <tr>
                <th scope="row" class="required"><span>고객사명</span></th>
                <td>
                  <v-select
                    :items="items"
                    class="selectBox"
                    label="전체"
                    dense
                    solo />
                </td>
              </tr>
              <tr>
                <th scope="row" class="required"><span>사용자권한</span></th>
                <td>
                  <v-select
                    :items="select02"
                    class="selectBox"
                    label="전체"
                    dense
                    solo />
                </td>
              </tr>
              <tr>
                <th scope="row" class="required"><span>지사</span></th>
                <td>
                  <v-select
                    :items="items"
                    class="selectBox"
                    label="전체"
                    dense
                    solo />
                </td>
              </tr>
              <tr>
                <th scope="row" class="required"><span>법인회원사명</span></th>
                <td>
                  <v-select
                    :items="items"
                    class="selectBox"
                    label="전체"
                    dense
                    solo />
                </td>
              </tr>
              <tr>
                <th scope="row" class="required"><span>사용자상태</span></th>
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
                  <p class="checkError" v-if="true">*사용자권한과 지사가 선택된 회원은 승인대기, 승인거부 처리할 수 없습니다.</p>
                  <p class="checkError" v-if="true">*사용자권한과 지사가 선택되지 않은 회원은 정상, 중지 처리할 수 없습니다.</p>
                </td>
              </tr>
              <tr>
                <th scope="row"><span>사용자 신청일시</span></th>
                <td></td>
              </tr>
              <tr>
                <th scope="row"><span>사용자 승인일시</span></th>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <!-- 메모 -->
      <div class="col-lg-6 col-md-12 subject">
        <sub-title title="메모" />
        <textarea name="" id="" cols="30" rows="10" class="form-control" style="height: 355px;"></textarea>
      </div>
    </div>
    <div class="btn-area clearFix">
      <div class="pull-left">
        <button type="button" class="btn btn-default btn-yellow btn-fixed">목록</button> 
      </div>
      <div class="pull-right">
        <button
          type="button"
          class="btn btn-default btn-gray"
          @click="modalOpen">개인정보 마스킹 제거</button>
        <button type="button" class="btn btn-default btn-orange btn-fixed">등록</button>
      </div>
    </div>
    <!-- 이용가이드 -->
    <sub-title title="이용가이드" />
    <use-guide
      :useGuideLists="useGuideLists" />
    <onm-ia-adm-sup030-p />
  </section>
</template>

<script>
import HeadTitle from "@/views/pub/components/HeadTitle"
import SubTitle from "@/views/pub/components/SubTitle"
import UseGuide from "@/views/pub/components/UseGuide"
import OnmIaAdmSup030P from "@/views/pub/ONM_IA_ADM_SUP_030_P"; //개인정보 마스킹제거Modal
import { mapState, mapMutations } from "vuex";

export default {
  components: {
    HeadTitle,
    SubTitle,
    UseGuide,
    OnmIaAdmSup030P
  },
  data() {
    return {
      items: ['아이템-1', '아이템-2', '아이템-3'],
      select01: ['사원', '대리', '과장', '차장', '부장', '임원', '기타'],
      select02: ['통합관리자/법인회원사 ', '대표관리자/사용자(권한명) '],
      radioLists: ['승인대기', '승인거부', '정상', '중지'],
      useGuideLists: [
        "- 사용자의 기존 비밀번호는 알 수 없으며 필요시 변경하셔야 합니다.",
        "- 사용자상태가 정상인 경우만 O&M플랫폼에 로그인이 가능합니다."
      ],
    }
  },
  computed: {
    ...mapState({
      isActiveModal: (state) => state.settings.isActiveModal,
    }),
  },
  methods: {
    ...mapMutations({
      modalOpen: "settings/MODAL_OPEN",
    }),
  }
}
</script>

<style>

</style>