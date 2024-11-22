<template>
  <a v-bind="$attrs"
    class="poppins-semi-bold relative inline-block leading-8 px-3 rounded-lg cursor-pointer duration-200">
    <slot></slot>
  </a>
</template>

<style scoped>
a.isExactActive {
  color: var(--color-primary);
}

a.isExactActive::before {
  opacity: 1;
}

a::before {
  content: "";
  width: 20px;
  height: 4px;
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translateX(-50%);
  border-radius: 10px;
  opacity: 0;
  transition: 0.2s;
  background: var(--color-primary);
}

a:hover::before {
  opacity: 1;
  width: 28px;
}

a:active::before {
  opacity: 1;
  width: 22px;
}
</style>
