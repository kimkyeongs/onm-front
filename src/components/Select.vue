<template>
  <v-select
    :items="items"
    label="Solo field"
    dense
    solo
  ></v-select>
</template>

<script>
export default {
  props: {
    items:{
      type: Array,
      default: () => []
    }
  }
}
</script>

<style>

</style>