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
      Copyright © 2018-2024 <NuxtLink target="_blank" to="https://github.com/Heroor">Bener</NuxtLink>.
    </span>
    <nav>
      <ul>
        <li>
          <NuxtLink class="link" to="/help">Help</NuxtLink>
        </li>
        <li>
          <NuxtLink class="link" to="/feedback">Feedback</NuxtLink>
        </li>
        <li>
          <NuxtLink class="link" target="_blank" to="https://github.com/md-reader/markdown-reader">GitHub</NuxtLink>
        </li>
        <li>
          <NuxtLink class="link" to="mailto:mkdreader@gmail.com">Email</NuxtLink>
        </li>
      </ul>
    </nav>
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

header nav {
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

footer nav {
  display: inline;
}

footer nav ul {
  display: inline;
}

footer nav ul li {
  display: inline;
  margin: 0 8px;
}
</style>
