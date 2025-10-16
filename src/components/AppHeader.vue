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
<style lang="scss">
@import './AppHeader.scss'
</style>