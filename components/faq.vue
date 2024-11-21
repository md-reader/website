<script setup lang="ts">
import LocalMarkdownFAQ from './LocalMarkdownFAQ.vue'
const expandMap: Record<string, boolean> = reactive({})

const faqs = [
  {
    title: 'About Markdown Reader',
    questions: [
      [
        'What is Markdown Reader?',
        'Markdown Reader is a browser extension that renders local and online Markdown files into beautiful, readable HTML pages.'
      ],
      [
        'Which browsers are supported?',
        'It is currently available for Chrome and Firefox, more browsers will be adapted in the future.'
      ]
    ]
  },
  {
    title: 'Installation and Usage',
    questions: [
      [
        'How do I install Markdown Reader?',
        'Search for “Markdown Reader” in the Chrome Web Store or Firefox Add-ons and click install.'
      ],
      [
        'How can I open local Markdown files?',
        LocalMarkdownFAQ
      ],
      [
        'How do I preview online Markdown files?',
        'Enter the file URL (e.g., https://example.com/file.md), and the extension will automatically render the content.'
      ]
    ]
  },
  {
    title: 'Feature Settings',
    questions: [
      [
        'How can I switch themes?',
        'You can switch between light and dark themes in the settings, or choose “Auto Mode” to follow the system theme.'
      ],
      [
        'Can I disable certain plugins?',
        'Yes! Go to the Popup settings page and toggle plugins on or off as needed.'
      ],
      [
        'How can I adjust the font size?',
        'Use the slider in the settings to adjust the font size. This will change the display scale of the entire document.'
      ]
    ]
  },
  {
    title: 'Technical Support',
    questions: [
      [
        'What Markdown extensions are supported?',
        'Markdown Reader supports advanced syntax extensions like KaTeX for math formulas, Mermaid for flowcharts, Gantt charts, footnotes, task lists, and more.'
      ],
      [
        'How often does real-time rendering update?',
        'The extension polls the source file every 0.5 seconds to ensure the displayed content is up-to-date.'
      ],
      [
        'Which languages are supported for syntax highlighting?',
        'It supports syntax highlighting for a wide range of programming languages, including JavaScript, TypeScript, Java, Python, C, C++, Shell, and more.'
      ]
    ]
  },
  {
    title: 'Common Questions',
    questions: [
      [
        'Why can’t some Markdown files render correctly?',
        'Ensure the file is encoded in UTF-8 and check if unsupported syntax extensions are used.'
      ],
      [
        'Can I add custom themes?',
        'Currently, only light and dark themes are supported, but more customization options are planned for future updates.'
      ],
      [
        'How do I provide feedback or report issues?',
        'You can submit an issue on our GitHub page or email us at mkdreader@gmail.com.'
      ]
    ]
  },
  {
    title: 'Future Features',
    questions: [
      [
        'Will there be more themes or personalization options?',
        'Yes! We’re working on adding more themes and UI customization features.'
      ],
      [
        'Will you support more plugins?',
        'We continuously update and expand the available plugins to enrich the Markdown rendering experience.'
      ],
    ]
  }
]
</script>

<template>
  <h2 class="mt-64">Frequently Asked Questions</h2>
  <div class="mt-20">
    <ul v-for="item in faqs" :key="item.title" class="max-w-[1000px] m-auto">
      <li
        class="flex justify-between xl:text-2xl text-xl py-5 hover:text-zinc-500 dark:hover:text-zinc-300 cursor-pointer duration-500 transition-[color]"
        @click="expandMap[item.title] = !expandMap[item.title]">
        <h3 class="flex items-center gap-2 poppins-semi-bold">
          <UIcon name="i-mdi-help-circle opacity-80"></UIcon>
          {{ item.title }}
        </h3>
        <UIcon name="i-heroicons-chevron-right-20-solid" class="duration-100 !text-2xl"
          :class="{ 'rotate-90': expandMap[item.title] }">
        </UIcon>
      </li>
      <ul v-show="expandMap[item.title]" class="text-base xl:text-lg px-9 pt-4 pb-6 text-gray-600 dark:text-gray-300">
        <li v-for="(ques, i) in item.questions" class="mt-8 first:mt-0">
          <h4 class="mb-2 poppins-semi-bold">{{ i + 1 }}. {{ ques[0] }}</h4>
          <div v-if="typeof ques[1] === 'string'">{{ ques[1] }}</div>
          <component v-else :is="ques[1]"></component>
        </li>
      </ul>
    </ul>
  </div>
</template>
