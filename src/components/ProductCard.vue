<template>
  <div class="product-card">
    <router-link :to="{ name: 'ProductDetail', params: { id: items.id } }">
      <img :src="items.image" :alt="items.title" class="product-image" />
      <h3 class="product-title">{{ items.title }}</h3>
    </router-link>
    <p class="product-price">${{ items.price }}</p>
    <button @click="addToCart" class="add-to-cart-btn">Thêm vào giỏ</button>
  </div>
</template>

<script>
export default {
  props: {
    items: { type: Object, required: true },
  },
  methods: {
    addToCart() {
      this.$store.dispatch('cart/addProductToCart', this.items);
      alert('Đã thêm sản phẩm vào giỏ hàng!');
    },
  },
};
</script>

<style scoped>
.product-card { 
  border: 1px solid #ddd; 
  padding: 1rem; 
  text-align: center; 
}
.product-image { 
  height: 120px; 
  max-width: 50%; 
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
</style>