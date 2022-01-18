<script setup lang="ts">
    const props = defineProps(['name']);
</script>

<template>
    <div class="button">hello word  {{props.name}}</div>
</template>

<script lang="ts">

export default {
   name: 'ClButton'
}

</script>

<style lang="scss" scoped>

.button{
    @extend %display;
    border-radius: $inline-radius;
    border: $border-width solid $border-color;
}
</style>