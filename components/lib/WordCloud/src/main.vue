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
  wordData: {
    type: Array || String,
    required: true,
  },
  // 词云中dom元素的最大个数
  elementMaxNum: {
    type: Number,
    required: false,
    default: 162,
  },
});
const WidthStr = computed(() => {
  if (props.width) {
    return `${props.width}px`;
  } else {
    return "100%";
  }
});
const currentStyle = ref("");
const wordList = reactive<WORDITEM[]>([]);

// 最大元素个数 水平 垂直 纵深 最大间隔距离
const rowMaxNum = 5,
  colMaxNum = 5,
  screenNum = rowMaxNum * colMaxNum,
  // li 元素水平、垂直、纵深方向的最大间隔距离
  offsetX = 350,
  offsetY = 350,
  offsetZ = 350,
  // 默认景深
  depDefault = -1000,
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
async function initWordCloud() {
  let propsWord = <string[]>props.wordData;
  if (typeof propsWord === "string") {
    // ToDo 词云链接 需要去获取对应的词云数据
    // propsWord = ...
  }
  currentStyle.value = "grid";
  initWordLayoutByType(propsWord);
}
function changeType() {
  let list = ["grid", "helix", "sphere", "three", "geome", "curve", "random"];
  let index = randomFrom(0, list.length - 1);
  currentStyle.value = list[index];
}
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
onBeforeMount(() => {
  initWordCloud();
});
</script>

<template>
  <div class="cl-wordcloud" :style="{ width: WidthStr, height: WidthStr }">
    <ul class="cl-wordcloud-container" @click="changeType">
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
