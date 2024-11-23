<template>
  <footer class="mt-44 flex justify-between items-center max-w-[960px] mx-auto">
    <Logo class="logo"></Logo>
    <div class="md:text-sm text-xs text-zinc-400 dark:text-zinc-500">
      <nav class="inline-block">
        <ul class="inline-flex gap-4">
          <li>
            <NuxtLink target="_blank_GitHub" to="https://github.com/md-reader/md-reader">GitHub</NuxtLink>
          </li>
          <li>
            <NuxtLink target="_blank_Feedback" to="https://github.com/md-reader/md-reader/issues/new/choose">Feedback
            </NuxtLink>
          </li>
          <li>
            <NuxtLink target="_blank_Support" to="https://github.com/orgs/md-reader/discussions/64">Support</NuxtLink>
          </li>
          <li>
            <NuxtLink to="mailto:mkdreader@gmail.com">Email</NuxtLink>
          </li>
        </ul>
      </nav>
      <span class="ml-3.5">
        © 2024 Copyright
        <NuxtLink target="_blank_Bener" to="https://github.com/Heroor">Bener</NuxtLink>.
      </span>
    </div>
  </footer>
</template>

<style scoped>
.logo:deep(h1) {
  @apply md:inline hidden;
}
</style>
