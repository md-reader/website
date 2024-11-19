<template>
  <div class="px-[50px]">
    <h1 class=" text-5xl md:text-6xl !leading-[1.1] md:w-[700px] w-auto">
      Effortless <span class="text-primary">Markdown</span>
      Reading for Everyone!
    </h1>
    <p class="text-xl mt-6">Turn Markdown into beautifully rendered pages with this powerful browser extension.</p>
    <!-- <p>Support: Chrome/Firefox/Edge/Safari</p> -->

    <div class="mt-10 flex items-center">
      <span class="text-3xl mr-7 flex items-center poppins-semi-bold">
        Install<UIcon class="ml-1.5 animation-bounce" name="i-heroicons-arrow-right-20-solid"></UIcon>
      </span>
      <NuxtLink to="https://chromewebstore.google.com/detail/medapdbncneneejhbgcjceippjlfkmkg" class="text-center mr-8"
        target="_blank">
        <img class="inline-block h-[45px] mb-1.5" src="@/assets/chrome-web-store.svg" alt="chrome-web-store">
        <div>Chrome</div>
      </NuxtLink>
      <NuxtLink to="https://addons.mozilla.org/firefox/addon/markdown-reader-ext/" class="text-center" target="_blank">
        <img class="inline-block h-[45px] mb-1.5" src="@/assets/fx-addon.svg" alt="fx-addon">
        <div>Firefox</div>
      </NuxtLink>
    </div>
  </div>

  <div class="mt-14">
    <img v-show="!isDark" class="block dark:opacity-95 drop-shadow-lg" draggable="false" src="/images/banner-day.png" />
    <img v-show="isDark" class="block dark:opacity-95 drop-shadow-lg" draggable="false"
      src="/images/banner-night.png" />
  </div>
  <Features></Features>
  <reviews></reviews>
  <faq></faq>
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
