<template>
  <button class="show-cell" @click="test"/>
</template>

<script>

export default {
 methods: {
 }
}
</script>


<style scoped>
  .show-cell{
    width: 18px;
    height: 18px;
    border-radius: 4px;
    background:#a29f9f url('@/assets/images/plus@2x.png') no-repeat;
    background-size: 18px ;
  }
</style>