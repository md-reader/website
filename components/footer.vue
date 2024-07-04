<template>
  <footer>
    <span class="cpr">
      Copyright © 2018-2024 <NuxtLink target="_blank" to="https://github.com/Heroor">Bener</NuxtLink>.
    </span>
    <nav>
      <ul>
        <li>
          <NuxtLink class="link" to="/support">Support</NuxtLink>
        </li>
        <li>
          <NuxtLink class="link" to="/feedback">Feedback</NuxtLink>
        </li>
        <li>
          <NuxtLink class="link" target="_blank" to="https://github.com/md-reader/md-reader">GitHub</NuxtLink>
        </li>
        <li>
          <NuxtLink class="link" to="mailto:mkdreader@gmail.com">Email</NuxtLink>
        </li>
      </ul>
    </nav>
  </footer>
</template>

<style scoped>
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
