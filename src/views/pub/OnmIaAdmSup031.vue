<template>
  <div
    v-if="isActiveModal"
    class="dialog-wrap">
    <div class="overlay-scrim"></div>

    <div class="dialog-container">
      <div class="dialog-content" style="width: 500px;">
        <!-- Modal Header -->
        <div class="dialog-header">
          <h1>개인정보 마스킹 제거</h1>
          <button
            type="button"
            class="header-btnClose"
            @click="modalClose">
            <span class="blind">닫기</span>
          </button>
        </div>
        <!-- Modal Body -->
        <div class="dialog-body">
          <div>
            현재 사용자께서는 개인정보 마스킹 제거를 요청하셨습니다. 본 플랫폼은 사용자의 개인정보 조회 이력에 대해 상세히 모니터링하고 있으며, 만일 개인정보 유출 관련한 문제가 발생할 경우 이 기록은 해당 증빙으로 사용될 수 있습니다. 이것에 동의하고 제거 기능을 이용하려면 아래에 로그인 비밀번호를 입력해 주시고 ‘개인정보 마스킹 제거 요청’을 눌러 주시면 됩니다.
          </div>
          <input type="password" class="form-control mt-20 mb-2" placeholder="로그인 비밀번호를 입력해 주세요.">
          <p
            v-if="true" 
            class="checkError mb-3">비밀번호를 다시 확인해 주세요.</p>
          <button type="button" class="btn btn-default btn-orange btn-md mt-2">개인정보 마스킹 제거 요청</button>
        </div> 
        <!-- Modal Footer -->
        <div class="dialog-footer">
          <button
            type="button"
            class="btn-modalClose"
            @click="modalClose">
            닫기
          </button>
        </div>
        <!--// Modal Footer -->
      </div>
    </div>
  </div> 
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  components: {
  },

  computed: {
    ...mapState([
      'isActiveModal',
    ])
  },
  methods: {
    ...mapMutations({
      'modalClose': 'MODAL_CLOSE'
    })
  }
}
</script>

<style scoped>
.checkError{
  margin-top: -3px;
  color: var(--color-red);
  text-align: left;
}
</style>