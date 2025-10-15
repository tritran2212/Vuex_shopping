<template>
    <header class="app-header">
        <div class="logo">Mini Shop</div>
        <nav>
            <router-link to="/">Trang chủ</router-link>
            <router-link to="/cart">Cart</router-link>
        </nav>
        <div class="search-bar">
            <input type="text" v-model="search" placeholder="Tìm Kiếm Sản Phẩm...">
        </div>
    </header>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';
export default {
    data() {
        return {
            search: '',
            debounce: null,
        }
    },
    computed: {
        ...mapGetters('cart', ['cartItemCount']),
    },
    methods: {
        ...mapActions('products', ['updateSearchQuery']),
    },
    watch: {
        search(newQuery) {
            clearTimeout(this.debounce);
            this.debounce = setTimeout(() => {
                this.updateSearchQuery(newQuery);
            }, 500);
        },
    },
};
</script>
<style scoped>
.app-header { 
    display: flex; 
    justify-content: space-between; 
    align-items: center; 
    padding: 1rem 2rem; 
    background: #fff; 
    border-bottom: 1px solid #eee; 
}
.logo { 
    font-weight: bold; 
    font-size: 1.5rem; 
}
nav a { 
    margin: 0 1rem; 
    text-decoration: none; 
    color: #333; 
}
nav a.router-link-exact-active { 
    color: #42b983;
}
.search-bar input { 
    padding: 0.5rem; 
    border: 1px solid #ccc; 
    border-radius: 4px; 
}
</style>