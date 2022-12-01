<template>
  <div v-if="isActiveModal" class="dialog-wrap">
    <div class="overlay-scrim"></div>

    <div class="dialog-container">
      <div class="dialog-content" style="width: 500px">
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
          <div class="title">개인정보 마스킹 제거</div>
          <div>
            현재 사용자께서는 개인정보 마스킹 제거를 요청하셨습니다. 본 플랫폼은
            사용자의 개인정보 조회 이력에 대해 상세히 모니터링하고 있으며, 만일
            개인정보 유출 관련한 문제가 발생할 경우 이 기록은 해당 증빙으로
            사용될 수 있습니다. 이것에 동의하고 제거 기능을 이용하려면 아래에
            로그인 비밀번호를 입력해 주시고 ‘개인정보 마스킹 제거 요청’을 눌러
            주시면 됩니다.
          </div>
          <input
            v-model="userPassword"
            type="password"
            class="form-control mt-20 mb-2"
            placeholder="로그인 비밀번호를 입력해 주세요."
          />
          <p v-if="true" class="checkError mb-3" v-show="this.show">
            비밀번호를 다시 확인해 주세요.
          </p>
          <button
            type="button"
            class="btn btn-default btn-orange btn-md mt-2"
            @click="checkPassword"
          >
            개인정보 마스킹 제거 요청
          </button>
          <button type="button" class="modal-close" @click="popClose">
            <span class="blind">닫기</span>
          </button>
        </div>
        <!-- Modal Footer -->
        <div class="dialog-footer">
          <button type="button" class="btn-modalClose" @click="popClose">
            닫기
          </button>
        </div>
        <!--// Modal Footer -->
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import { popupPwCheck } from "@/api/auth_api";
import store from "@/store";

export default {
  props: ["popupGubun"],
  components: {},
  data: () => ({
    userPassword: "",
    status: null,
    show: "",
  }),
  computed: {
    ...mapState({
      isActiveModal: (state) => state.settings.isActiveModal,
    }),
  },
  watch: {
    status: function () {
      console.log(this.status);
      if (this.status) {
        (this.userPassword = ""),
          (this.show = ""),
          this.$store.commit("settings/MODAL_CLOSE");
        this.$emit("pwdCheck", { result: true });
      } else {
        this.show = "ok";
      }
    },
  },
  mounted() {},
  methods: {
    // ...mapMutations({
    //   modalClose: "settings/MODAL_CLOSE",
    // }),
    popClose() {
      (this.userPassword = ""),
        (this.show = ""),
        this.$store.commit("settings/MODAL_CLOSE");
    },
    //비밀번호 인증
    async pwCheck(val) {
      //var userId = store.getters.userId;
      var userId = "INSOFT1";
      // pwe : InSOFT1!@#$
      var requestParam = {
        userId: userId,
        userPassword: val,
      };
      await popupPwCheck(requestParam).then((response) => {
        this.status = response.data === "success" ? true : false;
      });
    },
    checkPassword() {
      this.pwCheck(this.userPassword);
    },
  },
};
</script>

<style scoped>
.checkError {
  margin-top: -3px;
  color: var(--color-red);
  text-align: left;
}
</style>
