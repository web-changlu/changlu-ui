<script setup lang="ts">
import {
  computed,
  onMounted,
  reactive,
  ref,
  nextTick,
  PropType,
  onBeforeUnmount,
  onBeforeMount,
} from "vue";
const props = defineProps({
  width: {
    type: Number,
    required: false,
  },
  height: {
    type: Number,
    required: false,
  },
  wordData: {
    type: Array || String,
    required: true,
    default: ["word"],
  },
  // 词云中dom元素的最大个数
  elementMaxNum: {
    type: Number,
    required: false,
    default: 162,
  },
  backgroundColor: {
    type: String,
    required: false,
    default: "#253F3F70",
  },
});
const WidthStr = computed(() => {
  if (props.width) {
    return `${props.width}px`;
  } else {
    return "100%";
  }
});
const HeightStr = computed(() => {
  if (props.height) {
    return `${props.height}px`;
  } else {
    return "100%";
  }
});
const BackgroundColor = computed(() => {
  if (props.backgroundColor) {
    if (
      /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3}|[A-Fa-f0-9]{8})$/.test(
        props.backgroundColor
      )
    ) {
      return props.backgroundColor;
    } else {
      console.warn(
        "component:cl-wordCloud",
        "props:backgroundColor 请传入合法的十六进制颜色"
      );
      return "#253F3F70";
    }
  }
});
const currentStyle = ref("");
const wordList = reactive<WORDITEM[]>([]);
const $clWordCloudRef = ref<HTMLElement | null>(null);
const $clWordCloudUlRef = ref<HTMLElement | null>(null);

let timer = <NodeJS.Timeout | null>null;
let oldCoordX = ref<number>(0),
  oldCoordY = ref<number>(0),
  nowCoordX = ref<number>(0),
  nowCoordY = ref<number>(0),
  diffCoordX = ref<number>(0),
  diffCoordY = ref<number>(0),
  degX = ref<number>(0),
  degY = ref<number>(0);
let firstDepZ = -1600,
  // 默认景深
  depDefault = -1000,
  zDep = -1600;
// 最大元素个数 水平 垂直 纵深 最大间隔距离
const rowMaxNum = 5,
  colMaxNum = 5,
  screenNum = rowMaxNum * colMaxNum,
  // li 元素水平、垂直、纵深方向的最大间隔距离
  offsetX = 250,
  offsetY = 250,
  offsetZ = 250,
  // 元素纵深方向的最大间隔距离
  depMax = parseInt("" + props.elementMaxNum / screenNum),
  // 第一个元素坐标点
  firstSiteX = parseInt("-" + rowMaxNum / 2) * offsetX,
  firstSiteY = parseInt("-" + colMaxNum / 2) * offsetY,
  firstSiteZ = parseInt("-" + depMax / 2) * offsetZ;

// 指定区间获取随机数
function randomFrom(startNum: number, endNum: number) {
  return Math.floor(Math.random() * (endNum - startNum + 1) + startNum);
}
// 根据列表计算各个词云的位置
function initWordLayoutByType(wordData: string[]) {
  for (let i = 0; i < props.elementMaxNum; i++) {
    let index = randomFrom(0, wordData.length - 1);
    let colorT = `rgb(${randomFrom(100, 255)},${randomFrom(
      100,
      255
    )},${randomFrom(100, 255)})`;

    // 方阵
    let elIndex = randomFrom(0, props.elementMaxNum - 1);
    let offsetStepX = ((i % screenNum) % rowMaxNum) * offsetX,
      offsetStepY = ((i % screenNum) / colMaxNum) * offsetY,
      offsetStepZ = (i / screenNum) * offsetZ,
      coordX = firstSiteX + offsetStepX,
      coordY = firstSiteY + offsetStepY,
      coordZ = firstSiteZ + offsetStepZ;

    // 螺旋
    let degY = 10 * i,
      depY = -10 * (props.elementMaxNum / 2) + 10 * i;

    //球形
    let sphereDegX = 30 * i,
      sphereDegY = 3 * i;

    //三体
    let threeDegX = 60 * i,
      threeDegY = 3 * i;

    // 几何
    let geoDegX = 2.9 * i,
      geoDegY = 8.9 * i;

    //曲线
    let curveDegX = 2 * i,
      curveDegY = 1 * i;

    //随机
    let randomCoordX = (Math.random() - 0.5) * 3000,
      randomCoordY = (Math.random() - 0.5) * 3000,
      randomCoordZ = (Math.random() - 0.5) * 3000;
    wordList.push({
      text: wordData[index],
      textColor: colorT,
      // 方阵
      coordX,
      coordY,
      coordZ,
      // 螺旋
      degY,
      depY,
      //球形
      sphereDegX,
      sphereDegY,
      // 三体
      threeDegX,
      threeDegY,
      // 几何
      geoDegX,
      geoDegY,
      // 曲线
      curveDegX,
      curveDegY,
      //随机
      randomCoordX,
      randomCoordY,
      randomCoordZ,
    });
  }
}
// 初始化词云
async function initWordCloud() {
  let propsWord = <string[]>props.wordData;
  if (typeof propsWord === "string") {
    // ToDo 词云链接 需要去获取对应的词云数据
    // propsWord = ...
  }
  currentStyle.value = "grid";
  initWordLayoutByType(propsWord);
  // $clWordCloudRef.value?.addEventListener("wheel", wheelAndScroll);
}
// 点击切换词云布局类型
function changeType() {
  let list = ["grid", "helix", "sphere", "three", "geome", "curve", "random"];
  let index = randomFrom(0, list.length - 1);
  currentStyle.value = list[index];
}
// 根据布局类型设置样式
function getCssByType(item: WORDITEM, type: string) {
  let str = "";
  switch (type) {
    case "grid":
      str = `translate3d(${item.coordX}px,${item.coordY}px,${item.coordZ}px)`;
      break;
    case "helix":
      str = `rotateY(${item.degY}deg) translateY(${
        item.depY
      }px) translateZ(${Math.abs(depDefault)}px)`;
      break;
    case "sphere":
      str = `rotateY(${item.sphereDegY}deg) rotateX(${
        item.sphereDegX
      }deg) translateZ(${Math.abs(depDefault)}px)`;
      break;
    case "three":
      str = `rotateY(${item.threeDegY}deg) rotateX(${
        item.threeDegX
      }deg) translateZ(${Math.abs(depDefault)}px)`;
      break;
    case "geome":
      str = `rotateY(${item.geoDegY}deg) rotateX(${
        item.geoDegX
      }deg) translateZ(${Math.abs(depDefault)}px)`;
      break;
    case "curve":
      str = `rotateY(${item.curveDegY}deg) rotateX(${item.curveDegX}deg) translateZ(${depDefault}px)`;
      break;
    case "random":
      str = `translate3d(${item.randomCoordX}px,${item.randomCoordY}px,${item.randomCoordZ}px)`;
      break;

    default:
      str = `translate3d(${item.coordX}px,${item.coordY}px,${item.coordZ}px)`;
      break;
  }
  return str;
}
function move(moveE: MouseEvent) {
  timer && clearInterval(timer);
  // 当前坐标
  nowCoordX.value = moveE.clientX;
  nowCoordY.value = moveE.clientY;
  // 计算差值
  diffCoordX.value = nowCoordX.value - oldCoordX.value;
  diffCoordY.value = nowCoordY.value - oldCoordY.value;
  // 更新坐标
  oldCoordX.value = nowCoordX.value;
  oldCoordY.value = nowCoordY.value;
  // X Y 轴移动角度
  degX.value -= diffCoordY.value * 0.1;
  degY.value += diffCoordX.value * 0.1;
  if ($clWordCloudUlRef.value) {
    $clWordCloudUlRef.value.style.transform = `translateZ(${firstDepZ}px) rotateX(${degX.value}deg) rotateY(${degY.value}deg)`;
  }
}
function wheelAndScroll(e2: any) {
  // 若上一个定时器存在，则将其删除
  timer && clearInterval(timer);
  // 获取鼠标滚动方向
  // 获取鼠标滚动方向
  let step =
    (e2.wheelDelta && (e2.wheelDelta > 0 ? 1 : -1)) ||
    (e2.detail && (e2.detail > 0 ? -1 : 1));
  firstDepZ = zDep += step * 90;
  if ($clWordCloudUlRef.value) {
    $clWordCloudUlRef.value.style.transform = `translateZ(${firstDepZ}px) rotateX(${degX.value}deg) rotateY(${degY.value}deg)`;
  }

  // 设置缓动
  timer = setInterval(() => {
    // 缓动步长
    step *= 0.6;
    firstDepZ += step * 80;
    Math.abs(step) < 0.000005 && clearInterval(<NodeJS.Timeout>timer);
    if ($clWordCloudUlRef.value) {
      $clWordCloudUlRef.value.style.transform = `translateZ(${firstDepZ}px) rotateX(${degX}deg) rotateY(${degY}deg)`;
    }
  }, 12);
}
function upHandel(e: MouseEvent) {
  // 解绑鼠标移动事件
  $clWordCloudRef.value?.removeEventListener("mousemove", move);
  // 若上一个定时器存在，则将其删除
  timer && clearInterval(timer);
  timer = setInterval(() => {
    diffCoordX.value *= 0.95;
    diffCoordY.value *= 0.95;

    degX.value -= diffCoordY.value * 0.1;
    degY.value += diffCoordX.value * 0.1;

    Math.abs(diffCoordX.value) < 0.05 &&
      Math.abs(diffCoordY.value) < 0.05 &&
      clearInterval(<NodeJS.Timeout>timer);
    if ($clWordCloudUlRef.value) {
      $clWordCloudUlRef.value.style.transform = `translateZ(${firstDepZ}px) rotateX(${degX.value}deg) rotateY(${degY.value}deg)`;
    }
  }, 12);
}
let docWheelEvent = function (this:Document,e: WheelEvent) {
      e.preventDefault();
};
function mouseenterHandle(e: MouseEvent) {
  //阻止浏览器默认的鼠标滚动页面事件
  document.addEventListener(
    "wheel",
    docWheelEvent,
    { passive: false }
  );

  if ($clWordCloudRef.value) {
    $clWordCloudRef.value.onwheel = wheelAndScroll;
  }
}
function mouseleaveHandle(e: MouseEvent) {
  document.removeEventListener("wheel", docWheelEvent);

  if ($clWordCloudRef.value) {
    $clWordCloudRef.value.onwheel = () => {
      return false;
    };
  }
}
function mouseDownHandle(e: MouseEvent) {
  (oldCoordX.value = e.clientX), (oldCoordY.value = e.clientY);

  $clWordCloudRef.value?.addEventListener("mousemove", move);
  $clWordCloudRef.value?.addEventListener("mouseup", upHandel);
}
onBeforeMount(() => {
  initWordCloud();
  // currentStyle.value = "helix";
});
</script>

<template>
  <div
    class="cl-wordcloud"
    :style="{
      width: WidthStr,
      height: HeightStr,
      backgroundColor: BackgroundColor,
    }"
    @mousedown="mouseDownHandle"
    @mouseenter="mouseenterHandle"
    @mouseleave="mouseleaveHandle"
    ref="$clWordCloudRef"
  >
    <ul
      class="cl-wordcloud-container"
      @click="changeType"
      ref="$clWordCloudUlRef"
    >
      <li
        v-for="(item, index) in wordList"
        :key="item.text + index"
        :style="{
          transform: getCssByType(item, currentStyle),
          transition: '4s ease-in-out',
        }"
      >
        <span
          class="cl-wordcloud-span-default"
          :style="{ color: item.textColor }"
        >
          {{ item.text }}
        </span>
      </li>
    </ul>
    <div class="mask">
      <div class="bg-mask"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "cl-wordCloud",
});
</script>
