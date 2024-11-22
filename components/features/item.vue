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
  <div class="flex justify-around items-center mt-32 xl:mt-52">
    <div class="flex-1 max-w-[500px] lg:max-w-[600px]">
      <div class="poppins-semi-bold flex items-center gap-2 text-3xl xl:text-4xl leading-normal">
        <UIcon v-if="icon" :name="icon" />
        {{ title }}
      </div>
      <img draggable="false" :src="src" class="pt-6 block xl:hidden drop-shadow-md" />
      <div class="pt-6 xl:pt-4 px-3 text-lg xl:text-xl">{{ desc }}</div>
    </div>
    <img draggable="false" :src="src" class="hidden xl:block max-w-[500px] drop-shadow-md"
      :class="{ 'order-first': reverse }" />
  </div>
</template>
