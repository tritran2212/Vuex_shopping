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
<style lang="scss" scoped>
@import './ProductCard.scss';
</style>
