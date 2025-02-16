<script setup lang="ts">
import Background from "./components/background.client.vue";
import aos from 'aos'
import 'aos/dist/aos.css'
import '~/assets/css/main.css'

const isClient = ref(false)
const headerRef = ref<HTMLElement | null>(null)
function headerStick() {
  if (window.scrollY > 50) {
    if (!headerRef.value!.classList.contains('sticked')) {
      headerRef.value!.classList.add('sticked');
    }
  } else {
    if (headerRef.value!.classList.contains('sticked')) {
      headerRef.value!.classList.remove('sticked');
    }
  }
}

onMounted(() => {
  aos.init({
    once: true,
    offset: 160,
    easing: 'ease-in-out',
  })
  headerStick()
  window.addEventListener('scroll', headerStick);
  isClient.value = true
})

if (import.meta.env.PROD) {
  useHead({
    script: [
      {
        src: 'https://www.googletagmanager.com/gtag/js?id=G-8JMVF7XBX8',
        async: true
      },
      {
        innerHTML: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-8JMVF7XBX8');`
      },
      {
        innerHTML: `
          var _hmt = _hmt || [];
          (function() {
            var hm = document.createElement("script");
            hm.src = "https://hm.baidu.com/hm.js?ce0bf486bcd5da14e4e5a6674b460cb0";
            var s = document.getElementsByTagName("script")[0];
            s.parentNode.insertBefore(hm, s);
          })();`
      }
    ]
  })
}
</script>

<template>

  <Head>
    <Meta charset="UTF-8" />
    <Link rel="icon" type="image/svg+xml" href="favicon.svg" />
    <Link rel="icon" type="image/png" sizes="16x16" href="favicon_16x16.png" />
    <Link rel="icon" type="image/png" sizes="32x32" href="favicon_32x32.png" />
    <Meta name="description" content="Markdown Reader's website" />
    <Meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <Title>Markdown Reader</Title>
  </Head>

  <header data-aos="fade-in-down" data-aos-offset="0" ref="headerRef" class="sticky top-0 py-[1rem] px-[2rem] z-10">
    <div class="max-w-[1300px] mx-auto flex justify-between items-center">
      <Logo class="hidden xs:flex flex-1 logo"></Logo>
      <nav class="min-w-fit flex-1 text-sm xs:text-[15px] text-center select-none text-[--color-heading]">
        <NuxtLink custom to="/" v-slot="{ navigate, isExactActive }">
          <NavLink :class="{ isExactActive }" @click="navigate">Home</NavLink>
        </NuxtLink>
        <NuxtLink custom to="/install" v-slot="{ navigate, isExactActive }">
          <NavLink :class="{ isExactActive }" @click="navigate">Install</NavLink>
        </NuxtLink>
        <NuxtLink custom v-slot="{ isExactActive }">
          <NavLink :class="{ isExactActive }" target="__blank_Feedback"
            href="https://github.com/md-reader/md-reader/issues/new/choose">Feedback
          </NavLink>
        </NuxtLink>
        <NuxtLink custom v-slot="{ isExactActive }">
          <NavLink :class="{ isExactActive }" target="__blank_Support"
            href="https://github.com/orgs/md-reader/discussions/64">
            Support
          </NavLink>
        </NuxtLink>
      </nav>
      <HeaderActions class="hidden xs:flex flex-1"></HeaderActions>
    </div>
  </header>

  <div class="max-w-[1300px] mx-auto mt-20 xs:mt-28 px-6 xs:px-8">
    <NuxtPage></NuxtPage>
    <Faq></Faq>
    <Footer />
  </div>

  <Background v-if="isClient" :options="{ bg1: '/logo-bg-1.svg', bg2: '/logo-bg-2.svg' }" />
</template>

<style scoped>
header.sticked {
  @apply bg-white/80 dark:bg-black/80 duration-300;
  backdrop-filter: blur(8px);
}

.logo:deep(h1) {
  @apply lg:inline hidden;
}
</style>
