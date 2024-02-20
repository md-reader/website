<template>
  <Head>
    <Meta charset="UTF-8" />
    <Link rel="icon" href="favicon.ico" />
    <Meta name="description" content="md-reader's website" />
    <Meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <Title>Markdown Reader</Title>
  </Head>

  <header>
    <MDLogo></MDLogo>
    <nav>
      <NuxtLink custom draggable="false" to="/" v-slot="{ navigate, isExactActive }">
        <NavLink :class="{ isExactActive }" @click="navigate">Home</NavLink>
      </NuxtLink>
      <NuxtLink custom draggable="false" to="/about" v-slot="{ navigate, isExactActive }">
        <NavLink :class="{ isExactActive }" @click="navigate">About</NavLink>
      </NuxtLink>
    </nav>
    <Actions></Actions>
  </header>

  <NuxtPage></NuxtPage>

  <footer>
    <span class="cpr">
      Copyright ©2018-2024 <a href="https://github.com/Heroor">Bener</a>
    </span>
    <a class="link" href="/help">Help</a>
    <a class="link" href="/feedback">Feedback</a>
    <a class="link" href="https://github.com/md-reader/markdown-reader">GitHub</a>
    <a class="link" href="mailto:mkdreader@gmail.com">Email</a>
  </footer>
</template>

<script setup lang="ts">
import { useBackgroundMask } from "./shared";
import MDLogo from './components/logo.vue'
import NavLink from "./components/nav-link.vue";
import Actions from "./components/actions.vue";
import '~/assets/css/main.css'
useBackgroundMask();
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
  margin-bottom: 80px;
}

nav {
  font-size: 15px;
  text-align: center;
  user-select: none;
  color: var(--color-heading);
}

footer {
  text-align: center;
  font-size: 13px;
  color: var(--color-desc);
}

footer .cpr {
  margin-right: 6px;
}

footer .link {
  margin: 0 6px;
}
</style>
