<script setup>
defineProps({ modelValue: String })
defineEmits(['update:modelValue'])
</script>

<template>
  <textarea
    class="input textarea field"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>

<style scoped>
@import '../assets/input.css';
.textarea {
}
</style>
