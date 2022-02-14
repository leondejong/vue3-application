<script setup>
import { useRoute } from 'vue-router'

import { useList } from '../stores/list.js'
import NotFound from '../elements/NotFound.vue'

const route = useRoute()
const list = useList()
const data = list.get(Number(route.params.id))
const isEmpty = Object.keys(data).length === 0
</script>

<template>
  <section class="detail">
    <NotFound v-if="isEmpty" />
    <div v-else>
      <h3 class="title">{{ data.name }}</h3>
      <div class="body">
        <a v-bind:href="data.link" class="link article">{{ data.link }}</a>
        <p class="text">{{ data.content }}</p>
        <p class="active">Active: {{ data.active }}</p>
      </div>
    </div>
    <div class="nav">
      <router-link class="link list" to="/">List</router-link>
    </div>
  </section>
</template>

<style scoped>
.detail {
  width: 100%;
}
.title {
  text-align: center;
  font-size: 2rem;
}
.body {
  margin: 0 15% 4rem 15%;
  white-space: pre-wrap;
}
.nav {
  position: fixed;
  right: 0;
  bottom: 0;
  width: 100%;
  padding: 1rem 1rem 1rem 2rem;
  text-align: left;
  z-index: 1;
}
.link {
  color: rgba(255, 255, 255, 1);
}
</style>
