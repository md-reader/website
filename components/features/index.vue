<script setup lang="ts">
import Item from './item.vue'
const cards = [{
  title: 'Rich built-in Plugins',
  desc: 'Enhance your Markdown experience with built-in support for Emojis, Footnotes, Annotations, Math Formulas, Flowcharts, Gantt Charts, and more.',
}, {
  title: 'Work Anywhere, Anytime',
  desc: 'With the powerful built-in rendering engine, efficient and seamless previewing is ensured whether connected to the Internet or working offline.',
}, {
  title: 'Day & Night Compatibility',
  desc: 'Switch between light and dark modes to suit your environment. Enjoy a comfortable reading experience, whether you have a bright display or a dim view.',
}]

const feats = [{
  title: 'Local & Online Markdown',
  desc: 'Access and preview Markdown files from anywhere! Whether it’s a local file saved on your computer or an online document linked via URL, Markdown Reader seamlessly renders them all. Simplify your workflow with dual-source support.',
  src: '/images/local-and-online.svg',
  icon: 'i-mdi-file',
}, {
  title: 'Real-time rendering',
  desc: 'See changes as you type! Markdown Reader provides instant feedback by rendering your Markdown in real-time. No need to switch between the editor and preview—just focus on your content creation.',
  src: '/images/reload.svg',
  icon: 'i-mdi-lightning-bolt',
}, {
  title: 'Seamless TOC Navigation',
  desc: 'Easily navigate long documents with the auto generated table of contents. Sidebar TOC supports multi-level headings, helping you jump to any section instantly, saving time and improving productivity.',
  src: '/images/sidebar.svg',
  icon: 'i-solar-hamburger-menu-bold',
}, {
  title: 'Syntax Highlighting',
  desc: 'Write and showcase code beautifully!  Markdown Reader highlights code in multiple programming languages, ensuring your code snippets are easy to read and look professional, whether for blogs or documentation.',
  src: '/images/highlight.svg',
  icon: 'i-mdi-lightbulb-on',
}, {
  title: 'Charts & Formula Support',
  desc: 'Easily create flowcharts, diagrams, and present mathematical formulas using built-in tools like Mermaid and LaTeX. Ideal for education and technical documentation.',
  src: '/images/flow.svg',
  icon: 'i-fluent-flow-32-filled',
}]
</script>

<template>
  <h2>Powerful, Beautiful, and Fast!</h2>
  <p class="desc">With out-of-the-box Plugins and Extremely Fast rendering.</p>

  <div class="xl:columns-3 gap-10 mt-24 mb-44">
    <UCard v-for="c in cards"
      class="break-inside-avoid xl:p-3 xl:m-0 max-w-[980px] m-auto mb-6 p-2 rounded-xl dark:bg-zinc-900">
      <div class="text-xl xl:text-[22px] poppins-semi-bold leading-none mb-4 xl:mb-5">{{ c.title }}</div>
      <div class="text-base xl:text-lg text-gray-600 dark:text-gray-300">{{ c.desc }}</div>
    </UCard>
  </div>
  <Item v-for="(f, i) in feats" :title="f.title" :desc="f.desc" :src="f.src" :icon="f.icon" :reverse="!!(i % 2)">
  </Item>
</template>
