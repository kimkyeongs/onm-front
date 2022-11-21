<template>
  <div class="memberLicenses-wrap">
    <span
      v-for="key in memberStatus"
      :key="key"
      >
      <em
        :class="memberLicenses(key.stauts)">
        {{key.stauts}}
      </em>
      {{key.number}}
    </span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      memberStatus: [
        {stauts: '성공', number: 99},
        {stauts: '실패', number: 99}
      ]
    }
  },
  methods: {
    memberLicenses(status) {
      switch(status) {
        case '성공': return 'licensesSucess'
        default: return 'licensesFailed'
      }
    }
  }
}
</script>

<style scoped>
  .memberLicenses-wrap .licensesSucess,
  .memberLicenses-wrap .licensesFailed{
    margin-right: 4px;
    color: #fff;
    padding: 4px;
    border-radius: 4px;
    background-color: #00a6ef;
  }
  .memberLicenses-wrap .licensesFailed{
    background-color: #999;
  }
  .memberLicenses-wrap span + span{
    margin-left: 10px;
  }
</style>