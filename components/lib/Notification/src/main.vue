<script setup lang="ts">
    const props = defineProps(['text']);
</script>


<template>
  <h3>123 {{props.text}}</h3>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
   name: 'ClNotice'
});

</script>
