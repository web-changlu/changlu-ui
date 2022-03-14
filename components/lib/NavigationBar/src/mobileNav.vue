<script setup lang="ts">
import {
  computed,
  onMounted,
  reactive,
  ref,
  nextTick,
  PropType,
  onBeforeUnmount,
} from "vue";
import { setClickState } from "../../common";
const props = defineProps({
  data: {
    type: Array as PropType<NavItem[]>,
    default: () => [
      {
        id: "nav1",
        icon: "",
        text: "默认导航栏",
        href: "#",
        isCurrent: false,
      },
    ],
  },
});
function simpleClone(data: any) {
  let copy: ComponentMap | null = {} || null;
  if (Array.isArray(data)) {
    copy = [];
  } else {
    copy = {};
  }

  for (let k in data) {
    const v = data[k];
    if (v == undefined) {
      continue;
    } else if (typeof v === "object") {
      copy[k] = simpleClone(v);
    } else if (Array.isArray(v)) {
      copy[k] = new Array(...v);
    } else {
      copy[k] = v;
    }
  }
  return copy;
}
const listData = reactive(simpleClone(props.data));
const $clMobileNav = ref<HTMLElement | null>(null),
  count = ref(props.data.length);
 const emit = defineEmits(['navItemClick']);
function navClickHandle(e: MouseEvent, item: NavItem, index: number | string) {
  if (typeof index === "string") index = parseInt(index);
  listData.forEach((sub: NavItem) => {
    sub.isCurrent = false;
  });
  item.isCurrent = true;
  setClickState(
    $clMobileNav.value as HTMLElement,
    document.querySelectorAll(".indicator")[0] as HTMLElement,
    count.value,
    index
  );
  emit('navItemClick', item);
}
/**
 * 窗口变化时调整小球的位置
 */
function resizeNav() {
  let tIndex = 0;
  listData.forEach((item: NavItem, index: number) => {
    if (item.isCurrent) {
      tIndex = index;
    }
  });
  setClickState(
    $clMobileNav.value as HTMLElement,
    document.querySelectorAll(".indicator")[0] as HTMLElement,
    count.value,
    tIndex
  );
}
onMounted(() => {
  let tIndex = 0;
  listData.forEach((item: NavItem, index: number) => {
    if (item.isCurrent) {
      tIndex = index;
    }
  });
  setClickState(
    $clMobileNav.value as HTMLElement,
    document.querySelectorAll(".indicator")[0] as HTMLElement,
    count.value,
    tIndex
  );
  window.addEventListener("resize", resizeNav);
});
onBeforeUnmount(() => {
  window.removeEventListener("resize", resizeNav);
});
</script>

<template>
  <ul class="cl-mobilenav" ref="$clMobileNav">
    <li
      v-for="(item, index) in listData"
      :key="item.id"
      :class="item.isCurrent ? 'active' : ''"
      @click="navClickHandle($event, item, index)"
      class="nav-list-item"
    >
      <a :href="item.href">
        <span class="iconfont" :class="item.icon"></span>
        <span class="mobilenav-text">{{ item.text }}</span>
      </a>
    </li>
    <div class="indicator"></div>
  </ul>
</template>

<script lang="ts">
export default {
  name: "mobileNav",
};
</script>
