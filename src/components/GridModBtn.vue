<template>
  <button
    type="button"
    class="btn btn-default btn-gray btn-xsm"
    @click="fnCpoUpdate()"
  >
    수정
  </button>
</template>

<script>
export default {
  methods: {
    fnCpoUpdate() {
      this.$router
        .replace({
          name: "updateCpo",
        })
        .catch(() => {});
    },
  },
};
</script>

<style></style>
