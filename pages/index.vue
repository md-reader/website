<template>
  <div class="content">
    <h1>Make reading <b>Markdown</b> easier!</h1>
    <p>Extremely fast rendering, multi-plugin, dual-theme markdown reading extension.</p>
    <!-- <p>Support: Chrome/Firefox/Edge/Safari</p> -->
    <div class="downloads mt-16 flex items-center justify-center">
      <span class="text-3xl mr-8 -ml-40 items-center hidden md:flex">
        Install<UIcon class="ml-1 animation-bounce" name="i-heroicons-arrow-right-20-solid"></UIcon>
      </span>
      <NuxtLink to="https://chromewebstore.google.com/detail/medapdbncneneejhbgcjceippjlfkmkg" class="text-center mr-7"
        target="_blank">
        <img class="download-logo mb-1" src="@/assets/chrome-web-store.svg" alt="chrome-web-store">
        <div>Chrome</div>
      </NuxtLink>
      <NuxtLink to="https://addons.mozilla.org/firefox/addon/markdown-reader-ext/" class="text-center" target="_blank">
        <img class="download-logo mb-1 fx" src="@/assets/fx-addon.svg" alt="fx-addon">
        <div>Firefox</div>
      </NuxtLink>
    </div>
    <div class="banner mt-2">
      <UCarousel v-slot="{ item }" :items="items" :ui="{ item: 'basis-full' }" class="rounded-lg overflow-hidden"
        arrows>
        <img :src="item" class="w-full" draggable="false">
      </UCarousel>
    </div>
  </div>
</template>

<script setup lang="ts">
const items = [
  `../assets/banner-assets/banner-light-1.png`,
  `../assets/banner-assets/banner-light-2.png`,
  `../assets/banner-assets/banner-light-3.png`,
  `../assets/banner-assets/banner-light-4.png`,
  `../assets/banner-assets/banner-light-5.png`,
]
</script>

<style scoped>
.content {
  text-align: center;
}

h1 {
  line-height: 1.2;
  font-weight: bold;
  font-size: 48px;
  margin-bottom: 10px;
}

b {
  color: var(--color-primary)
}

p {
  font-size: 17px;
  color: var(--color-desc);
}

.download-logo {
  height: 45px;
  display: inline-block;
}

.fx {
  height: 48px;
  margin-top: -3px;
}

.banner img {
  max-width: 100%;
}

.animation-bounce {
  animation: bounce 1s infinite;
}

@keyframes bounce {

  0%,
  100% {
    transform: none;
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }

  50% {
    transform: translateX(25%);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
}
</style>
