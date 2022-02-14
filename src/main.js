import { createApp, watch } from 'vue'
import { createPinia } from 'pinia'
import { createRouter, createWebHistory } from 'vue-router'

import Application from './Application.vue'
import List from './components/List.vue'
import Detail from './components/Detail.vue'
import Edit from './components/Edit.vue'
import NotFound from './elements/NotFound.vue'

const persist = ({ store }) => {
  const key = 'vue-list'
  const data = localStorage.getItem(key)
  if (data) {
    store.$patch(JSON.parse(data))
  }
  watch(
    store.$state,
    state => {
      localStorage.setItem(key, JSON.stringify(state))
    },
    { deep: true }
  )
}

const routing = {
  history: createWebHistory(),
  routes: [
    { path: '/', alias: '/list', name: 'list', component: List },
    { path: '/detail/:id(\\d+)', name: 'detail', component: Detail },
    { path: '/edit/:id(\\d+)', name: 'edit', component: Edit },
    { path: '/:pathMatch(.*)*', name: 'not-found', component: NotFound }
  ]
}

const app = createApp(Application)
const pinia = createPinia()
const router = createRouter(routing)

pinia.use(persist)

app.use(pinia)
app.use(router)

const vm = app.mount('#application')

export default vm
