<script setup lang="ts">
export interface BackgroundOptions {
  angle?: number;
  spacing?: number;
  rowHeight?: number;
  imgSize?: number;
  speedLeft?: number;
  speedRight?: number;
  padding?: number;
  bg1?: string;
  bg2?: string;
}

const props = defineProps({
  options: {
    type: Object as PropType<BackgroundOptions>,
    default: () => ({})
  }
})

const canvasRef = ref<HTMLCanvasElement | null>(null)
let ctx: CanvasRenderingContext2D | null = null
let animationFrameId: number = 0

const config = {
  angle: -25,
  spacing: 170,
  rowHeight: 140,
  imgSize: 170,
  speedLeft: 0.4,
  speedRight: 1,
  padding: 170,
  oddOffset: 0,
  evenOffset: 0,
  lastTime: 0,
  ...props.options
}

const imgCache = {
  b1: document.createElement('canvas'),
  b2: document.createElement('canvas')
}

const initImgCache = (img: HTMLImageElement, cacheCanvas: HTMLCanvasElement) => {
  cacheCanvas.width = config.imgSize
  cacheCanvas.height = config.imgSize
  const cacheCtx = cacheCanvas.getContext('2d')
  cacheCtx?.drawImage(img, 0, 0, config.imgSize, config.imgSize)
}

let extraPaddingCache = 0
let lastWidth = 0
let lastHeight = 0

const calculateExtraPadding = () => {
  if (window.innerWidth === lastWidth && window.innerHeight === lastHeight) {
    return extraPaddingCache
  }

  lastWidth = window.innerWidth
  lastHeight = window.innerHeight

  const angleRad = Math.abs(config.angle * Math.PI / 180)
  const diagonalLength = Math.sqrt(lastWidth * lastWidth + lastHeight * lastHeight)
  extraPaddingCache = diagonalLength * Math.max(Math.sin(angleRad), 1 - Math.cos(angleRad))

  return extraPaddingCache
}

const resizeCanvas = () => {
  if (!canvasRef.value) return

  const extraPadding = calculateExtraPadding()
  const totalPadding = extraPadding + config.padding

  canvasRef.value.width = window.innerWidth + totalPadding * 2
  canvasRef.value.height = window.innerHeight + totalPadding * 2

  canvasRef.value.style.transform = `translate(${-totalPadding}px, ${-totalPadding}px)`
}

const drawBackground = (deltaTime: number) => {
  if (!ctx || !canvasRef.value) return

  ctx.save()

  ctx.clearRect(0, 0, canvasRef.value.width, canvasRef.value.height)

  const centerX = canvasRef.value.width / 2
  const centerY = canvasRef.value.height / 2
  ctx.translate(centerX, centerY)
  ctx.rotate(config.angle * Math.PI / 180)
  ctx.translate(-centerX, -centerY)

  const extraPadding = calculateExtraPadding()
  const totalPadding = extraPadding + config.padding
  const rows = Math.ceil((canvasRef.value.height + totalPadding * 2) / config.rowHeight) + 2
  const isPerRow = Math.ceil((canvasRef.value.width + totalPadding * 2) / config.spacing) + 2

  config.oddOffset -= config.speedLeft * deltaTime
  config.evenOffset += config.speedRight * deltaTime

  if (Math.abs(config.oddOffset) >= config.spacing * 2) {
    config.oddOffset = 0
  }
  if (Math.abs(config.evenOffset) >= config.spacing * 2) {
    config.evenOffset = 0
  }

  for (let row = -2; row < rows + 2; row++) {
    const y = row * config.rowHeight
    const isEvenRow = row % 2 === 0
    const currentOffset = isEvenRow ? config.evenOffset : config.oddOffset

    const img = isEvenRow ? imgCache.b1 : imgCache.b2
    const baseX = currentOffset

    for (let col = -2; col < isPerRow + 2; col++) {
      const x = col * config.spacing + baseX

      ctx.drawImage(
        img,
        x - config.imgSize / 2,
        y - config.imgSize / 2,
        config.imgSize,
        config.imgSize
      )
    }
  }

  ctx.restore()
}

const animate = (currentTime: number) => {
  const deltaTime = (currentTime - config.lastTime) / 16
  config.lastTime = currentTime

  drawBackground(deltaTime)
  animationFrameId = requestAnimationFrame(animate)
}

watch(() => props.options, (newOptions) => {
  Object.assign(config, newOptions)
}, { deep: true })

onMounted(() => {
  if (!canvasRef.value) return

  ctx = canvasRef.value.getContext('2d')
  if (!ctx) return

  const bg1 = new Image()
  const bg2 = new Image()

  bg1.src = props.options.bg1!
  bg2.src = props.options.bg2!

  Promise.all([
    new Promise(resolve => bg1.onload = resolve),
    new Promise(resolve => bg2.onload = resolve)
  ]).then(() => {
    initImgCache(bg1, imgCache.b1)
    initImgCache(bg2, imgCache.b2)

    resizeCanvas()
    animationFrameId = requestAnimationFrame(animate)
  })

  let resizeTimeout: number
  const handleResize = () => {
    clearTimeout(resizeTimeout)
    resizeTimeout = window.setTimeout(resizeCanvas, 100)
  }

  window.addEventListener('resize', handleResize)
})
</script>

<template>
  <canvas ref="canvasRef" class="block fixed top-0 left-0 z-[-1] blur opacity-[0.12]"></canvas>
</template>
