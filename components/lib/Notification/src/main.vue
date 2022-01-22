<script setup lang="ts">
    const props = defineProps(['text']);
</script>


<template>
  <h3>123 {{props.text}}</h3>
</template>

<script lang="ts">

export default {
   name: 'ClNotice'
}

</script>
