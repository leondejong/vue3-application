import { defineStore } from 'pinia'

import { id, data } from './data.js'

export const useList = defineStore('list', {
  state: () => ({
    id,
    list: data
  }),
  getters: {
    all (state) {
      return state.list
    },
    active (state) {
      return state.list.filter(item => item.active)
    },
    inactive (state) {
      return state.list.filter(item => !item.active)
    }
  },
  actions: {
    increment () {
      return (this.id = this.id + 1)
    },
    get (id) {
      return this.list.find(item => item.id === id)
    },
    add (entry) {
      const init = { name: '', link: '', content: '', active: false }
      this.list = [...this.list, { id: this.increment(), ...init, ...entry }]
    },
    update (id, entry) {
      this.list = this.list.map(item =>
        item.id === id ? { ...item, ...entry } : item
      )
    },
    remove (id) {
      this.list = this.list.filter(item => item.id !== id)
    }
  }
})
