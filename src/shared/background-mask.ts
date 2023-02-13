import logo from "../assets/logo.svg";
import logoContour from "../assets/logo-contour.svg";
import { onMounted, onUnmounted } from "vue";

export function useBackgroundMask() {
  const mask = new BackgroundMask();
  onMounted(mask.register.bind(mask));
  onUnmounted(mask.remove.bind(mask));
  return mask;
}

class BackgroundMask {
  x1: number = 0;
  x2: number = 0;
  step1: number = 0.8;
  step2: number = 0.4;
  size: number = 140;
  ls: Array<any> = new Array(6);
  mask: HTMLElement | undefined;

  register() {
    this.initMaskEle();
    this.initCssProperty();
    this.animate();
  }

  remove() {
    this.mask && this.mask.remove();
  }

  initMaskEle() {
    this.mask = document.createElement("div");
    this.mask.classList.add("background-mask");
    document.body.append(this.mask);
  }

  initCssProperty() {
    const root = document.querySelector<HTMLElement>(":root");
    if (!root) return;

    root.style.setProperty(
      "--background-mask-position-y-1",
      this.ls
        .fill(this.size)
        .map((s, i) => s * i * 2 + "px")
        .join(",")
    );
    root.style.setProperty(
      "--background-mask-position-y-2",
      this.ls
        .fill(this.size)
        .map((s, i) => s * (i * 2 + 1) + "px")
        .join(",")
    );
    root.style.setProperty(
      "--background-mask-image-1",
      this.ls.fill(`url(${logo})`).join(",")
    );
    root.style.setProperty(
      "--background-mask-image-2",
      this.ls.fill(`url(${logoContour})`).join(",")
    );
  }

  animate(): number {
    return requestAnimationFrame(() => {
      this.x1 += this.step1;
      this.x2 -= this.step2;
      this.mask!.style.setProperty(
        "--background-mask-position-x-1",
        this.ls
          .fill(this.x1)
          .map((x, i) => x + i * 100 + "px")
          .join(",")
      );
      this.mask!.style.setProperty(
        "--background-mask-position-x-2",
        this.ls
          .fill(this.x2)
          .map((x, i) => x + i * 100 + "px")
          .join(",")
      );
      return this.animate();
    });
  }
}
