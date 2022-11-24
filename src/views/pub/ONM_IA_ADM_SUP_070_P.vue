<template>
  <div
    v-if="isActiveModal"
    class="dialog-wrap">
    <div class="overlay-scrim"></div>

    <div class="dialog-container">
      <div class="dialog-content" style="width: 500px;">
        <!-- Modal Header -->
        <!-- <div class="dialog-header">
          <h1>개인정보 마스킹 제거</h1>
          <button
            type="button"
            class="header-btnClose"
            @click="modalClose">
            <span class="blind">닫기</span>
          </button>
        </div> -->
        <!-- Modal Body -->
        <div class="dialog-body">
          <div class="title">아주 민감한 정보를 수정하고 있습니다!</div>
          <div>
            공통코드 수정은 아주 중요하고 민감 한 작업입니다. <br />
            아래 비밀번호를 입력하고 확인을 누르시면 반영 됩니다
          </div>
          <input type="password" class="form-control mt-20 mb-2" placeholder="로그인 비밀번호를 입력해 주세요.">
          <p
            v-if="true" 
            class="checkError mb-3">비밀번호를 다시 확인해 주세요.</p>
          <button type="button" class="btn btn-default btn-orange btn-md btn-fixed mt-2">확인</button>
          <button
            type="button"
            class="modal-close"
            @click="modalClose">
            <span class="blind">닫기</span>
          </button>
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