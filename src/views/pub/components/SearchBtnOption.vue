<template>
  <section class="btn-optionArea">
    <template v-if="searchDownloadOption">
      <button
        type="button"
        class="btn btn-default btn-orange btn-fixed"
        value="downLoadOption"
        @click="searchToggle">
        다운로드옵션
        <i class="icon icon-sm icon-download-option" />
      </button>
    </template>  
    <button
      type="button"
      class="btn btn-default btn-yellow btn-fixed"
      value="searchOption"
      @click="searchToggle">
      검색옵션
      <i class="icon icon-sm icon-download-option" />
    </button>
  </section>
</template>

<script>
export default {
  props: {
    searchDownloadOption: {
      type: Boolean,
      default: true
    }
  },
  data() {

  },
  methods: {
    searchToggle(e) {
      this.$store.commit('SEARCH_TOGGLE', e.target.value)
    }
  }

}
</script>

<style scoped>
  /*********************************************************
  - Media Query
  *********************************************************/
  @media screen and (max-width: 768px) {
    .content-wrap .btn-optionArea{
      justify-content: right;
    }
  }
</style>