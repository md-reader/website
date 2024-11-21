<script setup lang="ts">
defineProps({
  title: {
    type: String,
    default: ''
  },
  desc: {
    type: String,
    default: ''
  },
  src: {
    type: String,
    default: ''
  },
  icon: {
    type: String,
    default: ''
  },
  reverse: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <div class="flex text-left xl:mt-28 mt-32 justify-around flex-col xl:flex-row items-center">
    <div class="xl:flex-1 py-8 xl:max-w-[560px] max-w-[620px] xl:w-auto order-[1] xl:order-none">
      <div class="flex items-center gap-2 xl:text-4xl text-2xl poppins-semi-bold !leading-loose">
        <UIcon v-if="icon" :name="icon" class="align-text-top"></UIcon>
        {{ title }}
      </div>
      <div class="text-lg xl:text-xl text-gray-600 dark:text-gray-300">{{ desc }}</div>
    </div>
    <div class="xl:max-w-[480px] max-w-[640px]" :class="{ 'order-[-1]': reverse }">
      <img draggable="false" :src="src" class="block drop-shadow-md" />
    </div>
  </div>
</template>
