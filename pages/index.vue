<template>
  <div class="content">
    <h1>Make reading Markdown easier!</h1>
    <p>Extremely fast rendering, multi-plugin, dual-theme markdown reading extension.</p>
    <!-- <p>Support: Chrome/Firefox/Edge/Safari</p> -->
    <div class="downloads">
      <a href="https://chromewebstore.google.com/detail/medapdbncneneejhbgcjceippjlfkmkg" target="_blank"><img
          class="chrome-web-store" src="@/assets/chrome-web-store.png" alt=""></a>
    </div>
    <div class="banner">
      <img src="@/assets/banner.png" alt="">
    </div>
  </div>
</template>

<script lang="ts">
</script>

<style scoped>
.content {
  text-align: center;
}

h1 {
  font-weight: bold;
  font-size: 40px;
}

.downloads {
  margin-top: 50px;
}

.chrome-web-store {
  width: 200px;
  filter: drop-shadow(2px 4px 6px rgba(0, 0, 0, 0.05))
}

.banner img {
  max-width: 100%;
}
</style>
