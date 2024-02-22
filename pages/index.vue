<template>
  <div class="content">
    <h1>Make reading <b>Markdown</b> easier!</h1>
    <p>Extremely fast rendering, multi-plugin, dual-theme markdown reading extension.</p>
    <!-- <p>Support: Chrome/Firefox/Edge/Safari</p> -->
    <div class="downloads">
      <NuxtLink to="https://chromewebstore.google.com/detail/medapdbncneneejhbgcjceippjlfkmkg" target="_blank">
        <img class="chrome-web-store inline-block dark:opacity-90" src="@/assets/chrome-web-store.png"
          alt="chrome-web-store">
      </NuxtLink>
    </div>
    <div class="banner">
      <img :src="isDark ? darkBanner : lightBanner" alt="">
    </div>
  </div>
</template>

<script setup lang="ts">
import lightBanner from '@/assets/banner-light.png'
import darkBanner from '@/assets/banner-dark.png'
const colorMode = useColorMode()
const isDark = computed(() => colorMode.value === 'dark')

</script>

<style scoped>
.content {
  text-align: center;
}

h1 {
  line-height: 1.2;
  font-weight: bold;
  font-size: 46px;
  margin-bottom: 10px;
}

b {
  color: var(--color-primary)
}

p {
  font-size: 16px;
  color: var(--color-desc);
}

.downloads {
  margin-top: 50px;
}

.chrome-web-store {
  width: 200px;
  filter: drop-shadow(2px 4px 6px rgba(0, 0, 0, 0.05))
}

.banner img {
  max-width: 100%;
}
</style>
