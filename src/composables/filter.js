import { ref, computed } from 'vue'

export default function useFilter (list) {
  const term = ref('')
  const filter = computed(() => {
    return list.value.filter(entry => {
      const text = term.value.toLowerCase()
      const name = entry.name.toLowerCase()
      const content = entry.content.toLowerCase()
      return name.includes(text) || content.includes(text)
    })
  })

  return {
    term,
    filter
  }
}
