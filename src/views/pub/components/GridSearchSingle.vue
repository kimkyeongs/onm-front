<template>
  <div class="grid-serach-single">
    <input type="text" class="form-control" placeholder="대분류코드 또는 대분류명 입력" style="width: 200px;">
    <button
      type="button"
      class="btn btn-yellow btn-md">검색</button>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  .grid-serach-single{
    display: flex;
    align-items: center;
  }
  .grid-serach-single input + button{
    margin-left: 6px;
  }
</style>