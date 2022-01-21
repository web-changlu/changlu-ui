<script setup lang="ts">
    const props = defineProps(['name']);
</script>

<template>
    <div class="cl-button">hello word  {{props.name}}</div>
</template>

<script lang="ts">
import '../../../css/ClButton.scss'
export default {
   name: 'cl-button'
}

</script>

<style lang="scss" scoped>

// @import url('./css/index.scss');

</style>