<template>
  <div
    v-if="noticeIsActive"
    class="noticeList">
    <ul>
      <li
        v-for="(item, idx) in noticeLists"
        :key="item.idx">
        <dl>
          <dt>
            <span class="title text-crop">{{ item.title }}</span>
            <button 
              type="button"
              class="btn-close blind"
              @click="itemDel(idx)">
              삭제
            </button>
            <span class="date">공지시간 : {{ item.date }}</span>
          </dt>
          <dd>{{ item.textInfo }}</dd>
        </dl>
      </li>
    </ul>
  </div>
    
</template>

<script>
import { NoticeList } from '@/assets/js/noticeMessage'

export default {
  props: {
    noticeIsActive: {
      type: Boolean,
    },
  },
  data() {
    return {
      noticeLists: NoticeList,
    }
  },
  methods: {
    itemDel(index) {
      this.noticeLists.splice(index, 1)
    }
  }
}
</script>

<style scoped>
  
</style>