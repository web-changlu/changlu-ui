<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
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
    const buttonTextRef = ref<HTMLSpanElement | null>(null), buttonText = ref('')
    
    onMounted(() => {
        buttonText.value = buttonTextRef?.value?.textContent || ''
    })
    // console.log(buttonDisabled.value, props.loading)
</script>

<template>
    <button @click="handleClick" class="cl-button" :class="[type ? `cl-button--${type}` : '', {
        'is-disabled': buttonDisabled,
        'is-loading': loading,
    }]" :disabled="buttonDisabled" :data-text="buttonText">
         <i class="iconfont icon-loading" v-if="loading"></i>
        <i :class="icon" v-if="icon && !loading"></i>
        <span v-if="$slots.default" ref="buttonTextRef" class="cl-button__text"><slot></slot></span>
        <!-- {{buttonDisabled}}+++{{loading}}++{{icon}} -->
    </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent ({
   name: 'cl-button'
});

</script>
