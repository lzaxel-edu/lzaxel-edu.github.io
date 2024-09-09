<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark({
  selector: 'html',
  attribute: 'color-scheme',
  valueDark: 'dark',
  valueLight: 'light',
})
const toggleDark = useToggle(isDark)
</script>

<template>
  <div class="change-theme-button">
    <span @click="toggleDark()" class="material-symbols-outlined change-theme-button__icon">
      {{ isDark ? 'dark_mode' : 'light_mode'}}
    </span>
  </div>
</template>

<style scoped>
.change-theme-button {
  cursor: pointer;
  color: #000;
  background: #fff;
  padding: 0.5rem;
  border-radius: 100%;
  transition: all 0.3s ease;
  height: 40px;
  width: 40px;
}

.change-theme-button:where([color-scheme="dark"], [color-scheme="dark"] *) {
  background: #000;
  color: #fff;
}
.change-theme-button__icon {
  font-size: 1.5rem;
  user-select: none;
}
</style>