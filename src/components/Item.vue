<script setup>
import { useRouter } from 'vue-router'
import { useList } from '../stores/list.js'
import Button from '../elements/Button.vue'

defineProps({
  data: Object
})

const router = useRouter()
const list = useList()
const link = id => ({ name: 'detail', params: { id } })
</script>

<template>
  <tr class="row">
    <td class="data">{{ data.id }}</td>
    <td class="data">{{ data.name }}</td>
    <td class="data">
      <input
        type="checkbox"
        class="input checkbox active"
        :checked="data.active"
        @change="
          event => list.update(data.id, { active: event.target.checked })
        "
      />
    </td>
    <td class="data">
      <router-link class="link" :to="link(data.id)">detail</router-link>
    </td>
    <td class="data">
      <Button
        class="edit"
        @click="router.push({ name: 'edit', params: { id: data.id } })"
        >edit</Button
      >
      <Button class="delete" @click="list.remove(data.id)">delete</Button>
    </td>
  </tr>
</template>

<style scoped>
.data {
  padding: 0.25rem;
  border-radius: 0.125rem;
}
.link {
  color: rgba(255, 255, 255, 1);
}
.edit {
  margin-right: 0.5rem;
}
.delete {
  background: rgba(223, 31, 0, 1);
}
.delete:hover,
.delete:focus,
.delete:active {
  background: rgba(255, 31, 0, 1);
}
</style>
