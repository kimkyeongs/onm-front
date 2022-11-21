<template>
  <div class="keyWord-filter">
    <span class="title">검색필터</span>
    <div class="keywordReset-wrap">
      <div
        class="keyWord">
        <span
          v-for="keyWord in searchFilter"
          :key="keyWord.idx">
          <em>[{{keyWord.filterTitle}}]</em>{{keyWord.filterText}}
        </span>
      </div>
      <button
        type="button"
        class="btn btn-md btn-default bor-radius-15">초기화</button>
      </div>
  </div>
</template>

<script>
export default {
  props: {
    searchFilter: {
      type: Array,
      default: () => []
    }
  }

}
</script>

<style scoped>
  .content-wrap .keyWord-filter{
    display: flex;
    align-items: center;
    font-size: 14px;
  }
  .content-wrap .keyWord-filter .keywordReset-wrap{
    display: flex;
    align-items: center;
    width: 100%;
  }
  .content-wrap .keyWord-filter .title,
  .content-wrap .keyWord-filter .keyWord span,
  .content-wrap .keyWord-filter button{
    flex: 0 0 auto;
  }
  .content-wrap .keyWord-filter .title{
    color: #777;
    font-weight: 600;
  }
  .content-wrap .keyWord-filter .keyWord span{
    position: relative;
    letter-spacing: -.9px;
  }
  .content-wrap .keyWord-filter .keyWord{
    padding: 0 10px;
    line-height: 16px;
  }
  .content-wrap .keyWord-filter .keyWord span::before{
    content: 'ㅣ';
    display: inline-block;
    font-size: 14px;
    color: #ccc;
    padding: 0 3px;
  }
  .content-wrap .keyWord-filter .keyWord span:first-child::before{
    content: '';
    padding-left: 0;
  }

  /*********************************************************
  - Media Query
  *********************************************************/
  @media screen and (max-width: 768px) {
    .content-wrap .keyWord-filter{
      flex-direction: column;
      align-items: normal;
      margin-bottom: 20px;
      width: 100%;
    }
    .content-wrap .keyWord-filter .keyWord{
      padding-left: 0;
    }
    .content-wrap .keyWord-filter button{
      margin-left: auto;
    }
  }
</style>