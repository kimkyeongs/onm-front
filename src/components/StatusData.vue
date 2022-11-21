<template>
  <div class="status-list">
    <ul>
      <li
        v-for="item in statusLists"
        :key="item.idx"
        :class="StatusKey(item.name)">
        <span class="name">{{ item.name }}</span>
        <span class="number">{{ item.number }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState([
      'statusLists'
    ])
  },
  methods: {
    StatusKey (status) {
      switch (status) {
        case '대기': return 'status-green'
        case '준비': return 'status-pink'
        case '예약': return 'status-blue'
        case '충전': return 'status-cyan'
        case '종료': return 'status-yellow'
        case '고장': return 'status-red'
        default : return 'status-default'
      }
    }
  }
}
</script>

<style scoped>
  .content-wrap .status-list{
    flex: 1 1 auto;
  }
  .content-wrap .status-list > ul{
    display: flex;
  }
  .content-wrap .status-list > ul > li{
    display: flex;
    align-items: center;
    width: 100px;
    height: 40px;
    overflow: hidden;
    color: #333;
    font-weight: 600;
    border-radius: 20px;
    padding: 9px 9px 9px 0;
    border: 1px solid var(--color-gray-200);
    background-color: var(--color-white);
  }
  .content-wrap .status-list > ul > li > span{
    display: inline-block;
    font-size: 14px;
    width: 50%;
    text-align: center;
    border-radius: 12px;
  }
  .content-wrap .status-list > ul > li + li{
    margin-left: 10px;
  }
  [class^="status-"] .number{
    color: var(--color-white);
  }
  .content-wrap .status-default > .number{
    background-color: var(--color-gray-400);
  }
  .content-wrap .status-default > .number{
    color: var(--color-white);
  }
  .content-wrap .status-green > .number{
    background-color: var(--color-green);
  }
  .content-wrap .status-pink > .number{
    background-color: var(--color-purple);
  }
  .content-wrap .status-blue > .number{
    background-color: var(--color-blue);
  }
  .content-wrap .status-cyan > .number{
    background-color: var(--color-cyan);
  }
  .content-wrap .status-yellow > .number{
    background-color: var(--color-yellow);
  }
  .content-wrap .status-red > .number{
    background-color: var(--color-red);
  }
  /*********************************************************
  - Media Query
  *********************************************************/
  @media screen and (max-width: 768px) {
    .content-wrap .statusArea-wrap{
      flex-direction: column;
      align-items: flex-start;
    }
    .content-wrap .status-list{
      width: 100%;
      margin-bottom: 20px;
    }
    .content-wrap .status-list > ul{
      display: flex;
      justify-content: center;
    }
    .content-wrap .status-list > ul > li{
      width: 80px; 
    }
  }
</style>