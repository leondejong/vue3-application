<script setup>
defineProps({
  title: String
})
</script>

<template>
  <header class="header">
    <h1 class="title">{{ title }}</h1>
  </header>
</template>

<style scoped>
.header {
  width: 100%;
}
.title {
  text-align: center;
  font-size: 4rem;
}
</style>
