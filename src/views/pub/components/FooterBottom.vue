<template>
  <footer>
    <div class="footer-wrap">
      <address>
        사업자번호: 144-81-36734 / 상호명: 홈앤서비스 주식회사 / 대표자명: 김일 / 전화번호: 16700-119 / 주소: 서울특별시 중구 퇴계로 10, 16층(남대문로5가,메트로타워)</address>
    </div>
  </footer>
</template>

<script>
export default {

}
</script>

<style scoped>
  footer{
    position: fixed;
    bottom: 0;
    width: 100%;
    z-index: 99;
  }
  .footer-wrap{
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 50px;
    font-size: 12px;
    color: #555;
    border-top: 1px solid #d5dde0;
    background-color: #fff;
    opacity: .9;
    padding: 10px 50px;
    text-align: center;
  }
  .footer-wrap address{
    font-style: normal;
  }
</style>