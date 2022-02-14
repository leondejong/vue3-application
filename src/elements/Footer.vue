<script setup>
const text = `©${new Date().getFullYear()}`
</script>

<template>
  <footer class="footer">{{ text }}</footer>
</template>

<style scoped>
.footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  padding: 1rem 2rem 1rem 1rem;
  text-align: right;
}
</style>
