<template>
  <div class="product-detail-view">
    <div v-if="!product">Đang tải sản phẩm...</div>
    <div v-else class="product-content">
      <img :src="product.image" :alt="product.title" class="product-image" />
      <div class="product-info">
        <h1>{{ product.title }}</h1>
        <p class="category">{{ product.category }}</p>
        <p class="price">${{ product.price }}</p>
        <p class="description">{{ product.description }}</p>
        <button @click="addToCart" class="add-to-cart-btn">Thêm vào giỏ hàng</button>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';
export default {
  props: ['id'],
  data() {
    return {
      product: null,
    };
  },
  computed: {
    ...mapGetters('products', ['getProductById']),
  },
  methods: {
    ...mapActions('cart', ['addProductToCart']),
    loadProduct() {
      const p = this.getProductById(this.id);
      if (p) {
        this.product = p;
      } else {
        this.$store.dispatch('products/fetchAll').then(() => {
          this.product = this.getProductById(this.id);
        });
      }
    },
    addToCart() {
      this.addProductToCart(this.getProductById(this.id));
      alert('Đã thêm vào giỏ hàng!');
    },
  },
  created() {
    this.loadProduct();
  },
  watch: {
    '$route.params.id': 'loadProduct',
  },
};
</script>

<style lang="scss" scoped>
  @import './ProductDetailView.scss';
</style>