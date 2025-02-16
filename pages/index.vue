<template>
  <div class="px-8 xs:px-[50px]">
    <h1 data-aos="fade-in-up" data-aos-offset="0"
      class="text-[40px] xs:text-5xl xl:text-6xl !leading-[1.1] md:w-[700px] w-auto">
      Effortless <span class="logo-text">Markdown</span>
      Reading for Everyone!
    </h1>
    <p data-aos="fade-in-up" data-aos-offset="0" data-aos-delay="250" class="text-base xs:text-lg xl:text-xl mt-6">
      Turn Markdown into
      beautifully rendered pages with this powerful
      browser extension.</p>

    <div class="mt-6 xs:mt-10 flex items-center">
      <NuxtLink data-aos="fade-in" data-aos-offset="0" data-aos-delay="400" to="/install"
        class="install-btn poppins-semi-bold">
        Install
        <UIcon class="ml-1.5 animation-bounce-right" name="i-heroicons-arrow-right-20-solid" />
      </NuxtLink>
      <NuxtLink data-aos="fade-left" data-aos-offset="0" data-aos-delay="600"
        to="https://chromewebstore.google.com/detail/medapdbncneneejhbgcjceippjlfkmkg"
        class="hidden xs:inline-block text-center mr-5 sm:mr-8 -mb-2" target="_blank_Chrome">
        <img class="inline-block h-[35px] sm:h-[45px] mb-2.5" src="/images/Chrome.png" alt="chrome-web-store">
        <div class="leading-none text-sm sm:text-[15px]">Chrome</div>
      </NuxtLink>
      <NuxtLink data-aos="fade-left" data-aos-offset="0" data-aos-delay="650"
        to="https://microsoftedge.microsoft.com/addons/detail/markdown-reader/djnplooklihmkcioemdjfcednfkpiodc"
        class="hidden xs:inline-block text-center mr-6 sm:mr-8 -mb-2" target="_blank_Edge">
        <img class="inline-block h-[35px] sm:h-[45px] mb-2.5" src="/images/Edge.png" alt="edge-addons">
        <div class="leading-none text-sm sm:text-[15px]">Edge</div>
      </NuxtLink>
      <NuxtLink data-aos="fade-left" data-aos-offset="0" data-aos-delay="700"
        to="https://addons.mozilla.org/firefox/addon/markdown-reader-ext/"
        class="hidden xs:inline-block text-center -mb-2" target="_blank_Firefox">
        <img class="inline-block h-[35px] sm:h-[45px] mb-2.5" src="/images/Firefox.png" alt="firefox-addons">
        <div class="leading-none text-sm sm:text-[15px]">Firefox</div>
      </NuxtLink>
    </div>
  </div>

  <div data-aos="fade-in-up" data-aos-offset="0" data-aos-delay="200" class="hidden sm:block mt-24">
    <UTabs v-model="currentTab" :items="previewTabs" class="mb-8 mx-auto px-5 max-w-[38rem]" :ui="{
      strategy: 'merge',
      list: {
        background: 'bg-[#ededed] dark:bg-[#2d2d36]',
        tab: { active: 'dark:bg-zinc-900', size: 'text-xs md:text-sm', font: 'font-[PoppinsSemiBold]', }
      }
    }" />
    <div v-show="isDark === undefined" class="opacity-0 invisible">
      <img class="block" draggable="false" src="/images/banner/light-1.png" />
    </div>
    <div v-show="isDark === true" class="relative">
      <template v-for="(item, i) in previewTabs">
        <Transition name="preview">
          <img v-show="i === currentTab" class="block drop-shadow-lg"
            :class="{ 'absolute top-0 left-0': i !== currentTab }" draggable="false"
            :src="`/images/banner/dark-${i + 1}.png`" :key="item.label" />
        </Transition>
      </template>
    </div>
    <div v-show="isDark === false" class="relative">
      <template v-for="(item, i) in previewTabs">
        <Transition name="preview">
          <img v-show="i === currentTab" class="block drop-shadow-lg"
            :class="{ 'absolute top-0 left-0': i !== currentTab }" draggable="false"
            :src="`/images/banner/light-${i + 1}.png`" :key="item.label" />
        </Transition>
      </template>
    </div>
  </div>
  <Features></Features>
  <Reviews></Reviews>
</template>

<script setup lang="ts">
const colorMode = useColorMode()
const isDark = computed(() => {
  if (colorMode.unknown) {
    return undefined
  }
  return colorMode.value === 'dark'
})

const currentTab = ref(0)
const previewTabs = [{
  label: 'Basic',
}, {
  label: 'Common',
}, {
  label: 'KaTeX',
}, {
  label: 'Mermaid',
}, {
  label: 'Gallery',
}]

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

.install-btn {
  @apply text-lg xs:text-xl sm:text-2xl xl:text-[26px] mr-8 sm:mr-10 px-5 sm:px-6 py-2 sm:py-2.5 xl:px-7 xl:py-3 !text-white rounded-full flex items-center transition hover:opacity-90;
  background-image: linear-gradient(330deg, #7294ff, #a474f7);
}

.preview-enter-active,
.preview-leave-active {
  transition: 0.2s;
}

.preview-leave-to,
.preview-enter-from {
  opacity: 0;
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
