<template>
  <transition name="modal-fade">
    <div v-if="show" class="modal-overlay" @click.self="close">
      <div class="modal-content">
        <div class="modal-header">
          <slot name="header">
            <h3>{{ title }}</h3>
          </slot>
          <button @click="close" class="close-button">&times;</button>
        </div>
        <div class="modal-body">
          <slot></slot>
        </div>
        <div class="modal-footer">
          <slot name="footer">
            <button @click="close" class="ok-button">OK</button>
          </slot>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  name: 'AppModal',
  props: {
    show: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: 'Thông báo',
    },
  },
  methods: {
    close() {
      this.$emit('close');
    },
  },
};
</script>
<style lang="scss" scoped>
  @import './AppModal.scss';
</style>