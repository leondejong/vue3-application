<script setup>
import Header from '../elements/Header.vue'
import Footer from '../elements/Footer.vue'
import Main from '../elements/Main.vue'
</script>

<template>
  <div class="layout">
    <Header title="Physicists" />
    <Main />
    <Footer />
  </div>
</template>

<style scoped>
.layout {
  display: flow-root;
  height: 100%;
  overflow: auto;
  background: rgba(31, 31, 31, 1);
  color: rgba(255, 255, 255, 1);
}
</style>
