<script setup lang="ts">
import reviews from '~/shared/reviews.json'

function getAvatar(item: any) {
  const name = item.isFx ? 'fx' : item.name.replace(' ', '_')
  return `/avatars/${name}.png`
}
</script>

<template>
  <h2 data-aos="fade-up" data-aos-offset="0">It's been getting rave reviews!</h2>
  <p data-aos="fade-up" data-aos-offset="0" class="desc">
    Markdown Reader has over
    <span class="text-lg xs:text-2xl poppins-semi-bold px-0.5 xs:px-1.5 text-primary">20,000+</span>
    active users!
  </p>

  <div data-aos="fade-up" data-aos-offset="0"
    class="column-1 md:columns-2 lg:columns-3 gap-8 space-y-3 xs:space-y-8 mt-14 xs:mt-24">
    <div v-for="item in reviews"
      class="break-inside-avoid shadow ring-1 ring-gray-200 dark:ring-zinc-800 bg-white dark:bg-zinc-900 rounded-2xl p-5 xs:py-6 xs:px-7 text-sm xs:text-[15px] duration-100">
      "{{ item.content }}"
      <div class="flex gap-4 items-center mt-4">
        <UAvatar :src="getAvatar(item)" alt="Avatar" size="md" />
        <div class="poppins-semi-bold text-xs xs:text-sm">
          {{ item.name }}
          <div class="leading-none mt-0.5 xs:mt-0">
            <UIcon v-for="v in item.rating" name="i-heroicons-star-solid" class="text-base text-amber-400" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
