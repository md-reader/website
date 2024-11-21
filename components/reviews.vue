<script setup lang="ts">
import reviews from '~/shared/reviews.json'

function getAvatar(item) {
  const name = item.isFx ? 'fx' : item.name.replace(' ', '_')
  return `/avatars/${name}.png`
}
</script>

<template>
  <h2>It's been getting rave reviews!</h2>
  <p class="desc">
    Markdown Reader has over
    <span class="text-2xl poppins-semi-bold px-1.5 text-primary">20,000+</span>
    active users!
  </p>

  <div class="column-1 md:columns-2 lg:columns-3 gap-8 space-y-8 mt-24">
    <div v-for="item in reviews"
      class="break-inside-avoid shadow ring-1 ring-gray-200 dark:ring-zinc-800 bg-white dark:bg-zinc-900 rounded-2xl py-6 px-7 duration-100">
      "{{ item.content }}"
      <div class="flex gap-4 items-center mt-4">
        <UAvatar :src="getAvatar(item)" alt="Avatar" size="md" />
        <div class="poppins-semi-bold">
          {{ item.name }}
          <div class="leading-none">
            <UIcon v-for="v in item.rating" name="i-heroicons-star-solid" class="text-base text-amber-400" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
