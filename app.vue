<template>
  <Head>
    <Meta charset="UTF-8" />
    <Link rel="icon" href="favicon.ico" />
    <Meta name="description" content="md-reader's website" />
    <Meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <Title>md-reader</Title>
  </Head>

  <header>
    <nav>
      <NuxtLink custom draggable="false" to="/" v-slot="{ navigate, isExactActive }">
        <NavLink :class="{ isExactActive }" @click="navigate">Home</NavLink>
      </NuxtLink>
      <NuxtLink custom draggable="false" to="/about" v-slot="{ navigate, isExactActive }">
        <NavLink :class="{ isExactActive }" @click="navigate">About</NavLink>
      </NuxtLink>
    </nav>
  </header>

  <NuxtPage></NuxtPage>
</template>

<script setup lang="ts">
import { useBackgroundMask } from "./shared";
import NavLink from "./components/nav-link.vue";
import '~/assets/css/main.css'
useBackgroundMask();
</script>

<style scoped>
header {
  line-height: 1.8;
}

nav {
  font-size: 18px;
  text-align: center;
  margin-top: 1rem;
  user-select: none;
  color: var(--color-heading);
}
</style>
