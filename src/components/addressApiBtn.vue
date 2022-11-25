<template>
  <button type="button" class="btn btn-sm btn-gray ml-2" @click="showPop(true)">
    주소검색
  </button>
</template>

<script>
export default {
  data() {
    return {
      postcode: "",
      address: "",
      extraAddress: "",
      show: false,
    };
  },
  watch: {
    show: "showPop",
  },
  methods: {
    showPop(newVal) {
      if (newVal) {
        this.execDaumPostcode();
      } else {
        this.show = false;
      }
    },
    fnCpoDetail() {
      this.$router
        .replace({
          name: "cpoManagementDetail",
        })
        .catch(() => {});
    },
    execDaumPostcode() {
      new daum.Postcode({
        oncomplete: (data) => {
          if (this.extraAddress !== "") {
            this.extraAddress = "";
          }
          if (data.userSelectedType === "R") {
            // 사용자가 도로명 주소를 선택했을 경우
            this.address = data.roadAddress;
          } else {
            // 사용자가 지번 주소를 선택했을 경우(J)
            this.address = data.jibunAddress;
          }

          // 사용자가 선택한 주소가 도로명 타입일때 참고항목을 조합한다.
          if (data.userSelectedType === "R") {
            // 법정동명이 있을 경우 추가한다. (법정리는 제외)
            // 법정동의 경우 마지막 문자가 "동/로/가"로 끝난다.
            if (data.bname !== "" && /[동|로|가]$/g.test(data.bname)) {
              this.extraAddress += data.bname;
            }
            // 건물명이 있고, 공동주택일 경우 추가한다.
            if (data.buildingName !== "" && data.apartment === "Y") {
              this.extraAddress +=
                this.extraAddress !== ""
                  ? `, ${data.buildingName}`
                  : data.buildingName;
            }
            // 표시할 참고항목이 있을 경우, 괄호까지 추가한 최종 문자열을 만든다.
            if (this.extraAddress !== "") {
              this.extraAddress = `(${this.extraAddress})`;
              this.address = this.address + this.extraAddress;
            }
          } else {
            this.extraAddress = "";
          }
          // 우편번호를 입력한다.
          this.postcode = data.zonecode;
          var resultJson = {
            postcode: this.postcode,
            address: this.address,
            extraAddress: this.extraAddress,
            addressDtl: "",
            checkBoxCtrl: false,
          };
          this.$emit("close", resultJson);
        },
        onclose: function (state) {
          //state는 우편번호 찾기 화면이 어떻게 닫혔는지에 대한 상태 변수.
          if (state === "FORCE_CLOSE") {
            //사용자가 브라우저 닫기 버튼을 통해 팝업창을 닫았을 경우, 실행될 코드를 작성하는 부분입니다.
            this.show = false;
          }
        },
      }).open();
    },
  },
};
</script>

<style></style>
