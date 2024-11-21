<script lang="ts" setup>
import MDLogo from '~/components/logo.vue'
</script>

<template>
  <footer class="mt-44 text-center">
    <MDLogo class="flex-1"></MDLogo>
    <div class="mt-5 md:text-sm text-xs text-zinc-400 dark:text-zinc-500">
      <span class="mr-1">
        © 2024 Copyright <NuxtLink target="_blank" to="https://github.com/Heroor">Bener</NuxtLink>.
      </span>
      <nav class="inline-block">
        <ul class="inline-flex gap-4">
          <li>
            <NuxtLink class="link" to="https://github.com/orgs/md-reader/discussions/51">Support</NuxtLink>
          </li>
          <li>
            <NuxtLink class="link" to="https://github.com/md-reader/md-reader/issues/new/choose">Feedback</NuxtLink>
          </li>
          <li>
            <NuxtLink class="link" target="_blank" to="https://github.com/md-reader/md-reader">GitHub</NuxtLink>
          </li>
          <li>
            <NuxtLink class="link" to="mailto:mkdreader@gmail.com">Email</NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
  </footer>
</template>
