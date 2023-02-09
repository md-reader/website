<script setup lang="ts">
import { onMounted } from "vue";
import { RouterLink, RouterView } from "vue-router";
import logo from "./assets/logo.svg";
import logoContour from "./assets/logo-contour.svg";

onMounted(() => {
  const mask = document.querySelector<HTMLElement>(".background-mask");
  const body = document.body;
  if (!mask) return;
  let x1 = 0;
  let x2 = 0;
  const step1 = 0.8;
  const step2 = 0.4;
  const size = 140;
  const ls = new Array(6);

  body.style.setProperty(
    "--background-mask-position-y-1",
    ls
      .fill(size)
      .map((s, i) => s * i * 2 + "px")
      .join(",")
  );
  body.style.setProperty(
    "--background-mask-position-y-2",
    ls
      .fill(size)
      .map((s, i) => s * (i * 2 + 1) + "px")
      .join(",")
  );
  body.style.setProperty(
    "--background-mask-image-1",
    ls.map(() => `url(${logo})`).join(",")
  );
  body.style.setProperty(
    "--background-mask-image-2",
    ls.map(() => `url(${logoContour})`).join(",")
  );
  void (function animate() {
    requestAnimationFrame(() => {
      x1 += step1;
      x2 -= step2;
      mask.style.setProperty(
        "--background-mask-position-x-1",
        ls
          .fill(x1)
          .map((x, i) => x + i * 100 + "px")
          .join(",")
      );
      mask.style.setProperty(
        "--background-mask-position-x-2",
        ls
          .fill(x2)
          .map((x, i) => x + i * 100 + "px")
          .join(",")
      );
      animate();
    });
  })();
});
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
  padding: 0 0.8rem;
  font-weight: bold;
  color: #607cd2;
}

nav a::before {
  content: "";
  width: 100%;
  height: 100%;
  bottom: -50%;
  left: 0;
  position: absolute;
  border-radius: 10px;
  opacity: 0.8;
  transform: scaleY(0.14) scaleX(0.1);
  transition: opacity 0.3s, bottom 0.1s ease-in-out, transform 0.3s;
}

nav a:last-of-type {
  margin-left: 0.5rem;
}

nav a:hover::before {
  opacity: 0.9;
  transform: scaleY(0.14) scaleX(0.4);
  background: rgba(96, 125, 210, 0.3);
}
nav a:active::before {
  opacity: 1;
}

nav a:active::before,
nav a.router-link-exact-active::before {
  bottom: 0;
  transform: none;
  background: rgba(96, 125, 210, 0.3);
}
</style>
