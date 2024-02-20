<template>
  <a v-bind="$attrs">
    <slot></slot>
  </a>
</template>

<style scoped>
a {
  position: relative;
  display: inline-block;
  padding: 0 0.8rem;
  font-weight: bold;
  color: #607cd2;
  transition: transform 0.3s;
  text-shadow: 0 0 2px rgba(0, 0, 0, 0.15);
}

a::before {
  content: "";
  width: 100%;
  height: 100%;
  left: 0;
  bottom: -45%;
  position: absolute;
  border-radius: 10px;
  opacity: 0.25;
  transform: scaleY(0.14) scaleX(0);
  transition: opacity 0.3s, bottom 0.2s ease-in-out, transform 0.2s,
    background 0.05s;
  background: transparent;
}

a:not(:first-of-type) {
  margin-left: 0.8rem;
}

a:hover::before {
  opacity: 0.3;
  transform: scaleY(0.14) scaleX(0.3);
  background: currentColor;
}

a:active {
  transform: scale(0.95);
}

a:active::before {
  opacity: 0.3;
  transform: scaleY(0.14) scaleX(0.45);
  background: currentColor;
}

a.isExactActive {
  backdrop-filter: blur(4px);
}

a.isExactActive::before {
  bottom: 0;
  transform: scale(1);
  transition: opacity 0.3s, bottom 0.11s ease-in-out, transform 0.3s,
    background 0.05s;
  background: rgba(96, 125, 210, 0.85);
}
</style>
