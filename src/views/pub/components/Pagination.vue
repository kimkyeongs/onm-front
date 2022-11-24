<template>
  <div class="pagination">
    <button class="btn-paging first">
      <span class="blind">처음페이지</span>
    </button>
    <button  class="btn-paging prev">
      <span class="blind">이전</span>
    </button>
    <ul>
      <li
        v-for="(n, idx) in 10"
        :key="n.idx"
        :class="{'active' : isActive === idx}"
        @click="addClass(idx)">
        {{ n }}
      </li>  
    </ul>
    <button type="button" class="btn-paging next">
      <span class="blind">다음</span>
    </button>
    <button type="button" class="btn-paging last">
      <span class="blind">마지막페이지</span>
    </button>
  </div>
</template>

<script>
export default {

  data() {
    return {
      isActive: 0,
    }
  }, 
  methods: {
    addClass(idx) {
      this.isActive = idx
    }
  },

}
</script>

<style scoped>
  .pagination .btn-paging,
  .pagination li{
    width: 32px;
    height: 32px;
    line-height: 28px;
    margin-left: 6px;
    text-align: center;
    /* border-radius: 4px;
    border: 1px solid #d4dde0;
    background-color: #f8f9fb; */
  }
  .pagination,
  .pagination > ul{
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .pagination li{
    font-size: 14px;
    color: #777;
    cursor: pointer;
  }
  .pagination li.active{
    font-weight: bold;
    color: #fff;
    background-color: #f47725;
    border-radius: 4px;
  }
  .pagination button.first{
    background: url('@/assets/images/icon-first@2x.png') center no-repeat;
    background-size: 24px 24px;
  }
  .pagination button.prev{
    background: url('@/assets/images/icon-prev@2x.png') center no-repeat;
    background-size: 24px 24px;
  }
  .pagination button.next{
    background: url('@/assets/images/icon-next@2x.png') center no-repeat;
    background-size: 24px 24px;
  }
  .pagination button.last{
    background: url('@/assets/images/icon-last@2x.png') center no-repeat;
    background-size: 24px 24px;
  }
</style>