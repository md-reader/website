<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import { useBackgroundMask } from "./shared";
import NavLink from "./components/NavLink.vue";
useBackgroundMask();
</script>

<template>
  <header>
    <nav>
      <RouterLink
        custom
        draggable="false"
        to="/"
        v-slot="{ navigate, isExactActive }"
      >
        <NavLink :class="{ isExactActive }" @click="navigate">Home</NavLink>
      </RouterLink>
      <RouterLink
        custom
        draggable="false"
        to="/about"
        v-slot="{ navigate, isExactActive }"
      >
        <NavLink :class="{ isExactActive }" @click="navigate">About</NavLink>
      </RouterLink>
    </nav>
  </header>

  <RouterView />
</template>

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
