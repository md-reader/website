<script setup lang="ts">
const browsers = reactive([
  {
    name: 'Chrome',
    title: 'Chrome Web Store',
    url: 'https://chromewebstore.google.com/detail/medapdbncneneejhbgcjceippjlfkmkg',
    current: false,
    class: [
      'bg-[#E8F5E9]',
      'hover:bg-[#DFF0E5]',
      'dark:bg-[#1E3F33]',
      'dark:hover:bg-[#295542]'
    ],
  },
  {
    name: 'Firefox',
    title: 'Firefox Add-ons',
    url: 'https://addons.mozilla.org/firefox/addon/markdown-reader-ext',
    current: false,
    class: [
      'bg-[#FFEBE6]',
      'hover:bg-[#f9e5e0]',
      'dark:bg-[#4A1F3F]',
      'dark:hover:bg-[#5D2852]'
    ],
  },
  {
    name: 'Edge',
    title: 'Edge Add-ons',
    nonsupport: true,
    current: false,
    class: [
      'bg-[#E4EEF8]',
      // 'hover:bg-[#E0EDFF]',
      'dark:bg-[#1F2A35]',
      // 'dark:hover:bg-[#2B507A]'
    ],
  },
  {
    name: 'Safari',
    title: 'Safari Extensions',
    nonsupport: true,
    current: false,
    class: [
      'bg-[#F1F3F6]',
      // 'hover:bg-[#E3E6EC]',
      'dark:bg-[#333A44]',
      // 'dark:hover:bg-[#444C59]'
    ],
  },
])

function detectBrowser() {
  const userAgent = navigator.userAgent.toLowerCase();
  if (userAgent.includes("chrome") && !userAgent.includes("edge") && !userAgent.includes("opr")) {
    return "chrome";
  } else if (userAgent.includes("firefox")) {
    return "firefox";
  } else if (userAgent.includes("safari") && !userAgent.includes("chrome")) {
    return "safari";
  } else if (userAgent.includes("edg")) {
    return "edge";
  }
  return null;
}


onMounted(() => {
  // const browser = detectBrowser()
  // if (browser) {
  //   const index = browsers.findIndex((item) => {
  //     return !item.nonsupport && item.name.toLowerCase() === browser.toLowerCase()
  //   })
  //   const target = browsers[index]
  //   target.current = true
  // }
})
</script>

<template>
  <h2 class="mt-0 text-center">Get started in seconds!</h2>
  <p class="desc">Install Markdown Reader in your favorite browser</p>

  <div class="install-wrap">
    <template v-for="item in browsers" :key="item.name">
      <NuxtLink v-if="!item.nonsupport" :to="item.url" class="card" :class="item.class" :data-current="item.current"
        target="_blank">
        <h3 class="poppins-semi-bold title">{{ item.title }}</h3>
        <span class="poppins-semi-bold link">
          Add to {{ item.name }}
          <UIcon name="i-mdi-arrow-right" class="duration-100 text-xl"></UIcon>
        </span>
        <img class="browser-icon" draggable="false" :src="`/images/${item.name}.png`" alt="">
      </NuxtLink>
      <div v-else class="card disabled" :class="item.class" :data-current="item.current">
        <h3 class="poppins-semi-bold title">{{ item.title }}</h3>
        <span class="poppins-semi-bold link !mr-0 opacity-30 dark:opacity-20">
          Coming soon
        </span>
        <img class="browser-icon grayscale !opacity-30" draggable="false" :src="`/images/${item.name}.png`" alt="">
      </div>
    </template>
  </div>

  <div class="max-w-[800px] mt-10 m-auto px-2 flex items-center justify-center gap-1 opacity-50 -mb-16">
    <UIcon name="i-mdi-information-outline text-base"></UIcon>
    Support for Safari and Edge is on the way!
  </div>

  <Reviews></Reviews>
</template>

<style scoped>
.install-wrap {
  @apply m-auto max-w-[800px] gap-y-6 grid grid-rows-1 grid-cols-1 mt-24;
  @apply md:gap-y-8 md:gap-x-12 md:grid-rows-2 md:grid-cols-2;
}

.card {
  @apply break-inside-avoid shadow ring-1 ring-gray-200 dark:ring-zinc-800 rounded-2xl select-none;
  @apply flex justify-between items-center overflow-hidden relative h-[18] py-6 px-7 transition;
  @apply md:block md:h-32 md:py-6;
}

.card[data-current="true"] {
  @apply ring-4;
}

.title {
  @apply relative z-[1] text-xl md:text-[22px] leading-none text-[--color-text] text-right;
}

.link {
  @apply md:absolute bottom-5 right-8 flex items-center gap-1 leading-none text-base md:text-lg transition-[margin] duration-100 text-[--color-text];
}

.browser-icon {
  @apply absolute -bottom-8 md:-bottom-6 md:-left-8 -left-8 w-40 inline-block ml-1.5 transition-[width] md:opacity-80 opacity-60;
}

.card:not(.disabled):hover {
  @apply hover:scale-105;
}

.card:not(.disabled):hover .browser-icon {
  @apply w-44;
}

.card:not(.disabled):hover .link .i-mdi-arrow-right {
  @apply ml-0.5;
}
</style>
