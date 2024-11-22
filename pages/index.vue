<template>
  <div class="px-[50px]">
    <h1 class="text-5xl xl:text-6xl !leading-[1.1] md:w-[700px] w-auto">
      Effortless <span class="logo-text">Markdown</span>
      Reading for Everyone!
    </h1>
    <p class="text-lg xl:text-xl mt-6">Turn Markdown into beautifully rendered pages with this powerful browser
      extension.</p>

    <div class="mt-10 flex items-center">
      <span class="text-2xl xl:text-3xl mr-7 flex items-center poppins-semi-bold">
        Install<UIcon class="ml-1.5 animation-bounce-right" name="i-heroicons-arrow-right-20-solid"></UIcon>
      </span>
      <NuxtLink to="https://chromewebstore.google.com/detail/medapdbncneneejhbgcjceippjlfkmkg" class="text-center mr-8"
        target="_blank">
        <img class="inline-block h-[45px] mb-2.5" src="@/assets/chrome-web-store.svg" alt="chrome-web-store">
        <div class="leading-none">Chrome</div>
      </NuxtLink>
      <NuxtLink to="https://addons.mozilla.org/firefox/addon/markdown-reader-ext/" class="text-center" target="_blank">
        <img class="inline-block h-[45px] mb-2.5" src="@/assets/firefox.png" alt="fx-addon">
        <div class="leading-none">Firefox</div>
      </NuxtLink>
    </div>
  </div>

  <div class="mt-14">
    <img v-show="!isDark" class="block dark:opacity-95 drop-shadow-lg" draggable="false" src="/images/banner-day.png" />
    <img v-show="isDark" class="block dark:opacity-95 drop-shadow-lg" draggable="false"
      src="/images/banner-night.png" />
  </div>
  <Features></Features>
  <Reviews></Reviews>
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
.animation-bounce-right {
  animation: bounce-right 1s infinite;
}

.logo-text {
  @apply text-primary bg-clip-text;
  -webkit-text-fill-color: rgba(0, 0, 0, 0);
  background-image: linear-gradient(330deg, #7294ff, #a474f7);
}

@keyframes bounce-right {

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
