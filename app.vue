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

  <header>
    <MDLogo></MDLogo>
    <nav class="min-w-fit">
      <NuxtLink custom to="/" v-slot="{ navigate, isExactActive }">
        <NavLink :class="{ isExactActive }" @click="navigate">Home</NavLink>
      </NuxtLink>
      <NuxtLink custom to="/about" v-slot="{ navigate, isExactActive }">
        <NavLink :class="{ isExactActive }" @click="navigate">About</NavLink>
      </NuxtLink>
    </nav>
    <HeaderActions></HeaderActions>
  </header>

  <NuxtPage></NuxtPage>

  <Footer />
</template>

<script setup lang="ts">
import { useBackgroundMask } from "./shared";
import MDLogo from './components/logo.vue'
import NavLink from "./components/nav-link.vue";
import HeaderActions from "./components/header-actions.vue";
import Footer from "./components/footer.vue";
import '~/assets/css/main.css'
useBackgroundMask();

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

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
  margin-bottom: 90px;
}

header nav {
  font-size: 15px;
  text-align: center;
  user-select: none;
  color: var(--color-heading);
}

header>* {
  flex: 1;
}
</style>
