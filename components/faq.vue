<script setup lang="ts">
import LocalMarkdownFAQ from './LocalMarkdownFAQ.vue'
import CommunityFAQ from './CommunityFAQ.vue'

const expandMap: Record<string, boolean> = reactive({
  'About Markdown Reader': true
})

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
      ],
      [
        'Join the WeChat Community.',
        CommunityFAQ
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
  <h2 id="faq">Frequently Asked Questions</h2>
  <div class="mt-14 xs:mt-24">
    <ul v-for="item in faqs" :key="item.title" class="max-w-[1000px] m-auto">
      <li>
        <h3
          class="flex items-center gap-2 py-2.5 xl:py-5 xs:py-4 text-lg xs:text-xl xl:text-2xl hover:text-zinc-500 dark:hover:text-zinc-300 transition-[color] cursor-pointer"
          @click="expandMap[item.title] = !expandMap[item.title]">
          <UIcon name="i-mdi-help-circle" class="opacity-90"></UIcon>
          <span class="poppins-semi-bold flex-1">{{ item.title }}</span>
          <UIcon name="i-heroicons-chevron-right-20-solid" class="duration-100 !xs:text-2xl"
            :class="{ 'rotate-90': expandMap[item.title] }">
          </UIcon>
        </h3>
        <ul v-show="expandMap[item.title]"
          class="text-sm xs:text-base xl:text-lg px-7 xs:px-9 py-2 xs:py-4 text-gray-600 dark:text-gray-300">
          <li v-for="(ques, i) in item.questions" class="mt-5 xs:mt-8 first:mt-0">
            <h4 class="mb-2 poppins-semi-bold">{{ i + 1 }}. {{ ques[0] }}</h4>
            <div v-if="typeof ques[1] === 'string'">{{ ques[1] }}</div>
            <component v-else :is="ques[1]"></component>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>
