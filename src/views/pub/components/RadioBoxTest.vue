<template>
  <div class="radioBox-inline">
    <v-radio-group>
      <div
        class="radioBox-group"
        v-for="(list, idx) in radiobox"
        :key="{idx}">
        <v-radio
          :label="list.label"
          :value="list.label"
          color="orange"
        ></v-radio>
      </div>
    </v-radio-group>
  </div>
</template>

<script>
export default {
  props: {
    radiobox: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {}
  }
}
</script>

<style>
  .radioBox-inline .v-input--radio-group--column .v-input--radio-group__input {
    flex-direction: row;
  }
  .radioBox-inline .radioBox-group + .radioBox-group{
    margin-left: 20px;
  }
</style>