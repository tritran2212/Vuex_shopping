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
<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}
.modal-content {
  background-color: white;
  width: 90%;
  max-width: 500px;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
}
.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  border-bottom: 1px solid #e9ecef;
}
.modal-header h3 {
  margin: 0;
  font-size: 1.25rem;
}
.close-button {
  background: none;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  color: #aaa;
}
.modal-body {
  padding: 25px 20px;
  text-align: center;
  font-size: 1.1rem;
}
.modal-footer {
  padding: 15px 20px;
  text-align: right;
  border-top: 1px solid #e9ecef;
}
.ok-button {
  background-color: #42b983;
  color: white;
  border: none;
  padding: 10px 25px;
  border-radius: 5px;
  cursor: pointer;
}
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.3s ease;
}
.modal-fade-enter,
.modal-fade-leave-to {
  opacity: 0;
}
</style>