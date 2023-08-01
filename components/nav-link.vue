<template>
  <a v-bind="$attrs"><slot></slot></a>
</template>

<style scoped>
a {
  position: relative;
  display: inline-block;
  padding: 0 1.2rem;
  font-weight: bold;
  color: #607cd2;
  transition: transform 0.3s;
}

a::before {
  content: "";
  width: 100%;
  height: 100%;
  left: 0;
  bottom: -50%;
  position: absolute;
  border-radius: 10px;
  opacity: 0.25;
  transform: scaleY(0.14) scaleX(0);
  transition: opacity 0.3s, bottom 0.2s ease-in-out, transform 0.2s,
    background 0.05s;
  background: transparent;
}

a:last-of-type {
  margin-left: 0.4rem;
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
  opacity: 0.35;
}

a:active::before,
a.isExactActive::before {
  bottom: 0;
  transform: scale(1);
  transition: opacity 0.3s, bottom 0.1s ease-in-out, transform 0.3s,
    background 0.05s;
  background: currentColor;
}
</style>
