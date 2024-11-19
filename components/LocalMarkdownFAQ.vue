<template>
  <p>
    To open local Markdown files, drag and drop the file into your browser or use the
    <code class="code-style">file://</code>
    protocol. However, if the local file doesn’t render, follow these steps to enable local file access:
  </p>
  <ul class="space-y-4 mt-4 pl-4">
    <li>
      <strong class="poppins-semi-bold">In Chrome:</strong>
      <ol class="list-decimal list-inside pl-4 space-y-2">
        <li>
          Go to <code class="code-style">chrome://extensions/</code>
          by typing it in the address bar and pressing Enter.
        </li>
        <li>
          Find <strong class="poppins-semi-bold">Markdown Reader</strong> in the list of installed extensions.
        </li>
        <li>Click the <strong class="poppins-semi-bold">Details</strong> button beneath the Markdown Reader entry.</li>
        <li>
          Scroll down to the option <strong class="poppins-semi-bold">"Allow access to file URLs"</strong> and toggle it
          on.
        </li>
        <li>Reload the local file in your browser.</li>
      </ol>
    </li>
    <li>
      <strong class="poppins-semi-bold">In Firefox:</strong> Local file access works by default. Ensure your file path
      starts
      with
      <code class="code-style">file://</code>, such as
      <code class="code-style">file:///C:/path/to/your/file.md</code>.
      If issues persist, check for other potential restrictions like enhanced privacy settings.
    </li>
  </ul>
  <p class="mt-4">
    These steps ensure seamless local Markdown file rendering in your browser.
  </p>
</template>
