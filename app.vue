<template>
  <Head>
    <Meta charset="UTF-8" />
    <Link rel="icon" href="favicon.ico" />
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
