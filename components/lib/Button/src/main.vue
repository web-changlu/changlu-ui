<script setup lang="ts">
import { ref, computed } from 'vue'
    const props = defineProps({
        type: {
            type: String,
            required: false,
            default: 'default'
        },
        disabled: {
            type: Boolean,
            required: false,
            default: false
        },
        icon: {
            type: String,
            required: false,
            default: ''
        },
        loading:{
            type: Boolean,
            required: false,
            default: false
        }
    });
    const emit = defineEmits(['click'])
    const handleClick = (e: Event)=> {
        emit('click', e)
    }
    const buttonDisabled = computed(()=> {
        return props.disabled || props.loading
    })
    // console.log(buttonDisabled.value, props.loading)
</script>

<template>
    <button @click="handleClick" class="cl-button" :class="[type ? `cl-button--${type}` : '', {
        'is-disabled': buttonDisabled,
        'is-loading': loading,
    }]" :disabled="buttonDisabled">
         <i class="iconfont icon-loading" v-if="loading"></i>
        <i :class="icon" v-if="icon && !loading"></i>
        <span v-if="$slots.default"><slot></slot></span>
        <!-- {{buttonDisabled}}+++{{loading}}++{{icon}} -->
    </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent ({
   name: 'cl-button'
});

</script>
