<script setup lang="ts">
import {
  computed,
  onMounted,
  reactive,
  ref,
  nextTick,
  PropType,
  defineAsyncComponent,
} from "vue";
const props = defineProps({
  type: {
    type: String,
    required: false,
    default: "mobile",
  },
  navData: {
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

const currentComponent = computed(() => {
  const componentMap: ComponentMap = {
    mobile: defineAsyncComponent(() => import("./mobileNav.vue")),
  };
  return componentMap[props.type] || null;
});
const emit = defineEmits(["navItemClick"]);
const handleClick = (item: NavItem) => {
  // console.log(item)
  emit("navItemClick", item);
};
</script>

<template>
  <nav class="cl-navigationBar-container">
    <component
      :is="currentComponent"
      :data="props.navData"
      @navItemClick="handleClick"
    ></component>
  </nav>
</template>

<script lang="ts">
export default {
  name: "cl-navigationBar",
};
</script>
