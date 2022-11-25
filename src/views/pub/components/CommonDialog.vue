<template>
  <div v-if="true" class="dialog-wrap">
    <div class="overlay-scrim"></div>
    <div class="dialog-container">
      <div class="dialog-content">
        <slot name="ss" />
      </div>
    </div>
    <!-- Dialog Footer -->
    <div class="dialog-footer">
      <button type="button" class="btn-modalClose" @click="modalClose">
        닫기
      </button>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  components: {},

  computed: {
    ...mapState({
      isActiveModal: (state) => state.settings.isActiveModal,
    }),
  },
  methods: {
    modalClose() {
      this.$store.commit("settings/MODAL_CLOSE");
    },
  },
};
</script>

<style scope></style>
