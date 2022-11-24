<template>
  <div class="locationWrap">
    <span
      v-for="item in locations"
      :key="item.idx">
        {{ item }}
    </span>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState([
      'locations',
    ])
  }

}
</script>

<style scoped>
  .container .locationWrap{
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    font-size: 14px;
    color: #777;
  }
  .container .locationWrap > span{
    position: relative;
    padding-left: 18px;
    background: url('@/assets/images/icon-arrowRight@2x.png') left no-repeat;
    background-size: 18px;
  }
  .container .locationWrap > span:first-child{
    padding-left: 22px;
    background: none;
  }
  .container .locationWrap > span:first-child::before{
    content: '';
    display: block;
    width: 18px;
    height: 18px;
    position: absolute;
    left: 0;
    top: 0;
    background: url('@/assets/images/home@2x.png') left center no-repeat;
    background-size: 18px 18px;
  }
</style>
