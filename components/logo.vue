<template>
  <div>
    <NuxtLink class="logo" to="/">
      <img src="../assets/logo-stroke.svg" alt="logo">
      <span class="hidden md:inline">Markdown Reader</span>
    </NuxtLink>
  </div>
</template>

<style scoped>
.logo {
  height: 100%;
  display: inline-flex;
  align-items: center;
  vertical-align: bottom;
  font-size: 18px;
  font-family: 'Poppins Bold';
  color: var(--color-text);
}

img {
  width: 24px;
  margin-right: 6px;
}
</style>
