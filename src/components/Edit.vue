<script setup>
import { useRoute } from 'vue-router'

import { useList } from '../stores/list.js'
import InputText from '../elements/InputText.vue'
import TextArea from '../elements/TextArea.vue'
import NotFound from '../elements/NotFound.vue'

const route = useRoute()
const list = useList()
const data = list.get(Number(route.params.id))
const isEmpty = Object.keys(data).length === 0

function update (name, value) {
  data[name] = value
  list.update(data.id, data)
}
</script>

<template>
  <section class="edit">
    <NotFound v-if="isEmpty" />
    <div v-else>
      <h3 class="title">{{ data.name }}</h3>
      <div class="body">
        <div class="row">
          ID:
          {{ data.id }}, Active:
          <input
            type="checkbox"
            class="input checkbox active"
            :checked="data.active"
            @change="event => update('active', event.target.checked)"
          />
        </div>
        <InputText
          placeholder="name"
          class="input text name"
          :modelValue="data.name"
          @update:modelValue="value => update('name', value)"
        />
        <InputText
          placeholder="link"
          class="input text link"
          :modelValue="data.link"
          @update:modelValue="value => update('link', value)"
        />
        <TextArea
          placeholder="content"
          class="input textarea field content"
          :modelValue="data.content"
          @update:modelValue="value => update('content', value)"
        />
      </div>
    </div>
    <div class="nav">
      <router-link class="link list" to="/">List</router-link>
    </div>
  </section>
</template>

<style scoped>
.edit {
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
.input.text,
.input.textarea {
  width: 100%;
  margin-top: 1rem;
}
.input.textarea {
  height: 24rem;
  font-weight: 400;
  resize: none;
  border: 1px solid rgba(47, 47, 47, 1);
}
.input.textarea:hover,
.input.textarea:focus,
.input.textarea.active {
  background: rgba(47, 47, 47, 1);
  border: 1px solid rgba(255, 255, 255, 0.5);
}
.input.checkbox {
  margin-bottom: 0.25rem;
  vertical-align: middle;
}
</style>
