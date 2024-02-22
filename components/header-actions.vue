<template>
  <div class="flex justify-end">
    <UButton :icon="isDark ? 'i-heroicons-moon-20-solid' : 'i-heroicons-sun-20-solid'" :color="null" variant="link"
      aria-label="Theme" @click="isDark = !isDark" />
    <UButton icon="i-mdi-github" :color="null" variant="link" aria-label="GitHub"
      to="https://github.com/md-reader/markdown-reader" target="_blank" />
  </div>
</template>

<script setup lang="ts">
const colorMode = useColorMode()
const isDark = computed({
  get() {
    return colorMode.value === 'dark'
  },
  set() {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
  }
})

</script>

<style scoped>
a:hover {
  color: inherit;
}
</style>
