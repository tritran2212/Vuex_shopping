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
<style scoped>
.filters { 
  padding-right: 2rem; 
}
ul { 
  list-style: none; 
  padding: 0; 
}
li { 
  padding: 0.5rem 0; 
  cursor: pointer; 
  text-transform: capitalize; 
  transition:  all .3s;
}
li:hover{
  color: #42b983; 
}
li.active { 
  color: #42b983; 
  font-weight: bold; 
}
</style>