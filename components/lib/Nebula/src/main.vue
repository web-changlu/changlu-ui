<script setup lang="ts">
import { computed, onMounted, reactive, ref, nextTick } from "vue";
import { rejects } from "assert";
const $nebula = ref<HTMLCanvasElement | null>(null);

let mouseX = ref(0),
  mouseY = ref(0),
  cxt: CanvasRenderingContext2D | null = null;
// console.log(typeof $nebula.value)；
const particleList: Particle[] = reactive<Particle[]>([]);
const init = (canvas: HTMLCanvasElement | null) => {
  $nebula.value?.addEventListener("mousemove", getMouseMovePosition);
  if ($nebula.value) {
    $nebula.value.width = 1000;
    $nebula.value.height = 600;
  }

  if (!canvas || !canvas.getContext) return;
  cxt = canvas.getContext("2d");
  const initialX = 1000 / 2;
  const initialY = 600 / 2;
  // 1. 创建粒子属性
  createParticles(particleList, initialX, initialY);

  // 2. 要canvas上创建 粒子
  loop();
};

/**
 * 创建鼠标中间的人
 */
const creatMatchstickMen = () => {};

/**
 *
 * @param particles 粒子数组，将来可以改变运动时的参数
 * @param mouseX 鼠标位置
 *  @param mouseY 鼠标位置
 */
const createParticles = (
  particles: Particle[],
  mouseX: number,
  mouseY: number
) => {
  let radius: number = 150; // 围成的圆的半径
  for (let i = 0; i < 150; i++) {
    // 循环给每一个粒子 添加属性
    let particle: Particle = {
      size: 1, // 线宽
      position: { x: mouseX, y: mouseY }, // 粒子的位置
      offset: { x: 0, y: 0 }, //围绕中心旋转的偏移量
      shift: { x: mouseX, y: mouseY }, // 跟随鼠标移动的
      speed: Math.random() * 0.04 + 0.01,
      fillColor: "black",
      orbit: radius * 0.5 + Math.random() * radius * 0.5, // 轨道半径
    };
    particles.push(particle);
  }
};
/**
 * 获取鼠标位置
 */
const getMouseMovePosition = (e: MouseEvent) => {
  mouseX.value = e.clientX;
  mouseY.value = e.clientY;
};

const loadResources = (src : string) => {
  return new Promise<HTMLImageElement>((resolve, rejects) => {
    let img = new Image();
    img.onload = () => {
      resolve(img);
    };
    img.src = src;
    img.onerror = (err) => {
      rejects(err);
    };
  });
};
const loop = async () => {
  let swordImg = await loadResources( '/sword.png');
  let personImg = await loadResources( '/person.png');
  cxt?.clearRect(0, 0, 1000, 600);
  for (let i = 0, len = particleList.length; i < len; i++) {
    let particle = particleList[i];
    let startPoint = {
      x: particle.position.x,
      y: particle.position.y,
    };
    // 5. 围绕中心点旋转
    particle.offset.x += particle.speed;
    particle.offset.y += particle.speed;

    //鼠标移动时赋值
    particle.shift.x += (mouseX.value - particle.shift.x) * particle.speed;
    particle.shift.y += (mouseY.value - particle.shift.y) * particle.speed;

    // 4. 让粒子动起来 扩散出去
    particle.position.x =
      particle.shift.x + Math.cos(i + particle.offset.x) * particle.orbit;
    particle.position.y =
      particle.shift.y + Math.sin(i + particle.offset.y) * particle.orbit;

    if (cxt) {
      // cxt.beginPath();
      // cxt.fillStyle = particle.fillColor;
      // cxt.strokeStyle = particle.fillColor;
      // cxt.lineWidth = particle.size;
      // cxt.moveTo(startPoint.x, startPoint.y);
      // cxt.lineTo(particle.position.x, particle.position.y);
      // cxt.stroke();
      // cxt.arc(
      //   particle.position.x,
      //   particle.position.y,
      //   particle.size / 1,
      //   0,
      //   2 * Math.PI,
      //   true
      // );
      // cxt.fill();
      cxt.drawImage(swordImg, particle.position.x, particle.position.y, 80, 80);
    }
  }
  if (cxt) {
    cxt.drawImage(personImg, mouseX.value - 40, mouseY.value - 40, 80, 80);
  }

  requestAnimationFrame(loop);
};

onMounted(async () => {
  init($nebula.value);
});
</script>

<template>
  <div class="cl-nebula-container">
    <canvas class="cl-nebula" ref="$nebula"></canvas>
  </div>
</template>

<script lang="ts">
export default {
  name: "cl-nebula",
};
</script>
