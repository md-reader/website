<script setup lang="ts">
import reviews from '~/shared/reviews.json'
</script>
<template>
  <h2 class="text-5xl mt-20">What people are saying</h2>
  <p class="text-lg mt-5">Markdown Reader is used by 10000+ users!</p>
  <div class="column-1 md:columns-2 lg:columns-3 gap-8 space-y-8 mt-20">
    <div v-for="item in reviews"
      class="break-inside-avoid shadow ring-1 ring-gray-200 bg-white rounded-xl p-6 text-center">
      <UAvatar :src="`/avatars/${item.name}.png`" alt="Avatar" size="md" />
      <div class="font-bold leading-8">{{ item.name }}</div>
      <div class="leading-none mb-1">
        <UIcon v-for="v in item.rating" name="i-heroicons-star-solid" class=" text-[16px] text-amber-400" />
      </div>
      "{{ item.content }}"
    </div>
  </div>
</template>
