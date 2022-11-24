<template>
  <div>
    <span
      v-for="list in checkBoxList"
      :key="list.id">
      <p>{{list.checked}}</p>
      <input
        type="checkbox"
        :value="list.label"
        :id="list.id"
        :checked="list.checked"
        @change="checkboxToggle">
      <label :for="list.id">{{ list.label }}</label>  
    </span>
  </div>
</template>
<script>
export default {
  props: {
    checkBoxList: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return{
      // selected:[]
    }
  },
  mounted() {
  },
  methods: {
    checkboxToggle(e){
      this.$emit('toggle-checkbox', {
        id: e.target.id,
        checked: e.target.checked
      })
    }
  }
}
</script>

<style>

</style>