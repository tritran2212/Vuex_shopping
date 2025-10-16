<template>
  <div class="filters">
    <h4>Danh mục</h4>
    <ul>
      <li @click="selectCategory('all')" :class="{ active: selectedCategory === 'all' }">Tất cả</li>
      <li v-for="category in categories" :key="category"
          @click="selectCategory(category)"
          :class="{ active: selectedCategory === category }">
        {{ category }}
      </li>
    </ul>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex';
export default {
  computed: {
    ...mapState('products', {
       categories: state => state.categories,
       selectedCategory: state => state.selectedCategory,
    }),
  },
  methods: {
    ...mapActions('products', ['updateSelectedCategory']),
       selectCategory(category) {
       this.updateSelectedCategory(category);
    },
  },
};
</script>
<style lang="scss" scoped>
  @import './AppFilters.scss';
</style>