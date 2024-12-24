<template>
  <div class="flex justify-end">
    <UButton v-show="colorMode.unknown" icon="i-mdi-loading" :color="null" variant="link" class="animate-spin" />
    <UButton v-show="!colorMode.unknown && isDark" icon="i-heroicons-moon-20-solid" :color="null" variant="link"
      aria-label="Theme" @click="isDark = !isDark" />
    <UButton v-show="!colorMode.unknown && !isDark" icon="i-heroicons-sun-20-solid" :color="null" variant="link"
      aria-label="Theme" @click="isDark = !isDark" />
    <UButton icon="i-ri-bluesky-fill" :color="null" variant="link" aria-label="Bluesky"
      to="https://bsky.app/profile/markdownreader.bsky.social" target="_blank_Bluesky" />
    <UButton icon="i-ri-twitter-x-fill" :color="null" variant="link" aria-label="Twitter" to="https://x.com/BenerHero"
      target="_blank_Twitter" />
    <UButton icon="i-mdi-github" :color="null" variant="link" aria-label="GitHub"
      to="https://github.com/md-reader/md-reader" target="_blank_GitHub" />
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
