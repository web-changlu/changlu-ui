<script setup lang="ts">
import { getCurrentInstance , ref} from 'vue';
    const instance = getCurrentInstance();
    const props = defineProps({
        placeholder:{
            type: String,
            required: false,
            default: '请选择'
        },
        text: {
            type: String,
            default:''
        }
    });
    const emit = defineEmits(['search-menu']);
    const search = (e: Event)=> {
        emit('search-menu', e.target)
    }
    
    // const _input = instance.refs.searchInput;
    const setValue = (e: FocusEvent, vText: string)=> {
        if((instance.refs.searchInput as HTMLInputElement).value.length > 0){
            (instance.refs.searchInput as HTMLInputElement).value = vText
        }
    }
</script>

<template>
    <div class="selector-input">
        <label >{{placeholder}}</label>
        <input type="text" name="" id="" class="input" :value="text" @input="search"
        @focus="search"
        @blur="setValue($event, text)"
        ref="searchInput"
        />
        <span class="iconfont icon-down"></span>
    </div>
</template>

<script lang="ts">

export default {
   name: 'selectorInput'
}

</script>

<style lang="scss" scoped>
.selector-input{
    position: relative;
    width: 100%;
    label{
        position: absolute;
        left: 5px;
        top: 50%;
        transform: translateY(-50%);
    }
    span{
        @extend %link;
        position: absolute;
        right: 5px;
        top: 50%;
        transform: translateY(-50%);
    }
    .input{
        @extend %full;
        @extend %box-sizing;
        padding: 5px 15PX;
        background-color: $main-background-color;
        border: $border-width solid $border-color;
        border-radius: $inline-radius;
        outline: none;
        @include transition(all .2s linear);

        &:focus {
            border-color: $selected-border-color;
            box-shadow: 0 0 3px #1890ff;
        }
    }
}
</style>