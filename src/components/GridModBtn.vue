<template>
  <button
    type="button"
    class="btn btn-default btn-gray btn-xsm"
    @click="fnCpoDetail()"
  >
    수정
  </button>
</template>

<script>
export default {
  methods: {
    fnCpoDetail() {
      this.$router
        .replace({
          name: "cpoManagementDetail",
        })
        .catch(() => {});
    },
  },
};
</script>

<style></style>
