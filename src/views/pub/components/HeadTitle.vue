<template>
  <div class="content-header">
    <h2 class="headerTitle">{{ title }}</h2>
    <location />
  </div>  
</template>

<script>
import Location from '@/views/pub/components/Location'

export default {
  components: {
    Location
  },
  props: {
    title: {
      type: String
    }
  }
}
</script>

<style>
  
</style>
