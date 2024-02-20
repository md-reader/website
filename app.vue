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

  <footer>Copyright ©2018-2024 Bener.</footer>
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
  font-size: 14px;
  text-align: center;
  user-select: none;
  color: var(--color-heading);
}

footer {
  text-align: center;
  color: var(--color-desc);
}
</style>
