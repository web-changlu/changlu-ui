<script setup lang="ts">
import { computed, onMounted, reactive, ref, nextTick, PropType, defineAsyncComponent } from "vue";
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
        id: 'nav1',
        icon: '',
        text: '默认导航栏',
        href: '#',
        isCurrent: false
      }
    ]
  }
});

const currentComponent = computed(() => {
  const componentMap :ComponentMap = {
    mobile: defineAsyncComponent(() => import('./mobileNav.vue')) 
  }
  return  componentMap[props.type] || null
})
</script>

<template>
  <nav class="cl-navigationBar-container">
    <component :is="currentComponent" :data="props.navData"></component>
  </nav>
</template>

<script lang="ts">
export default {
  name: "cl-navigationBar",
};
</script>
