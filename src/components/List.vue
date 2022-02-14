<script setup>
import { ref } from 'vue'
import { storeToRefs } from 'pinia'

import { useList } from '../stores/list.js'
import useFilter from '../composables/filter.js'
import Button from '../elements/Button.vue'
import InputText from '../elements/InputText.vue'
import Item from './Item.vue'

const list = useList()
const { all } = storeToRefs(list)
const { term, filter } = useFilter(all)
const title = ref('')

function add () {
  list.add({ name: title.value })
  title.value = ''
}
</script>

<template>
  <div class="list">
    <table class="table">
      <thead class="head">
        <tr class="row">
          <th class="title">Id</th>
          <th class="title">Name</th>
          <th class="title">Active</th>
          <th class="title">Link</th>
          <th class="title">Actions</th>
        </tr>
      </thead>
      <tbody class="body">
        <Item
          v-for="(item, index) in filter"
          :key="item.id"
          :index="index"
          :data="item"
        />
      </tbody>
    </table>
    <div class="info">
      <div class="left">
        <InputText
          placeholder="filter"
          class="filter"
          :modelValue="term"
          @update:modelValue="value => (term = value)"
        />
      </div>
      <div class="right">
        <InputText
          placeholder="name"
          class="name"
          :modelValue="title"
          @update:modelValue="value => (title = value)"
          @keydown.enter="add"
        />
        <Button class="add" @click="add">add</Button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.list {
  width: 100%;
}
.table {
  width: 100%;
  padding: 1rem;
  border-spacing: 0.125rem;
}
.row {
  text-align: center;
}
.row:hover {
  background: rgba(63, 63, 63, 1);
}
.title {
  padding: 0.25rem;
  border-radius: 0.125rem;
  font-weight: 700;
  background: rgba(63, 63, 63, 1);
}
.body {
  background: rgba(47, 47, 47, 1);
}
.info {
  padding: 1rem;
}
.left,
.right {
  display: inline-block;
  width: 50%;
}
.left {
  text-align: left;
}
.right {
  text-align: right;
}
.name {
  margin-right: 0.5rem;
}
.add {
  background: rgba(0, 159, 63, 1);
}
.add:hover,
.add:focus,
.add:active {
  background: rgba(0, 191, 63, 1);
}
</style>
