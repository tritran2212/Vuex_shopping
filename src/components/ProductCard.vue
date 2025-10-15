<template>
  <div class="product-card">
    <router-link :to="{ name: 'ProductDetail', params: { id: items.id } }">
      <img :src="items.image" :alt="items.title" class="product-image" />
      <h3 class="product-title">{{ items.title }}</h3>
    </router-link>
    <p class="product-price">${{ items.price }}</p>
    <button @click="handleAddToCart" class="add-to-cart-btn">Thêm vào giỏ</button>
    <transition name="dropdown-fade">
      <div v-if="showNotification" class="notification-popup">
        <p>✅ Đã thêm sản phẩm vào giỏ hàng!</p>
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  props: {
    items: { type: Object, required: true },
  },
  data() {
    return {
      showNotification: false,
    };
  },
  methods: {
    handleAddToCart() {
      this.$store.dispatch('cart/addProductToCart', this.items);
      this.showNotification = true;
      setTimeout(() => {
        this.showNotification = false;
      }, 1500);
    },
  },
};
</script>
<style scoped>
.product-card {
  border: 1px solid #ddd;
  padding: 1rem;
  text-align: center;
  position: relative;
  overflow: hidden; 
}
.product-image {
  height: 120px;
  max-width: 100%; 
  object-fit: contain;
}
.product-title {
  font-size: 1rem;
  height: 3em;
  overflow: hidden;
}
a {
  text-decoration: none;
  color: inherit;
}
.add-to-cart-btn {
  background: #42b983;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
}
.notification-popup {
  position: absolute;
  top: 0;
  left: 5%; 
  width: 90%; 
  background-color: #42b983; 
  color: white;
  padding: 12px;
  text-align: center;
  border-radius: 0 0 8px 8px; 
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); 
  z-index: 10; 
}
.notification-popup p {
  margin: 0;
}
.dropdown-fade-enter-active, 
.dropdown-fade-leave-active {
  transition: all 0.4s ease-out; 
}
.dropdown-fade-enter, 
.dropdown-fade-leave-to {
  opacity: 0;
  transform: translateY(-100%); 
}
</style>