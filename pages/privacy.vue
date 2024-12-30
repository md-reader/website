<template>
  <h2 class="mt-0 text-center">Privacy Policy</h2>
  <div class="text-left mt-16 mx-auto max-w-[1000px]">
    <p>
      <strong class="mr-2">Updated on:</strong>December 30, 2024
    </p>

    <h3>Introduction</h3>
    <p>Thank you for using Markdown Reader (hereinafter referred to as "the Extension"). We highly value your privacy.
      This privacy policy describes how we collect, use, and protect your information.</p>

    <h3>Data Collection</h3>
    <p>The Extension does not actively collect or store any personal file information. All file parsing operations are
      performed locally on the user's device.</p>
    <p>If you sign in to the Extension's user system, we will collect your email address used during registration. This
      will serve as your unique identifier, login credential, and a means to recover your password.</p>

    <h3>User Data</h3>
    <p>The Extension may access the following content:</p>
    <ul>
      <li><strong>Local Files:</strong> When you choose to open local Markdown files, the Extension temporarily reads
        the file contents for rendering but does not upload or store any file content.</li>
      <li><strong>Online Resources:</strong> If you choose to load online Markdown files or related resources (e.g.,
        images), the Extension will send requests to the target server. These requests are consistent with normal
        browser behavior, and the Extension does not store any network data.</li>
    </ul>

    <h3>Diagnostic Information</h3>
    <p>With explicit user consent, we may collect anonymous error reports and usage statistics to improve the
      Extension's functionality. These reports will not include any personally identifiable data.</p>

    <h3>How We Use Information</h3>
    <p>We do not collect, store, or share your personal information. You can use the Extension with confidence, as all
      file processing tasks are performed locally on your device.</p>

    <h3>Information Sharing</h3>
    <p>We do not share user personal information or usage data with any third party.</p>

    <h3>Third-Party Services</h3>
    <p>The Extension may load online resources provided by users (e.g., images in Markdown files). Please note that
      these resources are hosted by third parties designated by you and are subject to their privacy policies. The
      Extension does not control these resources.</p>

    <h3>Your Rights</h3>
    <p>Since the Extension does not collect user file data, there are no issues regarding access, correction, or
      deletion of personal data. If you have any questions, please contact us using the information below.</p>

    <h3>Security</h3>
    <p>Your data security is of utmost importance to us. The Extension does not actively transmit any user file data or
      access sensitive user information.</p>

    <h3>Privacy Policy Updates</h3>
    <p>We may update this privacy policy from time to time. Any changes will be published on this page, with the latest
      update date clearly indicated. Please check back periodically to stay informed about our privacy practices.</p>

    <h3>Contact Us</h3>
    <p>If you have any questions or suggestions regarding this privacy policy, please contact us via the following:</p>

    <ul>
      <li>
        <span class="mr-2">GitHub:</span>
        <a href="https://github.com/md-reader/md-reader/issues">GitHub Issues.</a>
      </li>
      <li>
        <span class="mr-2">Email:</span>
        <a href="mailto:mkdreader@gmail.com">mkdreader@gmail.com</a>
      </li>
      <li>
        <span class="mr-2">WeChat:</span>
        Scan the code to get the support.
        <div class="ml-1 mt-4">
          <img src="/images/mp-qrcode.jpg" class="w-40 xs:w-48 mt-4" draggable="false" />
          <p class="mt-2.5 w-40 xs:w-48 text-center">
            <UIcon name="i-mdi-wechat" class="text-xl xs:text-2xl align-[-5px] xs:align-[-7px]" />
            <span class="text-sm xs:text-base ml-[5px]">WeChat Official</span>
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>

<style scoped>
h3 {
  @apply text-xl xs:text-3xl mx-0 mt-12 mb-5 font-bold border-b-[1px] pb-3 border-gray-300 dark:border-gray-500;
}

p {
  @apply my-3 text-base xs:text-lg text-gray-800 dark:text-gray-200;
}

ul {
  @apply text-base xs:text-base xl:text-lg px-7 xs:px-8 py-0 text-gray-700 dark:text-gray-300 list-disc;
}

li {
  @apply mt-3 xs:mt-5;
}
</style>
