<template>
  <div class="home-view">
    <AppFilters />
    <main class="product-grid">
      <div v-if="status === 'loading'">Đang tải...</div>
      <ProductCard v-for="product in filteredProducts" :key="product.id" :items="product" />
    </main>

   <router-link to="/cart" class="floating-cart-btn" v-if="cartItemCount >= 0">
      <span class="cart-icon">🛒</span>
      <span class="cart-count">{{ cartItemCount }}</span>
    </router-link>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
import ProductCard from '@/components/ProductCard.vue';
import AppFilters from '@/components/AppFilters.vue';

export default {
  components: { ProductCard, AppFilters },
  computed: {
    ...mapState('products', ['status']),
    ...mapGetters('products', ['filteredProducts']),
    ...mapGetters('cart', ['cartItemCount']),
  },
  created() {
    this.$store.dispatch('products/fetchAll');
  },
};
</script>
<style lang="scss" scoped>
@import './HomeView.scss';
</style>