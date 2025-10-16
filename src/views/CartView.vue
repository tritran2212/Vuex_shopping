
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
        <button @click="openConfirmation" class="checkout-btn">Thanh toán</button>
      </div>
    </div>
    <AppModal
      :show="showConfirmModal"
      title="Xác nhận thanh toán"
      @close="cancelCheckout"
    >
      <p>Bạn có chắc chắn muốn thanh toán và hoàn tất đơn hàng này không?</p>
      <template v-slot:footer>
        <div class="confirmation-buttons">
          <button @click="cancelCheckout" class="cancel-button">Hủy</button>
          <button @click="confirmAndCheckout" class="confirm-button">Xác nhận</button>
        </div>
      </template>
    </AppModal>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';
import AppModal from '@/components/AppModal.vue'; 
export default {
  name: 'CartView',
  components: {
    AppModal,
  },
  data() {
    return {
      showConfirmModal: false,
    };
  },
  computed: {
    ...mapGetters('cart', ['cartItems', 'cartItemCount', 'cartTotalPrice']),
  },
  methods: {
    ...mapActions('cart', ['removeProductFromCart', 'checkout']),

    openConfirmation() {
      this.showConfirmModal = true;
    },
    cancelCheckout() {
      this.showConfirmModal = false;
    },
    async confirmAndCheckout() {
      await this.checkout();
      this.showConfirmModal = false;
      this.$router.push('/');
    },
  },
};
</script>
<style lang="scss" scoped>
  @import './CartView.scss';
</style>