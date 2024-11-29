<template>
  <NuxtLink class="flex items-center gap-2 text-lg hover:text-inherit" to="/">
    <img v-show="isDark" src="/logo-light.svg" alt="Markdown Reader Logo" class="w-6">
    <img v-show="!isDark" src="/logo.svg" alt="Markdown Reader Logo" class="w-6">
    <h1 v-show="$props.text" class="poppins-bold">Markdown Reader</h1>
  </NuxtLink>
</template>

<script setup lang="ts">
defineProps({
  text: {
    type: Boolean,
    default: true
  }
})

const colorMode = useColorMode()
const isDark = computed(() => colorMode.value === 'dark')
</script>
