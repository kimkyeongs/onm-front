<template>
  <div class="checkbox-inline">
    <div
      class="checkbox-group"
      v-for="(list, idx) in checkbox"
      :key="{idx}">
      <!-- <span class="mr-3">{{list.checked}}</span>
      <input 
        type="checkbox" 
        :checked="list.checked"
        @change="checkboxToggle">
      <label for="">{{list.label}}</label> -->
      <v-checkbox
        v-model="checkbox1"
        :label="list.label"
      ></v-checkbox>
    </div>
    <p>dfl;d;fkds;fk;ds:{{checkbox1}}</p>
  </div>
</template>

<script>
export default {
  props: {
    checkbox: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    checkboxToggle (e) {
      this.$emit('toggle', {
        id:this.checkbox.id,
        checked:e.target.checked
      })
    }
  }
  //  methods:{
  //   toggleCheckbox(e){
  //     this.$emit('toggle-checkbox',{
  //       id:this.todo.id,
  //       checked:e.target.checked
  //     })
  //   },
}
</script>

<style>
  .checkbox-inline {
    display: flex;
  }
  .checkbox-inline .checkbox-group + .checkbox-group{
    margin-left: 20px;
  }
  .checkbox-inline .mdi-checkbox-blank-outline::before{
    content: '';
    border: 1px solid blue;
    width: 20px;
    height: 20px;
  }
  .checkbox-inline .mdi-checkbox-marked::before {
    /* content: ""; */
    background-color:transparent;
    width: 20px;
    height: 20px;
}
</style>