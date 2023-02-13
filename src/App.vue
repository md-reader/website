<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import { useBackgroundMask } from "./shared";
useBackgroundMask();
</script>

<template>
  <header>
    <nav>
      <RouterLink draggable="false" to="/">Home</RouterLink>
      <RouterLink draggable="false" to="/about">About</RouterLink>
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
  color: var(--color-heading);
  user-select: none;
}

nav a {
  position: relative;
  display: inline-block;
  padding: 0 1.2rem;
  font-weight: bold;
  color: #607cd2;
  transition: transform 0.3s;
}

nav a::before {
  content: "";
  width: 100%;
  height: 100%;
  left: 0;
  bottom: -50%;
  position: absolute;
  border-radius: 10px;
  opacity: 0.25;
  transform: scaleY(0.14) scaleX(0);
  transition: opacity 0.3s, bottom 0.08s ease-in-out, transform 0.3s;
}

nav a:last-of-type {
  margin-left: 0.4rem;
}

nav a:hover::before {
  opacity: 0.3;
  transform: scaleY(0.14) scaleX(0.3);
  background: currentColor;
}
nav a:active {
  transform: scale(0.95);
}

nav a:active::before {
  opacity: 0.35;
}

nav a:active::before,
nav a.router-link-exact-active::before {
  bottom: 0;
  transform: none;
  background: currentColor;
}
</style>
