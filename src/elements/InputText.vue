<script setup>
defineProps({ modelValue: String })
defineEmits(['update:modelValue'])
</script>

<template>
  <input
    type="text"
    class="input text"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>

<style scoped>
@import '../assets/input.css';
.text {
}
</style>
