<script setup lang="ts">
    const props = defineProps(['name']);
</script>

<template>
    <div class="cl-button">hello word  {{props.name}}</div>
</template>

<script lang="ts">
export default {
   name: 'cl-button'
}

</script>
