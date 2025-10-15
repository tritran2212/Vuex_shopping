<template>
  <div class="cart-page">
    <h1>Giỏ hàng của bạn</h1>
    <div v-if="cartItemCount === 0" class="empty-cart">
      <p>Chưa có sản phẩm nào trong giỏ hàng.</p>
      <router-link to="/" class="back-to-shop-btn">Quay lại mua sắm</router-link>
    </div>
    <div v-else>
      <div v-for="item in cartItems" :key="item.id" class="cart-item">
        <img :src="item.image" :alt="item.title" class="item-image" />
        <div class="item-details">
          <h4>{{ item.title }}</h4>
          <p class="item-price">Giá: ${{ item.price }}</p>
          <p class="item-quantity">Số lượng: {{ item.quantity }}</p>
        </div>
        <button @click="removeProductFromCart(item.id)" class="remove-btn">Xóa</button>
      </div>
      <div class="cart-summary">
        <h3>Tổng tiền: ${{ cartTotalPrice }}</h3>
        <button @click="handleCheckout" class="checkout-btn">Thanh toán</button>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'CartView',
  computed: {
    ...mapGetters('cart', ['cartItems', 'cartItemCount', 'cartTotalPrice']),
  },
  methods: {
    ...mapActions('cart', ['removeProductFromCart', 'checkout']),
    async handleCheckout() {
      await this.checkout();
      alert('Thanh toán thành công! Giỏ hàng của bạn đã được xóa.');
      this.$router.push('/');
    },
  },
};
</script>

<style scoped>
.cart-page {
  max-width: 800px;
  margin: 2rem auto;
  padding: 1rem;
}
.empty-cart {
  text-align: center;
  padding: 3rem;
  border: 1px dashed #ccc;
  border-radius: 8px;
}
.back-to-shop-btn {
  display: inline-block;
  margin-top: 1rem;
  padding: 0.75rem 1.5rem;
  background-color: #42b983;
  color: white;
  text-decoration: none;
  border-radius: 5px;
}
.cart-item {
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid #eee;
}
.item-image {
  width: 100px;
  height: 100px;
  object-fit: contain;
  margin-right: 1.5rem;
}
.item-details {
  flex-grow: 1;
}
.item-details h4 {
  margin: 0 0 0.5rem 0;
}
.remove-btn {
  background: #ff4d4d;
  color: white;
  border: none;
  padding: 0.5rem 0.75rem;
  border-radius: 5px;
  cursor: pointer;
}
.cart-summary {
  text-align: right;
  margin-top: 2rem;
}
.cart-summary h3 {
  margin-bottom: 1rem;
}
.checkout-btn {
  background: #007bff;
  color: white;
  padding: 0.75rem 2rem;
  border: none;
  font-size: 1.1em;
  border-radius: 5px;
  cursor: pointer;
}
</style>