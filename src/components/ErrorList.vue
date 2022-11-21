<template>
  <div
    v-if="errorIsActive"
    class="alarmList">
    <ul>
      <li
        v-for="(item, idx) in errorLists"
        :key="item.idx">
        <dl>
          <dt>
            <span class="title text-crop">{{ item.title }}</span>
            <button 
              type="button"
              class="btn-close blind"
              @click="itemDel(idx)">삭제</button>
          </dt>
          <dd>
            <ul>
              <li>모델명 : {{ item.modelInfo }}</li>
              <li>발생시간 : {{ item.occurrenceTimeInfo }}</li>
              <li>에러코드 : {{ item.errorInfo }}</li>
              <li class="text-red">차데모 : {{ item.chadeemoMessage }}</li>
            </ul>
          </dd>
        </dl>
      </li>
    </ul>
  </div>
</template>

<script>
import { ErrorList } from '@/assets/js/noticeMessage'

export default {
  props: {
    errorIsActive: {
      type: Boolean,
    }
  },
  data() {
    return {
      errorLists: ErrorList
    }
  },
  methods: {
    itemDel(index) {
      this.errorLists.splice(index, 1)
    }
  }
}
</script>

<style>

</style>