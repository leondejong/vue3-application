<template>
  <button type="button" class="input button">
    <slot></slot>
  </button>
</template>

<style scoped>
@import '../assets/input.css';
.button {
  background: rgba(0, 127, 223, 1);
  cursor: pointer;
}
.button:hover,
.button:active {
  background: rgba(0, 159, 255, 1);
}
</style>
