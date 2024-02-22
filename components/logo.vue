<template>
  <NuxtLink class="logo" to="/">
    <img src="../assets/logo-stroke.svg" alt="logo">
    <span class="hidden md:inline font-bold">Markdown Reader</span>
  </NuxtLink>
</template>

<style scoped>
.logo {
  display: flex;
  align-items: center;
  font-size: 18px;
  font-weight: bold;
  color: var(--color-text);
}

img {
  width: 24px;
  margin-right: 6px;
}
</style>
