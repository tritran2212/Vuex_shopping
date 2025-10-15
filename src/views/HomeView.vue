<template>
  <div class="home-view">
    <AppFilters />
    <main class="product-grid">
      <div v-if="status === 'loading'">Đang tải...</div>
      <ProductCard v-for="product in filteredProducts" :key="product.id" :items="product" />
    </main>
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
</style>