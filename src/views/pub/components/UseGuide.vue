<template>
  <div class="use-guide">
    <ul>
      <li
        v-for="list in useGuideLists"
        :key="list" >
        {{ list }}
      </li>  
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    useGuideLists: {
      type: Array,
      default: () => []
    }
  }

}
</script>

<style scoped>
  .use-guide{
    font-size: 13px;
    padding: 16px;
    line-height: 20px;
    border: 1px solid #e1e5e7;
    background-color: #fbfcfd;
  }
</style>