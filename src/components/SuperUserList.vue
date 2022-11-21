<template>
  <div
    v-if="superUserIsActive"
    class="superUserList">
    <ul>
      <li
        v-for="(item, idx) in superUserLists"
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
          </dt>
          <dd>
            <ul>
              <li
                v-for="text in item.content"
                :key="text">
                <span class="text-crop">{{ text.text }}</span>
              </li>
            </ul>
          </dd>
        </dl>
      </li>
    </ul>
  </div>
    
</template>

<script>
import { SuperUserList } from '@/assets/js/noticeMessage'

export default {
  props: {
    superUserIsActive: {
      type: Boolean,
    },
  },
  data() {
    return {
      superUserLists: SuperUserList,
    }
  },
  mounted() {
  },
  methods: {
    itemDel(index) {
      this.superUserLists.splice(index, 1)
    },
  }
}
</script>

<style scoped>
  
</style>