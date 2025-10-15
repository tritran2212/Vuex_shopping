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
<style scoped>
.home-view {
  display: grid;
  grid-template-columns: 200px 1fr;
  gap: 2rem;
  padding: 2rem;
}
.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 1.5rem;
}
.floating-cart-btn {
  position: fixed;
  bottom: 30%; 
  right: 0;     
  background-color: #42b983;
  color: white;
  padding: 12px 18px;
  border-top-left-radius: 30px; 
  border-bottom-left-radius: 30px; 
  box-shadow: -3px 3px 12px rgba(0, 0, 0, 0.2);
  text-decoration: none;
  z-index: 100;
  display: flex;
  align-items: center;
  gap: 8px; 
  transition: transform 0.2s ease-in-out;
}
.floating-cart-btn:hover {
  transform: translateX(-5px); 
}
.cart-icon {
  font-size: 1.8rem; 
}
.cart-count {
  background-color: #ff4d4d; 
  border-radius: 50%; 
  width: 26px;
  height: 26px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.9rem;
  font-weight: bold;
}
</style>