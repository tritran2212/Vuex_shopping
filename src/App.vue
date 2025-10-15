<template>
  <div id="app">
    <AppHeader />
    <main class="main-content">
      <router-view />
    </main>
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue';
export default {
  components: { AppHeader },
};
</script>

<style>
/* CSS toàn cục ở đây hoặc import từ assets/styles.css */
body { margin: 0; font-family: sans-serif; }
.main-content { padding: 0 2rem; }
</style>